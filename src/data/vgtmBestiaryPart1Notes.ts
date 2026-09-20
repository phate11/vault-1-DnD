import { VaultNote } from "../types";

export const vgtmBestiaryPart1Notes: VaultNote[] = [
  {
    id: "vgtm-bestiary-part-1",
    title: "Volo's Guide to Monsters - Bestiary (Banderhobb to Giants)",
    folder: "Monsters & Foes",
    category: "Creature",
    tags: ["vgtm", "bestiary", "stat-blocks", "beholder-kin", "demons", "dinosaurs", "giants"],
    aliases: ["VGtM Bestiary Part 1", "Banderhobb", "Barghest", "Death Kiss", "Gauth", "Bodak", "Froghemoth"],
    content: `---
title: Volo's Guide to Monsters - Bestiary (Banderhobb to Giants)
category: Creature
folder: Monsters & Foes
tags: [vgtm, bestiary, stat-blocks, beholder-kin, demons, dinosaurs, giants]
source: Volo's Guide to Monsters
---

# Volo's Guide to Monsters: Bestiary (Part 1)

Monsters and creatures from Chapter 3 of *Volo's Guide to Monsters*, fully formatted for **Obsidian Fantasy Statblock**.

\`\`\`statblock
name: Banderhobb
size: Large
type: monstrosity
alignment: neutral evil
ac: 15 (natural armor)
hp: 84 (8d10 + 40)
speed: 30 ft.
stats: [20, 12, 20, 11, 14, 8]
skills: Athletics +8, Stealth +7
condition_immunities: charmed, frightened
senses: darkvision 120 ft., passive Perception 12
languages: understands Common and the languages of its creator, but can't speak
cr: 5 (1,800 XP)
traits:
  - name: Resonant Connection
    desc: If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object, as long as the creature or object is on the same plane of existence.
  - name: Shadow Stealth
    desc: While in dim light or darkness, the banderhobb can take the Hide action as a bonus action.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6 + 5) piercing damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can't use its bite attack or tongue attack on another target."
  - name: Tongue
    desc: "Melee Weapon Attack: +8 to hit, reach 15 ft., one creature. Hit: 10 (1d10 + 5) necrotic damage, and the target must make a DC 15 Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can then immediately make a bite attack against the target as a bonus action."
  - name: Swallow
    desc: "The banderhobb makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, the creature is swallowed, and the grapple ends. The swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the banderhobb, and it takes 10 (3d6) acid damage at the start of each of the banderhobb's turns. A banderhobb can have only one creature swallowed at a time."
bonus_actions:
  - name: Shadow Step
    desc: The banderhobb teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see.
\`\`\`

\`\`\`statblock
name: Barghest
size: Large
type: fiend (shapechanger)
alignment: neutral evil
ac: 17 (natural armor)
hp: 90 (12d10 + 24)
speed: 60 ft. (30 ft. in goblin form)
stats: [19, 15, 14, 13, 12, 14]
skills: Deception +5, Intimidation +5, Perception +4, Stealth +5
damage_resistances: cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks
damage_immunities: acid, poison
condition_immunities: poisoned
senses: blindsight 60 ft., darkvision 60 ft., passive Perception 14
languages: Abyssal, Common, Goblin, Infernal
cr: 4 (1,100 XP)
traits:
  - name: Shapechanger
    desc: The barghest can use its action to polymorph into a Small goblin or back into its true form. Its statistics are the same in each form, except for the size and speed changes. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.
  - name: Fire Banishment
    desc: When the barghest starts its turn within 5 feet of a fire of at least campfire size, it must succeed on a DC 15 Charisma saving throw or be pushed 10 feet away and blinded until the start of its next turn.
  - name: Soul Feeding
    desc: A barghest can feed on the corpse of a humanoid that died within the past 10 minutes. This takes 1 minute, after which the corpse is devoured. A creature whose soul is devoured cannot be returned to life by any means short of a wish spell.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
  - name: Claws
    desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
\`\`\`

\`\`\`statblock
name: Death Kiss
size: Large
type: aberration
alignment: neutral evil
ac: 16 (natural armor)
hp: 161 (17d10 + 68)
speed: 0 ft., fly 30 ft. (hover)
stats: [18, 14, 18, 10, 12, 10]
saves: Con +8, Wis +5
skills: Perception +5
damage_immunities: lightning
condition_immunities: prone
senses: darkvision 120 ft., passive Perception 15
languages: Deep Speech, Undercommon
cr: 10 (5,900 XP)
traits:
  - name: Lightning Blood
    desc: A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage.
actions:
  - name: Multiattack
    desc: The death kiss makes three tentacle attacks. Up to three of them can be replaced by Blood Drain, one for each tentacle that has a creature grappled.
  - name: Tentacle
    desc: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 14 (3d6 + 4) piercing damage, and the target is grappled (escape DC 14) if it is a Huge or smaller creature. Until the grapple ends, the target takes 10 (3d6) lightning damage at the start of each of its turns. The death kiss has ten tentacles, each of which can grapple one target."
  - name: Blood Drain
    desc: "One creature grappled by a tentacle must make a DC 16 Constitution saving throw. On a failure, the target takes 22 (4d10) lightning damage, and the death kiss regains hit points equal to that amount."
\`\`\`

\`\`\`statblock
name: Gauth
size: Medium
type: aberration
alignment: lawful evil
ac: 15 (natural armor)
hp: 67 (9d8 + 27)
speed: 0 ft., fly 20 ft. (hover)
stats: [10, 14, 16, 15, 15, 13]
saves: Int +5, Wis +5, Cha +4
skills: Perception +5
condition_immunities: prone
senses: darkvision 120 ft., passive Perception 15
languages: Deep Speech, Undercommon
cr: 6 (2,300 XP)
traits:
  - name: Stunning Gaze
    desc: When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a DC 14 Wisdom saving throw if the gauth isn't incapacitated. On a failed save, the creature is stunned until the start of its next turn.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8) piercing damage."
  - name: Eye Rays
    desc: "The gauth shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 90 feet: 1. Fire Ray (3d10 fire, Dex DC 14 half); 2. Paralyzing Ray (DC 14 Con save or paralyzed for 1 min); 3. Pushing Ray (DC 14 Str save or pushed 15 ft. and speed halved); 4. Shadow Ray (3d10 necrotic, DC 14 Con half); 5. Sleep Ray (DC 14 Wis save or fall asleep for 1 min); 6. Enervation Ray (DC 14 Con save or 4d8 necrotic damage)."
\`\`\`

\`\`\`statblock
name: Gazer
size: Tiny
type: aberration
alignment: neutral evil
ac: 13
hp: 13 (3d4 + 6)
speed: 0 ft., fly 30 ft. (hover)
stats: [3, 17, 14, 3, 10, 7]
skills: Perception +4, Stealth +5
condition_immunities: prone
senses: darkvision 60 ft., passive Perception 14
languages: understands Deep Speech and Undercommon but can't speak
cr: 1/2 (100 XP)
traits:
  - name: Aggressive
    desc: As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see.
  - name: Mimicry
    desc: The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.
actions:
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
  - name: Eye Rays
    desc: "The gazer shoots two of the following magical eye rays at random (reroll duplicates), targeting one or two creatures it can see within 60 feet: 1. Dazing Ray (DC 12 Wis save or no reactions and speed halved); 2. Fear Ray (DC 12 Wis save or frightened for 1 min); 3. Frost Ray (DC 12 Dex save or 3d6 cold damage); 4. Telekinetic Ray (DC 12 Str save or moved up to 30 ft.)."
\`\`\`

\`\`\`statblock
name: Bodak
size: Medium
type: undead
alignment: chaotic evil
ac: 15 (natural armor)
hp: 58 (9d8 + 18)
speed: 30 ft.
stats: [15, 16, 15, 7, 12, 12]
skills: Perception +4, Stealth +6
damage_resistances: cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks
damage_immunities: poison
condition_immunities: charmed, frightened, poisoned
senses: darkvision 120 ft., passive Perception 14
languages: Abyssal, the languages it knew in life
cr: 6 (2,300 XP)
traits:
  - name: Aura of Annihilation
    desc: The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends are immune.
  - name: Death Gaze
    desc: When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn't incapacitated. If the saving throw fails by 5 or more, the creature drops to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save.
  - name: Sunlight Hypersensitivity
    desc: The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.
actions:
  - name: Fist
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage plus 9 (2d8) necrotic damage."
  - name: Withering Gaze
    desc: "One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much on a successful one."
\`\`\`

\`\`\`statblock
name: Boggle
size: Small
type: fey
alignment: chaotic neutral
ac: 14
hp: 18 (4d6 + 4)
speed: 30 ft., climb 30 ft.
stats: [8, 18, 13, 6, 12, 7]
skills: Perception +3, Sleight of Hand +6, Stealth +6
damage_resistances: fire
senses: darkvision 60 ft., passive Perception 13
languages: Sylvan
cr: 1/6 (25 XP)
traits:
  - name: Boggle Oil
    desc: The boggle secretes nonflammable oil from its pores, choosing whether the oil is slippery or sticky. Slippery oil grants advantage on checks to escape grapples and enables moving through narrow spaces 1 inch wide without squeezing. Sticky oil grants climb speed and advantage on Strength checks to grapple.
  - name: Dimensional Rift
    desc: As a bonus action, the boggle can create an invisible, rift-like opening in any space within 5 feet of it that links to an unoccupied space within 30 feet of it. The boggle can see through the rift, reach through it, and attack through it.
  - name: Uncanny Smell
    desc: The boggle has advantage on Wisdom (Perception) checks that rely on smell.
actions:
  - name: Pummel
    desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) bludgeoning damage."
\`\`\`

\`\`\`statblock
name: Catoblepas
size: Large
type: monstrosity
alignment: unaligned
ac: 14 (natural armor)
hp: 84 (8d10 + 40)
speed: 30 ft.
stats: [19, 12, 21, 3, 14, 8]
saves: Con +8
senses: darkvision 60 ft., passive Perception 12
cr: 5 (1,800 XP)
traits:
  - name: Keen Smell
    desc: The catoblepas has advantage on Wisdom (Perception) checks that rely on smell.
  - name: Stench
    desc: Any creature that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn.
actions:
  - name: Tail
    desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6 + 4) bludgeoning damage, and the target must succeed on a DC 16 Strength saving throw or be knocked prone."
  - name: Death Ray (Recharge 5–6)
    desc: "The catoblepas targets a creature that it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray."
\`\`\`

\`\`\`statblock
name: Froghemoth
size: Huge
type: monstrosity
alignment: unaligned
ac: 14 (natural armor)
hp: 184 (16d12 + 80)
speed: 30 ft., swim 30 ft.
stats: [23, 13, 20, 2, 12, 5]
saves: Con +9, Wis +5
skills: Perception +5, Stealth +4
damage_resistances: fire, lightning
senses: darkvision 60 ft., passive Perception 15
cr: 10 (5,900 XP)
traits:
  - name: Amphibious
    desc: The froghemoth can breathe air and water.
  - name: Shock Susceptibility
    desc: If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and it can make only one attack on its turn.
actions:
  - name: Multiattack
    desc: The froghemoth makes two tentacle attacks and one tongue attack. Up to two tentacle attacks can be replaced with a bite attack.
  - name: Tentacle
    desc: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature."
  - name: Tongue
    desc: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: The target is grappled (escape DC 16) and pulled up to 20 feet toward the froghemoth."
  - name: Bite
    desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage, and the target is swallowed if it is a Medium or smaller creature."
\`\`\`

\`\`\`statblock
name: Cloud Giant Smiling One
size: Huge
type: giant (cloud giant)
alignment: chaotic neutral
ac: 15 (natural armor)
hp: 262 (21d12 + 126)
speed: 40 ft., fly 40 ft. (hover)
stats: [26, 12, 22, 15, 16, 17]
saves: Con +11, Int +7, Cha +8
skills: Deception +13, Insight +8, Perception +8, Sleight of Hand +6
senses: passive Perception 18
languages: Common, Giant
cr: 11 (7,200 XP)
traits:
  - name: Innate Spellcasting
    desc: "The giant's innate spellcasting ability is Charisma (spell save DC 16). It can cast the following spells: At will: detect magic, fog cloud, light; 3/day each: feather fall, fly, misty step, telekinesis; 1/day each: control weather, gaseous form."
  - name: Spellcasting
    desc: "The giant is a 5th-level spellcaster (DC 16, +8 to hit). Cantrips: minor illusion, prestidigitation; 1st level (4 slots): charm person, disguise self, silent image; 2nd level (3 slots): invisibility, mirror image, phantasmal force; 3rd level (2 slots): major image, tongues."
actions:
  - name: Multiattack
    desc: The giant makes two morningstar attacks.
  - name: Morningstar
    desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage."
  - name: Rock
    desc: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage."
\`\`\`

\`\`\`statblock
name: Fire Giant Dreadnought
size: Huge
type: giant (fire giant)
alignment: lawful evil
ac: 21 (plate, dual shields)
hp: 187 (15d12 + 90)
speed: 30 ft.
stats: [27, 9, 23, 10, 10, 12]
saves: Dex +4, Con +11, Cha +6
skills: Athletics +13, Perception +5
damage_immunities: fire
senses: passive Perception 15
languages: Giant
cr: 14 (11,500 XP)
traits:
  - name: Dual-Shield Master
    desc: The giant carries two massive spiked tower shields, which provide a total of +4 to its AC (included).
actions:
  - name: Multiattack
    desc: The giant makes two Fireshield attacks.
  - name: Fireshield
    desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) bludgeoning damage plus 7 (2d6) fire damage, and the target is pushed up to 10 feet away and knocked prone."
  - name: Shield Charge
    desc: "The giant moves up to its speed in a straight line and can move through the space of any creature smaller than Huge. The first time the giant enters a creature's space during this move, it makes a Fireshield attack against that creature. If the attack hits, the target takes an extra 10 (3d6) bludgeoning damage and is pushed 15 feet away."
\`\`\`

\`\`\`statblock
name: Frost Giant Everlasting One
size: Huge
type: giant (frost giant)
alignment: chaotic evil
ac: 15 (patchwork armor)
hp: 189 (14d12 + 98)
speed: 40 ft.
stats: [25, 9, 24, 9, 10, 12]
saves: Str +11, Con +11, Wis +4
skills: Athletics +11, Perception +4
damage_immunities: cold
senses: darkvision 60 ft., passive Perception 14
languages: Giant
cr: 12 (8,400 XP)
traits:
  - name: Regeneration
    desc: The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn.
  - name: Vrock's Screech (1/Day)
    desc: The giant can emit a horrific screech. Each creature within 20 feet that can hear it must succeed on a DC 14 Constitution save or be stunned until the end of its next turn.
actions:
  - name: Multiattack
    desc: The giant makes two greataxe attacks.
  - name: Greataxe
    desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 26 (3d12 + 7) slashing damage."
  - name: Rock
    desc: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage."
\`\`\`
`
  }
];
