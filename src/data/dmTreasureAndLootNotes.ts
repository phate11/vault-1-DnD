import { VaultNote } from "../types";

export const dmTreasureAndLootNotes: VaultNote[] = [
  {
    id: "dm-treasure-hoards-and-loot",
    title: "DM Guide - Treasure Hoards & Loot Tables",
    folder: "Rules & Mechanics",
    category: "Rulebook",
    tags: ["dm-tools", "treasure", "loot", "hoards", "magic-items", "gems", "currency", "trinkets"],
    aliases: [
      "Treasure Tables",
      "Loot Tables",
      "Treasure Hoards",
      "DM Loot Generator",
      "5e Treasure Guide",
      "Trinkets Table"
    ],
    content: `---
title: DM Guide - Treasure Hoards & Loot Tables
category: Rulebook
folder: Rules & Mechanics
tags: [dm-tools, treasure, loot, hoards, magic-items, gems, currency, trinkets]
source: Dungeon Master's Guide (Chapter 7)
---

# DM Guide: Treasure Hoards & Loot Generation

> *"A dragon's hoard is the stuff of legends—glittering mounds of minted gold, ancient scepters, uncut rubies, and relics that forged empires."*  
> — Dungeon Master's Guide, Ch. 7

This reference provides instant lookup tables for random monster pockets, dungeon chests, treasure hoards, gem/art values, and a 1d100 fantasy trinkets table.

---

## 🪙 Coin Values & Conversions

| Coin | Copper (cp) | Silver (sp) | Electrum (ep) | Gold (gp) | Platinum (pp) |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Copper (cp)** | 1 | 1/10 | 1/50 | 1/100 | 1/1,000 |
| **Silver (sp)** | 10 | 1 | 1/5 | 1/10 | 1/100 |
| **Electrum (ep)** | 50 | 5 | 1 | 1/2 | 1/20 |
| **Gold (gp)** | 100 | 10 | 2 | 1 | 1/10 |
| **Platinum (pp)** | 1,000 | 100 | 20 | 10 | 1 |

*Standard Weight*: 50 coins of any denomination weigh exactly 1 pound.

---

## 🎒 Individual Monster Treasure (Quick Loot)

Roll on these tables when players search individual fallen foes (bandits, wandering monsters, guards).

### Challenge 0–4
| d100 | Coins Recovered |
|:---:|:---|
| **01–30** | 5d6 (17) cp |
| **31–60** | 4d6 (14) sp |
| **61–70** | 3d6 (10) ep |
| **71–95** | 3d6 (10) gp |
| **96–00** | 1d6 (3) pp |

### Challenge 5–10
| d100 | Coins Recovered |
|:---:|:---|
| **01–30** | 4d6 × 100 (1,400) cp, 1d6 × 10 (35) ep |
| **31–60** | 6d6 × 10 (210) sp, 2d6 × 10 (70) gp |
| **61–70** | 3d6 × 10 (105) ep, 2d6 × 10 (70) gp |
| **71–95** | 4d6 × 10 (140) gp |
| **96–00** | 2d6 × 10 (70) gp, 3d6 (10) pp |

### Challenge 11–16
| d100 | Coins Recovered |
|:---:|:---|
| **01–20** | 4d6 × 100 (1,400) sp, 1d6 × 100 (350) gp |
| **21–35** | 1d6 × 100 (350) ep, 1d6 × 100 (350) gp |
| **36–75** | 2d6 × 100 (700) gp, 1d6 × 10 (35) pp |
| **76–00** | 2d6 × 100 (700) gp, 2d6 × 10 (70) pp |

### Challenge 17+
| d100 | Coins Recovered |
|:---:|:---|
| **01–15** | 2d6 × 1,000 (7,000) ep, 8d6 × 100 (2,800) gp |
| **16–55** | 1d6 × 1,000 (3,500) gp, 1d6 × 100 (350) pp |
| **56–00** | 1d6 × 1,000 (3,500) gp, 2d6 × 100 (700) pp |

---

## 🏆 Treasure Hoards (Dungeon Vaults & Boss Lairs)

A treasure hoard represents the consolidated wealth of a monster clan, a dungeon treasury, or a dragon's bed.

### Hoard: Challenge 0–4
- **Coins**: 6d6 × 100 (2,100) cp, 3d6 × 100 (1,050) sp, and 2d6 × 10 (70) gp.
- **Valuables & Magic Items**:
  - **d100 01–06**: None.
  - **d100 07–16**: 2d6 (7) 10 gp gems.
  - **d100 17–26**: 2d4 (5) 25 gp art objects.
  - **d100 27–36**: 2d6 (7) 50 gp gems.
  - **d100 37–44**: 2d6 (7) 10 gp gems + roll 1d6 on Magic Item Table A.
  - **d100 45–52**: 2d4 (5) 25 gp art objects + roll 1d6 on Magic Item Table A.
  - **d100 53–60**: 2d6 (7) 50 gp gems + roll 1d6 on Magic Item Table A.
  - **d100 61–65**: 2d6 (7) 10 gp gems + roll 1d4 on Magic Item Table B.
  - **d100 66–70**: 2d4 (5) 25 gp art objects + roll 1d4 on Magic Item Table B.
  - **d100 71–75**: 2d6 (7) 50 gp gems + roll 1d4 on Magic Item Table B.
  - **d100 76–78**: 2d6 (7) 10 gp gems + roll 1d4 on Magic Item Table C.
  - **d100 79–80**: 2d4 (5) 25 gp art objects + roll 1d4 on Magic Item Table C.
  - **d100 81–85**: 2d6 (7) 50 gp gems + roll 1d4 on Magic Item Table C.
  - **d100 86–92**: 2d4 (5) 25 gp art objects + roll 1d4 on Magic Item Table F.
  - **d100 93–97**: 2d6 (7) 50 gp gems + roll 1d4 on Magic Item Table F.
  - **d100 98–00**: 2d6 (7) 50 gp gems + roll 1d4 on Magic Item Table G.

### Hoard: Challenge 5–10
- **Coins**: 2d6 × 100 (700) cp, 2d6 × 1,000 (7,000) sp, 6d6 × 100 (2,100) gp, 3d6 × 10 (105) pp.
- **Valuables & Magic Items**:
  - **d100 01–04**: None.
  - **d100 05–10**: 2d4 (5) 25 gp art objects.
  - **d100 11–16**: 3d6 (10) 50 gp gems.
  - **d100 17–22**: 3d6 (10) 100 gp gems.
  - **d100 23–28**: 2d4 (5) 250 gp art objects.
  - **d100 29–32**: 2d4 25 gp art + 1d6 on Table A.
  - **d100 33–36**: 3d6 50 gp gems + 1d6 on Table A.
  - **d100 37–40**: 3d6 100 gp gems + 1d6 on Table A.
  - **d100 41–44**: 2d4 250 gp art + 1d6 on Table A.
  - **d100 45–49**: 2d4 25 gp art + 1d4 on Table B.
  - **d100 50–54**: 3d6 50 gp gems + 1d4 on Table B.
  - **d100 55–59**: 3d6 100 gp gems + 1d4 on Table B.
  - **d100 60–63**: 2d4 250 gp art + 1d4 on Table B.
  - **d100 64–66**: 2d4 25 gp art + 1d4 on Table C.
  - **d100 67–69**: 3d6 50 gp gems + 1d4 on Table C.
  - **d100 70–72**: 3d6 100 gp gems + 1d4 on Table C.
  - **d100 73–74**: 2d4 250 gp art + 1d4 on Table C.
  - **d100 75–76**: 2d4 25 gp art + 1 on Table D.
  - **d100 77–78**: 3d6 50 gp gems + 1 on Table D.
  - **d100 79**: 3d6 100 gp gems + 1 on Table D.
  - **d100 80**: 2d4 250 gp art + 1 on Table D.
  - **d100 81–84**: 2d4 25 gp art + 1d4 on Table F.
  - **d100 85–88**: 3d6 50 gp gems + 1d4 on Table F.
  - **d100 89–91**: 3d6 100 gp gems + 1d4 on Table F.
  - **d100 92–94**: 2d4 250 gp art + 1d4 on Table F.
  - **d100 95–96**: 3d6 100 gp gems + 1d4 on Table G.
  - **d100 97–98**: 2d4 250 gp art + 1d4 on Table G.
  - **d100 99**: 3d6 100 gp gems + 1 on Table H.
  - **d100 00**: 2d4 250 gp art + 1 on Table H.

### Hoard: Challenge 11–16
- **Coins**: 4d6 × 1,000 (14,000) gp, 5d6 × 100 (1,750) pp.
- **Valuables**: 2d4 (5) 750 gp art objects OR 3d6 (10) 500 gp gems OR 3d6 (10) 1,000 gp gems.
- **Magic Items**: Typically 1d4 rolls on Magic Item Table F, G, or H.

### Hoard: Challenge 17+ (Dragon & Ancient Boss Lairs)
- **Coins**: 12d6 × 1,000 (42,000) gp, 8d6 × 1,000 (28,000) pp.
- **Valuables**: 3d6 (10) 1,000 gp gems, 1d10 (5) 2,500 gp art objects, or 1d4 (2) 7,500 gp art objects.
- **Magic Items**: 1d8 rolls on Magic Item Table C or 1d6 on Table D, plus 1d4 on Table I (Legendary/Artifacts).

---

## 💎 Gemstones by Value

### 10 gp Gemstones
- **Azurite**: Opaque mottled deep blue.
- **Banded Agate**: Translucent striped brown, blue, red.
- **Blue Quartz**: Pale blue transparent crystal.
- **Eye Agate**: Concentric circles of gray, brown, or green.
- **Hematite**: Gray-black with metallic luster.
- **Lapis Lazuli**: Light and dark blue with yellow flecks.
- **Malachite**: Striated light and dark green.
- **Moss Agate**: Translucent pink-white with mossy markings.
- **Obsidian**: Opaque black glass.
- **Tiger Eye**: Translucent rich brown with golden center.
- **Turquoise**: Opaque light blue-green.

### 50 gp Gemstones
- **Bloodstone**: Dark gray with red flecks.
- **Carnelian**: Orange to red-brown.
- **Chalcedony**: Opaque white.
- **Chrysoprase**: Translucent green.
- **Citrine**: Transparent pale yellow-brown.
- **Jasper**: Blue, black, or brown.
- **Moonstone**: Translucent white with blue glow.
- **Onyx**: Opaque bands of black and white.
- **Quartz**: Transparent white, smoky, or pink.
- **Sardonyx**: Bands of red and white.
- **Star Rose Quartz**: Translucent rosy stone with starburst center.
- **Zircon**: Transparent pale blue-green.

### 100 gp Gemstones
- **Amber**: Transparent watery gold to rich orange.
- **Amethyst**: Transparent deep purple.
- **Chrysoberyl**: Transparent yellow-green to green.
- **Coral**: Opaque crimson.
- **Garnet**: Transparent red, brown-green, or violet.
- **Jade**: Translucent light green, deep green, or white.
- **Jet**: Opaque deep glossy black.
- **Pearl**: Opaque lustrous white, yellow, or pink.
- **Spinel**: Transparent red, red-brown, or deep green.
- **Tourmaline**: Transparent pale green, blue, brown, or red.

### 500 gp Gemstones
- **Alexandrite**: Transparent dark green (glows red under candlelight).
- **Aquamarine**: Transparent pale blue-green.
- **Black Pearl**: Opaque pure black with iridescent sheen.
- **Blue Spinel**: Transparent deep blue.
- **Peridot**: Transparent rich olive green.
- **Topaz**: Transparent golden-yellow.

### 1,000 gp Gemstones
- **Black Opal**: Translucent dark green with black veins and fiery flecks.
- **Blue Sapphire**: Transparent shining blue.
- **Fiery Yellow Corundum**: Transparent fiery yellow.
- **Emerald**: Transparent deep brilliant green.
- **Star Ruby**: Translucent ruby with a six-rayed star core.
- **Star Sapphire**: Translucent blue sapphire with a star core.
- **Yellow Sapphire**: Transparent fiery yellow-orange.

### 5,000 gp Gemstones
- **Black Sapphire**: Translucent lustrous black with blue highlights.
- **Diamond**: Transparent blue-white, canary, or pink.
- **Jacinth**: Transparent fiery orange.
- **Ruby**: Transparent clear deep red.

---

## 🔮 Magic Item Table Tiers (Summary)

- **Table A (Common/Minor)**: *Potion of Healing*, *Spell Scroll (Cantrip or 1st)*, *Potion of Climbing*, *Bag of Holding*, *Driftglobe*.
- **Table B (Minor Tier 1)**: *Potion of Greater Healing*, *Potion of Fire Breath*, *Spell Scroll (2nd or 3rd)*, *Bag of Holding*, *Keoghtom's Ointment*, *Wand of Magic Detection*.
- **Table C (Minor Tier 2)**: *Potion of Superior Healing*, *Spell Scroll (4th or 5th)*, *Elixir of Health*, *Potion of Invulnerability*, *Necklace of Fireballs*, *Bead of Force*.
- **Table D (Major Consumables)**: *Potion of Supreme Healing*, *Spell Scroll (6th to 8th)*, *Potion of Invisibility*, *Potion of Speed*, *Horseshoes of a Zephyr*.
- **Table E (High Artifact Consumables)**: *Spell Scroll (9th level)*, *Potion of Storm Giant Strength*, *Universal Solvent*, *Sovereign Glue*.
- **Table F (Uncommon Permanent)**: *Weapon +1*, *Shield +1*, *Boots of Elvenkind*, *Cloak of Protection*, *Gauntlets of Ogre Power*, *Pearl of Power*, *Wand of the War Mage +1*.
- **Table G (Rare Permanent)**: *Weapon +2*, *Shield +2*, *Armor +1*, *Amulet of Health*, *Belt of Hill Giant Strength*, *Cloak of the Bat*, *Ring of Protection*, *Sun Blade*.
- **Table H (Very Rare Permanent)**: *Weapon +3*, *Shield +3*, *Armor +2*, *Belt of Stone/Frost/Fire Giant Strength*, *Cloak of Arachnida*, *Manual of Bodily Health*, *Staff of Power*.
- **Table I (Legendary Permanent)**: *Armor +3*, *Belt of Cloud/Storm Giant Strength*, *Holy Avenger*, *Luck Blade*, *Ring of Three Wishes*, *Robe of the Archmagi*, *Vorpal Sword*.

---

## 🎲 1d100 Fantasy & Gothic Trinkets Table

Roll a d100 when a player investigates a desk drawer, pockets a stranger, or explores an abandoned ruin:

| d100 | Trinket Description |
|:---:|:---|
| **01** | A mummified goblin hand hanging on a leather thong. |
| **02** | A piece of crystal that faintly glows in the moonlight. |
| **03** | A gold coin minted in an unknown land whose emperor's face has been scratched off. |
| **04** | A diary written in a language you don't know, missing the last 13 pages. |
| **05** | A brass ring that never tarnishes and feels cool to the touch. |
| **06** | An old chess piece carved from obsidian shaped like a weeping angel. |
| **07** | A pair of knucklebone dice, each with a skull symbol on the six-face. |
| **08** | A small cloth doll skewered with three silver sewing needles. |
| **09** | A mechanical canary inside an ornate brass pocket watch cage that ticks quietly. |
| **10** | A silver snuffbox bearing an engraved family crest of an extinct noble house. |
| **11** | An inkwell that keeps ink liquid even in sub-zero freezing temperatures. |
| **12** | An iron key that unlocks no door you have ever encountered. |
| **13** | A small dried flower that smells like fresh ozone and lightning. |
| **14** | A stone button that whispers a single syllable in Goblin when pressed. |
| **15** | A glass marble containing a tiny storm cloud with minute lightning flashes. |
| **16** | A shard of mirror that reflects you looking three seconds into the past. |
| **17** | A parchment sketch of yourself drawn by someone you've never met. |
| **18** | An empty perfume vial that smells faintly of roasted almonds and arsenic. |
| **19** | A bronze bell without a clapper that rings silently in the minds of anyone holding it. |
| **20** | A small velvet pouch containing nine polished teeth from different creatures. |
| **21** | A tarnished silver locket with a portrait of a vampire wearing noble finery. |
| **22** | A lead whistle that makes no sound to humanoid ears. |
| **23** | A miniature iron cage containing a preserved spider that occasionally twitches. |
| **24** | A candle that burns with a pale purple flame and produces no smoke. |
| **25** | A silver spoon with an ornate handle shaped like a coiled serpent. |
| **26** | A folded parchment deed to a castle that allegedly sank into a swamp 200 years ago. |
| **27** | A small wooden block that always balances perfectly on any of its points. |
| **28** | An eyepatch embroidered with an eye that glows faintly when an undead is within 30 feet. |
| **29** | A hollow glass raven's egg filled with black sand that flows upward. |
| **30** | A brass compass that points toward the nearest tavern instead of true north. |
| **31–40** | A bone pipe carved with howling wolves; when smoked, the vapor forms tiny skull shapes. |
| **41–50** | A heavy iron padlock whose keyhole is shaped like an open screaming mouth. |
| **51–60** | A tiny jar containing fingernail clippings labeled with dates stretching back four centuries. |
| **61–70** | A copper pocket sundial that functions accurately even in total darkness. |
| **71–80** | A deck of playing cards missing only the Ace of Spades and Queen of Hearts. |
| **81–90** | A sealed wax jar containing a preserved eyeball that slowly turns to watch the person holding it. |
| **91–99** | A heavy signet ring bearing an ancient draconic glyph for *Vengeance*. |
| **00** | A tiny clockwork beetle that scuttles 3 feet forward when wound up before stopping. |
`
  }
];
