import { VaultNote } from '../types';

export const monstrousCompendiumVol1Notes: VaultNote[] = [
  {
    id: "monstrous-compendium-vol-1-spelljammer",
    title: "Monstrous Compendium Vol. 1: Spelljammer Creatures",
    folder: "Spelljammer - Boo's Astral Menagerie/Bestiary",
    category: "Creature",
    tags: ["spelljammer", "monstrous-compendium", "bestiary", "wildspace", "astral-sea", "aberration", "monstrosity"],
    aliases: [
      "Asteroid Spider", "Clockwork Horror", "Eldritch Lich", "Fractine",
      "Gadabout", "Goon Balloon", "Nightmare Beast", "Puppeteer Parasite",
      "Star Lancer", "Yggdrasti"
    ],
    content: `---
title: Monstrous Compendium Vol. 1: Spelljammer Creatures
category: Creature
folder: Spelljammer - Boo's Astral Menagerie/Bestiary
tags: [spelljammer, monstrous-compendium, bestiary, wildspace, astral-sea, aberration, monstrosity]
---

# Monstrous Compendium Vol. 1: Spelljammer Creatures

Ten monsters from the depths of Wildspace and the Astral Sea, updated for 5th Edition.

---

## 🕷️ Asteroid Spider
*Gargantuan Monstrosity, Typically Neutral Evil* | **CR 15** (13,000 XP) | PB +5
- **AC**: 17 (natural armor) | **HP**: 348 (24d20 + 96) | **Speed**: 60 ft., fly 60 ft. (hover)
- **STR**: 26 (+8), **CON**: 18 (+4), **INT**: 17 (+3), **WIS**: 13 (+1) | Blindsight 120 ft. (eyes closed)
- **False Appearance**: Indistinguishable from an asteroid while motionless.
- **Snare Ship (1/Day, Bonus Action)**: Weaves web around a spelljamming ship in 120 ft; suppresses its *spelljamming helm* for 1 minute and turns decks into difficult terrain.
- **Actions**: Multiattack (two Web Strands, Reel 60 ft, two Bites: *+13 to hit*, 21 piercing + 10 acid). Web Strand: 120 ft range; grapples target (escape DC 18, up to 6 targets).

---

## ⚙️ Clockwork Horror
*Small Construct, Typically Lawful Evil* | **CR 2** (450 XP) | PB +2
- **AC**: 18 (natural armor) | **HP**: 60 (8d6 + 32) | **Speed**: 30 ft., climb 30 ft.
- **Languages**: Thri-kreen, Ziklight (blinking light code)
- **Shutdown**: If targeted by *dispel magic*, Con save vs spell DC or unconscious 1 minute.
- **Spelljamming Helm Interface**: Can attach to a ship's spelljamming helm and pilot it without being a spellcaster.
- **Actions**: Multiattack (1 Bite + 2 Rotating Saws, or 2 Lightning Jolts *+4 to hit*, range 120 ft, 7 lightning).

---

## 🐙 Eldritch Lich
*Medium Undead, Typically Neutral Evil* | **CR 15** (13,000 XP) | PB +5
- **AC**: 17 (natural armor) | **HP**: 165 (22d8 + 66) | **Speed**: 30 ft., fly 30 ft. (hover)
- **INT**: 19 (+4), **WIS**: 14 (+2) | Truesight 120 ft. | Telepathy 120 ft.
- **Far Realm Parasite**: Wormlike parasite in torso contains soul; revives in 2d4 days unless slain inside a *magic circle* (in which case it revives as an **otyugh** with all memories).
- **Great Old One Patron (d6)**: 1. Cthulhu, 2. Tharizdun, 3. Dendar, 4. Ghaunadaur, 5. Zargon, 6. That Which Lurks.
- **Actions**:
  - **Multiattack**: Parasitic Tentacle (or Spellcasting) + two Psychic Whispers.
  - **Parasitic Tentacle**: *+9 to hit*, reach 10 ft. *Hit*: 25 (6d6 + 4) piercing + 25 (6d6 + 4) necrotic; DC 17 Con save or poisoned. 3 failed saves = dies and dissolves into a **gibbering mouther**!
  - **Psychic Whisper**: Range 120 ft: DC 17 Wis save or **25 (6d6 + 4) psychic and stunned**.
  - **Spells**: *hunger of Hadar*, *lightning bolt*, *arcane eye*, *dimension door*, *plane shift*.
- **Reaction - Far Realm Step**: Teleports 60 ft immediately after taking damage.

---

## 🪞 Fractine
*Large Construct, Typically Neutral* | **CR 9** (5,000 XP) | PB +4
- **AC**: 14 | **HP**: 110 (13d10 + 39) | **Speed**: 0 ft., fly 60 ft. (hover) | Blindsight 360 ft.
- **Two-Dimensionality**: Can occupy other creatures' space; moves through difficult terrain.
- **Scrying Focus**: Spellcasters can use a fractine within 5 ft as an empowered scrying focus.
- **Extradimensional Touch**: *+5 to hit*. *Hit*: **24 (8d6) force damage**.
- **Imprison (Bonus Action)**: DC 16 Dex save or imprisoned inside its two-dimensional demiplane.
- **Split (Reaction)**: When taking B/P/S/thunder damage, splits into two Medium fractines with half HP!

---

## 🌿 Gadabout
*Medium Plant, Unaligned* | **CR 1/8** (25 XP) | PB +2
- **AC**: 11 | **HP**: 11 (2d8 + 2) | **Speed**: 10 ft., fly 60 ft. (hover)
- **Air Envelope**: In vacuum, generates an air envelope sustaining itself and its wearer indefinitely.
- **Wrap**: Gently wraps branches around a willing Medium or Small creature, serving as personal space-suit and flight conveyance.

---

## 🎈 Goon Balloon
*Medium Aberration, Typically Chaotic Evil* | **CR 1/8** (25 XP) | PB +2
- **AC**: 10 | **HP**: 6 (1d8 + 2) | **Speed**: 20 ft., climb 20 ft.
- **Burst**: On 0 HP, releases noxious gas in a 10-ft radius (DC 12 Con save or poisoned 1 min).
- **Scintillating Eye**: DC 12 Wis save or **6 (1d12) psychic damage**.

---

## 🦏 Nightmare Beast
*Gargantuan Monstrosity, Typically Chaotic Evil* | **CR 16** (15,000 XP) | PB +5
- **AC**: 17 | **HP**: 232 (15d20 + 75) | **Speed**: 30 ft., climb 30 ft. | Siege Monster
- **Multiattack**: Two Claws (*+13 to hit*, 14 slashing, DC 21 Str or prone) + one Tusk (17 slashing).
- **Disintegration Gaze (Recharge 5–6)**: 60 ft; DC 18 Con save or **70 (10d6 + 40) force damage** (reduced to dust at 0 HP).
- **Legendary Actions (3)**: Tusk attack, Charge (2 actions), Frightful Howl (2 actions, 120-ft cone DC 18 Wis save or frightened).

---

## 🧠 Puppeteer Parasite
*Tiny Aberration, Typically Neutral Evil* | **CR 3** (700 XP) | PB +2
- **AC**: 15 | **HP**: 71 (11d4 + 44) | **Speed**: 10 ft., fly 30 ft. (hover) | Blindsight 60 ft.
- **Cling**: *+4 to hit*. *Hit*: 12 necrotic, and latches onto the target (DC 14 Str check to detach).
- **Consume Life**: Deals **12 necrotic damage** to attached host and heals that amount.
- **Suggestion (Psionics, 1/Day)**: Casts *suggestion* (DC 13).

---

## 🦈 Star Lancer
*Large Celestial, Typically Neutral* | **CR 2** (450 XP) | PB +2
- **AC**: 15 | **HP**: 60 (8d10 + 16) | **Speed**: 0 ft., fly 50 ft. | Flyby
- **Horn**: *+6 to hit*. *Hit*: 7 piercing (plus extra **10 piercing** if moved 20+ ft straight).
- **Invisibility Cloak (3/Day)**: Turns itself and rider invisible.

---

## 🌳 Yggdrasti
*Gargantuan Plant, Unaligned* | **CR 7** (2,900 XP) | PB +3
- **AC**: 15 | **HP**: 112 (9d20 + 18) | **Speed**: 30 ft., fly 60 ft. (hover)
- **Cavities**: 1d4 + 2 internal hollows providing three-quarters cover to riders/passengers.
- **Lightning Conduit**: Lightning damage deals 0 damage to yggdrasti; instead split evenly among grappled victims and recharges Lightning Discharge!
- **Lightning Discharge (3/Day)**: 120 ft; DC 13 Dex save or **31 (7d8) lightning damage**.

---

*Related notes: [[Boo's Astral Menagerie - Bestiary Part 1 (A to G)]], [[Boo's Astral Menagerie - Bestiary Part 2 (G to P)]], [[Boo's Astral Menagerie - Bestiary Part 3 (P to Z)]].*
`
  }
];
