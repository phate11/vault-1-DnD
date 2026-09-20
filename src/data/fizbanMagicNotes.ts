import { VaultNote } from '../types';

export const fizbanMagicNotes: VaultNote[] = [
  {
    id: "fizban-spells",
    title: "Dragon Magic & Spells",
    folder: "Fizban's Treasury of Dragons/Dragon Magic",
    category: "Spell",
    tags: ["fizbans", "spells", "magic", "draconic", "bard", "sorcerer", "wizard", "warlock", "druid", "ranger", "artificer"],
    aliases: [
      "Nathair's Mischief",
      "Rime's Binding Ice",
      "Ashardalon's Stride",
      "Raulothim's Psychic Lance",
      "Summon Draconic Spirit",
      "Fizban's Platinum Shield",
      "Draconic Transformation"
    ],
    content: `---
title: Dragon Magic & Spells
category: Spell
folder: Fizban's Treasury of Dragons/Dragon Magic
tags: [fizbans, spells, magic, draconic, bard, sorcerer, wizard, warlock, druid, ranger, artificer]
---

# Dragon Magic & Spells

> *"I am less guarded with my spells than I am with my recipes. Magic shared is soon improved. But when it comes to my pudding, well, you can't fix perfect."*  
> — **Fizban**

The magic woven through the fabric of the Material Plane is concentrated in dragons and their lairs. Below are the 7 draconic spells introduced in *Fizban's Treasury of Dragons*.

### Spell Summary Table
| Level | Spell | School | Conc. | Ritual | Classes |
|---|---|---|---|---|---|
| 2nd | **Nathair's Mischief** | Illusion | Yes | No | Bard, Sorcerer, Wizard |
| 2nd | **Rime's Binding Ice** | Evocation | No | No | Sorcerer, Wizard |
| 3rd | **Ashardalon's Stride** | Transmutation | Yes | No | Artificer, Ranger, Sorcerer, Wizard |
| 4th | **Raulothim's Psychic Lance** | Enchantment | No | No | Bard, Sorcerer, Warlock, Wizard |
| 5th | **Summon Draconic Spirit** | Conjuration | Yes | No | Druid, Sorcerer, Wizard |
| 6th | **Fizban's Platinum Shield** | Abjuration | Yes | No | Sorcerer, Wizard |
| 7th | **Draconic Transformation** | Transmutation | Yes | No | Druid, Sorcerer, Wizard |

---

## 2nd Level

### Nathair's Mischief
*2nd-Level Illusion*  
- **Casting Time**: 1 action  
- **Range**: 60 feet  
- **Components**: S, M (a piece of crust from an apple pie)  
- **Duration**: Concentration, up to 1 minute  
- **Classes**: Bard, Sorcerer, Wizard  

You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced, and roll again at the start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll.

| d4 | Effect |
|---|---|
| **1** | **Apple Pie**: The smell of apple pie fills the air; each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn. |
| **2** | **Flower Spray**: Bouquets of flowers appear all around; each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces. |
| **3** | **Giggle**: Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction. |
| **4** | **Molasses**: Drops of molasses hover in the cube, making it difficult terrain until the start of your next turn. |

---

### Rime's Binding Ice
*2nd-Level Evocation*  
- **Casting Time**: 1 action  
- **Range**: Self (30-foot cone)  
- **Components**: S, M (a vial of meltwater)  
- **Duration**: Instantaneous  
- **Classes**: Sorcerer, Wizard  

A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes **3d8 cold damage** and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its **speed reduced to 0**. On a successful save, a creature takes half as much damage and isn't hindered by ice.  
**At Higher Levels**: When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by **1d8** for each slot level above 2nd.

---

## 3rd Level

### Ashardalon's Stride
*3rd-Level Transmutation*  
- **Casting Time**: 1 bonus action  
- **Range**: Self  
- **Components**: V, S  
- **Duration**: Concentration, up to 1 minute  
- **Classes**: Artificer, Ranger, Sorcerer, Wizard  

The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by **20 feet** and moving doesn't provoke opportunity attacks.  
When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes **1d6 fire damage** from your trail of heat. A creature or object can take this damage only once during a turn.  
**At Higher Levels**: When you cast this spell using a spell slot of 4th level or higher, increase your speed by **5 feet** for each spell slot level above 3rd, and the fire damage increases by **1d6** for each slot level above 3rd.

---

## 4th Level

### Raulothim's Psychic Lance
*4th-Level Enchantment*  
- **Casting Time**: 1 action  
- **Range**: 120 feet  
- **Components**: V  
- **Duration**: Instantaneous  
- **Classes**: Bard, Sorcerer, Warlock, Wizard  

You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter a creature's name. If the named target is within range, it becomes the spell's target even if you can't see it. If the named target isn't within range, the lance dissipates without effect.  
The target must make an Intelligence saving throw. On a failed save, the target takes **7d6 psychic damage** and is **incapacitated until the start of your next turn**. On a successful save, the creature takes half as much damage and isn't incapacitated.  
**At Higher Levels**: When you cast this spell using a spell slot of 5th level or higher, the damage increases by **1d6** for each slot level above 4th.

---

## 5th Level

### Summon Draconic Spirit
*5th-Level Conjuration*  
- **Casting Time**: 1 action  
- **Range**: 60 feet  
- **Components**: V, S, M (an object with the image of a dragon engraved on it, worth at least 500 gp)  
- **Duration**: Concentration, up to 1 hour  
- **Classes**: Druid, Sorcerer, Wizard  

You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the **Draconic Spirit** stat block. When you cast this spell, choose a family of dragon: **chromatic, gem, or metallic**. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.  
The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.  
**At Higher Levels**: When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block.

\`\`\`statblock
monster: Draconic Spirit
size: Large
type: Dragon
alignment: Neutral
ac: 14 + the level of the spell (natural armor)
hp: 50 + 10 for each spell level above 5th (Hit Dice: d10s equal to spell level)
speed: 30 ft., fly 60 ft., swim 30 ft.
stats: [19, 14, 17, 10, 14, 14]
damage_resistances: "Chromatic & Metallic: acid, cold, fire, lightning, poison; Gem: force, necrotic, psychic, radiant, thunder"
condition_immunities: charmed, frightened, poisoned
senses: blindsight 30 ft., darkvision 60 ft., passive Perception 12
languages: Draconic, understands the languages you speak
cr: equals your proficiency bonus
traits:
  - name: Shared Resistances
    desc: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends."
actions:
  - name: Multiattack
    desc: "The dragon makes a number of Rend attacks equal to half the spell's level (rounded down), and it uses Breath Weapon."
  - name: Rend
    desc: "Melee Weapon Attack: your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell's level piercing damage."
  - name: Breath Weapon
    desc: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."
\`\`\`

---

## 6th Level

### Fizban's Platinum Shield
*6th-Level Abjuration*  
- **Casting Time**: 1 bonus action  
- **Range**: 60 feet  
- **Components**: V, S, M (a platinum-plated dragon scale, worth at least 500 gp)  
- **Duration**: Concentration, up to 1 minute  
- **Classes**: Sorcerer, Wizard  

You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet. While surrounded by the field, a creature gains:
- **Cover**: The creature has half cover (+2 bonus to AC and Dexterity saving throws).
- **Damage Resistance**: Resistance to acid, cold, fire, lightning, and poison damage.
- **Evasion**: If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.
- **Bonus Action Move**: As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field.

---

## 7th Level

### Draconic Transformation
*7th-Level Transmutation*  
- **Casting Time**: 1 bonus action  
- **Range**: Self  
- **Components**: V, S, M (a statuette of a dragon, worth at least 500 gp)  
- **Duration**: Concentration, up to 1 minute  
- **Classes**: Druid, Sorcerer, Wizard  

With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features. You gain the following benefits until the spell ends:
- **Blindsight**: You have blindsight with a range of 30 feet (effective vision even in blindness/darkness; detects invisible creatures unless hidden).
- **Breath Weapon**: When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a **60-foot cone**. Each creature in that area must make a Dexterity saving throw, taking **6d8 force damage** on a failed save, or half as much on a successful one.
- **Wings**: Incorporeal wings sprout from your back, giving you a **flying speed of 60 feet**.

---

*Related notes: [[Draconic Magic Items & Hoard Items]], [[Draconic Gifts & Hoard Quirks]], [[The Draconomicon]].*
`
  },
  {
    id: "fizban-magic-items-and-hoards",
    title: "Draconic Magic Items & Hoard Items",
    folder: "Fizban's Treasury of Dragons/Dragon Magic",
    category: "Magic Item",
    tags: ["fizbans", "magic-items", "hoard-items", "treasure", "dragon-magic"],
    aliases: [
      "Amethyst Lodestone", "Crystal Blade", "Dragonhide Belt", "Dragonlance",
      "Dragon Wing Bow", "Emerald Pen", "Flail of Tiamat", "Gold Canary Figurine",
      "Platinum Scarf", "Potion of Dragon's Majesty", "Ruby Weave Gem",
      "Sapphire Buckler", "Topaz Annihilator", "Dragon's Wrath Weapon",
      "Dragon-Touched Focus", "Dragon Vessel", "Scaled Ornament"
    ],
    content: `---
title: Draconic Magic Items & Hoard Items
category: Magic Item
folder: Fizban's Treasury of Dragons/Dragon Magic
tags: [fizbans, magic-items, hoard-items, treasure, dragon-magic]
---

# Draconic Magic Items & Hoard Items

> *"If you happen to find yourself in possession of a platinum scarf, be prepared for side effects: head swivels, gasps of admiration, and myriad compliments."*  
> — **Fizban**

---

## 💎 Standalone Magic Items

### Amethyst Lodestone
*Wondrous Item, Very Rare (Requires Attunement)*  
A fist-sized chunk of amethyst infused with an amethyst dragon's gravitational mastery. Advantage on Strength saving throws. Has 6 charges (regains 1d6 daily at dawn):
- **Flight (1 Charge)**: Bonus action to gain flying speed equal to walking speed + hover for 10 minutes.
- **Gravitational Thrust (1 Charge)**: Action; target within 60 ft must succeed on a DC 18 Strength save or be pushed up to 20 feet in a chosen direction.
- **Reverse Gravity (3 Charges)**: Cast *reverse gravity* (save DC 18).

### Crystal Blade
*Weapon (Any Sword), Rare (Requires Attunement)*  
Fashioned from a crystal dragon horn or spine. Extra **1d8 radiant damage** on a hit. Has 3 charges (regains 1d3 daily at dawn); on hit, spend 1 charge to regain HP equal to the extra radiant damage dealt. Can shed light (30-ft bright, 30-ft dim) or douse as a bonus action.

### Dragonhide Belt
*Wondrous Item, Uncommon (+1), Rare (+2), or Very Rare (+3) (Requires Attunement by a Monk)*  
Increases monk ki saving throw DC by +1, +2, or +3. In addition, as an action you can regain ki points equal to a roll of your Martial Arts die (once per dawn).

### Dragonlance
*Weapon (Lance or Pike), Legendary (Requires Attunement)*  
Forged from rare metal with artifacts of Bahamut. +3 bonus to attack and damage rolls. When hitting a Dragon, deals an extra **3d6 force damage**, and any Dragon of your choice that you can see within 30 feet can immediately use its reaction to make a melee attack.

### Dragon Wing Bow
*Weapon (Any Bow), Rare (Requires Attunement)*  
Infused with dragon's breath essence. Extra **1d6 damage** on hit matching the infused breath (acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder). If loaded with no ammunition, it generates its own magical ammo on string pull.

### Emerald Pen
*Wondrous Item, Uncommon*  
Tipped with emerald nib; requires no ink. Cast *illusory script* at will without material components.

### Flail of Tiamat
*Weapon (Flail), Legendary (Requires Attunement)*  
Five jagged heads shaped like the five chromatic dragons. +3 to attack and damage rolls; deals extra **5d4 damage** of your choice (acid, cold, fire, lightning, or poison). Action to breathe a **90-foot cone of multicolored flames**: DC 18 Dex save or take **14d6 damage** of chosen type (half on success; once per dawn).

### Gold Canary Figurine of Wondrous Power
*Wondrous Item, Legendary*  
Small gold statuette of a canary. Command word and throw within 60 ft:
- **Giant Canary Form**: Becomes a Giant Canary (Large Beast, AC 12, 26 HP, fly 60 ft, Peck +4, 7 piercing) for up to 8 hours as a mount (once per dawn).
- **Gold Dragon Form**: When missing half or more HP, speak command word to transform into an **Adult Gold Dragon** (Monster Manual stat block) for up to 1 hour (no legendary or lair actions; once per 1 year).

### Platinum Scarf
*Wondrous Item, Legendary (Requires Attunement)*  
Scarf covered in platinum-colored scales. As an action, pull a scale (up to 3 per dawn) for one effect:
- **Breath of Life**: Regain **10d4 hit points** on touch.
- **Platinum Shield**: Becomes a **+1 shield** granting radiant damage immunity for 1 hour.
- **Radiant Hammer**: Becomes a magic light hammer dealing **2d4 radiant damage** (plus extra **2d4 radiant** to chromatic dragons) for 1 hour.

### Potion of Dragon's Majesty
*Potion, Legendary*  
Suspended scale of a chromatic, gem, or metallic dragon. Drink to transform into an **adult dragon** of that kind for 1 hour (retain mental stats, languages, memories; cannot use Change Shape, legendary, or lair actions).

### Ruby Weave Gem
*Wondrous Item, Legendary (Requires Attunement by a Spellcaster)*  
Acts as a spellcasting focus. Has 3 charges (regains all daily at dawn). Spend up to 3 charges to ignore spell material components with a gold piece cost (up to 500 gp per charge). After finishing a long rest, choose a spell from **any class list** of a level you can cast; you know it and can cast it with your spell slots until your next long rest.

### Sapphire Buckler
*Armor (Shield), Very Rare (Requires Attunement)*  
Resistance to psychic and thunder damage. Reaction when damaged by a creature within 5 ft: deal **2d6 thunder damage** to it. Action: locate Aberrations within 1 mile (once per dawn).

### Topaz Annihilator
*Weapon (Firearm), Legendary (Requires Attunement)*  
Two-handed ranged weapon (range 100/300 ft) powered by a yellow topaz scale. Deals **2d6 necrotic damage** on a hit. If this reduces a creature/object to 0 HP, it is reduced to dust (revivable only via *true resurrection* or *wish*). Action: cast *disintegrate* (DC 18; once per dawn).

---

## 🪙 Hoard Magic Items
Hoard items absorb the ambient magical energy of a dragon's hoard, steeping across four progressive states:

| State | Dragon Age Required | Time Required |
|---|---|---|
| **Slumbering** | Base / Any | Base State |
| **Stirring** | Young Dragon (Hoard 1 yr / Slain 8 hrs) | Rare |
| **Wakened** | Adult Dragon (Hoard 1 yr / Slain 8 hrs) | Very Rare |
| **Ascendant** | Ancient Dragon (Hoard 1 yr / Slain 8 hrs) | Legendary |

- **Decreasing Power**: If unattuned and outside a hoard, decreases by one state every 30 days until Slumbering.
- **Draconic Quirks (d8)**:
  1. Points toward the last hoard it steeped in.
  2. Bearer can speak and understand Draconic.
  3. Glows softly within 60 ft of a Dragon or hoard item.
  4. Swimming speed equal to walking speed.
  5. Advantage on Intelligence (History) checks.
  6. Advantage on Charisma (Intimidation) checks against non-Dragons.
  7. Resistance to the breath weapon damage type of the last hoard dragon.
  8. Bearer dreams of the dragon whose hoard it last steeped in.

### 1. Dragon's Wrath Weapon
*Weapon (Any), Rarity Varies (Requires Attunement)*  
- **Slumbering (Uncommon)**: On rolling a 20 on attack, each creature within 5 ft of target takes 5 damage of breath type.
- **Stirring (Rare)**: +1 bonus to attack/damage; deals extra **1d6** damage of breath type on hit.
- **Wakened (Very Rare)**: +2 bonus to attack/damage; deals extra **2d6** damage on hit. Action: unleash a **30-foot cone** of breath energy (DC 16 Dex, **8d6** damage; once per dawn).
- **Ascendant (Legendary)**: +3 bonus to attack/damage; deals extra **3d6** damage on hit. Breath cone increases to **60 feet**, DC 18, dealing **12d6** damage (once per dawn).

### 2. Dragon-Touched Focus
*Wondrous Item, Rarity Varies (Requires Attunement by a Spellcaster)*  
- **Slumbering (Uncommon)**: Advantage on initiative rolls; acts as spellcasting focus for all spells.
- **Stirring (Rare)**:
  - *Chromatic*: Roll d6 when casting acid, cold, fire, lightning, poison spell; add roll to one damage roll.
  - *Gem*: When expending a spell slot, teleport up to 15 ft to unoccupied space.
  - *Metallic*: Reaction when a creature within 30 ft makes a saving throw to grant advantage.
- **Wakened (Very Rare)**: Cast spells once per dawn:
  - *Chromatic*: *hold monster*, *Rime's binding ice*
  - *Gem*: *Rary's telepathic bond*, *Raulothim's psychic lance*
  - *Metallic*: *Fizban's platinum shield*, *legend lore*
- **Ascendant (Legendary)**: Cast any 1st-level or higher spell as if cast with a **9th-level spell slot** (once per dawn).

### 3. Dragon Vessel
*Wondrous Item, Rarity Varies (Requires Attunement)*  
- **Slumbering (Uncommon)**: Fill with ale, olive oil, *potion of healing*, or *potion of climbing* (once per dawn; expires in 24 hrs).
- **Stirring (Rare)**: Also can produce mead, *potion of fire breath*, or *potion of healing (greater)*.
- **Wakened (Very Rare)**: Also can produce wine, *potion of flying*, or *potion of healing (superior)*.
- **Ascendant (Legendary)**: Also can produce whiskey, *potion of healing (supreme)*, or *potion of dragon's majesty*.

### 4. Scaled Ornament
*Wondrous Item, Rarity Varies (Requires Attunement)*  
- **Slumbering (Uncommon)**: Advantage on saves to avoid/end charmed or frightened.
- **Stirring (Rare)**: +1 bonus to AC; immunity to charmed and frightened; allies within 30 ft have advantage on saves vs charmed/frightened.
- **Wakened (Very Rare)**: Reaction when taking breath weapon damage type: take **0 damage** and heal HP equal to damage prevented (once per dawn).
- **Ascendant (Legendary)**: Gain flying speed equal to walking speed with hover, manifesting spectral dragon wings.

---

*Related notes: [[Dragon Magic & Spells]], [[Draconic Gifts & Hoard Quirks]], [[Dragon Lairs & Hoard Generation]].*
`
  },
  {
    id: "fizban-draconic-gifts",
    title: "Draconic Gifts & Hoard Quirks",
    folder: "Fizban's Treasury of Dragons/Dragon Magic",
    category: "Tool",
    tags: ["fizbans", "draconic-gifts", "supernatural-gifts", "charms", "boons"],
    aliases: [
      "Draconic Gifts", "Draconic Familiar", "Draconic Rebirth", "Draconic Senses",
      "Echo of Dragonsight", "Frightful Presence Gift", "Psionic Reach", "Scaled Toughness",
      "Tongue of the Dragon"
    ],
    content: `---
title: Draconic Gifts & Hoard Quirks
category: Tool
folder: Fizban's Treasury of Dragons/Dragon Magic
tags: [fizbans, draconic-gifts, supernatural-gifts, charms, boons]
---

# Draconic Gifts & Supernatural Investitures

> *"You know the proverb: don't look a draconic gift in the mouth. Some say it's because of the breath weapon. But really it's the smell."*  
> — **Fizban**

When a dragon dies or chooses a worthy mortal heir, its magical essence can take root in an adventurer. The investiture of draconic power can range from minor boons to complete bodily transformations.

### Draconic Gift Rarity Table
| Rarity | Bestowing Dragon Age Category |
|---|---|
| **Uncommon** | Wyrmling |
| **Rare** | Young Dragon |
| **Very Rare** | Adult Dragon |
| **Legendary** | Ancient Dragon |

### Draconic Marks (d4)
| d4 | Visual Manifestation |
|---|---|
| 1 | One or both eyes change color to resemble the dragon's eyes or scales. |
| 2 | Hair (or streak) changes color to match the dragon's scales. |
| 3 | A mark like a stylized dragon eye or claw appears on the body. |
| 4 | Patches of dragon scales appear on the neck, shoulders, or forearms. |

---

## 🎁 Draconic Gift Descriptions

### Draconic Familiar
*Draconic Gift, Uncommon*  
Cast *find familiar* as a ritual without material components; the familiar always takes the form of a **pseudodragon**. When taking the Attack action, forgo one attack to allow the pseudodragon to attack with its reaction.

### Draconic Rebirth
*Draconic Gift, Uncommon*  
You become a dragonborn, replacing previous racial traits with Chromatic, Gem, or Metallic Dragonborn traits. Retain existing skill proficiencies or gain proficiency in two skills of your choice.

### Draconic Senses
*Draconic Gift, Rare*  
- **Blindsight**: 10 feet.
- **Keen Senses**: Advantage on Wisdom (Perception) checks.

### Echo of Dragonsight
*Draconic Gift, Very Rare*  
Cast *contact other plane* as a ritual to contact a dragon echo on another world of the Material Plane.

### Frightful Presence
*Draconic Gift, Very Rare*  
As a bonus action, manifest frightful presence. Each chosen creature within 120 ft must succeed on a Wisdom save (**DC = 8 + PB + Cha mod**) or be frightened for 1 minute (repeats save each turn). Usable PB times per long rest.

### Psionic Reach
*Draconic Gift, Very Rare*  
Resistance to psychic damage. Learn *telekinesis* and cast it once per long rest without expending a spell slot (or using spell slots of appropriate level; Int, Wis, or Cha).

### Scaled Toughness
*Draconic Gift, Legendary*  
Resistance to piercing and slashing damage.

### Tongue of the Dragon
*Draconic Gift, Uncommon*  
- **Dragon's Speech**: Speak, read, and write Draconic.
- **Dragon's Voice**: Bonus action to make your voice audible up to 300 feet away for 1 minute.
- **Dragon's Wiles**: Advantage on Charisma (Persuasion) checks.

---

## 📜 Feats as Draconic Gifts
At DM discretion, feats can be awarded as variant draconic gifts:
- **Alert / Observant**: Heightened draconic senses.
- **Durable / Resilient / Tough**: Infused dragon's blood resilience.
- **Elemental Adept**: Elemental breath affinity.
- **Inspiring Leader**: Draconic majesty.
- **Keen Mind**: Draconic intellect and dragonsight.
- **Lucky**: Dragon's fortune.
- **Magic Initiate**: Inherent dragon magic in mortal blood.

---

*Related notes: [[Draconic Magic Items & Hoard Items]], [[Dragon Magic & Spells]], [[Dragon Lairs & Hoard Generation]].*
`
  }
];
