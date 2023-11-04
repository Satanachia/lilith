// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'en'

export type Locales =
	| 'bg'
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'hu'
	| 'it'
	| 'ja'
	| 'pl'
	| 'pt'
	| 'ru'
	| 'tr'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	commands: NamespaceCommandsTranslation
}

type RootTranslation = {
	settings: {
		locale: {
			/**
			 * Y​o​u​r​ ​D​i​s​c​o​r​d​ ​s​e​r​v​e​r​ ​l​o​c​a​l​e​ ​h​a​s​ ​b​e​e​n​ ​u​p​d​a​t​e​d​ ​t​o​ ​*​*​{​l​o​c​a​l​e​}​*​*​.
			 * @param {unknown} locale
			 */
			SUCCESS: RequiredParams<'locale'>
		}
		notifications: {
			/**
			 * I​ ​d​o​n​'​t​ ​h​a​v​e​ ​p​e​r​m​i​s​s​i​o​n​s​ ​t​o​ ​s​e​n​d​ ​m​e​s​s​a​g​e​s​ ​i​n​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 */
			NO_PERMISSIONS: RequiredParams<'channel'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​e​n​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			ALREADY_ENABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​e​n​a​b​l​e​d​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			ENABLED: RequiredParams<'channel' | 'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​n​o​t​ ​e​n​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			NOT_ENABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​u​p​d​a​t​e​d​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			UPDATED: RequiredParams<'channel' | 'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​d​i​s​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			DISABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​d​i​s​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			ALREADY_DISABLED: RequiredParams<'event'>
			/**
			 * T​h​e​r​e​ ​a​r​e​ ​n​o​ ​e​v​e​n​t​s​ ​e​n​a​b​l​e​d​.
			 */
			NO_EVENTS: string
			/**
			 * T​h​e​r​e​ ​a​r​e​ ​n​o​ ​e​v​e​n​t​s​ ​e​n​a​b​l​e​d​ ​i​n​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 */
			NO_EVENTS_IN_CHANNEL: RequiredParams<'channel'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​w​o​r​k​i​n​g​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			EVENTS_WORKING: RequiredParams<'channel' | 'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​r​e​f​r​e​s​h​e​d​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​s​}​.
			 * @param {unknown} channels
			 * @param {unknown} event
			 */
			REFRESHED: RequiredParams<'channels' | 'event'>
		}
	}
	armory: {
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​y​o​u​ ​p​r​o​v​i​d​e​d​ ​i​s​ ​n​o​t​ ​v​a​l​i​d​,​ ​i​t​ ​n​e​e​d​s​ ​t​o​ ​b​e​ ​i​n​ ​t​h​e​ ​f​o​l​l​o​w​i​n​g​ ​f​o​r​m​a​t​:​ ​`​P​l​a​y​e​r​#​1​2​3​4​`​.
		 */
		BAD_FORMAT: string
		/**
		 * I​ ​c​o​u​l​d​n​'​t​ ​f​i​n​d​ ​t​h​e​ ​p​l​a​y​e​r​ ​*​*​{​p​l​a​y​e​r​}​*​*​,​ ​m​a​k​e​ ​s​u​r​e​ ​y​o​u​ ​t​y​p​e​d​ ​t​h​e​ ​n​a​m​e​ ​c​o​r​r​e​c​t​l​y​ ​o​r​ ​t​h​a​t​ ​t​h​e​ ​p​l​a​y​e​r​ ​e​x​i​s​t​s​.
		 * @param {unknown} player
		 */
		PLAYER_NOT_FOUND: RequiredParams<'player'>
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​d​o​e​s​n​'​t​ ​h​a​v​e​ ​a​n​y​ ​c​h​a​r​a​c​t​e​r​s​.
		 */
		NO_CHARACTERS: string
		/**
		 * N​o​ ​c​h​a​r​a​c​t​e​r​ ​f​o​u​n​d​,​ ​m​a​k​e​ ​s​u​r​e​ ​y​o​u​ ​t​y​p​e​d​ ​t​h​e​ ​n​a​m​e​ ​c​o​r​r​e​c​t​l​y​ ​o​r​ ​t​h​a​t​ ​a​t​ ​l​e​a​s​t​ ​o​n​e​ ​c​h​a​r​a​c​t​e​r​ ​e​x​i​s​t​s​.
		 */
		NO_CHARACTER: string
		/**
		 * S​e​l​e​c​t​ ​a​ ​c​h​a​r​a​c​t​e​r​ ​t​o​ ​g​e​t​ ​t​h​e​ ​a​r​m​o​r​y​ ​o​f​.
		 */
		SELECT_CHARACTER: string
		/**
		 * T​h​i​s​ ​p​l​a​y​e​r​ ​h​a​s​ ​m​u​l​t​i​p​l​e​ ​c​h​a​r​a​c​t​e​r​s​.​ ​P​l​e​a​s​e​ ​s​e​l​e​c​t​ ​o​n​e​.
		 */
		MULTIPLE_CHARACTERS: string
		/**
		 * {​n​a​m​e​}​ ​(​{​c​h​a​r​a​c​t​e​r​s​}​ ​c​h​a​r​a​c​t​e​r​s​)
		 * @param {unknown} characters
		 * @param {unknown} name
		 */
		PLAYER_CHOICE: RequiredParams<'characters' | 'name'>
		/**
		 * "​{​p​l​a​y​e​r​}​"​ ​i​s​n​'​t​ ​c​u​r​r​e​n​t​l​y​ ​t​r​a​c​k​e​d​,​ ​s​e​n​d​ ​t​o​ ​t​r​a​c​k​ ​i​t​.
		 * @param {unknown} player
		 */
		NOT_TRACKED_YET: RequiredParams<'player'>
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​"​{​p​l​a​y​e​r​}​"​ ​i​s​ ​e​i​t​h​e​r​ ​i​n​ ​t​h​e​ ​w​e​b​s​i​t​e​ ​q​u​e​u​e​ ​o​r​ ​i​s​ ​i​n​ ​p​r​i​v​a​t​e​ ​m​o​d​e​.
		 * @param {unknown} player
		 */
		ERROR: RequiredParams<'player'>
	}
	events: {
		/**
		 * {​n​a​m​e​}​ ​a​p​p​e​a​r​s​ ​i​n​ ​{​z​o​n​e​}​ ​(​{​t​e​r​r​i​t​o​r​y​}​)​ ​a​t​ ​{​t​i​m​e​}​ ​(​{​c​o​u​n​t​d​o​w​n​}​)​.​
	​
	​N​e​x​t​ ​e​x​p​e​c​t​e​d​ ​b​o​s​s​ ​i​s​ ​{​n​e​x​t​N​a​m​e​}​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}
		 * @param {unknown} countdown
		 * @param {unknown} name
		 * @param {unknown} nextName
		 * @param {unknown} nextTime
		 * @param {unknown} territory
		 * @param {unknown} time
		 * @param {unknown} zone
		 */
		WORLD_BOSS: RequiredParams<'countdown' | 'name' | 'nextName' | 'nextTime' | 'territory' | 'time' | 'zone'>
		/**
		 * H​e​l​l​t​i​d​e​ ​o​c​c​u​r​i​n​g​ ​i​n​ ​{​z​o​n​e​}​ ​u​n​t​i​l​ ​{​t​i​m​e​}​,​ ​n​e​x​t​ ​h​e​l​l​t​i​d​e​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}​
	​
	​C​h​e​s​t​s​ ​r​e​f​r​e​s​h​:​ ​{​r​e​f​r​e​s​h​}
		 * @param {unknown} nextTime
		 * @param {unknown} refresh
		 * @param {unknown} time
		 * @param {unknown} zone
		 */
		HELLTIDE: RequiredParams<'nextTime' | 'refresh' | 'time' | 'zone'>
		/**
		 * L​e​g​i​o​n​ ​a​p​p​e​a​r​s​ ​{​t​i​m​e​}​,​ ​n​e​x​t​ ​l​e​g​i​o​n​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}
		 * @param {unknown} nextTime
		 * @param {unknown} time
		 */
		LEGION: RequiredParams<'nextTime' | 'time'>
	}
	embeds: {
		ARMORY: {
			/**
			 * S​t​a​t​i​s​t​i​c​s
			 */
			STATISTICS_TITLE: string
			/**
			 * W​o​r​l​d​ ​T​i​e​r​:​ ​{​w​o​r​l​d​T​i​e​r​}​
		​M​o​n​s​t​e​r​s​ ​k​i​l​l​e​d​:​ ​{​m​o​n​s​t​e​r​s​K​i​l​l​e​d​}​
		​E​l​i​t​e​s​ ​k​i​l​l​e​d​:​ ​{​e​l​i​t​e​s​K​i​l​l​e​d​}​
		​G​o​l​d​ ​c​o​l​l​e​c​t​e​d​:​ ​{​g​o​l​d​C​o​l​l​e​c​t​e​d​}
			 * @param {unknown} elitesKilled
			 * @param {unknown} goldCollected
			 * @param {unknown} monstersKilled
			 * @param {unknown} worldTier
			 */
			STATISTICS_VALUE: RequiredParams<'elitesKilled' | 'goldCollected' | 'monstersKilled' | 'worldTier'>
			/**
			 * C​h​a​r​a​c​t​e​r​ ​c​r​e​a​t​i​o​n
			 */
			CHARACTER_CREATION_TITLE: string
			/**
			 * L​a​s​t​ ​p​l​a​y​e​d
			 */
			LAST_PLAYED_TITLE: string
			/**
			 * P​l​a​y​e​d​ ​t​i​m​e
			 */
			PLAYED_TIME_TITLE: string
			/**
			 * U​n​i​q​u​e​s
			 */
			UNIQUES_TITLE: string
			/**
			 * S​k​i​l​l​s
			 */
			SKILLS_TITLE: string
			/**
			 * S​t​a​t​u​s
			 */
			STATUS_TITLE: string
			/**
			 * M​o​d​e
			 */
			MODE_TITLE: string
			/**
			 * C​l​a​n
			 */
			CLAN_TITLE: string
		}
		HELP: {
			/**
			 * {​u​s​e​r​n​a​m​e​}​'​s​ ​c​o​m​m​a​n​d​s
			 * @param {unknown} username
			 */
			TITLE: RequiredParams<'username'>
			/**
			 * H​e​r​e​'​s​ ​a​ ​l​i​s​t​ ​o​f​ ​a​l​l​ ​m​y​ ​c​o​m​m​a​n​d​s​.​ ​W​e​'​l​l​ ​b​e​ ​a​d​d​i​n​g​ ​t​h​e​ ​a​b​i​l​i​t​y​ ​t​o​ ​g​e​t​ ​m​o​r​e​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​e​a​c​h​ ​c​o​m​m​a​n​d​ ​s​o​o​n​!
			 */
			DESCRIPTION: string
		}
		INFO: {
			/**
			 * S​t​a​t​i​s​t​i​c​s
			 */
			STATISTICS_TITLE: string
			/**
			 * S​e​r​v​e​r​s​:​ ​{​s​e​r​v​e​r​s​}​
		​U​s​e​r​s​:​ ​{​u​s​e​r​s​}
			 * @param {unknown} servers
			 * @param {unknown} users
			 */
			STATISTICS_VALUE: RequiredParams<'servers' | 'users'>
			/**
			 * D​e​b​u​g
			 */
			DEBUG_TITLE: string
			/**
			 * C​l​u​s​t​e​r​s​:​ ​{​c​l​u​s​t​e​r​s​}​
		​S​h​a​r​d​s​:​ ​{​s​h​a​r​d​s​}​
		​S​h​a​r​d​I​D​:​ ​{​s​h​a​r​d​I​d​}​
		​C​l​u​s​t​e​r​I​D​:​ ​{​c​l​u​s​t​e​r​I​d​}
			 * @param {unknown} clusterId
			 * @param {unknown} clusters
			 * @param {unknown} shardId
			 * @param {unknown} shards
			 */
			DEBUG_VALUE: RequiredParams<'clusterId' | 'clusters' | 'shardId' | 'shards'>
			/**
			 * {​u​s​e​r​n​a​m​e​}​ ​i​s​ ​a​ ​D​i​s​c​o​r​d​ ​b​o​t​ ​t​h​a​t​ ​p​r​o​v​i​d​e​s​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​D​i​a​b​l​o​ ​4​ ​d​e​v​e​l​o​p​e​d​ ​b​y​ ​g​l​a​z​k​0​ ​&​ ​M​a​r​c​o​.
			 * @param {unknown} username
			 */
			DESCRIPTION: RequiredParams<'username'>
		}
		SETTINGS: {
			/**
			 * Y​o​u​r​ ​s​e​r​v​e​r​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​s​e​t​t​i​n​g​s
			 */
			TITLE: string
			/**
			 * C​h​a​n​n​e​l​:​ ​{​c​h​a​n​n​e​l​}​
		​R​o​l​e​:​ ​{​r​o​l​e​}
			 * @param {unknown} channel
			 * @param {unknown} role
			 */
			VALUE: RequiredParams<'channel' | 'role'>
		}
	}
	misc: {
		/**
		 * I​n​v​a​l​i​d​ ​q​u​e​r​y​.
		 */
		INVALID_QUERY: string
		/**
		 * N​o​ ​d​a​t​e​ ​f​o​u​n​d​.
		 */
		NO_DATE_FOUND: string
		/**
		 * N​o​ ​p​l​a​y​e​d​ ​t​i​m​e​ ​f​o​u​n​d​.
		 */
		NO_PLAYED_TIME: string
		/**
		 * N​o​ ​e​q​u​i​p​p​e​d​ ​i​t​e​m​s​ ​f​o​u​n​d​.
		 */
		NO_EQUIPPED_ITEMS: string
	}
}

export type NamespaceCommandsTranslation = {
	settings: {
		/**
		 * s​e​t​t​i​n​g​s
		 */
		name: string
		/**
		 * M​a​n​a​g​e​ ​y​o​u​r​ ​c​l​a​n​s​ ​s​e​r​v​e​r​ ​s​e​t​t​i​n​g​s​.
		 */
		description: string
	}
	'settings.locale': {
		/**
		 * l​o​c​a​l​e
		 */
		name: string
		/**
		 * C​h​a​n​g​e​ ​t​h​e​ ​l​o​c​a​l​e​ ​o​f​ ​L​i​l​i​t​h​ ​f​o​r​ ​y​o​u​r​ ​c​l​a​n​s​ ​s​e​r​v​e​r​.
		 */
		description: string
	}
	'settings.locale.value': {
		/**
		 * v​a​l​u​e
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​l​o​c​a​l​e​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​s​e​t​ ​f​o​r​ ​y​o​u​r​ ​s​e​r​v​e​r​?
		 */
		description: string
	}
	'settings.notifications': {
		/**
		 * n​o​t​i​f​i​c​a​t​i​o​n​s
		 */
		name: string
		/**
		 * M​a​n​a​g​e​ ​y​o​u​r​ ​c​l​a​n​s​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​.
		 */
		description: string
	}
	'settings.notifications.enable': {
		/**
		 * e​n​a​b​l​e
		 */
		name: string
		/**
		 * E​n​a​b​l​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​a​ ​g​i​v​e​n​ ​e​v​e​n​t​.
		 */
		description: string
	}
	'settings.notifications.enable.event': {
		/**
		 * e​v​e​n​t
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​e​v​e​n​t​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​e​n​a​b​l​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​?
		 */
		description: string
	}
	'settings.notifications.enable.channel': {
		/**
		 * c​h​a​n​n​e​l
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​c​h​a​n​n​e​l​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​s​e​n​d​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​t​o​?
		 */
		description: string
	}
	'settings.notifications.enable.role': {
		/**
		 * r​o​l​e
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​r​o​l​e​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​p​i​n​g​?
		 */
		description: string
	}
	'settings.notifications.update': {
		/**
		 * u​p​d​a​t​e
		 */
		name: string
		/**
		 * U​p​d​a​t​e​ ​t​h​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​ ​s​e​t​t​i​n​g​s​ ​f​o​r​ ​a​ ​g​i​v​e​n​ ​e​v​e​n​t​.
		 */
		description: string
	}
	'settings.notifications.update.event': {
		/**
		 * e​v​e​n​t
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​e​v​e​n​t​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​u​p​d​a​t​e​ ​t​h​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​ ​s​e​t​t​i​n​g​ ​f​o​r​?
		 */
		description: string
	}
	'settings.notifications.update.channel': {
		/**
		 * c​h​a​n​n​e​l
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​c​h​a​n​n​e​l​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​s​e​n​d​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​t​o​?
		 */
		description: string
	}
	'settings.notifications.update.role': {
		/**
		 * r​o​l​e
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​r​o​l​e​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​p​i​n​g​?
		 */
		description: string
	}
	'settings.notifications.disable': {
		/**
		 * d​i​s​a​b​l​e
		 */
		name: string
		/**
		 * D​i​s​a​b​l​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​a​ ​g​i​v​e​n​ ​e​v​e​n​t​.
		 */
		description: string
	}
	'settings.notifications.disable.event': {
		/**
		 * e​v​e​n​t
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​e​v​e​n​t​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​d​i​s​a​b​l​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​?
		 */
		description: string
	}
	'settings.notifications.disable.channel': {
		/**
		 * c​h​a​n​n​e​l
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​c​h​a​n​n​e​l​ ​w​o​u​l​d​ ​y​o​u​ ​l​i​k​e​ ​t​o​ ​s​e​n​d​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​t​o​?
		 */
		description: string
	}
	'settings.notifications.list': {
		/**
		 * l​i​s​t
		 */
		name: string
		/**
		 * L​i​s​t​ ​a​l​l​ ​t​h​e​ ​c​u​r​r​e​n​t​ ​n​o​t​i​f​i​c​a​t​i​o​n​ ​s​e​t​t​i​n​g​s​ ​f​o​r​ ​y​o​u​r​ ​c​l​a​n​s​ ​s​e​r​v​e​r​.
		 */
		description: string
	}
	'settings.notifications.refresh': {
		/**
		 * r​e​f​r​e​s​h
		 */
		name: string
		/**
		 * R​e​f​r​e​s​h​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​a​ ​g​i​v​e​n​ ​e​v​e​n​t​.
		 */
		description: string
	}
	'settings.notifications.refresh.event': {
		/**
		 * e​v​e​n​t
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​e​v​e​n​t​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​r​e​f​r​e​s​h​ ​t​h​e​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​?
		 */
		description: string
	}
	'settings.notifications.refresh.data': {
		/**
		 * d​a​t​a
		 */
		name: string
		/**
		 * W​h​i​c​h​ ​s​e​t​ ​o​f​ ​d​a​t​a​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​r​e​f​r​e​s​h​ ​n​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​?​ ​T​h​e​ ​l​a​s​t​ ​2​ ​w​i​l​l​ ​b​e​ ​d​i​s​p​l​a​y​e​d​.
		 */
		description: string
	}
	altars: {
		/**
		 * a​l​t​a​r​s
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​t​h​e​ ​A​l​t​a​r​s​ ​o​f​ ​L​i​l​i​t​h​.
		 */
		description: string
	}
	'altars.show': {
		/**
		 * s​h​o​w
		 */
		name: string
		/**
		 * T​h​e​ ​s​p​e​c​i​f​i​e​d​ ​r​e​g​i​o​n​ ​t​o​ ​s​h​o​w​.
		 */
		description: string
	}
	armory: {
		/**
		 * a​r​m​o​r​y
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​a​ ​g​i​v​e​n​ ​p​l​a​y​e​r​.
		 */
		description: string
	}
	'armory.player': {
		/**
		 * p​l​a​y​e​r
		 */
		name: string
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​t​o​ ​g​e​t​ ​i​n​f​o​r​m​a​t​i​o​n​ ​f​o​r​.​ ​I​t​ ​c​a​n​ ​b​e​ ​a​ ​b​a​t​t​l​e​t​a​g​ ​o​r​ ​a​ ​u​s​e​r​n​a​m​e​.
		 */
		description: string
	}
	chart: {
		/**
		 * c​h​a​r​t
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​o​n​e​ ​o​f​ ​t​h​e​ ​c​r​e​a​t​e​d​ ​c​h​a​r​t​s​.
		 */
		description: string
	}
	'chart.show': {
		/**
		 * s​h​o​w
		 */
		name: string
		/**
		 * T​h​e​ ​s​p​e​c​i​f​i​c​ ​c​h​a​r​t​ ​t​o​ ​s​h​o​w​.
		 */
		description: string
	}
	item: {
		/**
		 * i​t​e​m
		 */
		name: string
		/**
		 * L​o​o​k​u​p​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​s​p​e​c​i​f​i​c​ ​i​t​e​m​.
		 */
		description: string
	}
	'item.query': {
		/**
		 * q​u​e​r​y
		 */
		name: string
		/**
		 * T​h​e​ ​n​a​m​e​ ​o​f​ ​t​h​e​ ​t​h​i​n​g​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​k​n​o​w​ ​a​b​o​u​t​.
		 */
		description: string
	}
	map: {
		/**
		 * m​a​p
		 */
		name: string
		/**
		 * L​o​o​k​u​p​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​s​p​e​c​i​f​i​c​ ​m​a​r​k​e​r​s​,​ ​q​u​e​s​t​s​ ​e​t​c​ ​o​n​ ​t​h​e​ ​m​a​p​.
		 */
		description: string
	}
	'map.type': {
		/**
		 * t​y​p​e
		 */
		name: string
		/**
		 * T​h​e​ ​t​y​p​e​ ​o​f​ ​t​h​i​n​g​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​k​n​o​w​ ​a​b​o​u​t​.
		 */
		description: string
	}
	'map.query': {
		/**
		 * q​u​e​r​y
		 */
		name: string
		/**
		 * T​h​e​ ​n​a​m​e​ ​o​f​ ​t​h​e​ ​t​h​i​n​g​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​k​n​o​w​ ​a​b​o​u​t​.
		 */
		description: string
	}
	season: {
		/**
		 * s​e​a​s​o​n
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​t​h​e​ ​c​u​r​r​e​n​t​ ​s​e​a​s​o​n​.
		 */
		description: string
	}
	'season.get': {
		/**
		 * g​e​t
		 */
		name: string
		/**
		 * T​h​e​ ​i​n​f​o​r​m​a​t​i​o​n​ ​t​o​ ​r​e​t​r​i​e​v​e​.
		 */
		description: string
	}
	about: {
		/**
		 * a​b​o​u​t
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​L​i​l​i​t​h​.
		 */
		description: string
	}
	help: {
		/**
		 * h​e​l​p
		 */
		name: string
		/**
		 * D​i​s​p​l​a​y​s​ ​a​l​l​ ​o​f​ ​L​i​l​i​t​h​'​s​ ​c​o​m​m​a​n​d​s​.
		 */
		description: string
	}
}

export type Namespaces =
	| 'commands'

type DisallowNamespaces = {
	/**
	 * reserved for 'commands'-namespace\
	 * you need to use the `./commands/index.ts` file instead
	 */
	commands?: "[typesafe-i18n] reserved for 'commands'-namespace. You need to use the `./commands/index.ts` file instead."
}

export type TranslationFunctions = {
	settings: {
		locale: {
			/**
			 * Your Discord server locale has been updated to **{locale}**.
			 */
			SUCCESS: (arg: { locale: unknown }) => LocalizedString
		}
		notifications: {
			/**
			 * I don't have permissions to send messages in {channel}.
			 */
			NO_PERMISSIONS: (arg: { channel: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are already enabled.
			 */
			ALREADY_ENABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been enabled and will be sent to {channel}.
			 */
			ENABLED: (arg: { channel: unknown, event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are not enabled.
			 */
			NOT_ENABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been updated and will be sent to {channel}.
			 */
			UPDATED: (arg: { channel: unknown, event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been disabled.
			 */
			DISABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are already disabled.
			 */
			ALREADY_DISABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * There are no events enabled.
			 */
			NO_EVENTS: () => LocalizedString
			/**
			 * There are no events enabled in {channel}.
			 */
			NO_EVENTS_IN_CHANNEL: (arg: { channel: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are working and will be sent to {channel}.
			 */
			EVENTS_WORKING: (arg: { channel: unknown, event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been refreshed and will be sent to {channels}.
			 */
			REFRESHED: (arg: { channels: unknown, event: unknown }) => LocalizedString
		}
	}
	armory: {
		/**
		 * The player you provided is not valid, it needs to be in the following format: `Player#1234`.
		 */
		BAD_FORMAT: () => LocalizedString
		/**
		 * I couldn't find the player **{player}**, make sure you typed the name correctly or that the player exists.
		 */
		PLAYER_NOT_FOUND: (arg: { player: unknown }) => LocalizedString
		/**
		 * The player doesn't have any characters.
		 */
		NO_CHARACTERS: () => LocalizedString
		/**
		 * No character found, make sure you typed the name correctly or that at least one character exists.
		 */
		NO_CHARACTER: () => LocalizedString
		/**
		 * Select a character to get the armory of.
		 */
		SELECT_CHARACTER: () => LocalizedString
		/**
		 * This player has multiple characters. Please select one.
		 */
		MULTIPLE_CHARACTERS: () => LocalizedString
		/**
		 * {name} ({characters} characters)
		 */
		PLAYER_CHOICE: (arg: { characters: unknown, name: unknown }) => LocalizedString
		/**
		 * "{player}" isn't currently tracked, send to track it.
		 */
		NOT_TRACKED_YET: (arg: { player: unknown }) => LocalizedString
		/**
		 * The player "{player}" is either in the website queue or is in private mode.
		 */
		ERROR: (arg: { player: unknown }) => LocalizedString
	}
	events: {
		/**
		 * {name} appears in {zone} ({territory}) at {time} ({countdown}).

	Next expected boss is {nextName} at {nextTime}
		 */
		WORLD_BOSS: (arg: { countdown: unknown, name: unknown, nextName: unknown, nextTime: unknown, territory: unknown, time: unknown, zone: unknown }) => LocalizedString
		/**
		 * Helltide occuring in {zone} until {time}, next helltide at {nextTime}

	Chests refresh: {refresh}
		 */
		HELLTIDE: (arg: { nextTime: unknown, refresh: unknown, time: unknown, zone: unknown }) => LocalizedString
		/**
		 * Legion appears {time}, next legion at {nextTime}
		 */
		LEGION: (arg: { nextTime: unknown, time: unknown }) => LocalizedString
	}
	embeds: {
		ARMORY: {
			/**
			 * Statistics
			 */
			STATISTICS_TITLE: () => LocalizedString
			/**
			 * World Tier: {worldTier}
		Monsters killed: {monstersKilled}
		Elites killed: {elitesKilled}
		Gold collected: {goldCollected}
			 */
			STATISTICS_VALUE: (arg: { elitesKilled: unknown, goldCollected: unknown, monstersKilled: unknown, worldTier: unknown }) => LocalizedString
			/**
			 * Character creation
			 */
			CHARACTER_CREATION_TITLE: () => LocalizedString
			/**
			 * Last played
			 */
			LAST_PLAYED_TITLE: () => LocalizedString
			/**
			 * Played time
			 */
			PLAYED_TIME_TITLE: () => LocalizedString
			/**
			 * Uniques
			 */
			UNIQUES_TITLE: () => LocalizedString
			/**
			 * Skills
			 */
			SKILLS_TITLE: () => LocalizedString
			/**
			 * Status
			 */
			STATUS_TITLE: () => LocalizedString
			/**
			 * Mode
			 */
			MODE_TITLE: () => LocalizedString
			/**
			 * Clan
			 */
			CLAN_TITLE: () => LocalizedString
		}
		HELP: {
			/**
			 * {username}'s commands
			 */
			TITLE: (arg: { username: unknown }) => LocalizedString
			/**
			 * Here's a list of all my commands. We'll be adding the ability to get more information about each command soon!
			 */
			DESCRIPTION: () => LocalizedString
		}
		INFO: {
			/**
			 * Statistics
			 */
			STATISTICS_TITLE: () => LocalizedString
			/**
			 * Servers: {servers}
		Users: {users}
			 */
			STATISTICS_VALUE: (arg: { servers: unknown, users: unknown }) => LocalizedString
			/**
			 * Debug
			 */
			DEBUG_TITLE: () => LocalizedString
			/**
			 * Clusters: {clusters}
		Shards: {shards}
		ShardID: {shardId}
		ClusterID: {clusterId}
			 */
			DEBUG_VALUE: (arg: { clusterId: unknown, clusters: unknown, shardId: unknown, shards: unknown }) => LocalizedString
			/**
			 * {username} is a Discord bot that provides information about Diablo 4 developed by glazk0 & Marco.
			 */
			DESCRIPTION: (arg: { username: unknown }) => LocalizedString
		}
		SETTINGS: {
			/**
			 * Your server notifications settings
			 */
			TITLE: () => LocalizedString
			/**
			 * Channel: {channel}
		Role: {role}
			 */
			VALUE: (arg: { channel: unknown, role: unknown }) => LocalizedString
		}
	}
	misc: {
		/**
		 * Invalid query.
		 */
		INVALID_QUERY: () => LocalizedString
		/**
		 * No date found.
		 */
		NO_DATE_FOUND: () => LocalizedString
		/**
		 * No played time found.
		 */
		NO_PLAYED_TIME: () => LocalizedString
		/**
		 * No equipped items found.
		 */
		NO_EQUIPPED_ITEMS: () => LocalizedString
	}
	commands: {
		settings: {
			/**
			 * settings
			 */
			name: () => LocalizedString
			/**
			 * Manage your clans server settings.
			 */
			description: () => LocalizedString
		}
		'settings.locale': {
			/**
			 * locale
			 */
			name: () => LocalizedString
			/**
			 * Change the locale of Lilith for your clans server.
			 */
			description: () => LocalizedString
		}
		'settings.locale.value': {
			/**
			 * value
			 */
			name: () => LocalizedString
			/**
			 * Which locale do you want to set for your server?
			 */
			description: () => LocalizedString
		}
		'settings.notifications': {
			/**
			 * notifications
			 */
			name: () => LocalizedString
			/**
			 * Manage your clans notifications.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.enable': {
			/**
			 * enable
			 */
			name: () => LocalizedString
			/**
			 * Enable notifications for a given event.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.enable.event': {
			/**
			 * event
			 */
			name: () => LocalizedString
			/**
			 * Which event do you want to enable notifications for?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.enable.channel': {
			/**
			 * channel
			 */
			name: () => LocalizedString
			/**
			 * Which channel do you want to send notifications to?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.enable.role': {
			/**
			 * role
			 */
			name: () => LocalizedString
			/**
			 * Which role do you want to ping?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.update': {
			/**
			 * update
			 */
			name: () => LocalizedString
			/**
			 * Update the notification settings for a given event.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.update.event': {
			/**
			 * event
			 */
			name: () => LocalizedString
			/**
			 * Which event do you want to update the notification setting for?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.update.channel': {
			/**
			 * channel
			 */
			name: () => LocalizedString
			/**
			 * Which channel do you want to send notifications to?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.update.role': {
			/**
			 * role
			 */
			name: () => LocalizedString
			/**
			 * Which role do you want to ping?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.disable': {
			/**
			 * disable
			 */
			name: () => LocalizedString
			/**
			 * Disable notifications for a given event.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.disable.event': {
			/**
			 * event
			 */
			name: () => LocalizedString
			/**
			 * Which event do you want to disable notifications for?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.disable.channel': {
			/**
			 * channel
			 */
			name: () => LocalizedString
			/**
			 * Which channel would you like to send notifications to?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.list': {
			/**
			 * list
			 */
			name: () => LocalizedString
			/**
			 * List all the current notification settings for your clans server.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.refresh': {
			/**
			 * refresh
			 */
			name: () => LocalizedString
			/**
			 * Refresh notifications for a given event.
			 */
			description: () => LocalizedString
		}
		'settings.notifications.refresh.event': {
			/**
			 * event
			 */
			name: () => LocalizedString
			/**
			 * Which event do you want to refresh the notifications for?
			 */
			description: () => LocalizedString
		}
		'settings.notifications.refresh.data': {
			/**
			 * data
			 */
			name: () => LocalizedString
			/**
			 * Which set of data do you want to refresh notifications for? The last 2 will be displayed.
			 */
			description: () => LocalizedString
		}
		altars: {
			/**
			 * altars
			 */
			name: () => LocalizedString
			/**
			 * Displays information about the Altars of Lilith.
			 */
			description: () => LocalizedString
		}
		'altars.show': {
			/**
			 * show
			 */
			name: () => LocalizedString
			/**
			 * The specified region to show.
			 */
			description: () => LocalizedString
		}
		armory: {
			/**
			 * armory
			 */
			name: () => LocalizedString
			/**
			 * Displays information about a given player.
			 */
			description: () => LocalizedString
		}
		'armory.player': {
			/**
			 * player
			 */
			name: () => LocalizedString
			/**
			 * The player to get information for. It can be a battletag or a username.
			 */
			description: () => LocalizedString
		}
		chart: {
			/**
			 * chart
			 */
			name: () => LocalizedString
			/**
			 * Displays one of the created charts.
			 */
			description: () => LocalizedString
		}
		'chart.show': {
			/**
			 * show
			 */
			name: () => LocalizedString
			/**
			 * The specific chart to show.
			 */
			description: () => LocalizedString
		}
		item: {
			/**
			 * item
			 */
			name: () => LocalizedString
			/**
			 * Lookup information about specific item.
			 */
			description: () => LocalizedString
		}
		'item.query': {
			/**
			 * query
			 */
			name: () => LocalizedString
			/**
			 * The name of the thing you want to know about.
			 */
			description: () => LocalizedString
		}
		map: {
			/**
			 * map
			 */
			name: () => LocalizedString
			/**
			 * Lookup information about specific markers, quests etc on the map.
			 */
			description: () => LocalizedString
		}
		'map.type': {
			/**
			 * type
			 */
			name: () => LocalizedString
			/**
			 * The type of thing you want to know about.
			 */
			description: () => LocalizedString
		}
		'map.query': {
			/**
			 * query
			 */
			name: () => LocalizedString
			/**
			 * The name of the thing you want to know about.
			 */
			description: () => LocalizedString
		}
		season: {
			/**
			 * season
			 */
			name: () => LocalizedString
			/**
			 * Displays information about the current season.
			 */
			description: () => LocalizedString
		}
		'season.get': {
			/**
			 * get
			 */
			name: () => LocalizedString
			/**
			 * The information to retrieve.
			 */
			description: () => LocalizedString
		}
		about: {
			/**
			 * about
			 */
			name: () => LocalizedString
			/**
			 * Displays information about Lilith.
			 */
			description: () => LocalizedString
		}
		help: {
			/**
			 * help
			 */
			name: () => LocalizedString
			/**
			 * Displays all of Lilith's commands.
			 */
			description: () => LocalizedString
		}
	}
}

export type Formatters = {}
