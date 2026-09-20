import { VaultNote } from '../types';

export const creatureNotes: VaultNote[] = [
  {
    id: "creatures-core-bestiary",
    title: "Core Monsters & Familiar Stat Blocks",
    folder: "Monsters & Foes",
    category: "Creature",
    tags: ["creatures", "monsters", "beasts", "stat-blocks", "familiars"],
    aliases: ["Beasts", "Monsters", "Creatures"],
    content: `---
title: Core Monsters & Familiar Stat Blocks
category: Creature
folder: Monsters & Foes
tags: [creatures, monsters, beasts, stat-blocks, familiars]
---

# Core Monsters & Familiar Stat Blocks

Complete statistics for creatures commonly summoned, transformed into via Wild Shape / Polymorph, or encountered in adventures. All stat blocks are formatted in authentic **Obsidian Fantasy Statblock** YAML.

\`\`\`statblock
name: Bat
size: Tiny
type: beast
alignment: unaligned
ac: 12
hp: 1 (1d4 - 1)
speed: 5 ft., fly 30 ft.
stats: [2, 15, 8, 2, 12, 4]
senses: blindsight 60 ft., passive Perception 11
cr: 0
traits:
  - name: Echolocation
    desc: The bat can't use its blindsight while deafened.
  - name: Keen Hearing
    desc: The bat has advantage on Wisdom (Perception) checks that rely on hearing.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
\`\`\`

\`\`\`statblock
name: Black Bear
size: Medium
type: beast
alignment: unaligned
ac: 11 (natural armor)
hp: 19 (3d8 + 6)
speed: 40 ft., climb 30 ft.
stats: [15, 10, 14, 2, 12, 7]
skills: Perception +3
senses: passive Perception 13
cr: 1/2 (100 XP)
traits:
  - name: Keen Smell
    desc: The bear has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack
    desc: The bear makes two attacks: one with its bite and one with its claws.
  - name: Bite
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  - name: Claws
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
\`\`\`

\`\`\`statblock
name: Brown Bear
size: Large
type: beast
alignment: unaligned
ac: 11 (natural armor)
hp: 34 (4d10 + 12)
speed: 40 ft., climb 30 ft.
stats: [19, 10, 16, 2, 13, 7]
skills: Perception +3
senses: passive Perception 13
cr: 1 (200 XP)
traits:
  - name: Keen Smell
    desc: The bear has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Multiattack
    desc: The bear makes two attacks: one with its bite and one with its claws.
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
  - name: Claws
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
\`\`\`

\`\`\`statblock
name: Cat
size: Tiny
type: beast
alignment: unaligned
ac: 12
hp: 2 (1d4)
speed: 40 ft., climb 30 ft.
stats: [3, 15, 10, 3, 12, 7]
skills: Perception +3, Stealth +4
senses: passive Perception 13
cr: 0
traits:
  - name: Keen Smell
    desc: The cat has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Claws
    desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
\`\`\`

\`\`\`statblock
name: Dire Wolf
size: Large
type: beast
alignment: unaligned
ac: 14 (natural armor)
hp: 37 (5d10 + 10)
speed: 50 ft.
stats: [17, 15, 15, 3, 12, 7]
skills: Perception +3, Stealth +4
senses: passive Perception 13
cr: 1 (200 XP)
traits:
  - name: Keen Hearing and Smell
    desc: The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Pack Tactics
    desc: The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
\`\`\`

\`\`\`statblock
name: Giant Ape
size: Huge
type: beast
alignment: unaligned
ac: 12
hp: 157 (15d12 + 60)
speed: 40 ft., climb 40 ft.
stats: [23, 14, 18, 7, 12, 7]
skills: Athletics +9, Perception +4
senses: passive Perception 14
cr: 7 (2,900 XP)
actions:
  - name: Multiattack
    desc: The ape makes two fist attacks.
  - name: Fist
    desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage."
  - name: Rock
    desc: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage."
\`\`\`

\`\`\`statblock
name: Giant Spider
size: Large
type: beast
alignment: unaligned
ac: 14 (natural armor)
hp: 26 (4d10 + 4)
speed: 30 ft., climb 30 ft.
stats: [14, 16, 12, 2, 11, 4]
skills: Stealth +7
senses: blindsight 10 ft., darkvision 60 ft., passive Perception 10
cr: 1 (200 XP)
traits:
  - name: Spider Climb
    desc: The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    desc: While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    desc: The spider ignores movement restrictions caused by webbing.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 9 (2d8) poison damage. The target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
  - name: Web (Recharge 5–6)
    desc: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; 5 hp; vulnerability to fire; immunity to bludgeoning, poison, and psychic damage)."
\`\`\`

\`\`\`statblock
name: Imp
size: Tiny
type: fiend (devil)
alignment: lawful evil
ac: 13
hp: 10 (3d4 + 3)
speed: 20 ft., fly 40 ft.
stats: [6, 17, 13, 11, 12, 14]
skills: Deception +4, Insight +3, Persuasion +4, Stealth +5
damage_resistances: cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons
damage_immunities: fire, poison
condition_immunities: poisoned
senses: darkvision 120 ft., passive Perception 11
languages: Infernal, Common
cr: 1 (200 XP)
traits:
  - name: Shapechanger
    desc: The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Devil's Sight
    desc: Magical darkness doesn't impede the imp's darkvision.
  - name: Magic Resistance
    desc: The imp has advantage on saving throws against spells and other magical effects.
actions:
  - name: Sting (Bite in Beast Form)
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 10 (3d6) poison damage (DC 11 Constitution saving throw for half damage)."
  - name: Invisibility
    desc: The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.
\`\`\`

\`\`\`statblock
name: Skeleton
size: Medium
type: undead
alignment: lawful evil
ac: 13 (armor scraps)
hp: 13 (2d8 + 4)
speed: 30 ft.
stats: [10, 14, 15, 6, 8, 5]
damage_vulnerabilities: bludgeoning
damage_immunities: poison
condition_immunities: exhaustion, poisoned
senses: darkvision 60 ft., passive Perception 9
languages: understands all languages it knew in life but can't speak
cr: 1/4 (50 XP)
actions:
  - name: Shortsword
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
  - name: Shortbow
    desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
\`\`\`

\`\`\`statblock
name: Zombie
size: Medium
type: undead
alignment: neutral evil
ac: 8
hp: 22 (3d8 + 9)
speed: 20 ft.
stats: [13, 6, 16, 3, 6, 5]
saves: Wis +0
damage_immunities: poison
condition_immunities: poisoned
senses: darkvision 60 ft., passive Perception 8
languages: understands the languages it knew in life but can't speak
cr: 1/4 (50 XP)
traits:
  - name: Undead Fortitude
    desc: If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.
actions:
  - name: Slam
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
\`\`\`
`
  },
  {
    id: "creatures-modern-npcs",
    title: "Modern Creatures, NPCs & Stat Blocks",
    folder: "Monsters & Foes",
    category: "Creature",
    tags: ["modern", "creatures", "npcs", "stat-blocks", "police", "swat", "drones"],
    aliases: ["Modern NPCs", "Police Officer", "SWAT Officer", "City Guardian"],
    content: `---
title: Modern Creatures, NPCs & Stat Blocks
category: Creature
folder: Monsters & Foes
tags: [modern, creatures, npcs, stat-blocks, police, swat, droids]
source: Modern Handbook
---

# Modern Creatures, NPCs & Stat Blocks

Stat blocks for modern encounters, including law enforcement, military operatives, modern mages, drones, and technological constructs formatted for **Obsidian Fantasy Statblock**.

\`\`\`statblock
name: Police Officer
size: Medium
type: humanoid (any race)
alignment: any lawful alignment
ac: 15 (light undercover shirt)
hp: 11 (2d8 + 2)
speed: 30 ft.
stats: [13, 14, 12, 10, 11, 10]
skills: Athletics +3, Insight +2, Perception +2
senses: passive Perception 12
languages: Common
cr: 1/2 (100 XP)
traits:
  - name: Light Undercover Shirt
    desc: Piercing damage from firearms against the police officer is reduced by 2.
actions:
  - name: Metal Baton
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
  - name: Light Pistol
    desc: "Ranged Weapon Attack: +4 to hit, range 60/180 ft., one target. Hit: 9 (2d6 + 2) piercing damage. (Reload 12)."
\`\`\`

\`\`\`statblock
name: SWAT Officer
size: Medium
type: humanoid (any race)
alignment: any lawful alignment
ac: 17 (tactical vest)
hp: 32 (5d8 + 10)
speed: 30 ft.
stats: [15, 14, 14, 11, 12, 10]
skills: Athletics +4, Perception +3, Stealth +4
damage_resistances: piercing damage from firearms (Tactical Vest)
senses: passive Perception 13
languages: Common
cr: 2 (450 XP)
traits:
  - name: Close Quarters Battle (CQB)
    desc: The SWAT officer has advantage on attack rolls against targets within 20 feet.
actions:
  - name: Multiattack
    desc: The SWAT officer makes two ranged firearm attacks.
  - name: Tactical Shotgun
    desc: "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 11 (2d8 + 2) piercing damage. (CQB, Reload 6)."
  - name: Submachine Gun
    desc: "Ranged Weapon Attack: +4 to hit, range 80/240 ft., one target. Hit: 11 (2d8 + 2) piercing damage (Burst Fire, Reload 30)."
  - name: Flashbang (1/Day)
    desc: "Thrown up to 30 feet. Each creature in a 10-foot radius must make a DC 12 Dexterity saving throw or become blinded and deafened until the end of their next turn."
\`\`\`

\`\`\`statblock
name: Soldier (Modern)
size: Medium
type: humanoid (any race)
alignment: any alignment
ac: 16 (concealable vest)
hp: 26 (4d8 + 8)
speed: 30 ft.
stats: [14, 14, 14, 10, 11, 10]
skills: Athletics +4, Perception +2
senses: passive Perception 12
languages: Common
cr: 1 (200 XP)
traits:
  - name: Concealable Vest
    desc: Piercing damage from firearms against the soldier is reduced by 3.
actions:
  - name: Multiattack
    desc: The soldier makes two weapon attacks.
  - name: Assault Rifle
    desc: "Ranged Weapon Attack: +4 to hit, range 100/300 ft., one target. Hit: 11 (2d8 + 2) piercing damage (Burst Fire, Reload 30)."
  - name: Combat Knife
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
\`\`\`

\`\`\`statblock
name: City Guardian (Druid Wild Shape Form)
size: Large
type: construct
alignment: neutral
ac: 16 (natural armor)
hp: 68 (8d10 + 24)
speed: 40 ft.
stats: [18, 12, 16, 10, 14, 8]
damage_resistances: bludgeoning, piercing, and slashing from nonmagical attacks
damage_immunities: poison, psychic
condition_immunities: charmed, exhaustion, frightened, paralyzed, petrified, poisoned
senses: darkvision 60 ft., passive Perception 12
cr: 5 (1,800 XP)
traits:
  - name: Magic Weapons
    desc: The guardian's weapon attacks are magical.
actions:
  - name: Multiattack
    desc: The guardian makes two slam attacks.
  - name: Slam
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
  - name: Debris Hurl (Recharge 5–6)
    desc: "Ranged Weapon Attack: +7 to hit, range 30/60 ft., one target. Hit: 17 (3d8 + 4) bludgeoning damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone."
\`\`\`

\`\`\`statblock
name: Security Drone
size: Small
type: construct
alignment: unaligned
ac: 14
hp: 18 (4d6 + 4)
speed: 10 ft., fly 50 ft. (hover)
stats: [6, 18, 12, 10, 14, 1]
skills: Perception +6, Stealth +6
damage_immunities: poison, psychic
condition_immunities: charmed, poisoned, prone
senses: darkvision 120 ft., infrared vision 60 ft., passive Perception 16
cr: 1/2 (100 XP)
traits:
  - name: Surveillance Uplink
    desc: The drone continuously broadcasts live audio and high-definition thermal/optical video feeds to its controller.
actions:
  - name: Taser Dart
    desc: "Ranged Weapon Attack: +6 to hit, range 15/35 ft., one target. Hit: 2 (1d4) lightning damage, and the target must succeed on a DC 12 Constitution saving throw or be paralyzed until the start of its next turn."
  - name: Submachine Gun Pod (Recharge 6)
    desc: "The drone sprays gunfire into a 10-foot cube. Each creature in that area must make a DC 12 Dexterity saving throw, taking 9 (2d8) piercing damage on a failed save, or half as much on a successful one."
\`\`\`

\`\`\`statblock
name: Modern Mage
size: Medium
type: humanoid (any race)
alignment: any alignment
ac: 12 (15 with mage armor)
hp: 40 (9d8)
speed: 30 ft.
stats: [9, 14, 11, 17, 12, 11]
skills: Arcana +6, History +6, Investigation +6
senses: passive Perception 11
languages: any four languages
cr: 6 (2,300 XP)
traits:
  - name: Spellcasting
    desc: "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\nCantrips (at will): fire bolt, glitch, haywire, mage hand, shocking grasp\n1st level (4 slots): arcane hacking, mage armor, magic missile, shield\n2nd level (3 slots): hold person, misty step, remote access\n3rd level (3 slots): counterspell, electromagnetic pulse, fireball\n4th level (3 slots): greater invisibility, wire walk\n5th level (1 slot): cone of cold, synchronicity"
actions:
  - name: Light Pistol
    desc: "Ranged Weapon Attack: +5 to hit, range 60/180 ft., one target. Hit: 9 (2d6 + 2) piercing damage."
  - name: Dagger
    desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
\`\`\`
`
  }
];
