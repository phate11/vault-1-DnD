import { VaultNote } from '../types';

export const scagSpellsAndBackgroundsNotes: VaultNote[] = [
  {
    id: "scag-cantrips",
    title: "Sword Coast Arcane Cantrips",
    folder: "Sword Coast/Spells & Magic",
    category: "Spell",
    tags: ["sword-coast", "spells", "cantrips", "booming-blade", "green-flame-blade", "lightning-lure", "sword-burst", "wizard", "sorcerer", "warlock"],
    aliases: ["Sword Coast Cantrips", "Booming Blade", "Green-Flame Blade", "Lightning Lure", "Sword Burst"],
    content: `---
title: Sword Coast Arcane Cantrips
category: Spell
folder: Sword Coast/Spells & Magic
tags: [sword-coast, spells, cantrips, booming-blade, green-flame-blade, lightning-lure, sword-burst, wizard, sorcerer, warlock]
---

# Sword Coast Arcane Cantrips

Practitioners of the Art in the Forgotten Realms developed these specialized cantrips for melee combatants. War Wizards of Cormyr, [[Bladesinging|bladesingers]], and [[Warlock|warlocks of the Pact of the Blade]] favor these spells.

These cantrips appear on the **sorcerer**, **warlock**, and **wizard** spell lists.

---

## 💥 Booming Blade
*Evocation cantrip*
- **Casting Time**: 1 action
- **Range**: 5 feet
- **Components**: V, M (a weapon)
- **Duration**: 1 round

As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes **1d8 thunder damage**, and the spell ends.

**At Higher Levels**: At 5th level, the melee attack deals an extra **1d8 thunder damage** to the target, and the damage the target takes for moving increases to **2d8**. Both damage rolls increase by 1d8 at 11th level (2d8 / 3d8) and 17th level (3d8 / 4d8).

---

## 🔥 Green-Flame Blade
*Evocation cantrip*
- **Casting Time**: 1 action
- **Range**: 5 feet
- **Components**: V, M (a weapon)
- **Duration**: Instantaneous

As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your **spellcasting ability modifier**.

**At Higher Levels**: At 5th level, the melee attack deals an extra **1d8 fire damage** to the primary target, and the fire damage to the second creature increases to **1d8 + your spellcasting ability modifier**. Both damage rolls increase by 1d8 at 11th level (2d8 / 2d8 + mod) and 17th level (3d8 / 3d8 + mod).

---

## ⚡ Lightning Lure
*Evocation cantrip*
- **Casting Time**: 1 action
- **Range**: 15 feet
- **Components**: V
- **Duration**: Instantaneous

You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a **Strength saving throw** or be pulled up to **10 feet in a straight line toward you** and then take **1d8 lightning damage** if it is within 5 feet of you.

**At Higher Levels**: This spell's damage increases by 1d8 when you reach 5th level (**2d8**), 11th level (**3d8**), and 17th level (**4d8**).

---

## 🗡️ Sword Burst
*Conjuration cantrip*
- **Casting Time**: 1 action
- **Range**: 5 feet
- **Components**: V
- **Duration**: Instantaneous

You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a **Dexterity saving throw** or take **1d6 force damage**.

**At Higher Levels**: This spell's damage increases by 1d6 when you reach 5th level (**2d6**), 11th level (**3d6**), and 17th level (**4d6**).
`
  },
  {
    id: "scag-backgrounds",
    title: "Sword Coast Backgrounds",
    folder: "Sword Coast/Character Options",
    category: "Background",
    tags: ["sword-coast", "backgrounds", "city-watch", "clan-crafter", "cloistered-scholar", "courtier", "faction-agent", "far-traveler", "inheritor", "waterdhavian-noble"],
    aliases: ["Sword Coast Backgrounds", "City Watch", "Clan Crafter", "Cloistered Scholar", "Courtier", "Faction Agent", "Far Traveler", "Inheritor", "Knight of the Order", "Mercenary Veteran", "Urban Bounty Hunter", "Uthgardt Tribe Member", "Waterdhavian Noble"],
    content: `---
title: Sword Coast Backgrounds
category: Background
folder: Sword Coast/Character Options
tags: [sword-coast, backgrounds, city-watch, clan-crafter, cloistered-scholar, courtier, faction-agent, far-traveler, inheritor, waterdhavian-noble]
---

# Sword Coast Backgrounds

These 12 backgrounds ground player characters in the cultures, factions, and cities of Faerûn.

---

## 🛡️ City Watch
- **Skill Proficiencies**: Athletics, Insight
- **Languages**: Two of your choice
- **Equipment**: A uniform in the style of your unit, a horn with which to summon help, a set of manacles, and a pouch containing 10 gp.
- **Feature: Watcher's Eye**: You have an instinct for local laws and criminals. You can easily locate the local watch outpost and pick out the dens of criminal activity in a community.
- **Variant: Investigator**: Replaces Athletics with **Investigation** proficiency, representing detectives and crime solvers.

---

## 🔨 Clan Crafter
- **Skill Proficiencies**: History, Insight
- **Tool Proficiencies**: One type of artisan's tools
- **Languages**: Dwarvish (or one other of your choice)
- **Equipment**: A set of artisan's tools, a maker's mark chisel, traveler's clothes, and a pouch containing 5 gp and a 10 gp gem.
- **Feature: Respect of the Stout Folk**: Free room and board anywhere shield or gold dwarves dwell; dwarves vie to offer you the finest accommodations and assistance.

---

## 📚 Cloistered Scholar
- **Skill Proficiencies**: History, plus choice of Arcana, Nature, or Religion
- **Languages**: Two of your choice
- **Equipment**: Scholar's robes, a writing kit (quill, ink, folded parchment, penknife), a borrowed book on your current study, and a pouch containing 10 gp.
- **Feature: Library Access**: Free access to the archives of your home library (such as [[Candlekeep]] or the Vault of the Sages in Silverymoon) and professional courtesy at libraries across Faerûn.

---

## 👑 Courtier
- **Skill Proficiencies**: Insight, Persuasion
- **Languages**: Two of your choice
- **Equipment**: A set of fine clothes and a pouch containing 5 gp.
- **Feature: Court Functionary**: Access to the records and inner workings of any noble court or government you encounter; you know the movers and shakers and current intrigues.

---

## ⚜️ Faction Agent
- **Skill Proficiencies**: Insight, plus one Intelligence, Wisdom, or Charisma skill appropriate to your faction
- **Languages**: Two of your choice
- **Equipment**: Badge/emblem of your faction, copy of seminal faction text (or code-book), common clothes, and a pouch with 15 gp.
- **Factions**:
  - *The Harpers*: Investigation skill; thwarting evil through lore and stealth.
  - *Order of the Gauntlet*: Religion skill; righteous holy warriors crushing evil.
  - *Emerald Enclave*: Nature skill; maintaining wild balance.
  - *Lords' Alliance*: History skill; mutual defense and civilization.
  - *The Zhentarim*: Deception skill; pragmatic mercenaries and merchants.
- **Feature: Safe Haven**: Access to secret networks, safe houses, passwords, and supplies across the Sword Coast.

---

## 🌍 Far Traveler
- **Skill Proficiencies**: Insight, Perception
- **Tool Proficiencies**: Any one musical instrument or gaming set
- **Languages**: One of your choice
- **Equipment**: Traveler's clothes, chosen instrument/gaming set, poorly wrought maps of Faerûn from your homeland, piece of native jewelry (10 gp), and 5 gp.
- **Feature: All Eyes on You**: Your accent and manners mark you as foreign; use the curiosity of nobles, scholars, and merchant princes to gain access to places others cannot.
- **Homelands**: Evermeet, Halruaa, Kara-Tur, Mulhorand, Sossal, Zakhara, or the Underdark.

---

## 🗝️ Inheritor
- **Skill Proficiencies**: Survival, plus one from Arcana, History, or Religion
- **Tool Proficiencies**: Gaming set or musical instrument
- **Languages**: One of your choice
- **Equipment**: Your inheritance, traveler's clothes, proficient tools, and 15 gp.
- **Feature: Inheritance**: You possess an object of great importance (roll 1d8):
  1. Document (map, letter, journal)
  2. Trinket
  3. Article of clothing
  4. Piece of jewelry
  5. Arcane book or formulary
  6. Written story, song, poem, or secret
  7. Tattoo or body marking

---

## 🎖️ Knight of the Order
- **Skill Proficiencies**: Persuasion, plus one from Arcana, History, Nature, or Religion
- **Tool Proficiencies**: Gaming set or musical instrument
- **Languages**: One of your choice
- **Equipment**: Traveler's clothes, signet/banner/seal of your order, and 10 gp.
- **Feature: Knightly Regard**: Receive shelter, food, and healing from members of your knightly order and civic or religious institutions sympathetic to your cause.
- **Knightly Orders**: Knights of the Unicorn (romantic chivalry), Knights of Myth Drannor (alliances against evil), Knights of the Silver Chalice (Siamorphe nobility).

---

## ⚔️ Mercenary Veteran
- **Skill Proficiencies**: Athletics, Persuasion
- **Tool Proficiencies**: Gaming set, vehicles (land)
- **Equipment**: Company uniform, rank insignia, gaming set, and a pouch containing 10 gp.
- **Feature: Mercenary Life**: Identify mercenary companies by emblem; easily locate mercenary taverns and secure employment during downtime.
- **Companies of the North**: The Chill (Lurkwood goblinoids), Silent Rain (Evereska elf archers), The Bloodaxes (outcast dwarven mercenaries).

---

## 🎯 Urban Bounty Hunter
- **Skill Proficiencies**: Choose two from Deception, Insight, Persuasion, Stealth
- **Tool Proficiencies**: Choose two from gaming set, musical instrument, thieves' tools
- **Equipment**: Clothes appropriate to duties, and 20 gp.
- **Feature: Ear to the Ground**: Maintain contacts in every major city (underworld, street folk, or high society) providing rumors and quarry whereabouts.

---

## 🌲 Uthgardt Tribe Member
- **Skill Proficiencies**: Athletics, Survival
- **Tool Proficiencies**: Musical instrument or artisan's tools
- **Languages**: One of your choice
- **Equipment**: Hunting trap, totemic token or tattoos, traveler's clothes, and 10 gp.
- **Feature: Uthgardt Heritage**: Forage twice as much food and water in wilderness; call upon hospitality of allied tribes, druid circles, and Harpers.

---

## 🍷 Waterdhavian Noble
- **Skill Proficiencies**: History, Persuasion
- **Tool Proficiencies**: Gaming set or musical instrument
- **Languages**: One of your choice
- **Equipment**: Fine clothes, signet ring or brooch, scroll of pedigree, skin of fine zzar or wine, and 20 gp.
- **Feature: Kept in Style**: Your noble house covers your everyday living expenses in Waterdeep and across the North (comfortably living up to 2 gp/day on credit).
`
  },
  {
    id: "scag-other-worlds",
    title: "Class Options in Other Worlds (Dragonlance, Eberron, Greyhawk & Custom)",
    folder: "Sword Coast/Character Options",
    category: "Appendix",
    tags: ["sword-coast", "appendix", "dragonlance", "eberron", "greyhawk", "multiverse", "adaptation"],
    aliases: ["Class Options in Other Worlds", "Dragonlance Adaptations", "Eberron Adaptations", "Greyhawk Adaptations"],
    content: `---
title: Class Options in Other Worlds (Dragonlance, Eberron, Greyhawk & Custom)
category: Appendix
folder: Sword Coast/Character Options
tags: [sword-coast, appendix, dragonlance, eberron, greyhawk, multiverse, adaptation]
---

# Class Options in Other Worlds

How to adapt the Sword Coast character options to other iconic D&D settings.

---

## 🐉 Dragonlance (Krynn)
- **Barbarian**: Kagonesti elves and human nomads; griffon replaces tiger totem; Battlerager as gnomish tinker armor.
- **Cleric**: Arcana Domain for clerics of neutral gods Gilean (knowledge) and Zivilyn (wisdom).
- **Fighter**: Purple Dragon Knight matches the **Knights of Solamnia** (Knight of the Rose).
- **Monk**: Way of the Long Death for evil monks of Sargonnas; Way of the Sun Soul for followers of Sirrion.
- **Paladin**: Oath of the Crown for the Knights of the Sword or Knights of the Skull.
- **Rogue**: Mastermind and Swashbuckler for mariners and pirate captains of the Blood Sea Isles.
- **Warlock**: Pacts with gods or the Undying patron following ancient wizards.
- **Wizard**: Bladesinging for Qualinesti and Silvanesti elven warrior-mages (like Gilthanas).

---

## ⚙️ Eberron
- **Barbarian**: Path of the Battlerager for **warforged shock troops** modified with chassis spikes; Argonnessen dragon totems.
- **Cleric**: Arcana Domain for Aureon (Sovereign Host), The Shadow (Dark Six), or Blood of Vol cultists.
- **Fighter**: Purple Dragon Knight for veteran officers of Karrnath's military.
- **Monk**: Long Death for the Mockery; Sun Soul for monks dedicated to the Silver Flame.
- **Paladin**: Oath of the Crown for Karrnath paladins and the Order of the Emerald Claw.
- **Rogue**: Mastermind and Swashbuckler throughout Sharn and the dragonmarked houses.
- **Sorcerer**: Storm Sorcery for **House Lyrandar** airship navigators.
- **Warlock**: The Undying patron for pacts with the deathless ancestors of **Aerenal**.
- **Wizard**: Bladesingers as arcane agents of the Arcane Congress in Aundair.

---

## 🦅 Greyhawk (Oerth)
- **Barbarian**: Wolf Nomads and Ice Barbarians; Battlerager as Slave Lords arena pit fighters.
- **Cleric**: Arcana Domain for clerics of Boccob.
- **Fighter**: Purple Dragon Knight for the **Knights of the Watch** guarding against Baklunish incursions.
- **Monk**: Way of the Long Death for the assassin monks of the **Scarlet Brotherhood**; Sun Soul for Pholtus or Pelor.
- **Paladin**: Oath of the Crown for the Knights of the Hart.
- **Rogue**: Mastermind for the City of Greyhawk Thieves' Guild (in the mold of Nerof Gasgol); Swashbucklers among the Rhennee bargefolk.
- **Warlock**: Pacts with Iuz, Vecna, or Tharizdun.
- **Wizard**: Bladesingers for the elite elf warrior-mages of Celene.

---

## 🌌 Homemade Worlds
- **Battlerager**: Berserkers, pit fighters, gladiators, or militant religious orders.
- **Arcana Domain**: Divine inquisitors or mage-hunter orders policing arcane spellcasters.
- **Purple Dragon Knight**: Mercenary captains, grand marshals, or sovereign bannerets.
- **Oath of the Crown**: Secular or neutral knightly orders swearing fealty to a constitution, monarch, or empire.
`
  }
];
