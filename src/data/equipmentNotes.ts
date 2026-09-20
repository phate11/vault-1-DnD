import { VaultNote } from '../types';

export const equipmentNotes: VaultNote[] = [
  {
    id: "equipment-coinage-wealth",
    title: "Coinage, Wealth & Trade Goods",
    folder: "Equipment",
    category: "Equipment",
    tags: ["equipment", "wealth", "coins", "lifestyle", "expenses", "services"],
    aliases: ["Currency", "Trade Goods", "Expenses", "Services"],
    content: `---
title: Coinage, Wealth & Trade Goods
category: Equipment
folder: Equipment
tags: [equipment, wealth, coins, lifestyle, expenses, services]
---

# Coinage, Wealth & Trade Goods

Common coins come in several denominations: copper piece (cp), silver piece (sp), electrum piece (ep), gold piece (gp), and platinum piece (pp). A standard coin weighs about a third of an ounce (50 coins weigh a pound).

### Standard Exchange Rates
| Coin | cp | sp | ep | gp | pp |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Copper (cp)** | 1 | 1/10 | 1/50 | 1/100 | 1/1,000 |
| **Silver (sp)** | 10 | 1 | 1/5 | 1/10 | 1/100 |
| **Electrum (ep)** | 50 | 5 | 1 | 1/2 | 1/20 |
| **Gold (gp)** | 100 | 10 | 2 | 1 | 1/10 |
| **Platinum (pp)** | 1,000 | 100 | 20 | 10 | 1 |

### Starting Wealth by Class
- **Barbarian**: 2d4 × 10 gp
- **Bard**: 5d4 × 10 gp
- **Cleric**: 5d4 × 10 gp
- **Druid**: 2d4 × 10 gp
- **Fighter**: 5d4 × 10 gp
- **Monk**: 5d4 gp
- **Paladin**: 5d4 × 10 gp
- **Ranger**: 5d4 × 10 gp
- **Rogue**: 4d4 × 10 gp
- **Sorcerer**: 3d4 × 10 gp
- **Warlock**: 4d4 × 10 gp
- **Wizard**: 4d4 × 10 gp

---

## Trade Goods
| Cost | Goods |
| :---: | :--- |
| **1 cp** | 1 lb. of wheat |
| **2 cp** | 1 lb. of flour or one chicken |
| **5 cp** | 1 lb. of salt |
| **1 sp** | 1 lb. of iron or 1 sq. yd. of canvas |
| **5 sp** | 1 lb. of copper or 1 sq. yd. of cotton cloth |
| **1 gp** | 1 lb. of ginger or one goat |
| **2 gp** | 1 lb. of cinnamon or pepper, or one sheep |
| **3 gp** | 1 lb. of cloves or one pig |
| **5 gp** | 1 lb. of silver or 1 sq. yd. of linen |
| **10 gp** | 1 sq. yd. of silk or one cow |
| **15 gp** | 1 lb. of saffron or one ox |
| **50 gp** | 1 lb. of gold |
| **500 gp** | 1 lb. of platinum |

---

## Lifestyle Expenses
| Lifestyle | Price/Day |
| :--- | :---: |
| **Wretched** | — |
| **Squalid** | 1 sp |
| **Poor** | 2 sp |
| **Modest** | 1 gp |
| **Comfortable** | 2 gp |
| **Wealthy** | 4 gp |
| **Aristocratic** | 10 gp minimum |

### Food, Drink, and Lodging
| Item | Cost | Item | Cost |
| :--- | :---: | :--- | :---: |
| **Ale (Gallon)** | 2 sp | **Inn stay (Squalid)** | 7 cp |
| **Ale (Mug)** | 4 cp | **Inn stay (Poor)** | 1 sp |
| **Banquet (per person)** | 10 gp | **Inn stay (Modest)** | 5 sp |
| **Bread, loaf** | 2 cp | **Inn stay (Comfortable)** | 8 sp |
| **Cheese, hunk** | 1 sp | **Inn stay (Wealthy)** | 2 gp |
| **Meat, chunk** | 3 sp | **Inn stay (Aristocratic)** | 4 gp |
| **Wine (Common pitcher)** | 2 sp | **Meals (Poor per day)** | 6 cp |
| **Wine (Fine bottle)** | 10 gp | **Meals (Comfortable per day)** | 5 sp |

---

## Services & Hirelings
| Service | Pay |
| :--- | :--- |
| **Coach cab (Between towns)** | 3 cp per mile |
| **Coach cab (Within a city)** | 1 cp |
| **Hireling (Skilled)** | 2 gp per day |
| **Hireling (Untrained)** | 2 sp per day |
| **Messenger** | 2 cp per mile |
| **Road or gate toll** | 1 cp |
| **Ship's passage** | 1 sp per mile |

> [!info] Spellcasting Services
> Hiring someone to cast a common 1st or 2nd-level spell (e.g. [[Spells - Cantrips & 1st Level#Cure Wounds|cure wounds]] or [[Spells - Cantrips & 1st Level#Identify|identify]]) costs 10 to 50 gp plus material components. Higher-level spells require favors or dangerous quests.
`
  },
  {
    id: "equipment-armor-weapons",
    title: "Armor & Weapons Tables",
    folder: "Equipment",
    category: "Equipment",
    tags: ["equipment", "armor", "weapons", "combat"],
    aliases: ["Armor", "Weapons"],
    content: `---
title: Armor & Weapons Tables
category: Equipment
folder: Equipment
tags: [equipment, armor, weapons, combat]
---

# Armor & Weapons Tables

## Armor Table
| Armor | Cost | Armor Class (AC) | Strength | Stealth | Weight |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **Light Armor** | | | | | |
| Padded | 5 gp | 11 + Dex modifier | — | Disadvantage | 8 lb. |
| Leather | 10 gp | 11 + Dex modifier | — | — | 10 lb. |
| Studded leather | 45 gp | 12 + Dex modifier | — | — | 13 lb. |
| **Medium Armor** | | | | | |
| Hide | 10 gp | 12 + Dex modifier (max 2) | — | — | 12 lb. |
| Chain shirt | 50 gp | 13 + Dex modifier (max 2) | — | — | 20 lb. |
| Scale mail | 50 gp | 14 + Dex modifier (max 2) | — | Disadvantage | 45 lb. |
| Breastplate | 400 gp | 14 + Dex modifier (max 2) | — | — | 20 lb. |
| Half plate | 750 gp | 15 + Dex modifier (max 2) | — | Disadvantage | 40 lb. |
| **Heavy Armor** | | | | | |
| Ring mail | 30 gp | 14 | — | Disadvantage | 40 lb. |
| Chain mail | 75 gp | 16 | Str 13 | Disadvantage | 55 lb. |
| Splint | 200 gp | 17 | Str 15 | Disadvantage | 60 lb. |
| Plate | 1,500 gp | 18 | Str 15 | Disadvantage | 65 lb. |
| **Shield** | | | | | |
| Shield | 10 gp | +2 | — | — | 6 lb. |

### Donning and Doffing Armor
- **Light Armor**: Don 1 min / Doff 1 min
- **Medium Armor**: Don 5 min / Doff 1 min
- **Heavy Armor**: Don 10 min / Doff 5 min
- **Shield**: Don 1 action / Doff 1 action

---

## Weapons Table
| Name | Cost | Damage | Weight | Properties |
| :--- | :---: | :--- | :---: | :--- |
| **Simple Melee Weapons** | | | | |
| Club | 1 sp | 1d4 bludgeoning | 2 lb. | Light |
| Dagger | 2 gp | 1d4 piercing | 1 lb. | Finesse, light, thrown (range 20/60) |
| Greatclub | 2 sp | 1d8 bludgeoning | 10 lb. | Two-handed |
| Handaxe | 5 gp | 1d6 slashing | 2 lb. | Light, thrown (range 20/60) |
| Javelin | 5 sp | 1d6 piercing | 2 lb. | Thrown (range 30/120) |
| Light hammer | 2 gp | 1d4 bludgeoning | 2 lb. | Light, thrown (range 20/60) |
| Mace | 5 gp | 1d6 bludgeoning | 4 lb. | — |
| Quarterstaff | 2 sp | 1d6 bludgeoning | 4 lb. | Versatile (1d8) |
| Sickle | 1 gp | 1d4 slashing | 2 lb. | Light |
| Spear | 1 gp | 1d6 piercing | 3 lb. | Thrown (range 20/60), versatile (1d8) |
| Unarmed strike | — | 1 bludgeoning | — | — |
| **Simple Ranged Weapons** | | | | |
| Crossbow, light | 25 gp | 1d8 piercing | 5 lb. | Ammunition (range 80/320), loading, two-handed |
| Dart | 5 cp | 1d4 piercing | 1/4 lb. | Finesse, thrown (range 20/60) |
| Shortbow | 25 gp | 1d6 piercing | 2 lb. | Ammunition (range 80/320), two-handed |
| Sling | 1 sp | 1d4 bludgeoning | — | Ammunition (range 30/120) |
| **Martial Melee Weapons** | | | | |
| Battleaxe | 10 gp | 1d8 slashing | 4 lb. | Versatile (1d10) |
| Flail | 10 gp | 1d8 bludgeoning | 2 lb. | — |
| Glaive | 20 gp | 1d10 slashing | 6 lb. | Heavy, reach, two-handed |
| Greataxe | 30 gp | 1d12 slashing | 7 lb. | Heavy, two-handed |
| Greatsword | 50 gp | 2d6 slashing | 6 lb. | Heavy, two-handed |
| Halberd | 20 gp | 1d10 slashing | 6 lb. | Heavy, reach, two-handed |
| Lance | 10 gp | 1d12 piercing | 6 lb. | Reach, special |
| Longsword | 15 gp | 1d8 slashing | 3 lb. | Versatile (1d10) |
| Maul | 10 gp | 2d6 bludgeoning | 10 lb. | Heavy, two-handed |
| Morningstar | 15 gp | 1d8 piercing | 4 lb. | — |
| Pike | 5 gp | 1d10 piercing | 18 lb. | Heavy, reach, two-handed |
| Rapier | 25 gp | 1d8 piercing | 2 lb. | Finesse |
| Scimitar | 25 gp | 1d6 slashing | 3 lb. | Finesse, light |
| Shortsword | 10 gp | 1d6 piercing | 2 lb. | Finesse, light |
| Trident | 5 gp | 1d6 piercing | 4 lb. | Thrown (range 20/60), versatile (1d8) |
| War pick | 5 gp | 1d8 piercing | 2 lb. | — |
| Warhammer | 15 gp | 1d8 bludgeoning | 2 lb. | Versatile (1d10) |
| Whip | 2 gp | 1d4 slashing | 3 lb. | Finesse, reach |
| **Martial Ranged Weapons** | | | | |
| Blowgun | 10 gp | 1 piercing | 1 lb. | Ammunition (range 25/100), loading |
| Crossbow, hand | 75 gp | 1d6 piercing | 3 lb. | Ammunition (range 30/120), light, loading |
| Crossbow, heavy | 50 gp | 1d10 piercing | 18 lb. | Ammunition (range 100/400), heavy, loading, two-handed |
| Longbow | 50 gp | 1d8 piercing | 2 lb. | Ammunition (range 150/600), heavy, two-handed |
| Net | 1 gp | — | 3 lb. | Special, thrown (range 5/15) |

### Weapon Properties
- **Ammunition**: Must have ammo; draw ammo as part of attack; recover half after battle.
- **Finesse**: Choose Strength or Dexterity modifier for attack and damage.
- **Heavy**: Small creatures have disadvantage on attack rolls.
- **Light**: Small and easy to handle; ideal for two-weapon fighting.
- **Loading**: Fire only one piece of ammunition per action/bonus/reaction regardless of attacks.
- **Reach**: Adds 5 feet to reach when attacking.
- **Special**:
  - *Lance*: Disadvantage when targeting within 5 ft; requires two hands when unmounted.
  - *Net*: Large or smaller creature hit is [[Conditions#Restrained|restrained]]. DC 10 Strength check or 5 slashing damage (AC 10) frees creature. Only one attack allowed per turn.
- **Thrown**: Throw melee weapon using normal ability modifier (or Dex if finesse).
- **Two-Handed**: Requires two hands to wield.
- **Versatile**: Can be used with one or two hands (damage in parentheses when two-handed).
- **Silvered Weapons**: 100 gp to plate a weapon or 10 pieces of ammunition with silver to bypass monster resistances.
- **Improvised Weapons**: Object deals 1d4 damage (or equivalent weapon stats at DM's option).
`
  },
  {
    id: "equipment-adventuring-gear-packs",
    title: "Adventuring Gear & Equipment Packs",
    folder: "Equipment",
    category: "Equipment",
    tags: ["equipment", "gear", "packs", "adventuring"],
    aliases: ["Adventuring Gear", "Equipment Packs"],
    content: `---
title: Adventuring Gear & Equipment Packs
category: Equipment
folder: Equipment
tags: [equipment, gear, packs, adventuring]
---

# Adventuring Gear & Equipment Packs

### Adventuring Gear Table
| Item | Cost | Weight | Item | Cost | Weight |
| :--- | :---: | :---: | :--- | :---: | :---: |
| Abacus | 2 gp | 2 lb. | Holy symbol (Amulet) | 5 gp | 1 lb. |
| Acid (vial) | 25 gp | 1 lb. | Holy symbol (Emblem) | 5 gp | — |
| Alchemist's fire (flask) | 50 gp | 1 lb. | Holy symbol (Reliquary) | 5 gp | 2 lb. |
| Antitoxin (vial) | 50 gp | — | Holy water (flask) | 25 gp | 1 lb. |
| Arcane focus (Crystal) | 10 gp | 1 lb. | Hourglass | 25 gp | 1 lb. |
| Arcane focus (Orb) | 20 gp | 3 lb. | Hunting trap | 5 gp | 25 lb. |
| Arcane focus (Rod) | 10 gp | 2 lb. | Ink (1 oz bottle) | 10 gp | — |
| Arcane focus (Staff) | 5 gp | 4 lb. | Ink pen | 2 cp | — |
| Arcane focus (Wand) | 10 gp | 1 lb. | Jug or pitcher | 2 cp | 4 lb. |
| Backpack | 2 gp | 5 lb. | Ladder (10-foot) | 1 sp | 25 lb. |
| Ball bearings (bag of 1,000) | 1 gp | 2 lb. | Lamp | 5 sp | 1 lb. |
| Barrel | 2 gp | 70 lb. | Lantern, bullseye | 10 gp | 2 lb. |
| Basket | 4 sp | 2 lb. | Lantern, hooded | 5 gp | 2 lb. |
| Bedroll | 1 gp | 7 lb. | Lock | 10 gp | 1 lb. |
| Bell | 1 gp | — | Magnifying glass | 100 gp | — |
| Blanket | 5 sp | 3 lb. | Manacles | 2 gp | 6 lb. |
| Block and tackle | 1 gp | 5 lb. | Mess kit | 2 sp | 1 lb. |
| Book | 25 gp | 5 lb. | Mirror, steel | 5 gp | 1/2 lb. |
| Bottle, glass | 2 gp | 2 lb. | Oil (flask) | 1 sp | 1 lb. |
| Bucket | 5 cp | 2 lb. | Paper (one sheet) | 2 sp | — |
| Caltrops (bag of 20) | 1 gp | 2 lb. | Parchment (one sheet) | 1 sp | — |
| Candle | 1 cp | — | Perfume (vial) | 5 gp | — |
| Case, crossbow bolt | 1 gp | 1 lb. | Pick, miner's | 2 gp | 10 lb. |
| Case, map or scroll | 1 gp | 1 lb. | Piton | 5 cp | 1/4 lb. |
| Chain (10 feet) | 5 gp | 10 lb. | Poison, basic (vial) | 100 gp | — |
| Chalk (1 piece) | 1 cp | — | Pole (10-foot) | 5 cp | 7 lb. |
| Chest | 5 gp | 25 lb. | Pot, iron | 2 gp | 10 lb. |
| Climber's kit | 25 gp | 12 lb. | Potion of healing | 50 gp | 1/2 lb. |
| Clothes, common | 5 sp | 3 lb. | Pouch | 5 sp | 1 lb. |
| Clothes, costume | 5 gp | 4 lb. | Quiver | 1 gp | 1 lb. |
| Clothes, fine | 15 gp | 6 lb. | Ram, portable | 4 gp | 35 lb. |
| Clothes, traveler's | 2 gp | 4 lb. | Rations (1 day) | 5 sp | 2 lb. |
| Component pouch | 25 gp | 2 lb. | Robes | 1 gp | 4 lb. |
| Crowbar | 2 gp | 5 lb. | Rope, hempen (50 ft) | 1 gp | 10 lb. |
| Druidic focus (Mistletoe) | 1 gp | — | Rope, silk (50 ft) | 10 gp | 5 lb. |
| Druidic focus (Totem) | 1 gp | — | Sack | 1 cp | 1/2 lb. |
| Druidic focus (Wooden staff) | 5 gp | 4 lb. | Scale, merchant's | 5 gp | 3 lb. |
| Druidic focus (Yew wand) | 10 gp | 1 lb. | Sealing wax | 5 sp | — |
| Fishing tackle | 1 gp | 4 lb. | Shovel | 2 gp | 5 lb. |
| Flask or tankard | 2 cp | 1 lb. | Signal whistle | 5 cp | — |
| Grappling hook | 2 gp | 4 lb. | Signet ring | 5 gp | — |
| Hammer | 1 gp | 3 lb. | Soap | 2 cp | — |
| Hammer, sledge | 2 gp | 10 lb. | Spellbook | 50 gp | 3 lb. |
| Healer's kit | 5 gp | 3 lb. | Spikes, iron (10) | 1 gp | 5 lb. |
| Spyglass | 1,000 gp | 1 lb. | Tent, two-person | 2 gp | 20 lb. |
| Tinderbox | 5 sp | 1 lb. | Torch | 1 cp | 1 lb. |
| Vial | 1 gp | — | Waterskin | 2 sp | 5 lb. (full) |
| Whetstone | 1 cp | 1 lb. | | | |

---

## Equipment Packs (Complete Breakdown)
*(As referenced in Player's Handbook & Toolkit reference)*

### Burglar's Pack (16 gp)
- Backpack
- Bag of 1,000 ball bearings
- 10 feet of string
- A bell
- 5 candles
- Crowbar
- Hammer
- 10 pitons
- Hooded lantern
- 2 flasks of oil
- 5 days rations
- Tinderbox
- Waterskin
- 50 feet hempen rope strapped to side

### Diplomat's Pack (39 gp)
- Chest
- 2 Map/Scroll Cases
- Fine clothes
- Bottle of ink
- Ink pen
- Lamp
- 2 flasks of oil
- 5 sheets of paper
- Vial of perfume
- Sealing wax
- Soap

### Dungeoneer's Pack (12 gp)
- Backpack
- Crowbar
- Hammer
- 10 pitons
- 10 torches
- Tinderbox
- 10 days rations
- Waterskin
- 50 feet hempen rope strapped to side

### Entertainer's Pack (40 gp)
- Backpack
- Bedroll
- 2 costumes
- 5 candles
- 5 days rations
- Waterskin
- Disguise kit

### Explorer's Pack (10 gp)
- Backpack
- Bedroll
- Mess kit
- Tinderbox
- 10 torches
- 10 days rations
- Waterskin
- 50 feet hempen rope strapped to side

### Priest's Pack (19 gp)
- Backpack
- Blanket
- 10 candles
- Tinderbox
- Alms box
- 2 blocks of incense
- Censer
- Vestments
- 2 days rations
- Waterskin

### Scholar's Pack (40 gp)
- Backpack
- Lore Book
- Bottle of ink
- Ink pen
- 10 sheets of parchment
- Small bag of sand
- Small knife

---

## Container Capacity Table
| Container | Capacity |
| :--- | :--- |
| **Backpack** | 1 cubic foot / 30 pounds of gear (bedroll/rope can be strapped outside) |
| **Barrel** | 40 gallons liquid, 4 cubic feet solid |
| **Basket** | 2 cubic feet / 40 pounds of gear |
| **Bottle** | 1½ pints liquid |
| **Bucket** | 3 gallons liquid, 1/2 cubic foot solid |
| **Chest** | 12 cubic feet / 300 pounds of gear |
| **Flask or tankard** | 1 pint liquid |
| **Jug or pitcher** | 1 gallon liquid |
| **Pot, iron** | 1 gallon liquid |
| **Pouch** | 1/5 cubic foot / 6 pounds of gear |
| **Sack** | 1 cubic foot / 30 pounds of gear |
| **Vial** | 4 ounces liquid |
| **Waterskin** | 4 pints liquid |

---

## Mounts, Vehicles & Tack
| Item | Cost | Speed | Carrying Capacity |
| :--- | :---: | :---: | :---: |
| **Camel** | 50 gp | 50 ft. | 480 lb. |
| **Donkey or mule** | 8 gp | 40 ft. | 420 lb. |
| **Elephant** | 200 gp | 40 ft. | 1,320 lb. |
| **Horse, draft** | 50 gp | 40 ft. | 540 lb. |
| **Horse, riding** | 75 gp | 60 ft. | 480 lb. |
| **Mastiff** | 25 gp | 40 ft. | 195 lb. |
| **Pony** | 30 gp | 40 ft. | 225 lb. |
| **Warhorse** | 400 gp | 60 ft. | 540 lb. |

### Tack, Harness, and Drawn Vehicles
- **Carriage**: 100 gp (600 lb.)
- **Cart**: 15 gp (200 lb.)
- **Chariot**: 250 gp (100 lb.)
- **Sled**: 20 gp (300 lb.)
- **Wagon**: 35 gp (400 lb.)
- **Barding**: 4× armor cost, 2× armor weight.
- **Saddles**: Exotic (60 gp, 40 lb.), Military (20 gp, 30 lb., advantage to remain mounted), Pack (5 gp, 15 lb.), Riding (10 gp, 25 lb.).

### Waterborne Vehicles
- **Galley**: 30,000 gp (4 mph)
- **Keelboat**: 3,000 gp (1 mph)
- **Longship**: 10,000 gp (3 mph)
- **Rowboat**: 50 gp (1½ mph, 100 lb.)
- **Sailing ship**: 10,000 gp (2 mph)
- **Warship**: 25,000 gp (2½ mph)
`
  },
  {
    id: "equipment-advanced-toolkits",
    title: "Advanced Toolkits & Crafting Mechanics",
    folder: "Equipment",
    category: "Tool",
    tags: ["equipment", "tools", "kits", "alchemy", "crafting", "poisons", "thief"],
    aliases: ["Tools", "Kits", "Tool Mechanics"],
    content: `---
title: Advanced Toolkits & Crafting Mechanics
category: Tool
folder: Equipment
tags: [equipment, tools, kits, alchemy, crafting, poisons, thief]
source: PHB & Toolkit Mechanics
---

# Advanced Toolkits & Crafting Mechanics

A tool helps you do something you couldn't otherwise do, such as craft or repair an item, forge a document, or pick a lock. Proficiency with a tool allows you to add your proficiency bonus to any ability check made with that tool.

### Standard Tools Table
| Item | Cost | Weight |
| :--- | :---: | :---: |
| **Artisan's Tools** | | |
| Alchemist's supplies | 50 gp | 8 lb. |
| Brewer's supplies | 20 gp | 9 lb. |
| Calligrapher's supplies | 10 gp | 5 lb. |
| Carpenter's tools | 8 gp | 6 lb. |
| Cartographer's tools | 15 gp | 6 lb. |
| Cobbler's tools | 5 gp | 5 lb. |
| Cook's utensils | 1 gp | 8 lb. |
| Glassblower's tools | 30 gp | 5 lb. |
| Jeweler's tools | 25 gp | 2 lb. |
| Leatherworker's tools | 5 gp | 5 lb. |
| Mason's tools | 10 gp | 8 lb. |
| Painter's supplies | 10 gp | 5 lb. |
| Potter's tools | 10 gp | 3 lb. |
| Smith's tools | 20 gp | 8 lb. |
| Tinker's tools | 50 gp | 10 lb. |
| Weaver's tools | 1 gp | 5 lb. |
| Woodcarver's tools | 1 gp | 5 lb. |
| **Other Kits & Sets** | | |
| Disguise kit | 25 gp | 3 lb. |
| Forgery kit | 15 gp | 5 lb. |
| Gaming set (Dice set) | 1 sp | — |
| Gaming set (Dragonchess) | 1 gp | 1/2 lb. |
| Gaming set (Playing card set) | 5 sp | — |
| Gaming set (Three-Dragon Ante) | 1 gp | — |
| Herbalism kit | 5 gp | 3 lb. |
| Navigator's tools | 25 gp | 2 lb. |
| Poisoner's kit | 50 gp | 2 lb. |
| Thieves' tools | 25 gp | 1 lb. |

---

## Detailed Toolkit Mechanics (From Toolkit Lore)

### Disguise Kit (25 gp)
An ornate box containing perfumes, wigs, prosthetics and powders that can change the player's appearance so that they appear inconspicuous, or as somebody else.
- You may not disguise yourself as any non-humanoid race such as tieflings or dragonborn unless you see a specialist in disguises. The same goes for tieflings/dragonborn wishing to appear humanoid.
- You may also not use this kit to appear smaller or larger.
- **Roll**: Roll to use the disguise kit and add proficiency if applicable. The value of the d20 roll will be the number which is contested by a collocutor's Insight. Once passed, further insight checks may not be performed for at least a half hour, unless it is against verbal deception.
- **Verbal Interaction**: Verbal interaction while disguised is determined by Deception vs. collocutor's Insight.
- **Disadvantage if**:
  - A) You or the person you are disguised as is known well to the collocutor (friend/family/colleague).
  - B) You are a different race or size category to the person you are disguised as.
  - C) You are afflicted in such a way that your speech or movement is impeded.
- **The disguise is seen through if**:
  - A) The collocutor passes the initial insight check.
  - B) The player fails a deception check or otherwise acts out of character of the person they are disguised as.
  - C) The player is doused in water or is the target of a spell such as [[Spells - Cantrips & 1st Level#Identify|Identify]].

---

### Forgery Kit (15 gp)
A small, nondescript box containing papers, parchments, pens, inks, seals and sealing waxes to create convincing forgeries of physical documents.
- May also be used to cast counterfeit coins.
- **Proficiency Check**: Roll a d20, add proficiency if applicable:
  - *On a 20*: The forgery is flawless.
  - *On a 15 or higher*: The forgery is convincing.
  - *On a 10 or higher*: A small flaw goes unnoticed by the forger.
  - *On a 5 or higher*: A large flaw goes unnoticed by the forger.
  - *On a roll lower than 5*: A major error has occurred, and there is incriminating evidence of the identity of the forger. Any errors committed will only be apparent to those proficient in forgery, hence it is unlikely that a proof-read will uncover the mistake.
- The authenticity of the forgery is moot if the intention is ridiculous, though it may lead to unforeseen consequences.

---

### Thief's Toolkit (25 gp)
An easily concealable black roll-up carpet bag containing a file, lockpicks, a corner-mirror, narrow scissors, pliers, vice grips, and a door wedge.
- The tools are used to disarm traps and pick locks (sleight of hand), without these tools, it is impossible to do so.
- Proficiency with these tools confers an extra bonus to Sleight of Hand checks when using anything from the toolkit.

---

### Alchemist's Supplies (50 gp)
The alchemist's supply kit consists of a portable all-in-one Alembic/Calcinator combo and a separate Bigby's burner, with an assortment of beakers and flasks, all of which fit into precisely cut rubber moulds stored in a plain wood box.
- These supplies may only be used if proficient with them, or with either kit on the right (Herbalist/Poisoner). A potion's cost will determine the brew time.
- **25 gp worth of progress** is made per day until the market cost is achieved.
- Every day, the apothecary must make an Intelligence check with the relevant kit, adding their proficiency bonus:
  - *On a 20*: The process is shortened by 2 days.
  - *On a 15 or higher*: The process is shortened by 1 day.
  - *On a 6 to 15*: The brewing continues as normal.
  - *On a 5 or lower*: The progress is stalled by 1 day due to negligence or mishap, although relevant ingredients worth 100 gp may be used to stay on track.
  - *On a 1*: The brew fails. Roll on the [[Classes#Wild Magic Surge Table (d100)|Wild Magic / Corruption tables]] to determine the consequence.
- Only one potion can be prepared at a time whilst on the road.
- Whilst in town, the apothecary may brew a number of potions equal to their \`level + Intelligence modifier\`, given that they have access to the proper laboratories.
- Light tampering while brewing will result in a disadvantage on the next daily brewing check.
- Serious tampering will cause an effect equal to a 1 on the daily brew check.
- Vials sold separately; no vials, no potion.
- *Note*: The Alchemist's kit is the only kit that can create potions. The kits to the right allow ingredients to be gathered instead of bought.

---

### Herbalist's / Poisoner's Kit (5 gp / 50 gp)
Small satchel containing tools that identify, process ingredients of, and create healing salves and spiteful poisons.
- You must be proficient in a kit to create an item of its type (healing potion or poison).
- **Without Alchemist Supplies**:
  - A herbalist can create salves that heal equal to a **d4 plus proficiency**, cure poison, and prevent infection, as well as basic brews that reduce exhaustion.
  - A poisoner can apply poisons safely to blades and procure acids and infectants from the bodies of the fallen equal to an extra **d4 + proficiency bonus**.

---

### Healer's Kit (5 gp)
- A hard wooden box containing bandages, measured portions of salves, and splints.
- If proficient, the kit may be used in one action to stabilise a person who has fallen below 0 hit points. No roll is necessary.
- **10 Uses**.
`
  },
  {
    id: "equipment-trinkets",
    title: "100 Trinkets Table",
    folder: "Equipment",
    category: "Equipment",
    tags: ["equipment", "trinkets", "tables", "d100"],
    aliases: ["Trinkets", "100 Trinkets"],
    content: `---
title: 100 Trinkets Table
category: Equipment
folder: Equipment
tags: [equipment, trinkets, tables, d100]
---

# 100 Trinkets Table

When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery.

| d100 | Trinket | d100 | Trinket |
| :---: | :--- | :---: | :--- |
| **01** | A mummified goblin hand | **51** | A dead scarab beetle the size of your hand |
| **02** | A piece of crystal that faintly glows in moonlight | **52** | Two toy soldiers, one with a missing head |
| **03** | A gold coin minted in an unknown land | **53** | A small box filled with different-sized buttons |
| **04** | A diary written in a language you don't know | **54** | A candle that can't be lit |
| **05** | A brass ring that never tarnishes | **55** | A tiny cage with no door |
| **06** | An old chess piece made from glass | **56** | An old key |
| **07** | Knucklebone dice with skulls on the six pips | **57** | An indecipherable treasure map |
| **08** | Small idol depicting a nightmarish creature | **58** | A hilt from a broken sword |
| **09** | Rope necklace with four mummified elf fingers | **59** | A rabbit's foot |
| **10** | Deed for parcel of land in realm unknown to you | **60** | A glass eye |
| **11** | 1-ounce block made from an unknown material | **61** | Cameo carved in likeness of a hideous person |
| **12** | Small cloth doll skewered with needles | **62** | A silver skull the size of a coin |
| **13** | A tooth from an unknown beast | **63** | An alabaster mask |
| **14** | An enormous scale, perhaps from a dragon | **64** | Pyramid of sticky black incense smelling bad |
| **15** | A bright green feather | **65** | Nightcap that gives pleasant dreams when worn |
| **16** | Old divination card bearing your likeness | **66** | A single caltrop made from bone |
| **17** | Glass orb filled with moving smoke | **67** | Gold monocle frame without the lens |
| **18** | 1-pound egg with a bright red shell | **68** | 1-inch cube, each side painted different color |
| **19** | A pipe that blows bubbles | **69** | A crystal knob from a door |
| **20** | Glass jar containing weird bit of flesh in pickling fluid | **70** | Small packet filled with pink dust |
| **21** | Gnome music box playing song from childhood | **71** | Beautiful song written on two parchments |
| **22** | Wooden statuette of a smug halfling | **72** | Silver teardrop earring made from real teardrop |
| **23** | Brass orb etched with strange runes | **73** | Egg shell painted with scenes of human misery |
| **24** | A multicolored stone disk | **74** | Fan that unfolds to show sleeping cat |
| **25** | Tiny silver icon of a raven | **75** | A set of bone pipes |
| **26** | Bag of 47 humanoid teeth, one rotten | **76** | Four-leaf clover pressed in etiquette book |
| **27** | Shard of obsidian always warm to the touch | **77** | Parchment with complex mechanical contraption |
| **28** | Dragon's bony talon on leather necklace | **78** | Ornate scabbard fitting no blade found so far |
| **29** | A pair of old socks | **79** | Invitation to party where murder happened |
| **30** | Blank book refusing ink, chalk, or graphite | **80** | Bronze pentacle with rat's head etching |
| **31** | Silver badge shaped like a five-pointed star | **81** | Purple handkerchief with archmage name |
| **32** | Knife that belonged to a relative | **82** | Half floorplan for temple or castle |
| **33** | Glass vial filled with nail clippings | **83** | Folded cloth that turns into a stylish cap |
| **34** | Metal device with cups throwing sparks when wet | **84** | Receipt of deposit at bank in far-flung city |
| **35** | White sequined glove sized for human | **85** | Diary with seven missing pages |
| **36** | Vest with one hundred tiny pockets | **86** | Silver snuffbox inscribed "dreams" |
| **37** | Small weightless stone block | **87** | Iron holy symbol devoted to unknown god |
| **38** | Tiny sketch portrait of a goblin | **88** | Book of legendary hero's rise and fall (missing last chapter) |
| **39** | Empty glass vial that smells of perfume | **89** | A vial of dragon blood |
| **40** | Gemstone looking like coal to everyone else | **90** | Ancient arrow of elven design |
| **41** | Scrap of cloth from an old banner | **91** | A needle that never bends |
| **42** | Rank insignia from a lost legionnaire | **92** | Ornate brooch of dwarven design |
| **43** | Tiny silver bell without a clapper | **93** | Empty wine bottle "The Wizard of Wines, Red Dragon Crush, 331422-W" |
| **44** | Mechanical canary inside a gnomish lamp | **94** | Mosaic tile with multicolored glazed surface |
| **45** | Tiny chest carved with numerous feet on bottom | **95** | A petrified mouse |
| **46** | Dead sprite inside a clear glass bottle | **96** | Black pirate flag with dragon skull & crossbones |
| **47** | Sealed metal can sounding like spiders/glass | **97** | Tiny mechanical crab moving when unobserved |
| **48** | Glass orb with clockwork goldfish | **98** | Jar of lard labeled "Griffon Grease" |
| **49** | Silver spoon with M engraved on handle | **99** | Ceramic-bottom box with two-headed living worm |
| **50** | Whistle made from gold-colored wood | **100** | Metal urn containing ashes of a hero |
`
  }
];
