import { VaultNote } from '../types';
import { rulesNotes } from './rulesNotes';
import { racesNotes } from './racesNotes';
import { classesNotes } from './classesNotes';
import { modernSubclassesNotes } from './modernSubclassesNotes';
import { backgroundsNotes } from './backgroundsNotes';
import { equipmentNotes } from './equipmentNotes';
import { modernEquipmentNotes } from './modernEquipmentNotes';
import { customizationNotes } from './customizationNotes';
import { modernSpellsNotes } from './modernSpellsNotes';
import { spellsOverviewNote } from './spellsOverview';
import { coreSpellsCantripsAnd1st } from './coreSpellsCantripsAnd1st';
import { coreSpells2ndAnd3rd } from './coreSpells2ndAnd3rd';
import { coreSpells4thTo9th } from './coreSpells4thTo9th';
import { creatureNotes } from './creatureNotes';
import { appendicesNotes } from './appendicesNotes';
import { strahdLoreAndRules } from './strahdLoreAndRules';
import { strahdTarokkaNotes } from './strahdTarokkaNotes';
import { strahdLocationsNotes } from './strahdLocationsNotes';
import { strahdLocationsNotesPart2 } from './strahdLocationsNotesPart2';
import { strahdDeathHouseNotes } from './strahdDeathHouseNotes';
import { strahdTreasuresNotes } from './strahdTreasuresNotes';
import { strahdBestiaryNotes } from './strahdBestiaryNotes';
import { strahdHandoutsNotes } from './strahdHandoutsNotes';
import { scagLoreAndRealmsNotes } from './scagLoreAndRealmsNotes';
import { scagLocationsAndFactionsNotes } from './scagLocationsAndFactionsNotes';
import { scagRacesNotes } from './scagRacesNotes';
import { scagClassesNotes } from './scagClassesNotes';
import { scagSpellsAndBackgroundsNotes } from './scagSpellsAndBackgroundsNotes';
import { mtfBloodWarAndCultsNotes } from './mtfBloodWarAndCultsNotes';
import { mtfElvesAndDrowNotes } from './mtfElvesAndDrowNotes';
import { mtfDwarvesAndGithNotes } from './mtfDwarvesAndGithNotes';
import { mtfHalflingsGnomesNotes } from './mtfHalflingsGnomesNotes';
import { mtfBestiaryPart1Notes } from './mtfBestiaryPart1Notes';
import { mtfBestiaryPart2Notes } from './mtfBestiaryPart2Notes';
import { obsidianPluginsGuideNote } from './obsidianPluginsGuide';
import { xgteIntroAndCoreRulesNotes } from './xgteIntroAndCoreRulesNotes';
import { xgteSubclassesAndFeatsNotes } from './xgteSubclassesAndFeatsNotes';
import { xgteDmToolsAndTrapsNotes } from './xgteDmToolsAndTrapsNotes';
import { xgteDowntimeAndMagicItemsNotes } from './xgteDowntimeAndMagicItemsNotes';
import { tcoeSubclassesAndRulesNotes } from './tcoeSubclassesAndRulesNotes';
import { vgtmMonsterLoreNotes } from './vgtmMonsterLoreNotes';
import { vgtmRacesNotes } from './vgtmRacesNotes';
import { vgtmBestiaryPart1Notes } from './vgtmBestiaryPart1Notes';
import { vgtmBestiaryPart2Notes } from './vgtmBestiaryPart2Notes';
import { rotBestiaryAndMagicNotes } from './rotBestiaryAndMagicNotes';
import { tcoeDmToolsAndPuzzlesNotes } from './tcoeDmToolsAndPuzzlesNotes';
import { rulesDictionaryNotes } from './rulesDictionaryNotes';
import { dmTreasureAndLootNotes } from './dmTreasureAndLootNotes';
import { encounterBuilderNotes } from './encounterBuilderNotes';
import { rotCampaignNotes } from './rotCampaignNotes';
import { worldbuildingTemplateNotes } from './worldbuildingTemplateNotes';
import { characterSheetVaultNotes } from './characterSheetNotes';
import { lmopCampaignNotes } from './lmopCampaignNotes';
import { gloryGiantsCharacterNotes } from './gloryGiantsCharacterNotes';
import { gloryGiantsLoreAndRulesNotes } from './gloryGiantsLoreAndRulesNotes';
import { gloryGiantsEnclavesNotes } from './gloryGiantsEnclavesNotes';
import { gloryGiantsTreasuresNotes } from './gloryGiantsTreasuresNotes';
import { gloryGiantsBestiaryPart1Notes } from './gloryGiantsBestiaryPart1Notes';
import { gloryGiantsBestiaryPart2Notes } from './gloryGiantsBestiaryPart2Notes';
import { gloryGiantsScionsNotes } from './gloryGiantsScionsNotes';
import { astralMenagerieEncountersNotes } from './astralMenagerieEncountersNotes';
import { astralMenagerieBestiaryPart1Notes } from './astralMenagerieBestiaryPart1Notes';
import { astralMenagerieBestiaryPart2Notes } from './astralMenagerieBestiaryPart2Notes';
import { astralMenagerieBestiaryPart3Notes } from './astralMenagerieBestiaryPart3Notes';
import { fizbanCharacterNotes } from './fizbanCharacterNotes';
import { fizbanMagicNotes } from './fizbanMagicNotes';
import { fizbanLoreAndRulesNotes } from './fizbanLoreAndRulesNotes';
import { fizbanDraconomiconNotes } from './fizbanDraconomiconNotes';
import { fizbanBestiaryPart1Notes } from './fizbanBestiaryPart1Notes';
import { fizbanBestiaryPart2Notes } from './fizbanBestiaryPart2Notes';
import { thievesGalleryNotes } from './thievesGalleryNotes';
import { monstrousCompendiumVol1Notes } from './monstrousCompendiumVol1Notes';
import { monstrousCompendiumVol2Notes } from './monstrousCompendiumVol2Notes';
import { monstrousCompendiumVol3Notes } from './monstrousCompendiumVol3Notes';
import { motmRacesPart1Notes } from './motmRacesPart1Notes';
import { motmRacesPart2Notes } from './motmRacesPart2Notes';
import { motmRacesPart3Notes } from './motmRacesPart3Notes';
import { motmBestiaryPart1Notes } from './motmBestiaryPart1Notes';
import { motmBestiaryPart2Notes } from './motmBestiaryPart2Notes';
import { motmBestiaryPart3Notes } from './motmBestiaryPart3Notes';
import { motmBestiaryPart4Notes } from './motmBestiaryPart4Notes';
import { motmMonsterListsNotes } from './motmMonsterListsNotes';
import { motmDMScreenAndEncounterNotes } from './motmDMScreenAndEncounterNotes';
import { mortePlanarParadeRulesNotes } from './mortePlanarParadeRulesNotes';
import { mortePlanarParadeBestiaryPart1Notes } from './mortePlanarParadeBestiaryPart1Notes';
import { mortePlanarParadeBestiaryPart2Notes } from './mortePlanarParadeBestiaryPart2Notes';
import { mortePlanarParadeFactionAgentsNotes } from './mortePlanarParadeFactionAgentsNotes';
import { vecnaDossierNotes } from './vecnaDossierNotes';
import { fiendishFolioVol1Notes } from './fiendishFolioVol1Notes';
import { dungeonOfMadMageOverviewNotes } from './dungeonOfMadMageOverviewNotes';
import { dungeonOfMadMageLevelsPart1Notes } from './dungeonOfMadMageLevelsPart1Notes';
import { dungeonOfMadMageLevelsPart2Notes } from './dungeonOfMadMageLevelsPart2Notes';
import { dungeonOfMadMageLevelsPart3Notes } from './dungeonOfMadMageLevelsPart3Notes';
import { dungeonOfMadMageDenizensNotes } from './dungeonOfMadMageDenizensNotes';
import { dungeonOfMadMageDecksNotes } from './dungeonOfMadMageDecksNotes';

export const masterIndexNote: VaultNote = {
  id: "index-master-vault",
  title: "D&D 5e & Modern Handbook - Master Vault Index",
  folder: "Index",
  category: "Index",
  tags: ["index", "home", "vault", "dnd5e", "modern-handbook", "obsidian"],
  aliases: ["Home", "Master Index", "Vault Index"],
  content: `---
title: D&D 5e & Modern Handbook - Master Vault Index
category: Index
folder: Index
tags: [index, home, vault, dnd5e, modern-handbook, obsidian]
---

# D&D 5e & Modern Handbook - Master Vault Index

Welcome to your complete, interconnected **Obsidian Vault** for D&D 5th Edition and the Modern Handbook. Every rule, class, subclass, race, background, piece of equipment, vehicle, explosive, spell, condition, and monster stat block is included in full detail with zero omissions and interconnected with \`[[wikilinks]]\`.

---

## ⚡ Community Plugins & Obsidian Power-Ups
- **[[Obsidian Community Plugins & Power-Ups Guide]]**: Pre-configured setup and live interactive rendering for **Dataview queries**, **5e TTRPG Statblocks** with dice roller, **Obsidian Leaflet** tactical maps, and authentic **D&D 5e CSS Callouts**.

---

## 🛠️ Worldbuilding, Campaign & Homebrew Templates
Comprehensive, copy-pasteable Obsidian markdown templates pre-formatted with Dataview metadata, authentic 5e statblock schemas, and modular worldbuilding tables:
- **[[Template - Campaign Master Hub & World Bible]]**: Master campaign setting guide, active house rules, front trackers, player roster, and automated Dataview indices.
- **[[Template - Settlement & City (Worldbuilding)]]**: Demographics, government, districts, taverns, defenses, key NPCs, and 1d6 rumor tables.
- **[[Template - NPC & Character Profile (Worldbuilding)]]**: Roleplay pillars, secrets, voice quirks, inventory, and embedded 5e TTRPG statblock.
- **[[Template - Dungeon & Delve (Worldbuilding)]]**: Dungeon ecology, wandering monster tables, room-by-room key, traps, boss encounters, and treasure hoards.
- **[[Template - Faction & Guild (Worldbuilding)]]**: Ranks 1–5 renown perks, agendas, heraldry, safehouses, leadership, and rivalries.
- **[[Template - Deity, Pantheon & Faith (Worldbuilding)]]**: Holy symbols, divine domains, dogma, priesthoods, sacred rites, and Channel Divinity boons.
- **[[Template - Magic Item & Artifact (Worldbuilding)]]**: Properties, charges, spell activation, curses, and sentient item personalities.
- **[[Template - Monster & Boss Encounter (Worldbuilding)]]**: Complete YAML statblock, lair actions, regional effects, phase-shift mechanics, and tactics.
- **[[Template - Session Prep & DM Tracker (Worldbuilding)]]**: Lazy DM 8-step prep (strong start, potential scenes, 10 secrets & clues, fantastic locations, NPCs, monsters, treasure, progress clocks).
- **[[Template - Quest & Mystery Arc (Worldbuilding)]]**: The Three-Clue Rule matrix, suspects & alibis, countdown escalation clocks, and resolution outcomes.
- **[[Template - Wilderness, Region & Realm (Worldbuilding)]]**: Hex crawl hazards, weather generation, survival rules, exploration discovery tables, and landmarks.
- **[[Template - Custom Spell & Incantation (Worldbuilding)]]**: Spell levels, components, scaling damage, class lists, and discovery lore.

---

## 📖 Core Rules
- **[[5e Mechanics Dictionary & Rules Glossary (A to Z)]]**: Exhaustive, alphabetical dictionary and DM adjudication guide covering every core rule, condition, action economy, and edge case from Advantage to Vision.
- **[[DM Guide - Encounter Builder & XP Thresholds]]**: Level 1–20 XP thresholds (Easy to Deadly), encounter multipliers, adventuring day budgets, and full CR 0–30 conversion chart.
- **[[DM Guide - Treasure Hoards & Loot Tables]]**: Individual monster drops by CR, hoard calculations, gem/art values, and 1d100 gothic & fantasy trinket table.
- **[[How to Play & Core Mechanics]]**: The d20 System, Advantage & Disadvantage, Proficiency Bonus, Ability Checks, Contests.
- **[[Character Creation]]**: Step-by-step character generation, Ability Score Point Buy & Standard Array, Hit Points & Hit Dice.
- **[[Ability Scores and Skills]]**: Using each of the 6 ability scores, all 18 skills, Passive Checks.
- **[[Adventuring Rules]]**: Movement, Travel Pace, Marching Order, Light & Vision, Food & Water, Resting (Short & Long).
- **[[Combat Rules]]**: Combat step-by-step, Initiative, Surprise, Actions in Combat, Movement & Positioning, Attack Rolls, Cover, Damage & Healing, Knocking a Creature Out, Mounted & Underwater Combat.
- **[[Appendix A - Conditions & Exhaustion]]**: All 14 conditions, 6-level Exhaustion table.
- **[[Appendix B & C - Pantheons & The Multiverse Planes]]**: Deities, Technology gods, Astral/Ethereal planes, Inner & Outer planes, Sigil.
- **[[Multiclassing Rules]]**: Prerequisites, Proficiencies, Spell Slot calculations.
- **[[Feats (Core & Modern)]]**: All 42 core PHB feats and all 5 Modern feats (Gunslinger, Sapper, Car Mechanic, Engineer, Expert Driver).

---

## 🧬 Character Races
- **[[Dwarf]]**: Hill Dwarf, Mountain Dwarf.
- **[[Elf]]**: High Elf, Wood Elf, Dark Elf (Drow).
- **[[Halfling]]**: Lightfoot Halfling, Stout Halfling.
- **[[Human]]**: Standard Human, Variant Human.
- **[[Dragonborn]]**: Draconic Ancestry (10 dragon types, breath weapons).
- **[[Gnome]]**: Forest Gnome, Rock Gnome.
- **[[Half-Elf]]**: Versatile charisma lineage.
- **[[Half-Orc]]**: Relentless Endurance, Savage Attacks.
- **[[Tiefling]]**: Hellish Resistance, Infernal Legacy.

---

## ⚔️ Core Classes & Subclasses
- **[[Barbarian]]**: Rage, Unarmored Defense, Reckless Attack, Danger Sense, Extra Attack, Fast Movement, Feral Instinct, Brutal Critical, Relentless Rage, Persistent Rage, Indomitable Might, Primal Champion.
  - Subclasses: *Path of the Berserker*, *Path of the Totem Warrior* (Bear, Eagle, Wolf).
- **[[Bard]]**: Spellcasting, Bardic Inspiration, Jack of All Trades, Song of Rest, Bard College, Expertise, Font of Inspiration, Countercharm, Magical Secrets, Superior Inspiration.
  - Subclasses: *College of Lore*, *College of Valor*.
- **[[Cleric]]**: Spellcasting, Divine Domain, Channel Divinity (Turn Undead), Destroy Undead, Divine Intervention.
  - Subclasses: *Knowledge Domain*, *Life Domain*, *Light Domain*, *Nature Domain*, *Tempest Domain*, *Trickery Domain*, *War Domain*.
- **[[Druid]]**: Druidic, Spellcasting, Wild Shape, Druid Circle, Wild Shape Improvement, Timeless Body, Beast Spells, Archdruid.
  - Subclasses: *Circle of the Land* (Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, Underdark), *Circle of the Moon*.
- **[[Fighter]]**: Fighting Style, Second Wind, Action Surge, Martial Archetype, Extra Attack (up to 4 attacks), Indomitable.
  - Subclasses: *Champion*, *Battle Master* (Superiority Dice, all Maneuvers), *Eldritch Knight*.
- **[[Monk]]**: Unarmored Defense, Martial Arts, Ki (Flurry of Blows, Patient Defense, Step of the Wind), Unarmored Movement, Monastic Tradition, Deflect Missiles, Slow Fall, Extra Attack, Stunning Strike, Ki-Empowered Strikes, Evasion, Stillness of Mind, Purity of Body, Tongue of the Sun and Moon, Diamond Body, Timeless Body, Empty Body, Perfect Self.
  - Subclasses: *Way of the Open Hand*, *Way of Shadow*, *Way of the Four Elements*.
- **[[Paladin]]**: Divine Sense, Lay on Hands, Fighting Style, Spellcasting, Divine Smite, Divine Health, Sacred Oath, Aura of Protection, Aura of Courage, Improved Divine Smite, Cleansing Touch.
  - Subclasses: *Oath of Devotion*, *Oath of the Ancients*, *Oath of Vengeance*.
- **[[Ranger]]**: Favored Enemy, Natural Explorer, Fighting Style, Spellcasting, Ranger Archetype, Primeval Awareness, Extra Attack, Land's Stride, Hide in Plain Sight, Vanish, Feral Senses, Foe Slayer.
  - Subclasses: *Hunter* (Colossus Slayer, Giant Killer, Horde Breaker, Escape the Horde, Multiattack, Uncanny Dodge), *Beast Master*.
- **[[Rogue]]**: Expertise, Sneak Attack, Thieves' Cant, Cunning Action, Roguish Archetype, Uncanny Dodge, Evasion, Reliable Talent, Blindsense, Slippery Mind, Elusive, Stroke of Luck.
  - Subclasses: *Thief* (Fast Hands, Second-Story Work, Supreme Sneak, Use Magic Device, Thief's Reflexes), *Assassin*, *Arcane Trickster*.
- **[[Sorcerer]]**: Spellcasting, Sorcerous Origin, Font of Magic, Sorcery Points, Metamagic (Careful, Distant, Empowered, Extended, Heightened, Quickened, Subtle, Twinned), Sorcerous Restoration.
  - Subclasses: *Draconic Bloodline*, *Wild Magic* (full d100 Wild Magic Surge table).
- **[[Warlock]]**: Otherworldly Patron, Pact Magic, Eldritch Invocations (all 32 invocations), Pact Boon (Chain, Blade, Tome), Mystic Arcanum, Eldritch Master.
  - Subclasses: *The Archfey*, *The Fiend*, *The Great Old One*.
- **[[Wizard]]**: Spellcasting, Arcane Recovery, Arcane Tradition, Spell Mastery, Signature Spells.
  - Subclasses: *School of Abjuration*, *School of Conjuration*, *School of Divination* (Portent), *School of Enchantment*, *School of Evocation* (Sculpt Spells, Overchannel), *School of Illusion*, *School of Necromancy*, *School of Transmutation*.

---

## 🏙️ Modern Handbook Subclasses
- **[[Barbarian - Path of the Dreadnought]]**: Juggernaut, Draw Fire, Body Guard, Devastating Rage.
- **[[Bard - College of Fame]]**: Winning Smile, Compelling Performance, Utterly Convincing.
- **[[Cleric - Technology Domain]]**: Channel Divinity: Recharge, Urban Builder, Divine Strike, Techpriest.
- **[[Druid - Circle of the City]]**: Metal Wild Shape, Construct Mind, City Guardian shape, True Construct.
- **[[Fighter - Commando]]**: Tactical Aid, Pre-Planning, Additional Fighting Style, Rapid Strike, First Contact.
- **[[Monk - Way of the Gun Fu]]**: Gun Fu Technique, Countershot, Gun Fu Mastery, Bullseye.
- **[[Paladin - Oath of the Vigilante]]**: Tenets, Channel Divinity: Hunter of the Evil, Smite the Guilty, Vigilant Aura, Street Watch, Eternal Vigilant.
- **[[Ranger - Shadow Hunter Conclave]]**: Target Creature, No Trace, Play a Hunch, Locate Target.
- **[[Rogue - Infiltrator]]**: Sweep, Infiltration Adept, Engineer, Master Infiltrator.
- **[[Sorcerer - The Network]]**: Social Network, Network Strikes, Arcane Firewall, Metamagic Glitch, Network Overload.
- **[[Warlock - The Superintelligence]]**: Supernatural Hacker, AI Servant stat block, Digital Connection, Spell Hacking, Creature Hacking.
- **[[Wizard - School of Technomancy]]**: Technomancy Savant, Machine Empathy, Program Spell, Online Casting, Download Spell.

---

## 🎒 Equipment & Gear
- **[[Coinage, Wealth & Trade Goods]]**: Currency exchange rates, Starting wealth, Lifestyle expenses, Services.
- **[[Armor & Weapons Tables]]**: Light/Medium/Heavy armor, Donning/Doffing, Simple & Martial weapons, Silvered, Improvised.
- **[[Adventuring Gear & Equipment Packs]]**: Full gear table, Burglar/Diplomat/Dungeoneer/Entertainer/Explorer/Priest/Scholar packs, Container capacities, Mounts & Vehicles.
- **[[Advanced Toolkits & Crafting Mechanics]]**: Disguise kit, Forgery kit, Thief's toolkit, Alchemist's supplies & brewing table, Herbalist & Poisoner's kits, Healer's kit.
- **[[100 Trinkets Table]]**: Full d100 trinket table.
- **[[Modern Armor & Weapons]]**: Modern body armor (Kevlar, tactical vests, land warrior armor, riot shield), Firearms (pistols, hunting rifles, assault rifles, shotguns, sniper rifles, LMGs), Burst fire, Autofire, CQB, Suppressing fire.
- **[[Modern Explosives, Gear & Tools]]**: Flashbang, Fragmentation, Plastic explosive, Smoke, Tear gas, Thermite, White phosphorus, Scopes, Laser sights, Special ammo (Acid, Cold, Fire, Holy, Breaching, XREP), Detonators, Engineering & Forensics & Hacking & Spy kits.
- **[[Vehicles, Hacking & Restricted Objects]]**: Motorcycle, Sedan, Sports car, SUV, Pickup, Van, Truck, APC; Acceleration, Losing control d8 table, Crashing damage table, Ramming, Vehicle combat; Defeat Device Security, Degrade Programming, Find File, Operate Remote Device, Black Market licensing.

---

## 📜 Character Backgrounds
- **[[Personality, Alignment & Physical Details]]**: Alignments, Inspiration, Height & Weight table, Alphabets & Scripts.
- **[[Background - Acolyte]]**: Shelter of the Faithful, all d8/d6 tables.
- **[[Background - Charlatan]]**: False Identity, Favorite schemes, all tables.
- **[[Background - Criminal & Spy]]**: Criminal Contact, Criminal specialty table.
- **[[Background - Entertainer & Gladiator]]**: By Popular Demand, Routines table.
- **[[Background - Folk Hero]]**: Rustic Hospitality, Defining event table.
- **[[Background - Guild Artisan & Merchant]]**: Guild Membership, Guild business table.
- **[[Background - Hermit]]**: Discovery, Life of seclusion table.
- **[[Background - Noble & Knight]]**: Position of Privilege, Retainers variant.
- **[[Background - Outlander]]**: Wanderer, Origin table.
- **[[Background - Sage]]**: Researcher, Specialty table.
- **[[Background - Sailor & Pirate]]**: Ship's Passage, Bad Reputation variant.
- **[[Background - Soldier]]**: Military Rank, Specialty table.
- **[[Background - Urchin]]**: City Secrets.

---

## ✨ Magic & Spells
- **[[Spellcasting Rules & Class Spell Lists]]**: Spell mechanics, Components, Concentration, Areas of effect, Full Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard spell lists.
- **[[Spells - Cantrips & 1st Level]]**: All core cantrips and 1st-level spells.
- **[[Spells - 2nd & 3rd Level]]**: All core 2nd and 3rd-level spells.
- **[[Spells - 4th through 9th Level]]**: All core 4th through 9th-level spells (including Wish).
- **[[Modern Spells & Technomagic]]**: All 18 Modern Spells (Arcane Hacking, Biometrics, Cryospray, Dataread, Degauss, Electromagnetic Pulse, Find Vehicle, Glitch, Haywire, Infallible Relay, Instant Connectivity, Machine Invisibility, On/Off, Power Device, Relay Text, Remote Access, Shutdown, Synchronicity, Tracker, Wire Walk).

---

## 🐾 Creatures & NPCs
- **[[Core Monsters & Familiar Stat Blocks]]**: Bat, Black Bear, Brown Bear, Cat, Dire Wolf, Giant Ape, Giant Spider, Imp, Skeleton, Wolf, Zombie.
- **[[Modern Creatures, NPCs & Stat Blocks]]**: Police Officer, SWAT Officer, Soldier, City Guardian, Security Drone, Modern Mage.

---

## 🏰 Curse of Strahd Campaign Vault
- **Campaign Rules & Lore**:
  - **[[The Lands of Barovia - Rules & Alterations to Magic]]**: Alterations to magic, Barovian souls, Vistani culture, Keepers of the Feather, Random wilderness encounters.
  - **[[Curse of Strahd - Adventure Hooks]]**: Plea for Help, Mysterious Visitors, Werewolves in the Mist, Creeping Fog.
  - **[[Barovia - Exploration Locations & Crossroads]]**: Gates of Barovia, Svalich Woods, River Ivlis Crossroads, Tser Falls, Lake Zarovich.
- **The Tarokka Deck System**:
  - **[[The Tarokka Deck - System & Reading Guide]]**: Complete 54-card deck structure, Madame Eva's 5-card layout, fortune mechanics.
  - **[[The Tarokka Deck - The High Deck]]**: Complete 14 cards of the High Deck (Artifact, Beast, Broken One, Darklord, Donjon, Executioner, Ghost, Horseman, Innocent, Marionette, Mists, Raven, Seer, Tempter).
  - **[[The Tarokka Deck - The Common Deck]]**: All 40 cards across 4 suits (Swords, Stars, Coins, Glyphs) with 120 exact treasure locations.
- **Campaign Locations & Chapters**:
  - **[[Chapter 3 - The Village of Barovia]]**: Bildrath's Mercantile, Blood of the Vine, Burgomaster's Mansion, Church & Doru in the Undercroft, March of the Dead.
  - **[[Chapter 4 - Castle Ravenloft - Complete Master Guide]]**: Complete master guide across all 7 wings (Walls, Chapel, Court, Rooms of Weeping, Spires, Larders, Dungeon & Catacombs K1-K88).
  - **[[Chapter 5 - The Town of Vallaki]]**: St. Andral's Church, Blue Water Inn, Burgomaster's Mansion, Wachterhaus, Coffin Maker's Shop, Blinsky Toys, Vistani Camp.
  - **[[Chapter 6 - Old Bonegrinder]]**: Night Hag coven (Morgantha, Bella, Offalia), Dream Pastries mechanics, Megaliths.
  - **[[Chapter 7 - Argynvostholt]]**: Order of the Silver Dragon, Vladimir Horngaard, Lighting the Dragon Beacon.
  - **[[Chapter 8 - The Village of Krezk & Abbey of Saint Markovia]]**: Burgomaster Krezkov, Pool of the White Sun, The Abbot, Vasilka, Mongrelfolk madhouse.
  - **[[Chapter 9 - Tsolenka Pass]]**: Gatehouse, Green Flame curtain, Roc of Mount Ghakis, Sangzor the Bloodhorn.
  - **[[Chapter 10 - The Ruins of Berez]]**: Baba Lysaga, Creeping Hut, stolen winery gemstone, Marina's monument.
  - **[[Chapter 11 - Van Richten's Tower]]**: Khazan's antimagic tower, Ezmerelda's explosive wagon, stick-figure puzzle door.
  - **[[Chapter 12 - The Wizard of Wines]]**: Martikov family of wereravens, three magical gemstones, fermentation vats, blight siege.
  - **[[Chapter 13 - The Amber Temple]]**: Extreme cold, Arcanaloth Neferon, Lich Exethanter, all 20 Dark Vestiges & Dark Gifts.
  - **[[Chapter 14 - Yester Hill]]**: Evil druids' ritual, Gulthias Tree, Awakening Wintersplinter, Blood Spear of Kavan.
  - **[[Chapter 15 - The Werewolf Den]]**: Children of Mother Night, Kiril Stoyanovich, pack civil war, Shrine of Mother Night.
  - **[[Curse of Strahd - Epilogue & Endings]]**: Strahd's death, Sergei & Ireena reunion, escape from Barovia, aftermath.
- **Appendices & Resources**:
  - **[[Appendix B - Death House (Introductory Adventure)]]**: Full 1st-to-3rd level introductory dungeon, Gustav & Elisabeth Durst cult, Rose & Thorn ghosts, shambling mound, escape gauntlet.
  - **[[Curse of Strahd - Legendary Treasures & Artifacts]]**: Tome of Strahd, Sunsword, Holy Symbol of Ravenkind, Icon of Ravenloft, Saint Markovia's Thighbone, Blood Spear, Gulthias Staff.
  - **[[Appendix A - The Haunted One & Gothic Trinkets]]**: Haunted One background, Heart of Darkness feature, Harrowing Events, complete 100 Gothic Trinkets table.
  - **[[Strahd von Zarovich (Stat Block & Lair Actions)]]**: CR 15 stat block, shapechanger traits, spell list, Castle Ravenloft lair actions.
  - **[[Curse of Strahd - Major NPCs & Allies]]**: Madam Eva, Rudolph van Richten, Ezmerelda d'Avenir, Rahadin, The Abbot, Vladimir Horngaard, Izek Strazni, Kasimir Velikov.
  - **[[Curse of Strahd - Monsters & Creatures of Barovia]]**: Baba Lysaga, Baba Lysaga's Creeping Hut, Wereraven, Mongrelfolk, Strahd Zombie, Tree Blight, Strahd's Animated Armor.
  - **Handouts**: [[Handout - Kolyan Indirovich's Letter (Version 1 - Arrigal's Bait)|Kolyan's Letter (Bait)]], [[Handout - Kolyan Indirovich's Letter (Version 2 - The Desperate Plea)|Kolyan's Letter (Desperate Plea)]], [[Handout - Strahd's Invitation|Strahd's Invitation]], [[Handout - From the Tome of Strahd|Tome of Strahd]], [[Handout - Journal of Rudolph van Richten|Van Richten's Journal]], [[Handout - Journal of Argynvost|Journal of Argynvost]].

### 🗺️ Sword Coast Adventurer's Guide (SCAG)
- **Lore, Geography & Religion**:
  - **[[The Sword Coast & The North - Welcome to the Realms]]**: Western Heartlands, Savage Frontier, Coin of the Realms, Calendar of Harptos, Timeline of the Realms.
  - **[[Magic in the Realms & The Weave]]**: Mystra, the Weave, ancient Mythals, Weave-affecting magic (Dead Magic, Wild Magic, Antimagic).
  - **[[The Gods of Faerûn & Deities of the Realms]]**: Complete Faerûnian, Dwarven (Morndinsamman), and Elven (Seldarine) pantheons, Knucklebones legend, Tyche legend, Afterlife & Fugue Plane.
- **Locations & Powers**:
  - **[[The Lords' Alliance & Major Cities]]**: Waterdeep (all wards, lords, cavalry), Baldur's Gate (Upper/Lower/Outer City, Flaming Fist, The Guild), Neverwinter, Silverymoon (Moonbridge, Vault of Sages), Mirabar, Daggerford, Longsaddle, Amphail, Yartar.
  - **[[Dwarfholds of the North & Dwarven History]]**: Gauntlgrym (Great Forge, Canticle of Gauntlgrym), Citadel Adbar, Citadel Felbarr, Mithral Hall, Sundabar, Ironmaster, Thornhold, Marks of Fallen Kingdoms.
  - **[[Island Kingdoms & Independent Realms of the North]]**: Evermeet, Moonshaes, Candlekeep (The Avowed, Great Library), Darkhold (Zhentarim), Elturgard (The Companion, Creed Resolute), Evereska, Najara, Luskan, Icewind Dale, and The Underdark (Gracklstugh, Menzoberranzan, Mantol-Derith, Blingdenstone).
- **Races & Character Options**:
  - **[[Races of the Realms - Subraces, Deities & Options]]**: Duergar traits, Svirfneblin (Deep Gnome) traits & Svirfneblin Magic feat, Ghostwise Halfling Silent Speech, Half-Elf variants, Tiefling variants (Feral, Winged, Devil's Tongue, Hellfire), 11 Human ethnic cultures & languages.
  - **[[Sword Coast Subclasses & Class Options]]**: Battlerager Barbarian (Spiked Armor), Elk & Tiger Totem options, Arcana Domain Cleric, Purple Dragon Knight Fighter, Way of the Long Death Monk, Way of the Sun Soul Monk, Oath of the Crown Paladin, Mastermind Rogue, Swashbuckler Rogue, Storm Sorcery Sorcerer, The Undying Warlock, Bladesinging Wizard.
  - **[[Sword Coast Arcane Cantrips]]**: Booming Blade, Green-Flame Blade, Lightning Lure, Sword Burst.
  - **[[Sword Coast Backgrounds]]**: City Watch (Investigator variant), Clan Crafter, Cloistered Scholar, Courtier, Faction Agent, Far Traveler, Inheritor, Knight of the Order, Mercenary Veteran, Urban Bounty Hunter, Uthgardt Tribe Member, Waterdhavian Noble.
  - **[[Class Options in Other Worlds (Dragonlance, Eberron, Greyhawk & Custom)]]**: Adaptations for Krynn, Khorvaire, Oerth, and homebrew worlds.

### 📜 Mordenkainen's Tome of Foes (MTF)
- **The Blood War & Diabolical Cults**:
  - **[[The Blood War - Cosmic Conflict of the Lower Planes]]**: The Great Dance, River Styx, Mordenkainen's Balance, Three Legions, 13 Tiers of the Nine Hells.
  - **[[Lords of the Nine Hells & Diabolical Cults]]**: All 9 archdevils and their layers, cult traits (Demands of Nessus, Path of Baalzebul, Infernal Insight, Loyalty beyond Death, Crushing Blow, Step into Shadows, Path of Levistus, Grasping Hands, Spell Shield, Ferocious Surge).
  - **[[Tiefling Subraces of the Nine Hells]]**: All 9 Archdevil subraces (Asmodeus, Baalzebul, Dispater, Fierna, Glasya, Levistus, Mammon, Mephistopheles, Zariel) with ability score bonuses & legacy spells.
  - **[[Princes of the Abyss, Demonic Incursions & Boons]]**: 4 phases of abyssal incursion, demonic boons for Baphomet, Demogorgon, Fraz-Urb'luu, Graz'zt, Juiblex, Orcus, Yeenoghu, Zuggtmoy.
- **Elves & The Feywild**:
  - **[[Elves - Origin, Reverie, and The Seldarine Pantheon]]**: Primal schism, 4 life stages of Reverie (First Reflection, Drawing of Veil, Remembrance, Transcendence), Blessed of Corellon, complete 29-deity Seldarine table, Mythals, Bladesong.
  - **[[Drow Society & The Dark Seldarine]]**: Matriarchs, Driders, Dark Seldarine pantheon (Lolth, Eilistraee, Ghaunadaur, Keptolo, Kiaransalee, Malyk, Selvetarm, Vhaeraun, Zinzerena, Vulkoor).
  - **[[The Raven Queen, The Shadowfell & The Shadar-kai]]**: Origin, Fortress of Memories, creation of the Nagpas, Vecna's obsession, shadar-kai servants.
  - **[[Elf Subraces: Eladrin, Sea Elf & Shadar-kai]]**: Eladrin (seasonal Fey Step effects), Sea Elf (Child & Friend of the Sea), Shadar-kai (Blessing of the Raven Queen).
- **Dwarves & Gith**:
  - **[[Dwarves - Moradin, The Morndinsamman & Clan Strongholds]]**: Clan strongholds, Morndinsamman 20-deity table, Abbathor's dual role, Greyhawk, Toril, and Krynn dwarves.
  - **[[Duergar - The Gray Dwarves of the Underdark]]**: Illithid enslavement, Three Rules of Conduct, Laduguer & Deep Duerra, psionics, Duergar player subrace traits.
  - **[[Gith and Their Endless War: Githyanki & Githzerai]]**: Tu'narath & Vlaakith, red dragon pact, silver swords, Limbo monasteries & Menyar-Ag, Anarchs & Zerths, Gith character traits (Githyanki & Githzerai).
- **Halflings & Gnomes**:
  - **[[Halflings - The Power of Innocence, Lore & Deities]]**: Luck of the halflings, Arvoreen's defense tactics, complete halfling pantheon table, multiverse halflings.
  - **[[Gnomes - Inventions, The Golden Hills & Deep Gnomes]]**: Rock gnomes, tinker gnomes, Bytopia Golden Hills pantheon table, Svirfneblin (Deep Gnome) traits & Svirfneblin Magic feat.
- **Bestiary & High-CR Foes**:
  - **[[Demon Lords of the Abyss - Stat Blocks & Lairs]]**: Baphomet (CR 23), Demogorgon (CR 26), Orcus (CR 26), Graz'zt (CR 24), Juiblex (CR 23), Yeenoghu (CR 24), Zuggtmoy (CR 23), Fraz-Urb'luu (CR 23) with lair actions and madness tables.
  - **[[Archdevils of the Nine Hells - Stat Blocks & Lairs]]**: Zariel (CR 26), Bael (CR 19), Geryon (CR 22), Hutijin (CR 21), Moloch (CR 21), Titivilus (CR 16).
  - **[[Elder Elementals - Apocalypse Beasts of the Inner Planes]]**: Leviathan (CR 20), Phoenix (CR 16), Elder Tempest (CR 23), Zaratan (CR 22).
  - **[[Marut & Modron/Gnomish Clockworks]]**: Marut (CR 25), Steel Predator (CR 16), Bronze Scout, Iron Cobra, Oaken Bolter, Stone Defender.
  - **[[Devils & Tiamat's Abishai]]**: All 5 Abishai colors (CR 6–19), Amnizu (CR 18), Hellfire Engine (CR 16), Merregon (CR 4), Narzugon (CR 13), Orthon (CR 10).
  - **[[Lesser Demons & Yugoloth Mercenaries]]**: Alkilith, Armanite, Bulezau, Dybbuk, Maurezhi, Molydeus (CR 21), Nabassu, Sibriex (CR 18), Wastrilith, Yugoloths (Canoloth, Dhergoloth, Hydroloth, Merrenoloth, Oinoloth, Yagnoloth).
  - **[[Drow & Duergar Specialists]]**: Drow Matron Mother (CR 20), Favored Consort, Inquisitor, Shadowblade, House Captain; Duergar Despot (CR 12), Warlord, Hammerer, Mind Master, Screamer, Soulblade, Stone Guard, Xarrorn.
  - **[[Shadowfell Denizens, Aberrations & Star Spawn]]**: Star Spawn (Grue, Hulk, Larva Mage, Mangler, Seer), Sorrowsworn (Angry, Hungry, Lonely, Lost, Wretched), Nightwalker (CR 20), Skull Lord (CR 15), Boneclaw (CR 12), Allip (CR 5), Astral Dreadnought (CR 21), Balhannoth (CR 11), Oblex (CR 1/4–10), Nagpa (CR 17), Corpse Flower, Kruthiks, Trolls, Giff, and Tortles.

---

## 👁️ Xanathar's Guide to Everything (XGtE)
- **Rules & Introduction**:
  - **[[XGtE - Xanathar's Guide to Everything - Introduction & Ten Rules to Remember]]**: Beholder crime lord Xanathar, Sylgar the goldfish, The DM Adjudicates the Rules, and the complete Ten Rules to Remember.
- **This Is Your Life (Backstory Generator)**:
  - **[[XGtE - This Is Your Life - Origins, Family & Childhood]]**: Parents, nonhuman parents (half-elf, half-orc, tiefling), birthplace table, siblings & birth order, family lifestyle & childhood home.
  - **[[XGtE - This Is Your Life - Personal Decisions & Class Training]]**: Background motivations (Acolyte to Urchin) and Class training catalysts for all 12 classes.
  - **[[XGtE - This Is Your Life - Life Events & Supplemental Tables]]**: Life events by age, Adventures, Arcane Matters, Boons, Crime & Punishment, Supernatural Events, Tragedies, War, Weird Stuff, and Supplemental Tables (Alignment, Cause of Death, Class, Occupation, Race, Relationship, Status).
- **Subclasses & Racial Feats**:
  - **[[XGtE - Character Options & Subclasses Overview]]**: Master breakdown of all 31 subclasses, Druid Wild Shape habitats, and Warlock Eldritch Invocations.
  - **[[XGtE - Racial Feats]]**: Full rules for Bountiful Luck, Dragon Fear, Dragon Hide, Drow High Magic, Dwarven Fortitude, Elven Accuracy, Fade Away, Fey Teleportation, Flames of Phlegethos, Infernal Constitution, Orcish Fury, Prodigy, Second Chance, Squat Nimbleness, and Wood Elf Magic.
- **Dungeon Master's Tools & Traps**:
  - **[[XGtE - Dungeon Master's Tools - Mechanics & Environment]]**: Simultaneous effects, Rate of Falling (500 ft/round), Flying falling rules, Sleep & waking, Sleeping in armor, Exhaustion from lack of rest, Adamantine weapons (auto-crit vs objects), Tying knots, Tool proficiency synergies, and Grid spellcasting (Template & Token methods).
  - **[[XGtE - Encounter Building & Quick Matchups]]**: Solo Legendary Monster Challenge Rating table, Multiple Monster ratios by level, Quick Matchups table, Monster Personality & Relationship roll tables.
  - **[[XGtE - Traps Revisited - Simple Traps & Hazards]]**: Mechanics, threat DCs, damage by tier, and full descriptions of Bear Trap, Crossbow Trap, Falling Portcullis, Fiery Blast Trap, Net Trap, Pit Trap, Poison Needle Trap, Scything Blade Trap, and Sleep of Ages Trap.
  - **[[XGtE - Traps Revisited - Complex Traps]]**: Dynamic initiative, active, constant, and dynamic elements, countermeasures, XP awards, and complete modules for Path of Blades, Poisoned Tempest, and Sphere of Crushing Doom.
- **Downtime & Treasures**:
  - **[[XGtE - Downtime Revisited - Rivals & Activities]]**: d20 Rivals archetype table, Buying Magic Items, Carousing, Crafting Mundane/Magic/Healing Potions, Crime & Heists, Gambling, Pit Fighting, Relaxation, Religious Service, Research, Scribing Spell Scrolls, Selling Magic Items, Training, and Work with complete resolution & complication tables.
  - **[[XGtE - Awarding Magic Items & Common Magic Items]]**: Magic item budget by tier 1–4 (100 items total), Minor vs Major rarity distribution, Overstocking guidelines (+25%), and complete catalog of common magic items (Clockwork Amulet, Ruby of the War Mage, Cloak of Billowing, etc.).
  - **[[XGtE - Shared Campaigns & Character Names]]**: Adventurers League shared campaign framework, PHB + 1 rule, 2-hr and 4-hr adventure design pacing, Character names overview, and the legend of Sylgar.

### 🔮 Tasha's Cauldron of Everything (TCoE)
- **Character Options & Lineages**:
  - **[[TCoE Custom Lineages and Origin Customization]]**: Custom Lineage ancestry framework, ability score adjustments, and skill/proficiency swap rules.
  - **[[TCoE Optional Class Features]]**: Modular rules enhancements for all 12 core classes (Primal Knowledge, Harness Divine Power, Steady Aim, Ki-Fueled Attack, Deft Explorer).
- **Subclasses & Specialists**:
  - **[[TCoE Subclasses Overview]]**: Comprehensive guide to all 22 TCoE subclasses and Artificer specializations.
  - **[[TCoE Artificer Armorer]]**: Powered arcane armor with Guardian (Thunder Gauntlets) and Infiltrator (Lightning Launcher) configurations.
- **Treasures & DM Tools**:
  - **[[TCoE Magical Tattoos and Magic Items]]**: Complete catalog of magical tattoo needles (Blood Fury, Eldritch Claw, Ghost Step) and specialized class foci.
  - **[[TCoE Sidekicks and Group Patrons]]**: Sidekick companions (Expert, Spellcaster, Warrior) and adventuring party Group Patron sponsors with roll tables.
  - **[[TCoE - Dungeon Master's Tools & Supernatural Environments]]**: Session Zero rules, monster desires & negotiations, Supernatural Regions (Blessed Radiance, Far Realm, Haunted, Infested, Mirror Zone, Psychic Resonance, Unraveling Magic), and Mimic Colony with Juvenile Mimic stat block.
  - **[[TCoE - Puzzles & Enigmas Guide]]**: Ready-to-run puzzles with hints and solutions: Creature Paintings, Skeleton Keys, Four Elements, Members Only, and more.

---

## 🐉 The Rise of Tiamat (RoT)
- **[[The Rise of Tiamat - Campaign Guide & Council of Waterdeep]]**: Council of Waterdeep faction scorecard, campaign episode breakdowns (Oyaviggaton, Tomb of Diderius, Thay Embassy, Well of Dragons), and climax guide.
- **[[Tiamat, Queen of Dragons (Avatar)]]**: Supreme CR 30 deity stat block with 5 heads, breath weapon legendary actions, and weakening mechanics.
- **[[The Rise of Tiamat - Magic Items & The Dragon Masks]]**: Complete mechanics for the Five Dragon Masks (Black, Blue, Green, Red, White) and the synthesized Mask of the Dragon Queen.
- **[[The Rise of Tiamat - Bestiary & NPC Stat Blocks]]**: Stat blocks for Adult Blue, Green, and White Dragons, Cult Fanatics, Half-Red Dragon Veterans, Bone Devils, and dragon cult operatives in Fantasy Statblock format.
- **[[The Rise of Tiamat - Spells Supplement]]**: Full spell descriptions for Chromatic Orb, Continual Flame, Evard's Black Tentacles, Fire Shield, Glyph of Warding, Mislead, Move Earth, Wish, and campaign magic.

---

## 👹 Volo's Guide to Monsters (VGtM)
- **Monster Lore, Lairs & Society**:
  - **[[Volo's Guide to Monsters - Beholder Lore & Lairs]]**: Anatomy of paranoia, solitary tyrants, Death Tyrants, Eye Tyrants, roll tables for physical quirks and personality, vertical lair designs, and The Xanathar Guild / Zushaxx lore.
  - **[[Volo's Guide to Monsters - Giants, The Ordning & The Giant Pantheon]]**: The six rungs of the Ordning, Thousand-Year War, Ostoria, Annam All-Father and the Giant Pantheon, giant tongue (maat & maug), and giant bag contents table.
  - **[[Volo's Guide to Monsters - Gnolls & The Insatiable Hunger]]**: Yeenoghu, origin from feeding hyenas, war band structure (Flind, Shoosuva, Leucrotta, Flesh Gnawers), and war band generator tables.
  - **[[Volo's Guide to Monsters - Goblinoids: The Conquering Host]]**: Maglubiyet's divine hierarchy uniting Goblins (4 castes, Booyahgs), Bugbears (ambushers, Hruggek), and Hobgoblins (Legions, Academy of Devastation, Iron Shadows).
  - **[[Volo's Guide to Monsters - Hags: Dark Sisterhood & Weird Magic]]**: The five sisterhoods (Green, Sea, Night, Annis, Bheur), Hag Covens & alternative spell lists (Death, Nature, Prophecy), and weird magic items table.
  - **[[Volo's Guide to Monsters - Kobolds, Mind Flayers, Orcs & Yuan-ti Lore]]**: Kurtulmak and traps, illithid Grand Design and Elder Brains, Orc Godsworn sects, and Yuan-ti serpentine castes.
- **Character Races & Monstrous Adventurers**:
  - **[[Volo's Guide to Monsters - Character Races]]**: Aasimar (Protector, Scourge, Fallen), Firbolg, Goliath, Kenku, Lizardfolk, Tabaxi, and Triton with complete racial traits and guides.
  - **[[Volo's Guide to Monsters - Monstrous Adventurers]]**: Playable racial traits for Bugbear, Goblin, Hobgoblin, Kobold, Orc, and Yuan-ti Pureblood.
- **Bestiary & NPC Stat Blocks**:
  - **[[Volo's Guide to Monsters - Bestiary (Banderhobb to Giants)]]**: Fantasy Statblocks for Banderhobb, Barghest, Death Kiss, Gauth, Gazer, Bodak, Boggle, Catoblepas, Froghemoth, Cloud Giant Smiling One, Fire Giant Dreadnought, Frost Giant Everlasting One.
  - **[[Volo's Guide to Monsters - Bestiary (Girallon to Yuan-ti & NPCs)]]**: Fantasy Statblocks for Flind, Ki-rin, Elder Brain, Ulitharid, Tanarukk, Yuan-ti Anathema, Warlord, and legendary Underdark terrors.

---

## 🛡️ Character Sheets & Templates (Standard 5e, Modern & Kids)
- **Standard 5e Character Sheet Templates**:
  - **[[Template - 5e Standard Character Sheet]]**: Baseline balanced 5e character sheet with core vitals, 18 skills, attacks, equipment, and personality.
  - **[[Template - 5e Spellcaster Character Sheet]]**: Dedicated magic-user template with spell slots tracker (Cantrips to 9th level), Spell Save DC, Spell Attack Bonus, ritual casting, components, and prepared spells list.
  - **[[Template - 5e Martial Combatant Character Sheet]]**: Frontline combatant template with Extra Attack, Superiority Dice maneuvers matrix, Action Surge, Second Wind, Fighting Style, and weapon properties.
  - **[[Template - 5e Stealth & Skill Expert Character Sheet]]**: Operative template with double-proficiency Expertise table, Thieves' Tools, Passive Perception/Investigation, Sneak Attack progression, and Cunning Action.
  - **[[Template - 5e Modern / Urban Operative Character Sheet]]**: 5e Modern handbook template with firearms ballistics, Kevlar vests, vehicle proficiencies, hacker tools, and tactical gadgets.
  - **[[Template - 5e Multiclass Character Sheet]]**: Dual-classing template with combined hit dice pools, multiclass spell slots progression matrix, and hybrid ability features.
  - **[[Template - 5e Sidekick & NPC Retainer Sheet]]**: Streamlined companion sheet (Warrior, Expert, Spellcaster) from Tasha's Cauldron for sidekicks and hirelings.
- **Pre-Built Standard 5e Heroes**:
  - **[[Valeros Ironheart (Level 5 Fighter)]]**: Level 5 Champion Fighter character sheet (Human, AC 18, HP 44, Greatsword).
  - **[[Ellywick Timbers (Level 5 Wizard)]]**: Level 5 Evocation Wizard character sheet (Rock Gnome, AC 12/15, HP 32, Fireball).
  - **[[Kaelen Shadowstep (Level 5 Rogue)]]**: Level 5 Thief Rogue character sheet (Wood Elf, AC 16, HP 38, Sneak Attack 3d6).
- **Simplified Kids Character Sheets & Guides (Ages 5 and Up)**:
  - **[[Template - Kid Adventurer Character Sheet (Ages 5+)]]**: Child-friendly character sheet using the 6 Super-Stats (Brawn, Agility, Heart, Smarts, Senses, Smile), Health Hearts, Star Inspiration tokens, Super Hero Moves, and Pet Companions.
  - **[[DM Guide - Running D&D for Kids (Ages 5 and Up)]]**: Pedagogical DM guide covering the Rule of "Yes, And!", 30–45 minute pacing, non-lethal encounters, Zelda-style hearts, physical props, and 5 instant one-shot quests.
  - **[[Sir Leo the Brave (Kid Adventurer - Ages 5+)]]**: Lion Knight kid hero with Golden Lion Shield, Roar of Courage, and Barnaby the pup.
  - **[[Luna Starwhisper (Kid Adventurer - Ages 5+)]]**: Pixie Star Mage kid hero with Rainbow Sparkle Burst, Starlight Healing Kiss, and Twinkle the firefly.

---

## ⛏️ Lost Mine of Phandelver (LMoP)
- **[[Lost Mine of Phandelver - Campaign Overview]]**: Master campaign guide, Phandelver's Pact lore, adventure episodes (Level 1–5), Wave Echo Cave, and automated Dataview trackers.
- **[[LMoP Part 1 - Goblin Arrows]]**: High Road ambush, Cragmaw Hideout dungeon key, traps, goblins, wolves, and Sildar Hallwinter rescue.
- **[[LMoP Part 2 - Phandalin & Redbrand Hideout]]**: Phandalin town directory, Stonehill Inn rumors, Barthen's Provisions, Tresendar Manor dungeon crawl, and Glasstaff (Iarno Albrek).
- **[[LMoP Part 3 - The Spider's Web]]**: Conyberry & Agatha's Lair, Old Owl Well (Hamun Kost), Ruins of Thundertree & Venomfang (Young Green Dragon), Wyvern Tor, and Cragmaw Castle.
- **[[LMoP Part 4 - Wave Echo Cave]]**: Legendary mine of the Phandelver's Pact, Forge of Spells, Nezznar the Black Spider boss fight, Spectator, Flameskull, and conclusion.
- **[[LMoP NPCs & Monsters Stat Blocks]]**: Complete stat blocks for Nezznar the Black Spider, Glasstaff, Sildar Hallwinter, Klarg the Bugbear, Venomfang, Droop, and Hamun Kost.

---

## 🏔️ Bigby Presents: Glory of the Giants
- **Character Options, Subclasses & Feats**:
  - **[[Barbarian - Path of the Giant]]**: Giant's Power, Giant's Havoc (reach + Large size), Elemental Cleaver, Mighty Impel, and Demiurgic Colossus (Huge size, +4m reach).
  - **[[Glory of the Giants - Backgrounds & Giant Feats]]**: Giant Foundling & Rune Carver backgrounds; Strike of the Giants (Cloud, Fire, Frost, Hill, Stone, Storm) and all 8 specialized giant feats (Fury of the Frost Giant, Soul of the Storm Giant, Guile of the Cloud Giant, etc.).
- **Giant Lore, Religion & Culture**:
  - **[[Glory of the Giants - Giant Lore, Ordning & Roleplaying Guide]]**: Giant social structures, roleplaying giant characters, sizes and heights, giant names table, living artifacts, and the shattered Ordning.
  - **[[Glory of the Giants - Giant Religion & Pantheon]]**: Annam All-Father, Diancastra, Grolantor, Hiatea, Iallanis, Karontor, Memnor, Skoraeus Stonebones, Stronmaus, Surtr, and Thrym with holy symbols and altars.
- **18 Giant Enclaves & Settlements**:
  - **[[Glory of the Giants - Enclaves & Settlements (Part 1)]]**: Cloud, Cradle, Death, Earth, Fire, and Frost enclaves including Cloud City of Serenity, Endless Spire, Karontor's Hold, and Rimespire.
  - **[[Glory of the Giants - Enclaves & Settlements (Part 2)]]**: Sea, Sky, Space, Storm, Sun, Tomb, and Underdark enclaves including Star-Grave, World-Spindle, Sunken Cradle, Tempest Barracks, and Ziggurat of the Sun.
- **Treasures & Magic Items**:
  - **[[Glory of the Giants - Giant Treasures, Relics & Bag Contents]]**: 1d100 Giant Bag contents table, Huge equipment rules, and magical items (Adze of Annam, Thunderbuss, Bigby's Beneficent Bracelet, Prehistoric Figurine of Wondrous Power, etc.).
- **Giant Bestiary & Scions of the Gods**:
  - **[[Glory of the Giants Bestiary (A to F) - Stat Blocks]]**: Bag Jelly, Barrowghast, Cairnwight, Cinder Hulk, Cloud Giant Destiny Gambler, Death Giants, primeval Dinosaurs (Aerosaur, Altisaur, Ceratops, Regisaur), Fensirs, Firbolgs, Fire Giants, and Flesh Colossus (CR 20).
  - **[[Glory of the Giants Bestiary (F to Z) - Stat Blocks]]**: Fomorian Nobles and Crawlers, Frost Giants, Gargantua (CR 21), Gigant (CR 20), Giant Goose with golden eggs, Grinning Cat, Hulks of all elements, Runic Colossus (CR 21), Storm Giants, and Troll Amalgam (CR 17).
  - **[[Scions of Giants' Gods & Cradles - Mythic Boss Encounters]]**: All 6 Scions of Giants' Gods and their colossal Elemental Cradles (CR 22–27) with lair and regional apocalyptic effects.

---

## 🌌 Spelljammer: Boo's Astral Menagerie
- **Wildspace, Astral Sea & Encounters**:
  - **[[Boo's Astral Encounters & Spacefarer Rules]]**: Astral variants (Unusual Nature), attitude roll mechanics, d100 Wildspace Encounters table, d100 Astral Sea Encounters table, and d100 Spelljamming Ship Encounters table.
- **Creatures of the Astral Sea**:
  - **[[Boo's Astral Menagerie - Bestiary Part 1 (A to G)]]**: Aartuks (Elder, Priest, Warrior), Astral Elves (Aristocrat, Commander, Honor Guard, Star Priest, Warrior), Autognome (with Malfunction table), Braxat, B'rohg, Chwinga Astronaut, Cosmic Horror (CR 18), Dohwar, Esthetic Reigar Warship, Eye Monger, Feyr, Gaj, and Giff mercenaries.
  - **[[Boo's Astral Menagerie - Bestiary Part 2 (G to P)]]**: Githyanki (Buccaneer, Star Seer, Xenomancer), Hadozees, Jammer Leech, Kindori (Space Whale), Lunar Dragons (Ancient CR 19, Adult, Young, Wyrmling with regional effects), Megapede, Mercane, Murder Comet, Neh-thalggu (Brain Collector with spells), Neogi variants, and Plasmoids.
  - **[[Boo's Astral Menagerie - Bestiary Part 3 (P to Z)]]**: Psurlons (Leader, Ringer), Reigar artists, Scavvers (Brown, Gray, Night, Void), Solar Dragons (Ancient CR 21 to Wyrmling), Space Clown, Space Hamster & Giant Space Hamster, Starlight Apparition, Thri-Kreen gladiators, Vampirates, and Zodar (CR 16 Wish caster).

---

## 🐉 Fizban's Treasury of Dragons
- **Character Creation & Options**:
  - **[[Draconic Races - Chromatic, Gem & Metallic Dragonborn]]**: Full racial traits and ancestry tables for Chromatic, Gem, and Metallic Dragonborn, with Chromatic Warding, Psionic Mind, Gem Flight, and dual Metallic Breath Weapons.
  - **[[Monk - Way of the Ascendant Dragon]]**: Draconic Disciple, Breath of the Dragon (Martial Arts die scaling), Wings Unfurled, Aspect of the Wyrm aura, and Ascendant Aspect.
  - **[[Ranger - Drakewarden]]**: Draconic Gift, Drake Companion (full stat block, PB scaling, Infused Strikes), Bond of Fang and Scale mount, Drake's Breath, and Perfected Bond.
  - **[[Draconic Feats & Character Ties]]**: Gift of the Chromatic Dragon, Gift of the Gem Dragon, Gift of the Metallic Dragon feats, and d10 Draconic Character Ties.
- **Dragon Magic & Hoards**:
  - **[[Dragon Magic & Spells]]**: 7 draconic spells (*Nathair's Mischief*, *Rime's Binding Ice*, *Ashardalon's Stride*, *Raulothim's Psychic Lance*, *Summon Draconic Spirit* with stat block, *Fizban's Platinum Shield*, and *Draconic Transformation*).
  - **[[Draconic Magic Items & Hoard Items]]**: Amethyst Lodestone, Crystal Blade, Dragonhide Belt, Dragonlance, Dragon Wing Bow, Emerald Pen, Flail of Tiamat, Gold Canary Figurine of Wondrous Power, Platinum Scarf, Potion of Dragon's Majesty, Ruby Weave Gem, Sapphire Buckler, Topaz Annihilator; plus 4-tier Hoard Items (*Dragon's Wrath Weapon*, *Dragon-Touched Focus*, *Dragon Vessel*, *Scaled Ornament*).
  - **[[Draconic Gifts & Hoard Quirks]]**: Draconic Familiar (pseudodragon), Draconic Rebirth, Draconic Senses, Echo of Dragonsight, Frightful Presence, Psionic Reach, Scaled Toughness, Tongue of the Dragon, and Draconic Marks.
- **Lore, Draconomicon & Bestiary**:
  - **[[Elegy for the First World & Dragonsight]]**: The primordial creation poem, Bahamut, Tiamat, Sardior "first-born of dragonkind", the shattering of the First World into seedling realities, multiversal echoes, and dragonsight.
  - **[[Roleplaying Dragons & DM Toolkits]]**: Dragon Appearance (d20), Mannerisms (d20), Bonds (d10), Flaws & Secrets (d10), and Draconic Name Elements generator.
  - **[[Dragon Organizations & Followers]]**: Cult of the Dragon, The Chamber of Eberron, Hidecarved Dragons (Lauths with d6 wards), Inheritors of the First World, leadership styles, and minion customization traits.
  - **[[Dragon Lairs & Hoard Generation]]**: Lair locations (d10), universal additional lair actions, regional effects, plundering rules, dragon curses, and random hoard generators by age.
  - **[[The Draconomicon: Part 1 (Amethyst to Emerald)]]**: In-depth ecology, lairs, roleplay, and art treasures for Amethyst, Black, Blue, Brass, Bronze, Copper, Crystal, Deep, Dragon Turtle, and Emerald dragons, plus Eldenser, Rhashaak, Iymrith, Aasterinian, Fireflash, Galadaeros, Lady Gemcloak, and Raulothim.
  - **[[The Draconomicon: Part 2 (Faerie to White)]]**: In-depth ecology, lairs, roleplay, and art treasures for Faerie, Gold, Green, Moonstone, Red, Sapphire, Shadow, Silver, Topaz, and White dragons, plus Nathair Sgiathach, Tamarand, Cyan Bloodbane, Ashardalon, Bleucorundum, D'argent, Astilabor, and Rime.
  - **[[Fizban's Treasury Bestiary - Part 1 (Amethyst to Dragonbone Golem)]]**: Statblocks for Amethyst Dragons (Ancient to Wyrmling), Animated Breath, Aspect of Bahamut (CR 30 Mythic), Aspect of Tiamat (CR 30 Mythic), Chromatic Greatwyrm (CR 27 Mythic), Crystal Dragons, Deep Dragons, Dracohydra, Draconians (Dreadnought, Foot Soldier, Infiltrator, Mage, Mastermind), Draconic Shard, Dragonblood Ooze, and Dragonbone Golem.
  - **[[Fizban's Treasury Bestiary - Part 2 (Champions to Topaz)]]**: Statblocks for Dragonborn Champions (Bahamut, Sardior, Tiamat), Dragonflesh Grafters & Abomination, Dragon Followers, Dragonnel mount, Ancient Dragon Turtle (CR 24 Mythic), Egg Hunters, Elder Brain Dragon (CR 22), Emerald Dragons, Eyedrake, Gem Greatwyrm (CR 26 Mythic), Gem Stalker, Ghost Dragon, Hoard Mimic, Hoard Scarabs, Hollow Dragon, Liondrake, Metallic Greatwyrm (CR 28 Mythic), Metallic Sentinels, Moonstone Dragons, Sapphire Dragons, Sea Serpents, and Topaz Dragons.

---

## 🗡️ D&D Beyond: Thieves' Gallery (Honor Among Thieves)
- **[[Thieves' Gallery - D&D: Honor Among Thieves NPCs]]**:
  - **Doric** (CR 5 Tiefling Druid with owlbear wild shape and Fiery Rebuke).
  - **Edgin Darvis** (CR 5 Bard with Reinforced Lute, Disorienting Words, and Inspiring Words).
  - **Forge Fitzwilliam** (CR 8 Rogue/Con Artist with Disarming Charm, Double-Cross auto-crit, and poison heavy crossbow).
  - **Holga Kilgore** (CR 5 Barbarian with Reckless, darksteel greataxe, and Wrestle bonus action).
  - **Simon Aumar** (CR 5 Half-Elf Sorcerer with Wild Magic Surge, Chaos Bolt, and Sheltering Shield).
  - **Sofina** (CR 15 Red Wizard of Thay with Necrotic Strike, Swarm of Meteors, and Summon Wraith).
  - **Xenk Yendar** (CR 10 Paladin with Aura of Protection, transforming daggersword, and Cleansing Touch).
  - **Nightbringer**: Legendary mace artifact bestowed by Takhisis.

---

## 📚 Monstrous Compendium Series (Volumes 1–3)
- **[[Monstrous Compendium Vol. 1: Spelljammer Creatures]]**: Asteroid Spider (CR 15), Clockwork Horror (CR 2), Eldritch Lich (CR 15 with Great Old Ones table), Fractine (CR 9), Gadabout (CR 1/8 space-suit plant), Goon Balloon (CR 1/8), Nightmare Beast (CR 16), Puppeteer Parasite (CR 3), Star Lancer (CR 2 mount), and Yggdrasti (CR 7 World Tree splinter).
- **[[Monstrous Compendium Vol. 2: Dragonlance Creatures]]**: Dream Eater (CR 7), Ember / Pyros (CR 22 Armored Red Dragon), Forest Master (CR 8 Celestial Unicorn), Foresworn (CR 6 Solamnic spirit), Irda Seeker (CR 1) & Irda Veil Keeper (CR 4), Mount Nevermind Gnomes (Inventor & Mastermind), Thanoi Hunter (CR 1), Traag Draconian (CR 5), Dragon Highlord Verminaard (CR 17), and Nightbringer.
- **[[Monstrous Compendium Vol. 3: Minecraft Creatures]]**: Blaze (CR 5 Elemental with blaze rods), Creeper (CR 1/2 with charged state and explosive destruction), Ender Dragon (CR 19 with End Crystals), Enderman (CR 6 with teleportation and Ender pearls), and Wolf of the Overworld (CR 1/4 with Pack Tactics).

---

## 🌌 Mordenkainen Presents: Monsters of the Multiverse (MPMM / MotM)
Comprehensive 5e rules modernization featuring 33 fantastical player character races, 250+ updated monster and NPC stat blocks, the official Appendix with creature classification indices (by Type, CR 0–26, and Environment), and DM encounter tables:
- **Character Races & Customization**:
  - **[[Monsters of the Multiverse - Character Creation Guidelines]]**: Origin customization rules, ability score increase choices (+2/+1 or +1/+1/+1), creature types, size options (Small or Medium), languages, and PB scaling mechanics.
  - **[[Monsters of the Multiverse - Fantastical Races (Part 1: Aarakocra to Eladrin)]]**: Aarakocra, Aasimar, Bugbear, Centaur, Changeling, Deep Gnome (Svirfneblin), Duergar, and Eladrin.
  - **[[Monsters of the Multiverse - Fantastical Races (Part 2: Fairy to Lizardfolk)]]**: Fairy, Firbolg, Genasi (Air, Earth, Fire, Water), Githyanki, Githzerai, Goblin, Goliath, Harengon, Hobgoblin, Kenku, Kobold, and Lizardfolk.
  - **[[Monsters of the Multiverse - Fantastical Races (Part 3: Minotaur to Yuan-ti)]]**: Minotaur, Orc, Satyr, Sea Elf, Shadar-kai, Shifter (Beasthide, Longtooth, Swiftstride, Wildhunt), Tabaxi, Tortle, Triton, and Yuan-ti.
- **Multiverse Bestiary (250+ Unified Stat Blocks)**:
  - **[[Monsters of the Multiverse - Bestiary Part 1 (A to C)]]**: Abishai (Black, Blue, Green, Red, White), Alhoon, Alkilith, Allip, Amnizu, Annis Hag, Archer, Armanite, Astral Dreadnought, Babau, Bael, Balhannoth, Banderhobb, Baphomet, Bard (NPC), Barghest, Berbalang, Bheur Hag, Blackguard, Bodak, Boggle, Boneclaw, Bulezau, Cadaver Collector, Canoloth, Catoblepas, Cave Fisher, Champion, Chitine, Choldrith, Choker, Clockworks, Cloud Giant Smiling One, and Corpse Flower.
  - **[[Monsters of the Multiverse - Bestiary Part 2 (D to G)]]**: Darklings, Deathlocks, Deep Scion, Demogorgon, Derro, Dhergoloth, Dinosaurs, Draegloth, Drow (Arachnomancer, Favored Consort, House Captain, Inquisitor, Matron Mother, Shadowblade), Duergar, Dybbuk, Eidolon, Eladrin seasons, Elementals & Myrmidons, Elder Brain, Elder Tempest, Fire Giant Dreadnought, Firenewt, Flail Snail, Flind, Fraz-Urb'luu, Froghemoth, Frost Giant Everlasting One, Frost Salamander, Gauth, Gazer, Geryon, Giants, Giant Strider, Giff, Girallon, Githyanki, Githzerai, Gnolls, Gray Render, Graz'zt, and Grung.
  - **[[Monsters of the Multiverse - Bestiary Part 3 (H to O)]]**: Hellfire Engine, Hobgoblin Devastator & Iron Shadow, Howler, Hutijin, Hydroloth, Juiblex, Ki-rin, Kobolds, Korred, Kraken Priest, Kruthiks, Leucrotta, Leviathan, Martial Arts Adept, Marut, Master Thief, Maurezhi, Maw Demon, Meazel, Meenlock, Merregon, Merrenoloth, Mindwitness, Moloch, Molydeus, Morkoth, Mouth of Grolantor, Nabassu, Nagpa, Narzugon & Infernal Tack, Neogi, Neothelid, Nightwalker, Nilbog, Nupperibo, Oblexes, Ogres of War, Oinoloth, Orcus, and Orthon.
  - **[[Monsters of the Multiverse - Bestiary Part 4 (P to Z)]]**: Phoenix, Quickling, Redcap, Retriever, Rutterkin, Sea Spawn, Shadar-kai, Shadow Mastiffs, Shoosuva, Sibriex (with 1d100 Flesh Warping table), Skulk, Skull Lord, Slithering Tracker, Sorrowsworn (Angry, Hungry, Lonely, Lost, Wretched), Spawn of Kyuss, Star Spawn, Steeders, Steel Predator, Stone Cursed, Stone Giant Dreamwalker, Storm Giant Quintessent, Swashbuckler, Sword Wraiths, Tanarukk, Titivilus, Tlincalli, Tortle NPC, Trolls (Dire, Rot, Spirit, Venom), Ulitharid, Vampiric Mist, Vargouille, Vegepygmies, Warlord, Specialist Wizards (Apprentice, Abjurer, Conjurer, Diviner, Enchanter, Evoker, Illusionist, Necromancer, Transmuter), Yeenoghu, Zaratan, Zariel, and Zuggtmoy.
- **Appendices, Indexing & DM Screen**:
  - **[[Monsters of the Multiverse - Appendix: Monster Lists (Type, CR & Environment)]]**: Complete cross-referenced lists of all monsters organized by Creature Type (14 categories), Challenge Rating (CR 0 to 26), and Environments (11 biomes).
  - **[[Monsters of the Multiverse - DM Encounter Tables & Tactical Guide]]**: Modern 5e monster design principles, random encounter generation tables by biome, and Demon Lord & Archdevil tactical boss reference table.

---

## 🌌 Planescape: Morte's Planar Parade
- **[[Morte's Planar Parade - Planar Rules, Influences & Outlands Encounters]]**: Petitioners traits (Plane Locked, Soul Shape, Death and the Planes), Outer Plane alignment matrix, 16 Planar Influences customization mechanics (Abyss, Acheron, Arborea, Arcadia, Beastlands, Bytopia, Carceri, Elysium, Gehenna, Hades, Limbo, Mechanus, Mount Celestia, Nine Hells, Pandemonium, Ysgard), and Denizens of the Outlands 1d4 encounter tables across 14 creature types.
- **[[Archons (Hound, Lantern, Warden) - Celestials of Mount Celestia]]**: Hound Archon (CR 4), Lantern Archon (CR 2), Warden Archon (CR 8 with Eternal Vigil and Tracker's Bite).
- **[[Baernaloth - Primal Yugoloth of the Gray Wastes]]**: CR 17 (CR 18 in lair) fiend boss with Miasma of Discord, 3 reactions/round, Lair Actions, and Persistent Anguish / Slow Healing regional effects.
- **[[Demodands (Farastu, Kelubar, Shator) - Jailers of Carceri]]**: Farastu Demodand (CR 11), Kelubar Demodand (CR 13 with Acid Fog), and Shator Demodand (CR 16 with Liquefaction Ritual and Inhibitory Spray).
- **[[Planar Denizens: Bariaur, Dabus, Darkweaver, Eater of Knowledge & Guardinals]]**: Bariaur Wanderer (CR 3), Dabus (CR 2 with Symbol Speech rebuses), Darkweaver (CR 10 with cocoon d6 loot table), Eater of Knowledge (CR 6 with Brains Devoured psionics), and Guardinals of Elysium (Musteval CR 2, Equinal CR 6, Avoral CR 9).
- **[[Githzerai (Futurist, Traveler, Uniter) - Psionic Masters of Limbo]]**: Githzerai Futurist (CR 9 with Future Insight), Githzerai Traveler (CR 3), and Githzerai Uniter (CR 7 with Pacifying Touch).
- **[[Kolyarut - Inevitable Arbiter of the Hall of Concordance]]**: CR 20 Inevitable construct with automatic-hit Unerring Blade, Edict of Blades, and Plane Shift banishment to the Hall of Concordance in Sigil.
- **[[Hierarch Modrons (Decaton, Hexton, Nonaton, Octon, Septon) - High Officers of Mechanus]]**: Decaton Modron (CR 8), Nonaton Modron (CR 10 with Pillar of Truth), Octon Modron (CR 11), Septon Modron (CR 12 with Lightning Network), and Hexton Modron (CR 13 field general of the Great Modron March).
- **[[Shemeshka the Arcanaloth & Rilmani Protectors of the Spire]]**: Shemeshka the Arcanaloth (CR 14 crime boss of Fortune's Wheel casino with Razorvine Tiara and Fell Counterspell), Aurumach Rilmani (CR 17), Cuprilach Rilmani (CR 12), and Ferrumach Rilmani (CR 9).
- **[[Time Dragons (Wyrmling, Young, Adult, Ancient) - Masters of the Chronostream]]**: Ancient Time Dragon (CR 26 with 8,000-year Time Gate and Cycle of Rebirth), Adult Time Dragon (CR 18), Young Time Dragon (CR 11), Time Dragon Wyrmling (CR 5), plus Timeline Divergence and Temporal Fling lair actions.
- **[[Planar Incarnate, Maelephant, Sunflies, Razorvine & Vargouille Reflection]]**: Planar Incarnate (CR 22 Celestial/Fiend), Maelephant (CR 10 with Mind Poison), Sunfly & Swarm of Sunflies, Razorvine Blight (CR 1), and Vargouille Reflection (CR 1).
- **[[Sigil's 12 Ascendant Factions & Faction Agents Stat Blocks]]**: Philosophy guide to all 12 Sigil factions, plus stat blocks for Athar Null (CR 5), Bleak Cabal Void Soother (CR 3), Doomguard Doom Lord (CR 12) & Rot Blade (CR 6), Fated Shaker (CR 5), Fraternity of Order Law Bender (CR 9), Hands of Havoc Fire Starter (CR 4), Harmonium Captain (CR 8) & Peacekeeper (CR 3), Heralds of Dust Remnant (CR 4), Mercykiller Bloodhound (CR 7), Mind's Eye Matter Smith (CR 4), Society of Sensation Muse (CR 3), and Transcendent Order Conduit (CR 8) & Instinct (CR 3).
- **[[Planar Encounters d100 Tables (Chaotic, Evil, Good, Lawful, Neutral)]]**: Complete d100 random encounter tables for planar adventuring.

---

## 💀 D&D Dossier: Vecna the Archlich & Cosmic Artifacts
- **[[Vecna the Archlich - The Whispered One Dossier & Stat Block]]**: Full history of Vecna from mortal scribe on Oerth through Kas's betrayal to godhood, plus complete CR 26 stat block featuring *Afterthought*, *Flight of the Damned*, *Rotten Fate* (kills rise as zombies), *Vile Teleport* (80 HP heal), *Dread Counterspell*, and *Fell Rebuke*.
- **[[Artifacts of Vecna: Book of Vile Darkness, Sword of Kas, Eye & Hand of Vecna]]**: Complete artifact rules:
  - **Book of Vile Darkness**: 80-hour study, alignment shift to NE, Dark Speech, Dark Lore, and conditions for multiversal destruction.
  - **Sword of Kas**: Sentient CE +3 longsword, +1d10 initiative, AC transfer bonus, spells, bloodlust domination, and mutual destruction.
  - **Eye of Vecna**: Truesight, X-ray vision, 8 spell charges, 5% Vecna puppet soul devour risk.
  - **Hand of Vecna**: Strength 20, +2d8 cold damage on melee hits, 8 spell charges, evil suggestion compulsion.
  - **Combined Destruction**: Wielding both Eye and Hand and being slain by the Sword of Kas destroys both artifacts forever.

---

## 👹 Mordenkainen's Fiendish Folio Volume 1 (Extra Life)
- **[[Mordenkainen's Fiendish Folio Vol 1 - Monsters Malevolent & Benign]]**: Mordenkainen's letter from CY 576, Extra Life introduction, and summary of 17 classic AD&D monsters updated to 5e.
- **[[Ygorl, Lord of Entropy - Primordial Slaad Lord of Limbo]]**: CR 23 Slaad Lord of Limbo with Entropic Aura, Scythe of Ash, Entropic Touch exhaustion, Summon Slaadi, and Call the Void (12d6 necrotic with 50% life drain).
- **[[Fiendish Folio Bestiary: Assassin Bug, Blindheim, Crab Folk, Dire Corby, Eye of Fear and Flame & Forlarren]]**: Statblocks and lore for Assassin Bug (CR 3 with heart maggots), Blindheim (CR 2 radiant eyes), Crab Folk (CR 3 silver-hungry ogres), Dire Corby (CR 1/2 Dire Cacophony), Eye of Fear and Flame (CR 9 skeletal gemstone puppetmaster), and Forlarren (CR 3 bifurcated soul fey).
- **[[Fiendish Folio Bestiary: Fog Giant, Jermlaine, Khargra, Killmoulis, Mite, Needlefolk, Norker & Xill]]**: Statblocks and lore for Fog Giant (CR 11 bandit king), Jermlaine (CR 1/8 darkvision-invisible), Khargra (CR 1/8 metal-eating elemental), Killmoulis (CR 0 fey benefactor/curser), Mite (CR 1/4 Blood Boiling Hex), Needle Spawn (CR 1/2) & Needle Lord (CR 3), Norker (CR 1/2) & Norker War Leader (CR 3), and Xill (CR 3 4-armed ethereal kidnapper).

---

## 🏰 Waterdeep: Dungeon of the Mad Mage (Levels 1–23 & Skullport)
- **[[Waterdeep: Dungeon of the Mad Mage - Overview, History & Planar Rules]]**: History of Halaster and his Seven Apprentices, the Knot in the Weave (Aelinthaldaar), Yawning Portal well rules, Undermountain magic alterations, Jhesiyra Kestellharp, Halaster's 6 goals, and complete starting/future adventure hooks (Obaya Uday, Threestrings, Esvele Rosznar, Volo, Lords' Alliance, House Moonstar, and Durnan).
- **[[Undermountain Level 1: Dungeon Level (Level 5)]]**: The Undertakers fake vampire gang (Uktarl & Harria), Xanathar Guild bugbears with intellect devourers, defective Shield Guardian, Room of Secrets wand, tiefling withered heart, and Halleth the Revenant setup.
- **[[Undermountain Level 2: Arcane Chambers (Level 6)]]**: Rustbone Goblin Bazaar led by Yek the Tall (*circlet of human perfection*), Kalabash's pocket dimension, flameskull Trenzia's electrified copper lab, Shunn "Spider Eyes" Shurreth, Gargantuan duergar skull gelatinous cube, and Garrux's 140-barrel dwarven ale brewery.
- **[[Undermountain Level 3: Sargauth Level & Stromkuhldur (Level 7)]]**: War for Stromkuhldur: House Auvryndar spider hatchery (T'rissa Auvryndar), blind warlord Azrok & Lurkana (Legion of Azrok), Sea Hags of Sargauth, skeletal ferryman, and the lost Alabaster Throne of the Coronal in the fake plaster cube.
- **[[Undermountain Level 4: Twisted Caverns & Underdark Fungi (Level 8)]]**: Complete Underdark Fungi Guide (barrelstalk, bluecap, ripplebark, timmask, trillimac, tongue of madness, zurkhwood), Illuun the aboleth vs kuo-toa archpriest Noolgaloop's cobbled god "Klaabu", green slaad "The Alchemist", and Darribeth Meltimer's rescue.
- **[[Undermountain Level 5: Wyllowwood & The Green Dragon (Level 8)]]**: Underground forest under illusory sky, moon elf archdruid Wyllow, young green dragon Valdemar impaled by sentient sword *Tearulai* (NG), goblin werebat village, the rotating Calendar Stone, and Crissann's will-o'-wisp.
- **[[Undermountain Level 6: Lost Level & King Melair's Tomb (Level 9)]]**: Temple of Dumathoin and true tomb of King Melair (adamantine war pick, sentinel shield), duergar prospector Skella Ironeye with stolen *dagger of blindsight*, basalt doors requiring the king's hand, Heart of the Mountain *divination* attunement, animated jade staff, and Mornhyld's "xunderbrok" secret caches.
- **[[Undermountain Level 7: Maddgoth's Castle & Shrinking Magic (Level 9)]]**: 1/12th scale miniature castle on an 80-ft mithral spindle, forgetful stone giants family, Otto the violet faerie dragon, Maddgoth's 12-ft homunculus, *Maddgoth's Helm* of damage immunity, longship in a bottle, and the central control console.
- **[[Undermountain Level 8: Slitherswamp & The Slaad King (Level 10)]]**: Ssethian Scourges spirit nagas with *rod of rulership* vs Blacktongue bullywugs ruled by death slaad Kuketh, Karstis of Dweomercore, and yuan-ti temple of Sseth.
- **[[Undermountain Level 9: Dweomercore Academy of Magic (Level 10)]]**: Arcanaloth Headmaster in Halaster disguise, Wormriddle the night hag's student voodoo dolls, evil pupils (Spite Harrowdale archmage child + oni, Cephalossk mind flayer, Nylas Jowd Red Wizard of Thay, Skrianna Shadowdusk, Horned Sisters), pneumatic tube network, floating skull Nester, and Halaster's nothic secretary.
- **[[Undermountain Level 10: Muiral's Gauntlet & House Auvryndar (Level 11)]]**: Muiral the Misshapen giant scorpion wizard, Matron Vlonwelv Auvryndar's military HQ, Spider Throne pulpit broadcasting, Dark Seldarine temples, and Falkir's Fist corpses with the Eye of the Spider emerald.
- **[[Undermountain Levels 11–14: Warrens, Maze, Graveyard & Arcturiadoom]]**: Levels 11–14 coverage: Troglodyte Warrens & rune-scarred Behir; Maze Level Spiderwatch Keep & minotaur shaman Maku (*Horn of the Endless Maze*); Trobriand's Graveyard with Zox Clammersham's Simulacrux, bore worm, and Shockerstomper; Arcturiadoom with 100-ft Mecha-Halaster, Doomcrown & flumph, weapon of mass disintegration (6 mithral keys), and Arcturia's phylactery.
- **[[Undermountain Levels 20–23 & Skullport: Deepest Levels & The Mad Mage's Lair]]**: Levels 15–23 & Skullport coverage: Level 15 Obstacle Course & Netherskull with Halaster's Play-by-Play; Level 16 Crystal Labyrinth & Stardock asteroid crèche with Ashtyrranthor; Level 17 Seadeeps & Alterdeep simulation with Extremiton and 210-ft neothelid; Level 18 Vanrakdoom & Umbraxakar shadow dragon redemption ritual; Level 19 Caverns of Ooze & musical genies (Jarûk vs Ichthyglug) and crashed spelljammer *Scavenger*; Level 20 Runestone Caverns & Ezzat the lich; Level 21 Terminus Level & Fazrian the fallen planetar; Level 22 Shadowdusk Hold & Far Realm death knights; Level 23 Mad Wizard's Lair with Halaster's 3-story tower, flying saucer, and *Shield of the Uven Rune*; Skullport Port of Shadow on the River Sargauth.
- **[[Undermountain Appendix A: Dungeon Denizens & Halaster Blackcloak Stat Block]]**: Official stat blocks for Halaster Blackcloak (CR 23), Muiral the Misshapen (CR 13), Scaladar (CR 8), Ulitharid (CR 9), Neothelid (CR 13), Werebat (CR 2), Lava Child (CR 3), Shadow Assassin (CR 9), Githyanki Gish (CR 10), and Living Unseen Servant.
- **[[Undermountain Appendix B: Elder Runes Deck]]**: All 9 Elder Runes (Anarath, Angras, Halaster, Korombos, Laebos, Lammath, Nchasme, Savaros, Ullathar) with full symbols, Boon Effects, and DC 22 Bane Effects.
- **[[Undermountain Appendix C: Secrets Deck (18 Cards)]]**: Complete text for all 18 Undermountain secret cards for Yawning Portal exploration and tavern whispers.

---

*Generated for Obsidian Vault with full \`[[wikilink]]\` cross-referencing and YAML frontmatter.*
`
};

export const allVaultNotes: VaultNote[] = [
  masterIndexNote,
  ...rulesNotes,
  ...racesNotes,
  ...classesNotes,
  ...modernSubclassesNotes,
  ...backgroundsNotes,
  ...equipmentNotes,
  ...modernEquipmentNotes,
  ...customizationNotes,
  modernSpellsNotes[0],
  spellsOverviewNote,
  coreSpellsCantripsAnd1st,
  coreSpells2ndAnd3rd,
  coreSpells4thTo9th,
  ...creatureNotes,
  ...appendicesNotes,
  ...strahdLoreAndRules,
  ...strahdTarokkaNotes,
  ...strahdLocationsNotes,
  ...strahdLocationsNotesPart2,
  ...strahdDeathHouseNotes,
  ...strahdTreasuresNotes,
  ...strahdBestiaryNotes,
  ...strahdHandoutsNotes,
  ...scagLoreAndRealmsNotes,
  ...scagLocationsAndFactionsNotes,
  ...scagRacesNotes,
  ...scagClassesNotes,
  ...scagSpellsAndBackgroundsNotes,
  ...mtfBloodWarAndCultsNotes,
  ...mtfElvesAndDrowNotes,
  ...mtfDwarvesAndGithNotes,
  ...mtfHalflingsGnomesNotes,
  ...mtfBestiaryPart1Notes,
  ...mtfBestiaryPart2Notes,
  ...xgteIntroAndCoreRulesNotes,
  ...xgteSubclassesAndFeatsNotes,
  ...xgteDmToolsAndTrapsNotes,
  ...xgteDowntimeAndMagicItemsNotes,
  ...tcoeSubclassesAndRulesNotes,
  ...tcoeDmToolsAndPuzzlesNotes,
  ...rotBestiaryAndMagicNotes,
  ...rotCampaignNotes,
  ...vgtmMonsterLoreNotes,
  ...vgtmRacesNotes,
  ...vgtmBestiaryPart1Notes,
  ...vgtmBestiaryPart2Notes,
  ...rulesDictionaryNotes,
  ...dmTreasureAndLootNotes,
  ...encounterBuilderNotes,
  ...worldbuildingTemplateNotes,
  ...characterSheetVaultNotes,
  ...lmopCampaignNotes,
  ...gloryGiantsCharacterNotes,
  ...gloryGiantsLoreAndRulesNotes,
  ...gloryGiantsEnclavesNotes,
  ...gloryGiantsTreasuresNotes,
  ...gloryGiantsBestiaryPart1Notes,
  ...gloryGiantsBestiaryPart2Notes,
  ...gloryGiantsScionsNotes,
  ...astralMenagerieEncountersNotes,
  ...astralMenagerieBestiaryPart1Notes,
  ...astralMenagerieBestiaryPart2Notes,
  ...astralMenagerieBestiaryPart3Notes,
  ...fizbanCharacterNotes,
  ...fizbanMagicNotes,
  ...fizbanLoreAndRulesNotes,
  ...fizbanDraconomiconNotes,
  ...fizbanBestiaryPart1Notes,
  ...fizbanBestiaryPart2Notes,
  ...thievesGalleryNotes,
  ...monstrousCompendiumVol1Notes,
  ...monstrousCompendiumVol2Notes,
  ...monstrousCompendiumVol3Notes,
  ...motmRacesPart1Notes,
  ...motmRacesPart2Notes,
  ...motmRacesPart3Notes,
  ...motmBestiaryPart1Notes,
  ...motmBestiaryPart2Notes,
  ...motmBestiaryPart3Notes,
  ...motmBestiaryPart4Notes,
  ...motmMonsterListsNotes,
  ...motmDMScreenAndEncounterNotes,
  ...mortePlanarParadeRulesNotes,
  ...mortePlanarParadeBestiaryPart1Notes,
  ...mortePlanarParadeBestiaryPart2Notes,
  ...mortePlanarParadeFactionAgentsNotes,
  ...vecnaDossierNotes,
  ...fiendishFolioVol1Notes,
  ...dungeonOfMadMageOverviewNotes,
  ...dungeonOfMadMageLevelsPart1Notes,
  ...dungeonOfMadMageLevelsPart2Notes,
  ...dungeonOfMadMageLevelsPart3Notes,
  ...dungeonOfMadMageDenizensNotes,
  ...dungeonOfMadMageDecksNotes,
  obsidianPluginsGuideNote
];
