import { VaultNote } from '../types';

export const customizationNotes: VaultNote[] = [
  {
    id: "customization-multiclassing",
    title: "Multiclassing Rules",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "customization", "multiclassing", "spell-slots"],
    aliases: ["Multiclassing"],
    content: `---
title: Multiclassing Rules
category: Rule
folder: Rules & Mechanics
tags: [rules, customization, multiclassing, spell-slots]
---

# Multiclassing Rules

Multiclassing allows you to gain levels in multiple classes, mixing abilities to realize unique concepts.

### Multiclassing Prerequisites
| Class | Ability Score Minimum |
| :--- | :--- |
| **Barbarian** | Strength 13 |
| **Bard** | Charisma 13 |
| **Cleric** | Wisdom 13 |
| **Druid** | Wisdom 13 |
| **Fighter** | Strength 13 or Dexterity 13 |
| **Monk** | Dexterity 13 and Wisdom 13 |
| **Paladin** | Strength 13 and Charisma 13 |
| **Ranger** | Dexterity 13 and Wisdom 13 |
| **Rogue** | Dexterity 13 |
| **Sorcerer** | Charisma 13 |
| **Warlock** | Charisma 13 |
| **Wizard** | Intelligence 13 |

---

### Multiclassing Proficiencies
| Class | Proficiencies Gained |
| :--- | :--- |
| **Barbarian** | Shields, simple weapons, martial weapons |
| **Bard** | Light armor, one skill of your choice, one musical instrument of your choice |
| **Cleric** | Light armor, medium armor, shields |
| **Druid** | Light armor, medium armor, shields (druids will not wear armor or use shields made of metal) |
| **Fighter** | Light armor, medium armor, shields, simple weapons, martial weapons |
| **Monk** | Simple weapons, shortswords |
| **Paladin** | Light armor, medium armor, shields, simple weapons, martial weapons |
| **Ranger** | Light armor, medium armor, shields, simple weapons, martial weapons, one skill from the class's skill list |
| **Rogue** | Light armor, one skill from the class's skill list, thieves' tools |
| **Sorcerer** | — |
| **Warlock** | Light armor, simple weapons |
| **Wizard** | — |

---

### Class Features & Spellcasting
- **Channel Divinity**: Gaining from multiple classes provides options, but not extra uses per rest.
- **Extra Attack**: Features do not stack. Cannot attack more than twice unless a feature explicitly says so (e.g. Fighter 11+). Thirsting Blade also does not stack with Extra Attack.
- **Unarmored Defense**: If you have Unarmored Defense from one class, you cannot gain it again from another.
- **Pact Magic**: Spell slots from Pact Magic can be used to cast spells known/prepared from Spellcasting classes, and vice versa.

### Multiclass Spellcaster: Spell Slots per Spell Level
Determine available spell slots by adding together all levels in bard, cleric, druid, sorcerer, wizard; half levels in paladin and ranger (rounded down); and a third of fighter/rogue levels (if Eldritch Knight or Arcane Trickster).

| Level | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1st | 2 | — | — | — | — | — | — | — | — |
| 2nd | 3 | — | — | — | — | — | — | — | — |
| 3rd | 4 | 2 | — | — | — | — | — | — | — |
| 4th | 4 | 3 | — | — | — | — | — | — | — |
| 5th | 4 | 3 | 2 | — | — | — | — | — | — |
| 6th | 4 | 3 | 3 | — | — | — | — | — | — |
| 7th | 4 | 3 | 3 | 1 | — | — | — | — | — |
| 8th | 4 | 3 | 3 | 2 | — | — | — | — | — |
| 9th | 4 | 3 | 3 | 3 | 1 | — | — | — | — |
| 10th | 4 | 3 | 3 | 3 | 2 | — | — | — | — |
| 11th | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 12th | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 13th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 14th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 15th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 16th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 17th | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |
| 18th | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
| 19th | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |
| 20th | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 1 |
`
  },
  {
    id: "customization-feats",
    title: "Feats (Core & Modern)",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "feats", "character-options", "modern-feats"],
    aliases: ["Feats", "Modern Feats"],
    content: `---
title: Feats (Core & Modern)
category: Rule
folder: Rules & Mechanics
tags: [rules, feats, character-options, modern-feats]
---

# Feats (Core & Modern)

A feat represents a talent or an area of expertise that gives a character special capabilities.

## Modern Feats (Modern Handbook)

### Car Mechanic
You have spent years looking and repairing cars, gaining the following benefits:
- You gain proficiency with **mechanic tools**.
- Whenever you repair a damaged vehicle using the mechanic tools, you repair an extra number of hit points of damage equal to **half your proficiency bonus per day**.

### Engineer
Thanks to extensive work and understanding of electronic devices, you gain the following benefits:
- Increase your Intelligence score by 1, to a maximum of 20.
- You gain proficiency with the **engineering kit**.
- You have advantage on Intelligence checks made to diagnose and repair electronic or mechanical devices.

### Expert Driver
You have been driving more time than most of the common people, gaining the following benefits:
- You gain proficiency with **vehicles (land)**.
- Whenever you make a Dexterity check to accelerate or doing a maneuver such as dodging an obstacle or resisting a ram, you can add **twice your proficiency bonus**.

### Gunslinger
*Prerequisite: Proficiency with at least one firearm*  
Thanks to extensive practice with firearms, you gain the following benefits:
- Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls with firearms.
- Once per turn when you attack with a firearm you can reload it as a **free action**.

### Sapper
You have practiced extensively with a variety of explosives, gaining the following benefits:
- Increase your Dexterity score by 1, to a maximum of 20.
- You can add **half your proficiency bonus to the planted explosives DC**.

---

## Core 5e Feats (Player's Handbook)

### Alert
Always on the lookout for danger: +5 bonus to initiative; can't be surprised while conscious; other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.

### Athlete
Increase Strength or Dexterity by 1 (max 20). Standing from prone uses only 5 feet of movement. Climbing doesn't halve speed. Running long/high jump after 5 feet instead of 10 feet.

### Actor
Increase Charisma by 1 (max 20). Advantage on Deception and Performance checks to pass as different person. Mimic speech of person or sounds of creatures heard for at least 1 minute (contested by Wisdom [Insight]).

### Charger
When taking Dash action, bonus action makes one melee weapon attack or shoves a creature. If moved 10+ feet straight before bonus action: +5 damage or push target up to 10 feet away.

### Crossbow Expert
Ignore loading quality of crossbows with which proficient. Being within 5 feet of hostile creature doesn't impose disadvantage on ranged attack rolls. When attacking with one-handed weapon, bonus action attacks with loaded hand crossbow.

### Defensive Duelist
*Prerequisite: Dexterity 13 or higher*  
When wielding a finesse weapon with which proficient and hit by melee attack, reaction adds proficiency bonus to AC for that attack.

### Dual Wielder
+1 bonus to AC while wielding separate melee weapon in each hand. Two-weapon fighting can use one-handed melee weapons that aren't light. Draw or stow two one-handed weapons simultaneously.

### Dungeon Delver
Advantage on Perception and Investigation checks to detect secret doors. Advantage on saving throws to avoid/resist traps; resistance to trap damage. Search for traps at normal pace.

### Durable
Increase Constitution by 1 (max 20). When rolling Hit Die to regain hit points, minimum regained equals twice Constitution modifier (minimum of 2).

### Elemental Adept
*Prerequisite: Ability to cast at least one spell*  
Choose damage type: acid, cold, fire, lightning, or thunder. Spells ignore resistance to chosen type; treat any 1 on damage die as a 2. Can take multiple times for different types.

### Grappler
*Prerequisite: Strength 13 or higher*  
Advantage on attack rolls against creature you are grappling. Action can pin grappled creature (both restrained). Creatures one size larger don't auto-succeed to escape grapple.

### Great Weapon Master
On your turn, scoring critical hit with melee weapon or reducing creature to 0 HP allows one melee weapon attack as bonus action. Before making melee attack with heavy weapon, take -5 penalty to attack roll to add +10 to damage.

### Healer
Healer's kit stabilizing dying creature restores 1 hit point. Action spends one use of healer's kit to restore 1d6 + 4 HP + creature's max Hit Dice (once per creature per short/long rest).

### Heavily Armored
*Prerequisite: Proficiency with medium armor*  
Increase Strength by 1 (max 20). Gain proficiency with heavy armor.

### Heavy Armor Master
*Prerequisite: Proficiency with heavy armor*  
Increase Strength by 1 (max 20). While wearing heavy armor, bludgeoning, piercing, and slashing damage from nonmagical weapons is reduced by 3.

### Inspiring Leader
*Prerequisite: Charisma 13 or higher*  
Spend 10 minutes inspiring up to six friendly creatures within 30 ft. Each gains temporary hit points equal to your \`level + Charisma modifier\` (once per creature per short/long rest).

### Keen Mind
Increase Intelligence by 1 (max 20). Always know which way is north. Always know hours left before sunrise/sunset. Accurately recall anything seen or heard within past month.

### Lightly Armored
Increase Strength or Dexterity by 1 (max 20). Gain proficiency with light armor.

### Linguist
Increase Intelligence by 1 (max 20). Learn three languages. Create written ciphers (DC = \`Int score + proficiency bonus\` to decipher).

### Lucky
Gain 3 luck points. Spend 1 point to roll extra d20 on attack, check, or save and choose which die to use. Spend 1 point when attacked to choose attacker's or your roll. Regain on long rest.

### Mage Slayer
Reaction melee attack when creature within 5 ft casts a spell. Damaging creature concentrating on spell imposes disadvantage on its concentration save. Advantage on saves vs spells cast within 5 ft.

### Magic Initiate
Choose class (bard, cleric, druid, sorcerer, warlock, wizard). Learn two cantrips and one 1st-level spell from that class (cast 1st-level spell once per long rest).

### Martial Adept
Learn two maneuvers from Battle Master fighter list. Gain one superiority die (d6, or +1 die if already possess). Save DC = \`8 + Prof + Str/Dex mod\`.

### Medium Armor Master
*Prerequisite: Proficiency with medium armor*  
Medium armor does not impose disadvantage on Dexterity (Stealth) checks. Add up to +3 Dex modifier to AC instead of +2 if Dexterity is 16+.

### Mobile
Speed increases by 10 feet. Dash ignores difficult terrain. Making a melee attack prevents target from making opportunity attacks against you for the rest of the turn (hit or miss).

### Moderately Armored
*Prerequisite: Proficiency with light armor*  
Increase Strength or Dexterity by 1 (max 20). Gain proficiency with medium armor and shields.

### Mounted Combatant
Advantage on melee attacks against unmounted creatures smaller than mount. Force attack targeted at mount to target you instead. Mount takes no damage on successful Dex save against half-damage effects (half on fail).

### Observant
Increase Intelligence or Wisdom by 1 (max 20). Read lips of creature speaking language you understand. +5 bonus to passive Wisdom (Perception) and passive Intelligence (Investigation).

### Polearm Master
When attacking with only glaive, halberd, or quarterstaff, bonus action makes melee attack with opposite end (1d4 bludgeoning). Creatures provoke opportunity attacks when entering reach with glaive, halberd, pike, or quarterstaff.

### Resilient
Increase chosen ability score by 1 (max 20). Gain proficiency in saving throws using that chosen ability.

### Ritual Caster
*Prerequisite: Intelligence or Wisdom 13 or higher*  
Acquire ritual book holding two 1st-level ritual spells from chosen class. Copy ritual spells found on adventures (level ≤ half your level, 2 hours and 50 gp per level).

### Savage Attacker
Once per turn when rolling damage for a melee weapon attack, reroll weapon's damage dice and use either total.

### Sentinel
Opportunity attack hit reduces creature's speed to 0. Creatures within 5 ft provoke opportunity attacks even if Disengaging. Reaction melee attack when enemy within 5 ft attacks ally without Sentinel.

### Sharpshooter
Attacking at long range doesn't impose disadvantage on ranged weapon attacks. Ranged attacks ignore half and three-quarters cover. Take -5 attack penalty for +10 damage.

### Shield Master
Bonus action shoves creature within 5 ft with shield after Attack action. Add shield AC bonus to Dex saves targeting only you. Reaction takes no damage on successful Dex save against half-damage effects.

### Skilled
Gain proficiency in any combination of three skills or tools of your choice.

### Skulker
*Prerequisite: Dexterity 13 or higher*  
Try to hide when lightly obscured. Missing with ranged weapon attack while hidden doesn't reveal position. Dim light doesn't impose disadvantage on Perception checks relying on sight.

### Spell Sniper
*Prerequisite: Ability to cast at least one spell*  
Double range of spells requiring attack rolls. Ranged spell attacks ignore half and three-quarters cover. Learn one cantrip requiring an attack roll from any class.

### Tavern Brawler
Increase Strength or Constitution by 1 (max 20). Proficiency with improvised weapons and unarmed strikes. Unarmed strike deals 1d4 damage. Bonus action grapple on unarmed or improvised hit.

### Tough
Hit point maximum increases by twice your level upon taking feat; increases by +2 HP every level thereafter.

### War Caster
*Prerequisite: Ability to cast at least one spell*  
Advantage on Constitution saving throws to maintain concentration when taking damage. Perform somatic components while holding weapons or shield in hands. Reaction casts single-target 1-action spell when hostile movement provokes opportunity attack.

### Weapon Master
Increase Strength or Dexterity by 1 (max 20). Gain proficiency with four weapons of your choice.
`
  }
];
