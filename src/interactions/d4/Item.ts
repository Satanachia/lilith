import {
  ApplicationCommandData,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  AutocompleteInteraction,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  hyperlink,
} from "discord.js";
import { inject, injectable } from "tsyringe";

import { Client } from "../../structures/Client";
import { Context, Interaction } from "../../structures/Interaction";

import { DATABASE_URL, clientSymbol, discordToLanguage } from "../../utils/Constants";
import { commands } from "../../i18n";
@injectable()
export default class Item extends Interaction {
  public readonly enabled = true;

  public readonly category = "Diablo 4";

  public readonly command: ApplicationCommandData = {
    type: ApplicationCommandType.ChatInput,
    ...commands["item"],
    options: [
      {
        type: ApplicationCommandOptionType.String,
        ...commands["item.query"],
        required: true,
        autocomplete: true,
      },
    ],
  };

  constructor(@inject(clientSymbol) private client: Client) {
    super();
  }

  public async run(
    interaction: ChatInputCommandInteraction<CacheType>,
    { i18n }: Context
  ): Promise<InteractionResponse<boolean>> {
    const { options } = interaction;

    let query = (options.get("query")?.value || null) as string;

    if (!query) return await interaction.reply(i18n.misc.INVALID_QUERY());

    const [url, label] = query.split(":");

    url.replace(/%27/g, "'").replace(/%20/g, " ");

    return await interaction.reply(
      hyperlink(`See ${label} on Diablo 4 Database`, `${DATABASE_URL}/${url}`, "Click here to see the Diablo 4 Database")
    );
  }

  public async autocomplete(interaction: AutocompleteInteraction<CacheType>): Promise<any> {
    const language = discordToLanguage[interaction.guild?.preferredLocale || interaction.locale] || "us";

    let data = await this.client.cache.get(`database:${language}`);

    if (!data) return await interaction.respond([]);

    let items = JSON.parse(data) as {
      value: string;
      desc: string;
      label: string;
    }[];

    const value = interaction.options.getFocused();

    items = [
      ...items?.filter((item) => item.label.toLowerCase().indexOf(value.toLowerCase()) === 0),
      ...items?.filter((item) => item.label.toLowerCase().indexOf(value.toLowerCase()) > 0),
    ].slice(0, 25);

    await interaction.respond(
      items.map((item) => ({
        name: `${item.label} (${item.desc})`,
        value: `${language}/${item.value}:${item.label}`,
      }))
    );
  }
}
