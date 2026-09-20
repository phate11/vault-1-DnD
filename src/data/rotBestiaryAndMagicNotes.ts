import { VaultNote } from "../types";

export const rotBestiaryAndMagicNotes: VaultNote[] = [
  {
    id: "rot-magic-items-and-dragon-masks",
    title: "The Rise of Tiamat - Magic Items & The Dragon Masks",
    folder: "Adventures/The Rise of Tiamat",
    category: "Equipment",
    tags: ["rot", "magic-items", "dragon-masks", "tiamat", "cult-of-the-dragon", "artifacts"],
    aliases: ["The Dragon Masks", "Mask of the Dragon Queen", "Rise of Tiamat Magic Items"],
    content: `---
title: The Rise of Tiamat - Magic Items & The Dragon Masks
category: Equipment
folder: Adventures/The Rise of Tiamat
tags: [rot, magic-items, dragon-masks, tiamat, cult-of-the-dragon, artifacts]
source: The Rise of Tiamat
---

# The Rise of Tiamat: Magic Items & The Five Dragon Masks

> *"Five masks fashioned from the shed scales of Tiamat's consorts, each keyed to one of her chromatic heads. Combined, they awaken the Queen of Chaos from the Nine Hells."*  
> — Severin Silvertongue

---

## The Five Dragon Masks
The five dragon masks are ancient wondrous items crafted by the Cult of the Dragon to channel chromatic dragons. While wearing a mask, you shape your face to resemble a dragon of that kind.

### Shared Properties of All Five Dragon Masks
- **Damage Absorption**: While wearing a dragon mask, you gain resistance to the type of damage associated with the mask. If you already have resistance to that damage type, you gain immunity instead. If you already have immunity, whenever you are subjected to that damage, you take no damage and instead regain hit points equal to half the damage dealt.
- **Dragon Breath**: If you don't already have a breath weapon, the mask grants you one (range and shape depends on color, recharging on a 6). If you already have a breath weapon, you can use this breath weapon once, regaining it after a short or long rest.
- **Dragon Sight**: You gain darkvision out to a range of 60 feet. If you already have darkvision, its range increases by 30 feet. You can also spend 1 charge as an action to gain blindsight out to 30 feet for 1 minute (each mask has 3 charges, regaining 1d3 expended charges daily at dawn).
- **Dragon Tongue**: You can speak and understand Draconic. You also have advantage on Charisma checks directed against dragons of the mask's color.
- **Legendary Resistance (1/Day)**: If you fail a saving throw, you can choose to succeed instead.

---

### 1. Black Dragon Mask
*Wondrous Item, artifact (requires attunement)*
- **Damage Type**: Acid.
- **Water Breathing**: You can breathe underwater.
- **Acid Breath (Recharge 6)**: Exhale a 60-foot line of acid that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much on a successful one.

### 2. Blue Dragon Mask
*Wondrous Item, artifact (requires attunement)*
- **Damage Type**: Lightning.
- **Lightning Breath (Recharge 6)**: Exhale lightning in a 60-foot line that is 5 feet wide. Each creature must make a DC 15 Dexterity saving throw, taking 49 (11d8) lightning damage on a failed save, or half as much on a successful one.

### 3. Green Dragon Mask
*Wondrous Item, artifact (requires attunement)*
- **Damage Type**: Poison.
- **Poison Immunity**: Advantage on saving throws against poison.
- **Poison Breath (Recharge 6)**: Exhale poisonous gas in a 60-foot cone. Each creature must make a DC 15 Constitution saving throw, taking 49 (11d8) poison damage on a failed save, or half as much on a successful one.

### 4. Red Dragon Mask
*Wondrous Item, artifact (requires attunement)*
- **Damage Type**: Fire.
- **Dragon Fire**: Whenever you deal fire damage with a weapon attack or spell, add +1d6 fire damage.
- **Fire Breath (Recharge 6)**: Exhale fire in a 60-foot cone. Each creature must make a DC 15 Dexterity saving throw, taking 49 (11d8) fire damage on a failed save, or half as much on a successful one.

### 5. White Dragon Mask
*Wondrous Item, artifact (requires attunement)*
- **Damage Type**: Cold.
- **Ice Walk**: You can move across and climb icy surfaces without needing to make an ability check. Difficult terrain composed of ice or snow doesn't cost you extra movement.
- **Cold Breath (Recharge 6)**: Exhale a blizzard in a 60-foot cone. Each creature must make a DC 15 Constitution saving throw, taking 49 (11d8) cold damage on a failed save, or half as much on a successful one.

---

## Mask of the Dragon Queen
When all five masks are assembled together, they magically fuse into the **Mask of the Dragon Queen**:
- Grants all benefits of each mask simultaneously.
- Grants immunity to all five chromatic damage types (acid, cold, fire, lightning, poison).
- Grants truesight out to 60 feet.
- Can use Legendary Resistance 5 times per day.
- Essential component for the ritual to summon Tiamat from Avernus.
`
  },
  {
    id: "rot-monsters-bestiary",
    title: "The Rise of Tiamat - Bestiary & NPC Stat Blocks",
    folder: "Adventures/The Rise of Tiamat",
    category: "Creature",
    tags: ["rot", "bestiary", "dragons", "cult-of-the-dragon", "devils", "stat-blocks"],
    aliases: ["Rise of Tiamat Bestiary", "Adult Blue Dragon", "Adult Green Dragon", "Adult White Dragon", "Bone Devil", "Half-Red Dragon Veteran"],
    content: `---
title: The Rise of Tiamat - Bestiary & NPC Stat Blocks
category: Creature
folder: Adventures/The Rise of Tiamat
tags: [rot, bestiary, dragons, cult-of-the-dragon, devils, stat-blocks]
source: The Rise of Tiamat
---

# The Rise of Tiamat: Bestiary & Cult Stat Blocks

Encounter stat blocks from *The Rise of Tiamat*, formatted for **Obsidian Fantasy Statblock**.

\`\`\`statblock
name: Adult Blue Dragon
size: Huge
type: dragon
alignment: lawful evil
ac: 19 (natural armor)
hp: 225 (18d12 + 108)
speed: 40 ft., burrow 30 ft., fly 80 ft.
stats: [25, 10, 23, 16, 15, 19]
saves: Dex +5, Con +11, Wis +7, Cha +9
skills: Perception +12, Stealth +5
damage_immunities: lightning
senses: blindsight 60 ft., darkvision 120 ft., passive Perception 22
languages: Common, Draconic
cr: 16 (15,000 XP)
traits:
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
  - name: Bite
    desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
  - name: Claw
    desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
  - name: Frightful Presence
    desc: Each creature of the dragon's choice within 120 feet must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute.
  - name: Lightning Breath (Recharge 5–6)
    desc: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much on a successful one."
legendary_actions:
  - name: Detect
    desc: The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    desc: The dragon makes a tail attack (+12 to hit, reach 15 ft., 16 bludgeoning damage).
  - name: Wing Attack (Costs 2 Actions)
    desc: The dragon beats its wings. Each creature within 10 feet must succeed on a DC 20 Dexterity saving throw or take 14 bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
\`\`\`

\`\`\`statblock
name: Adult Green Dragon
size: Huge
type: dragon
alignment: lawful evil
ac: 19 (natural armor)
hp: 207 (18d12 + 90)
speed: 40 ft., fly 80 ft., swim 40 ft.
stats: [23, 12, 21, 18, 15, 17]
saves: Dex +6, Con +10, Wis +7, Cha +8
skills: Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6
damage_immunities: poison
condition_immunities: poisoned
senses: blindsight 60 ft., darkvision 120 ft., passive Perception 22
languages: Common, Draconic
cr: 15 (13,000 XP)
traits:
  - name: Amphibious
    desc: The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
  - name: Bite
    desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
  - name: Claw
    desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
  - name: Poison Breath (Recharge 5–6)
    desc: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much on a successful one."
legendary_actions:
  - name: Detect
    desc: The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    desc: The dragon makes a tail attack (+11 to hit, reach 15 ft., 15 bludgeoning damage).
  - name: Wing Attack (Costs 2 Actions)
    desc: The dragon beats its wings. DC 19 Dexterity save or take 13 bludgeoning damage and fall prone.
\`\`\`

\`\`\`statblock
name: Adult White Dragon
size: Huge
type: dragon
alignment: chaotic evil
ac: 18 (natural armor)
hp: 200 (16d12 + 96)
speed: 40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.
stats: [22, 10, 22, 8, 12, 12]
saves: Dex +5, Con +11, Wis +6, Cha +6
skills: Perception +11, Stealth +5
damage_immunities: cold
senses: blindsight 60 ft., darkvision 120 ft., passive Perception 21
languages: Common, Draconic
cr: 13 (10,000 XP)
traits:
  - name: Ice Walk
    desc: The dragon can move across and climb icy surfaces without needing to make an ability check. Difficult terrain composed of ice or snow doesn't cost it extra movement.
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
  - name: Bite
    desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
  - name: Claw
    desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
  - name: Cold Breath (Recharge 5–6)
    desc: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much on a successful one."
legendary_actions:
  - name: Detect
    desc: The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    desc: The dragon makes a tail attack (+11 to hit, reach 15 ft., 15 bludgeoning damage).
  - name: Wing Attack (Costs 2 Actions)
    desc: Wing beat attack (+11 to hit, 13 bludgeoning damage, knocked prone).
\`\`\`

\`\`\`statblock
name: Bone Devil
size: Large
type: fiend (devil)
alignment: lawful evil
ac: 19 (natural armor)
hp: 142 (15d10 + 60)
speed: 40 ft., fly 40 ft.
stats: [18, 16, 18, 13, 14, 16]
saves: Int +5, Wis +6, Cha +7
skills: Deception +7, Insight +6
damage_resistances: cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons
damage_immunities: fire, poison
condition_immunities: poisoned
senses: darkvision 120 ft., passive Perception 12
languages: Infernal, telepathy 120 ft.
cr: 9 (5,000 XP)
traits:
  - name: Devil's Sight
    desc: Magical darkness doesn't impede the devil's darkvision.
  - name: Magic Resistance
    desc: The devil has advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    desc: The devil makes three attacks: two with its claws and one with its sting.
  - name: Claw
    desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
  - name: Sting
    desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute."
\`\`\`

\`\`\`statblock
name: Half-Red Dragon Veteran
size: Medium
type: humanoid (human)
alignment: any alignment
ac: 17 (splint)
hp: 65 (10d8 + 20)
speed: 30 ft.
stats: [16, 13, 14, 10, 11, 10]
skills: Athletics +5, Perception +2
damage_resistances: fire
senses: blindsight 10 ft., darkvision 60 ft., passive Perception 12
languages: Common, Draconic
cr: 5 (1,800 XP)
actions:
  - name: Multiattack
    desc: The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.
  - name: Longsword
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
  - name: Shortsword
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
  - name: Fire Breath (Recharge 5–6)
    desc: "Exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much on a successful one."
\`\`\`

\`\`\`statblock
name: Cult Fanatic
size: Medium
type: humanoid (any race)
alignment: any non-good alignment
ac: 13 (leather armor)
hp: 33 (6d8 + 6)
speed: 30 ft.
stats: [11, 14, 12, 10, 13, 14]
skills: Deception +4, Persuasion +4, Religion +2
senses: passive Perception 11
languages: any one language (usually Common)
cr: 2 (450 XP)
traits:
  - name: Dark Devotion
    desc: The fanatic has advantage on saving throws against being charmed or frightened.
  - name: Spellcasting
    desc: "The fanatic is a 4th-level spellcaster (DC 11, +3 to hit with spell attacks). Cantrips: light, sacred flame, thaumaturgy; 1st level (4 slots): command, inflict wounds, shield of faith; 2nd level (3 slots): hold person, spiritual weapon."
actions:
  - name: Multiattack
    desc: The fanatic makes two melee attacks.
  - name: Dagger
    desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
\`\`\`
`
  },
  {
    id: "rot-spells-supplement",
    title: "The Rise of Tiamat - Spells Supplement",
    folder: "Adventures/The Rise of Tiamat",
    category: "Spell",
    tags: ["rot", "spells", "supplement", "wizard", "cleric", "druid"],
    aliases: ["Rise of Tiamat Spells", "RoT Spells"],
    content: `---
title: The Rise of Tiamat - Spells Supplement
category: Spell
folder: Adventures/The Rise of Tiamat
tags: [rot, spells, supplement, wizard, cleric, druid]
source: The Rise of Tiamat
---

# The Rise of Tiamat: Spells Supplement

Complete reference for spells utilized by dragons, cult wizards, and divine agents throughout the Tyranny of Dragons campaign.

---

### Chromatic Orb
*1st-level evocation*  
- **Casting Time**: 1 action  
- **Range**: 90 feet  
- **Components**: V, S, M (a diamond worth at least 50 gp)  
- **Duration**: Instantaneous  
You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.  
*At Higher Levels*: +1d8 for each slot above 1st.

---

### Continual Flame
*2nd-level evocation*  
- **Casting Time**: 1 action  
- **Range**: Touch  
- **Components**: V, S, M (ruby dust worth 50 gp, consumed)  
- **Duration**: Until dispelled  
A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered and hidden but not smothered or quenched.

---

### Evard's Black Tentacles
*4th-level conjuration*  
- **Casting Time**: 1 action  
- **Range**: 90 feet  
- **Components**: V, S, M (a piece of tentacle from a giant octopus or squid)  
- **Duration**: Concentration, up to 1 minute  
Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground into difficult terrain. When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained takes 3d6 bludgeoning damage. A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC.

---

### Fire Shield
*4th-level evocation*  
- **Casting Time**: 1 action  
- **Range**: Self  
- **Components**: V, S, M (a bit of phosphorus or a firefly)  
- **Duration**: 10 minutes  
Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early as an action. The flames provide you with a warm shield (resistance to cold) or a chill shield (resistance to fire). In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame, dealing 2d8 fire damage (warm shield) or 2d8 cold damage (chill shield) to the attacker.

---

### Glyph of Warding
*3rd-level abjuration*  
- **Casting Time**: 1 hour  
- **Range**: Touch  
- **Components**: V, S, M (incense and powdered diamond worth at least 200 gp, consumed)  
- **Duration**: Until dispelled or triggered  
When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed. You set the trigger (e.g. stepping on the glyph or opening the chest). The glyph can store an **Explosive Rune** (5d8 damage of chosen type to all within 20 ft., Dex save half) or a **Spell Glyph** storing a harmful spell up to 3rd level that targets the triggering creature.

---

### Mislead
*5th-level illusion*  
- **Casting Time**: 1 action  
- **Range**: Self  
- **Components**: S  
- **Duration**: Concentration, up to 1 hour  
You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell. You can use your action to move your illusory double up to twice your speed and make it gesture, talk, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were in its space.

---

### Move Earth
*6th-level transmutation*  
- **Casting Time**: 1 action  
- **Range**: 120 feet  
- **Components**: V, S, M (an iron blade and a small bag of soil)  
- **Duration**: Concentration, up to 2 hours  
Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration (digging trenches, raising banks, flattening hills). The change occurs over 10 minutes. This spell cannot manipulate natural stone or stone construction.

---

### Wish
*9th-level conjuration*  
- **Casting Time**: 1 action  
- **Range**: Self  
- **Components**: V  
- **Duration**: Instantaneous  
Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality.  
- The basic use is to duplicate any other spell of 8th level or lower without needing to meet any requirements, components, or casting time.
- Alternatively, you can create one object up to 25,000 gp value, heal up to 20 creatures to full HP and end all conditions, grant 10 creatures resistance to a damage type, grant 10 creatures immunity to a spell for 8 hours, or undo a single recent event.
- Stress: Casting Wish for anything other than duplicating a spell inflicts severe stress: you take 1d10 necrotic damage per level of spell you cast until a long rest, Strength drops to 3 for 2d4 days, and there is a 33 percent chance you are unable to ever cast wish again.
`
  }
];
