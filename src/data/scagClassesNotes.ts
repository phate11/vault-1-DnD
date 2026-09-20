import { VaultNote } from '../types';

export const scagClassesNotes: VaultNote[] = [
  {
    id: "scag-subclasses",
    title: "Sword Coast Subclasses & Class Options",
    folder: "Sword Coast/Classes & Subclasses",
    category: "Class",
    tags: ["sword-coast", "subclasses", "battlerager", "arcana-domain", "purple-dragon-knight", "long-death", "sun-soul", "oath-of-the-crown", "mastermind", "swashbuckler", "storm-sorcery", "the-undying", "bladesinging"],
    aliases: ["Sword Coast Subclasses", "Battlerager", "Arcana Domain", "Purple Dragon Knight", "Way of the Long Death", "Way of the Sun Soul", "Oath of the Crown", "Mastermind", "Swashbuckler", "Storm Sorcery", "The Undying Patron", "Bladesinging"],
    content: `---
title: Sword Coast Subclasses & Class Options
category: Class
folder: Sword Coast/Classes & Subclasses
tags: [sword-coast, subclasses, battlerager, arcana-domain, purple-dragon-knight, long-death, sun-soul, oath-of-the-crown, mastermind, swashbuckler, storm-sorcery, the-undying, bladesinging]
---

# Sword Coast Subclasses & Class Options

The Sword Coast Adventurer's Guide provides distinctive subclass archetypes, martial paths, and divine traditions rooted in the history of the Realms.

---

## 🪓 Barbarian: Path of the Battlerager

Known as **Kuldjargh** (literally *"axe idiot"*) in Dwarvish, battleragers are dwarf followers of the gods of war who specialize in wearing bulky, spiked armor and throwing themselves into melee.

- **Restriction: Dwarves Only**: Only dwarves can follow this path in the Realms (DMs may lift this for other campaign worlds).
- **Spiked Armor (Gear)**: Medium armor (Cost: 75 gp; AC 14 + Dex mod [max 2]; Stealth: Disadvantage; Weight: 45 lb).
- **Battlerager Armor (3rd Level)**: You can use spiked armor as a weapon. While wearing spiked armor and raging:
  - You can use a **bonus action** to make one melee weapon attack with armor spikes (deals 1d4 piercing damage, using Strength for attack and damage).
  - When you use the Attack action to **grapple** a creature, the target takes 3 piercing damage if your grapple check succeeds.
- **Reckless Abandon (6th Level)**: When you use Reckless Attack while raging, you gain temporary hit points equal to your Constitution modifier (min 1). They vanish when your rage ends.
- **Battlerager Charge (10th Level)**: You can take the Dash action as a bonus action while raging.
- **Spiked Retribution (14th Level)**: When a creature within 5 feet hits you with a melee attack while you are raging and wearing spiked armor (and not incapacitated), the attacker takes 3 piercing damage.

### Path of the Totem Warrior Options (Elk & Tiger)
- **3rd Level (Totem Spirit)**:
  - *Elk*: Walking speed increases by 15 feet while raging and not wearing heavy armor.
  - *Tiger*: Add 10 feet to long jump and 3 feet to high jump distance while raging.
- **6th Level (Aspect of the Beast)**:
  - *Elk*: Travel pace is doubled for you and up to 10 companions within 60 feet (mounted or foot).
  - *Tiger*: Gain proficiency in two skills from: Athletics, Acrobatics, Stealth, Survival.
- **14th Level (Totemic Attunement)**:
  - *Elk*: Bonus action while raging to move through the space of a Large or smaller creature. Target makes Str save (DC 8 + Str + prof) or is knocked prone and takes 1d12 + Str bludgeoning damage.
  - *Tiger*: If you move at least 20 feet straight toward a Large or smaller target before a melee weapon attack while raging, use a bonus action to make an additional melee weapon attack against it.

---

## 🎵 Bard: Colleges, Organizations & Instruments

- **College of Fochlucan**: Restored academy in Silverymoon closely allied with [[The Harpers]].
- **College of New Olamn**: Prestigious villa conservatory perched on Mount Waterdeep's cliffs, reached via the Mount Melody Walk tunnel.
- **College of the Herald**: Neutral lore-house located at Herald's Holdfast northwest of Silverymoon.
- **Faerûnian Musical Instruments**:
  - *Birdpipes*: Panpipes sacred to Lliira, popular among wood elves.
  - *Glaur*: Curved horn like a cornucopia (valved sounds like trumpet; valve-less *gloon* sounds mournful).
  - *Longhorn*: Refined silver flute from elven enclaves.
  - *Shawm*: Double-reed oboe/bassoon favored by gnomes.
  - *Songhorn*: Wooden recorder.
  - *Tantan*: Tambourine popular south of the Dalelands.
  - *Thelarr*: Whistlecane cut from river reeds.
  - *Tocken*: Hanging set of carved oval bells.
  - *Wargong*: Resonant gong forged from an enemy's metal shield.
  - *Yarting*: Southern lute/guitar analog from Amn and Calimshan.
  - *Zulkoon*: Sinister pipe organ used by the Red Wizards of Thay.

---

## ⚖️ Cleric: Arcana Domain

The gods of magic (Azuth, Mystra, Corellon Larethian) master the secrets of the Weave.

### Arcana Domain Spells
| Cleric Level | Spells |
| :---: | :--- |
| **1st** | *detect magic*, *magic missile* |
| **3rd** | *magic weapon*, *Nystul's magic aura* |
| **5th** | *dispel magic*, *magic circle* |
| **7th** | *arcane eye*, *Leomund's secret chest* |
| **9th** | *planar binding*, *teleportation circle* |

- **Arcane Initiate (1st Level)**: Gain proficiency in Arcana skill, and gain two cantrips of your choice from the wizard spell list (count as cleric cantrips).
- **Channel Divinity: Arcane Abjuration (2nd Level)**: As an action, present your holy symbol; one celestial, elemental, fey, or fiend within 30 feet must succeed on a Wisdom save or be turned for 1 minute (or until taking damage).
- **Arcane Banishment (5th Level)**: When a turned otherworldly creature fails its save, it is banished for 1 minute (no concentration) if its CR is at or below threshold (5th lvl: CR 1/2; 8th: CR 1; 11th: CR 2; 14th: CR 3; 17th: CR 4).
- **Spell Breaker (6th Level)**: When you restore HP to an ally with a spell of 1st level or higher, you can end one spell of your choice on that creature (level must be equal to or lower than the slot used).
- **Potent Spellcasting (8th Level)**: Add your Wisdom modifier to the damage you deal with any cleric cantrip.
- **Arcane Mastery (17th Level)**: Choose four spells from the wizard spell list: one each of 6th, 7th, 8th, and 9th level. Add them to your domain spells (always prepared, count as cleric spells).

---

## 🛡️ Fighter: Purple Dragon Knight (Banneret)

Elite chivalric warriors from Cormyr pledged to the crown and leading through deeds of valor.
- **Rallying Cry (3rd Level)**: When you use Second Wind, choose up to three allies within 60 feet. Each regains HP equal to your fighter level (provided they can see or hear you).
- **Royal Envoy (7th Level)**: Gain proficiency in Persuasion (or Animal Handling, Insight, Intimidation, or Performance). Your proficiency bonus is doubled for any check using Persuasion.
- **Inspiring Surge (10th Level)**: When you use Action Surge, choose one ally within 60 feet. That creature can use its reaction to make one melee or ranged weapon attack. At 17th level, choose two allies.
- **Bulwark (15th Level)**: When you use Indomitable to reroll an Intelligence, Wisdom, or Charisma save, you can choose an ally within 60 feet who failed the same save to reroll their saving throw.

---

## 🥋 Monk: Monastic Traditions

### Way of the Long Death
Macabre scholars who study the mechanics of dying to master fatal martial arts.
- **Touch of Death (3rd Level)**: When you reduce a creature within 5 feet of you to 0 HP, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum 1).
- **Hour of Reaping (6th Level)**: As an action, each creature within 30 feet that can see you must succeed on a Wisdom save or be frightened of you until the end of your next turn.
- **Mastery of Death (11th Level)**: When reduced to 0 HP, you can expend 1 ki point (no action required) to drop to 1 HP instead.
- **Touch of the Long Death (17th Level)**: As an action, touch a creature within 5 feet and expend 1 to 10 ki points. Target makes a Con save, taking 2d10 necrotic damage per ki point spent on a failed save, or half on a success.

### Way of the Sun Soul
Monks channeling internal spiritual light into radiant energy.
- **Radiant Sun Bolt (3rd Level)**: Ranged spell attack (range 30 ft; uses Dex modifier; deals radiant damage equal to your Martial Arts die). When used with the Attack action, spend 1 ki point to make two additional bolt attacks as a bonus action.
- **Searing Arc Strike (6th Level)**: After taking the Attack action, spend 2 ki points to cast *burning hands* as a bonus action. Spend additional ki points (up to half monk level) to increase spell level by 1 per point.
- **Searing Sunburst (11th Level)**: As an action, create an orb of light that erupts in a 20-foot radius sphere up to 150 feet away. Creatures make a Con save or take 2d6 radiant damage. Spend up to 3 ki points to increase damage by 2d6 per point.
- **Sun Shield (17th Level)**: Shed bright light in a 30-foot radius (bonus action to toggle). When hit by a melee attack while shining, use your reaction to deal radiant damage equal to 5 + your Wisdom modifier.

---

## ⚔️ Paladin: Oath of the Crown

Sworn to the defense of civilization, law, and sovereignty.
- **Tenets**: *Law* (the mortar of society), *Loyalty* (word is your bond), *Courage* (stand firm in the face of chaos), *Responsibility* (answer for your actions).
- **Oath Spells**:
  - *3rd Level*: *command*, *compelled duel*
  - *5th Level*: *warding bond*, *zone of truth*
  - *9th Level*: *aura of vitality*, *spirit guardians*
  - *13th Level*: *banishment*, *guardian of faith*
  - *17th Level*: *circle of power*, *geas*
- **Channel Divinity (3rd Level)**:
  - *Champion Challenge*: Creatures within 30 feet make a Wis save; on failure, cannot move more than 30 feet away from you.
  - *Turn the Tide*: Bonus action; allies within 30 feet with half or fewer HP regain 1d6 + Charisma modifier HP.
- **Divine Allegiance (7th Level)**: When a creature within 5 feet takes damage, use your reaction to magically substitute your own health—you take the damage instead, and it cannot be reduced or prevented.
- **Unyielding Spirit (15th Level)**: Advantage on saving throws to avoid becoming paralyzed or stunned.
- **Exalted Champion (20th Level)**: For 1 hour (action): resistance to nonmagical bludgeoning/piercing/slashing; allies within 30 feet have advantage on death saving throws and Wisdom saves.

---

## 🗡️ Rogue: Roguish Archetypes

### Mastermind
Masters of intrigue, deception, and court manipulation.
- **Master of Intrigue (3rd Level)**: Proficiency with disguise kit, forgery kit, one gaming set, and two languages. Uncanny voice and accent mimicry after listening to a speaker for 1 minute.
- **Master of Tactics (3rd Level)**: You can use the Help action as a bonus action, and can aid an ally attacking a target up to 30 feet away.
- **Insightful Manipulator (9th Level)**: Observe a creature for 1 minute outside combat to learn if its Intelligence, Wisdom, Charisma, or class levels are equal, superior, or inferior to yours.
- **Misdirection (13th Level)**: When targeted by an attack while a creature within 5 feet grants you cover, use your reaction to redirect the attack to that creature.
- **Soul of Deceit (17th Level)**: Thoughts cannot be read by telepathy; contested Deception check creates false thoughts; immune to magical truth detection.

### Swashbuckler
Duelists relying on speed, charm, and mobile blade mastery.
- **Fancy Footwork (3rd Level)**: If you make a melee attack against a creature during your turn, that creature cannot make opportunity attacks against you for the rest of your turn.
- **Rakish Audacity (3rd Level)**: Add your Charisma modifier to initiative rolls. In addition, you do not need advantage to Sneak Attack if your target is within 5 feet and no other creatures are within 5 feet of you.
- **Panache (9th Level)**: As an action, make Charisma (Persuasion) contested by Wisdom (Insight). On success:
  - *Hostile Target*: Disadvantage on attack rolls against anyone other than you, and no opportunity attacks against others for 1 minute (until attacked by ally or >60 ft away).
  - *Non-Hostile Target*: Charmed by you for 1 minute as a friendly acquaintance.
- **Elegant Maneuver (13th Level)**: Bonus action to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check made during the turn.
- **Master Duelist (17th Level)**: If you miss with an attack roll, reroll it with advantage (1/short or long rest).

---

## ⚡ Sorcerer: Storm Sorcery

Innate elemental air and gale magic born of the Great Rain or djinn ancestry.
- **Wind Speaker (1st Level)**: Speak, read, and write Primordial (including Aquan, Auran, Ignan, Terran).
- **Tempestuous Magic (1st Level)**: Bonus action immediately before or after casting a spell of 1st level or higher to fly up to 10 feet without provoking opportunity attacks.
- **Heart of the Storm (6th Level)**: Resistance to lightning and thunder damage. When casting a 1st+ level spell dealing lightning/thunder, creatures of your choice within 10 feet take damage equal to half your sorcerer level.
- **Storm Guide (6th Level)**: Action to halt rain in a 20-foot radius sphere; bonus action to direct wind direction in a 100-foot sphere.
- **Storm's Fury (14th Level)**: When hit by a melee attack, reaction deals lightning damage equal to your sorcerer level and pushes attacker 20 feet on a failed Strength save.
- **Wind Soul (18th Level)**: Immunity to lightning and thunder damage. Gain magical flying speed of 60 feet. Action to reduce flying speed to 30 ft and grant up to 3 + Cha modifier companions 30 ft flying speed for 1 hour (1/rest).

---

## 💀 Warlock: The Undying Patron

A pact forged with an ancient master of immortality (such as Larloch the Shadow King, Gilgeam of Unther, Vecna, or Vlaakith).
- **Expanded Spell List**: *1st*: false life, ray of sickness; *2nd*: blindness/deafness, silence; *3rd*: feign death, speak with dead; *4th*: aura of life, death ward; *5th*: contagion, legend lore.
- **Among the Dead (1st Level)**: Learn *spare the dying* cantrip. Advantage on saving throws against disease. When undead target you directly, they must pass a Wisdom save or be forced to target another creature or lose the attack.
- **Defy Death (6th Level)**: Regain 1d8 + Constitution modifier HP when you succeed on a death saving throw or stabilize a creature with *spare the dying* (1/long rest).
- **Undying Nature (10th Level)**: Hold breath indefinitely; require no food, water, or sleep. Age at 1/10th normal speed, immune to magical aging.
- **Indestructible Life (14th Level)**: Bonus action on your turn to regain 1d8 + warlock level HP and reattach any severed body parts (1/short or long rest).

---

## 🪄 Wizard: Arcane Tradition - Bladesinging

Elven warrior-scholars who blend fluid swordplay with high arcane mastery.
- **Restriction: Elves Only**: Elves and half-elves only.
- **Styles**: *Cat* (Lion/longsword, Leopard/shortsword, Red Tiger/scimitar), *Bird* (Eagle/handaxes, Raven/pick), and *Snake* (Viper/whip).
- **Training in War and Song (2nd Level)**: Gain proficiency in light armor, one type of one-handed melee weapon, and the Performance skill.
- **Bladesong (2nd Level)**: Bonus action to invoke Bladesong for 1 minute (while not wearing medium/heavy armor or shield, nor using two hands to attack). While active:
  - Add your Intelligence modifier to AC (minimum +1).
  - Walking speed increases by 10 feet.
  - Advantage on Dexterity (Acrobatics) checks.
  - Bonus to Constitution saving throws to maintain concentration equal to your Intelligence modifier (minimum +1).
  - Usable twice per short or long rest.
- **Extra Attack (6th Level)**: Attack twice instead of once when taking the Attack action.
- **Song of Defense (10th Level)**: Reaction when taking damage during Bladesong to expend a spell slot, reducing damage by **5 × spell slot level**.
- **Song of Victory (14th Level)**: Add your Intelligence modifier (minimum +1) to the damage of your melee weapon attacks while Bladesong is active.
`
  }
];
