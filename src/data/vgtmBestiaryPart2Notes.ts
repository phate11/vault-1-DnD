import { VaultNote } from "../types";

export const vgtmBestiaryPart2Notes: VaultNote[] = [
  {
    id: "vgtm-bestiary-part-2",
    title: "Volo's Guide to Monsters - Bestiary (Girallon to Yuan-ti & NPCs)",
    folder: "Monsters & Foes",
    category: "Creature",
    tags: ["vgtm", "bestiary", "stat-blocks", "gnolls", "illithid", "orcs", "yuan-ti", "npcs"],
    aliases: ["VGtM Bestiary Part 2", "Flind", "Elder Brain", "Ulitharid", "Tanarukk", "Yuan-ti Anathema", "Ki-rin"],
    content: `---
title: Volo's Guide to Monsters - Bestiary (Girallon to Yuan-ti & NPCs)
category: Creature
folder: Monsters & Foes
tags: [vgtm, bestiary, stat-blocks, gnolls, illithid, orcs, yuan-ti, npcs]
source: Volo's Guide to Monsters
---

# Volo's Guide to Monsters: Bestiary (Part 2)

Monsters and NPCs from Chapter 3 & Appendices of *Volo's Guide to Monsters*, formatted for **Obsidian Fantasy Statblock**.

\`\`\`statblock
name: Flind
size: Medium
type: fiend (gnoll)
alignment: chaotic evil
ac: 16 (chain mail)
hp: 127 (15d8 + 60)
speed: 30 ft.
stats: [20, 10, 19, 11, 13, 12]
saves: Con +8, Wis +5
skills: Intimidation +5, Perception +5
damage_resistances: bludgeoning, piercing, and slashing from nonmagical attacks
senses: darkvision 60 ft., passive Perception 15
languages: Abyssal, Gnoll
cr: 9 (5,000 XP)
traits:
  - name: Aura of Blood Thirst
    desc: If the flind isn't incapacitated, any gnoll within 30 feet of it can use its Rampage trait as a bonus action when the flind hits a creature with a melee attack.
  - name: Rampage
    desc: When the flind reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack.
actions:
  - name: Multiattack
    desc: The flind makes three flail attacks or one bite attack and two flail attacks.
  - name: Bite
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage."
  - name: Flail of Madness
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failure, the target must use its reaction to make a melee weapon attack against one of its allies that the flind chooses."
  - name: Flail of Pain
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) bludgeoning damage plus 22 (4d10) psychic damage."
  - name: Flail of Paralysis
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of its next turn."
\`\`\`

\`\`\`statblock
name: Ki-rin
size: Huge
type: celestial
alignment: lawful good
ac: 20 (natural armor)
hp: 153 (18d12 + 36)
speed: 60 ft., fly 120 ft. (hover)
stats: [21, 16, 14, 19, 20, 20]
saves: Dex +9, Con +8, Wis +11, Cha +11
skills: Insight +11, Perception +11, Religion +10
damage_immunities: poison; bludgeoning, piercing, and slashing from nonmagical attacks
condition_immunities: charmed, paralyzed, poisoned
senses: blindsight 30 ft., darkvision 120 ft., passive Perception 21
languages: all, telepathy 120 ft.
cr: 12 (8,400 XP)
traits:
  - name: Innate Spellcasting
    desc: "The ki-rin's innate spellcasting ability is Charisma (spell save DC 19). It can cast: At will: gaseous form, major image, wind walk; 1/day: create food and water."
  - name: Legendary Resistance (3/Day)
    desc: If the ki-rin fails a saving throw, it can choose to succeed instead.
  - name: Magic Resistance
    desc: The ki-rin has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    desc: The ki-rin makes two attacks: one with its hooves and one with its horn.
  - name: Hooves
    desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage."
  - name: Horn
    desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage plus 13 (3d8) radiant damage."
legendary_actions:
  - name: Detect
    desc: The ki-rin makes a Wisdom (Perception) check or a Wisdom (Insight) check.
  - name: Smite
    desc: The ki-rin unleashes a burst of radiant energy targeting one creature within 60 feet. The target must succeed on a DC 19 Dexterity saving throw or take 18 (4d8) radiant damage.
  - name: Move
    desc: The ki-rin moves up to half its flying speed without provoking opportunity attacks.
\`\`\`

\`\`\`statblock
name: Elder Brain
size: Large
type: aberration
alignment: lawful evil
ac: 10
hp: 210 (20d10 + 100)
speed: 5 ft., swim 10 ft.
stats: [15, 10, 20, 21, 19, 24]
saves: Int +10, Wis +9, Cha +12
skills: Arcana +10, Deception +12, Insight +14, Intimidation +12, Persuasion +12
damage_immunities: psychic
condition_immunities: charmed, frightened
senses: blindsight 120 ft., passive Perception 14
languages: understands Common, Deep Speech, and Undercommon but can't speak, telepathy 5 miles
cr: 14 (11,500 XP)
traits:
  - name: Creature Sense
    desc: The elder brain is aware of the presence of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature.
  - name: Legendary Resistance (3/Day)
    desc: If the elder brain fails a saving throw, it can choose to succeed instead.
  - name: Innate Spellcasting (Psionics)
    desc: "DC 18. At will: detect thoughts, levitate; 1/day each: dominate monster, plane shift (self only)."
actions:
  - name: Tentacle
    desc: "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (4d8 + 2) bludgeoning damage. If the target is a Huge or smaller creature, it is grappled (escape DC 15) and takes 9 (1d8 + 5) psychic damage at the start of each of its turns."
  - name: Mind Blast (Recharge 5–6)
    desc: "The elder brain magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 18 Intelligence saving throw or take 32 (5d10 + 5) psychic damage and be stunned for 1 minute."
legendary_actions:
  - name: Tentacle
    desc: The elder brain makes a tentacle attack.
  - name: Break Concentration
    desc: The elder brain targets a creature within 120 feet with which it has a psychic link. The creature must make a DC 18 Constitution save or lose concentration.
  - name: Psychic Pulse
    desc: Deals 10 (3d6) psychic damage to all creatures with which it has a psychic link.
\`\`\`

\`\`\`statblock
name: Ulitharid
size: Large
type: aberration
alignment: lawful evil
ac: 15 (breastplate)
hp: 127 (17d10 + 34)
speed: 30 ft.
stats: [15, 12, 15, 21, 19, 21]
saves: Int +9, Wis +8, Cha +9
skills: Arcana +9, Insight +8, Perception +8, Stealth +5
damage_immunities: psychic
condition_immunities: charmed, frightened
senses: darkvision 120 ft., passive Perception 18
languages: Deep Speech, Undercommon, telepathy 2 miles
cr: 9 (5,000 XP)
traits:
  - name: Magic Resistance
    desc: The ulitharid has advantage on saving throws against spells and other magical effects.
  - name: Psionic Hub
    desc: If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a link through the ulitharid to any creature the ulitharid can detect.
actions:
  - name: Tentacles
    desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 27 (4d10 + 5) psychic damage. If the target is Large or smaller, it is grappled (escape DC 17) and restrained. Target must succeed on a DC 17 Intelligence saving throw or be stunned."
  - name: Extract Brain
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one incapacitated humanoid grappled by the ulitharid. Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain."
  - name: Mind Blast (Recharge 5–6)
    desc: "60-foot cone. DC 17 Intelligence saving throw or take 31 (4d12 + 5) psychic damage and be stunned for 1 minute."
\`\`\`

\`\`\`statblock
name: Tanarukk
size: Medium
type: fiend (demon, orc)
alignment: chaotic evil
ac: 14 (natural armor)
hp: 95 (10d8 + 50)
speed: 30 ft.
stats: [18, 13, 20, 9, 9, 9]
skills: Intimidation +2, Perception +2
damage_resistances: fire, poison
senses: darkvision 60 ft., passive Perception 12
languages: Abyssal, Common, Orc
cr: 5 (1,800 XP)
traits:
  - name: Aggressive
    desc: As a bonus action, the tanarukk can move up to its speed toward a hostile creature that it can see.
  - name: Magic Resistance
    desc: The tanarukk has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    desc: The tanarukk makes two attacks: one with its bite and one with its greatsword.
  - name: Bite
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage plus 3 (1d6) fire damage."
  - name: Greatsword
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
reactions:
  - name: Unbridled Fury
    desc: In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker.
\`\`\`

\`\`\`statblock
name: Yuan-ti Anathema
size: Huge
type: monstrosity (shapechanger, yuan-ti)
alignment: neutral evil
ac: 16 (natural armor)
hp: 189 (18d12 + 72)
speed: 40 ft., climb 30 ft., swim 30 ft.
stats: [23, 13, 19, 19, 17, 20]
saves: Con +8, Wis +7, Cha +9
skills: Perception +7, Stealth +5
damage_resistances: acid, fire, lightning
damage_immunities: poison
condition_immunities: poisoned
senses: blindsight 30 ft., darkvision 60 ft., passive Perception 17
languages: Abyssal, Common, Draconic
cr: 12 (8,400 XP)
traits:
  - name: Shapechanger
    desc: The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form.
  - name: Magic Resistance
    desc: The anathema has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack (Anathema Form Only)
    desc: The anathema makes two claw attacks, one bite attack, and one constrict attack.
  - name: Claw
    desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
  - name: Bite
    desc: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 18 (4d8) poison damage."
  - name: Constrict
    desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) bludgeoning damage, and the target is grappled (escape DC 16) and restrained."
\`\`\`

\`\`\`statblock
name: Warlord
size: Medium
type: humanoid (any race)
alignment: any alignment
ac: 18 (plate)
hp: 229 (27d8 + 108)
speed: 30 ft.
stats: [20, 16, 18, 12, 12, 18]
saves: Str +9, Con +8, Wis +5
skills: Athletics +9, Intimidation +8, Perception +5
senses: passive Perception 15
languages: any two languages
cr: 12 (8,400 XP)
traits:
  - name: Indomitable (3/Day)
    desc: The warlord can reroll a saving throw it fails. It must use the new roll.
  - name: Survivor
    desc: The warlord regains 10 hit points at the start of its turn if it has no more than half of its hit points left and has at least 1 hit point.
actions:
  - name: Multiattack
    desc: The warlord makes two weapon attacks.
  - name: Greatsword
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
  - name: Shortbow
    desc: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
legendary_actions:
  - name: Weapon Attack
    desc: The warlord makes one weapon attack.
  - name: Command Ally
    desc: The warlord targets one ally it can see within 30 feet of it. If the target can see and hear the warlord, the target can make one weapon attack using its reaction and has advantage on the attack roll.
  - name: Frighten Foe (Costs 2 Actions)
    desc: Targets one hostile creature within 30 feet; DC 16 Wisdom save or frightened until end of its next turn.
\`\`\`
`
  }
];
