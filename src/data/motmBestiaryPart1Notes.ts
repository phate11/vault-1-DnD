import { VaultNote } from '../types';

export const motmBestiaryPart1Notes: VaultNote[] = [
  {
    id: "motm-bestiary-part-1",
    title: "Monsters of the Multiverse - Bestiary Part 1 (A to C)",
    folder: "Monsters of the Multiverse/Bestiary",
    category: "Creature",
    tags: [
      "motm", "bestiary", "abishai", "alhoon", "alkilith", "allip", "amnizu", "archdruid",
      "astral-dreadnought", "bael", "baphomet", "bard", "barghest", "bodak", "boneclaw",
      "catoblepas", "clockworks", "corpse-flower"
    ],
    aliases: [
      "Black Abishai", "Blue Abishai", "Green Abishai", "Red Abishai", "White Abishai",
      "Alhoon", "Alkilith", "Allip", "Amnizu", "Annis Hag", "Archdruid", "Archer",
      "Armanite", "Astral Dreadnought", "Babau", "Bael", "Balhannoth", "Banderhobb",
      "Baphomet", "Bard (NPC)", "Barghest", "Berbalang", "Bheur Hag", "Blackguard",
      "Bodak", "Boggle", "Boneclaw", "Bulezau", "Cadaver Collector", "Canoloth",
      "Catoblepas", "Aurochs", "Deep Rothe", "Stench Kow", "Cave Fisher", "Champion",
      "Chitine", "Choker", "Choldrith", "Clockwork Bronze Scout", "Clockwork Iron Cobra",
      "Clockwork Oaken Bolter", "Clockwork Stone Defender", "Cloud Giant Smiling One",
      "Corpse Flower", "Cranium Rat", "Swarm of Cranium Rats"
    ],
    content: `---
title: Monsters of the Multiverse - Bestiary Part 1 (A to C)
category: Creature
folder: Monsters of the Multiverse/Bestiary
tags: [motm, bestiary, abishai, alhoon, alkilith, allip, amnizu, archdruid, astral-dreadnought, bael, baphomet, clockworks, corpse-flower]
source: Mordenkainen Presents: Monsters of the Multiverse (Chapter 2)
---

# Monsters of the Multiverse: Bestiary Part 1 (A to C)

---

## 🐉 Abishais (Devils of Tiamat)
Mortals who won Tiamat's favor and were transformed into draconic devils serving across the Nine Hells.

### Black Abishai
*Medium Fiend (Devil), Typically Lawful Evil* | **CR 7** (2,900 XP) | PB +3
- **AC**: 15 (natural armor) | **HP**: 58 (9d8 + 18) | **Speed**: 30 ft., fly 40 ft.
- **STR**: 14 (+2), **DEX**: 17 (+3), **CON**: 14 (+2), **INT**: 13 (+1), **WIS**: 16 (+3), **CHA**: 11 (+0)
- **Saves**: Dex +6, Wis +6 | **Skills**: Perception +6, Stealth +6
- **Damage Resistances**: Cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities**: Acid, fire, poison | **Condition Immunities**: Poisoned
- **Senses**: Darkvision 120 ft. (Devil's Sight), passive Perception 16 | **Languages**: Draconic, Infernal, telepathy 120 ft.
- **Magic Resistance**: Advantage on saves against spells and magical effects.
- **Actions**:
  - **Multiattack**: One Bite and two Scimitars.
  - **Bite**: *+6 to hit*, reach 5 ft. *Hit*: 8 (1d10 + 3) piercing + 9 (2d8) acid damage.
  - **Scimitar**: *+6 to hit*, reach 5 ft. *Hit*: 6 (1d6 + 3) force damage.
  - **Creeping Darkness (Recharge 6)**: Casts *darkness* at a point within 120 ft (no components/concentration). Moves the area up to 60 ft as a bonus action.
- **Bonus Actions**: **Shadow Stealth** (Hide in dim light/darkness).

### Blue Abishai
*Medium Fiend (Devil, Wizard), Typically Lawful Evil* | **CR 17** (18,000 XP) | PB +6
- **AC**: 19 (natural armor) | **HP**: 202 (27d8 + 81) | **Speed**: 30 ft., fly 50 ft.
- **STR**: 15 (+2), **DEX**: 14 (+2), **CON**: 17 (+3), **INT**: 22 (+6), **WIS**: 23 (+6), **CHA**: 18 (+4)
- **Saves**: Int +12, Wis +12 | **Skills**: Arcana +12 | **Damage Immunities**: Fire, lightning, poison
- **Actions**:
  - **Multiattack**: Three Bite or Lightning Strike attacks.
  - **Bite**: *+8 to hit*, reach 5 ft. *Hit*: 13 (2d10 + 2) piercing + 14 (4d6) lightning damage.
  - **Lightning Strike**: *+12 to hit*, range 120 ft. *Hit*: 36 (8d8) lightning damage.
  - **Spellcasting (DC 20, Int)**: At will: *disguise self, mage hand, minor illusion*; 2/day each: *charm person, dispel magic, greater invisibility, wall of force*.
- **Bonus Actions**: **Teleport** (up to 30 ft to unoccupied space).

### Green Abishai
*Medium Fiend (Devil), Typically Lawful Evil* | **CR 15** (13,000 XP) | PB +5
- **AC**: 18 | **HP**: 195 (26d8 + 78) | **Speed**: 30 ft., fly 40 ft. | **INT**: 17 (+3), **CHA**: 19 (+4)
- **Multiattack**: Two Fiendish Claws (+8 to hit, 12 force + DC 16 Con save or 16 poison damage & poisoned 1 min), or one Fiendish Claw and Spellcasting.
- **Spellcasting (DC 17, Cha)**: At will: *alter self, major image*; 3/day: *charm person, detect thoughts, fear*; 1/day: *confusion, dominate person, mass suggestion*.

### Red Abishai
*Medium Fiend (Devil), Typically Lawful Evil* | **CR 19** (22,000 XP) | PB +6
- **AC**: 22 (natural armor) | **HP**: 289 (34d8 + 136) | **Speed**: 30 ft., fly 50 ft. | **STR**: 23 (+6), **CON**: 19 (+4)
- **Multiattack**: One Bite (+12 to hit, 22 piercing + 38 fire) and one Claw (+12 to hit, 17 force + 11 fire), plus Frightful Presence or Incite Fanaticism.
- **Incite Fanaticism**: Up to 4 allies within 60 ft gain advantage on attacks and can't be frightened until start of next turn.
- **Power of the Dragon Queen**: Target Dragon within 120 ft makes DC 18 Cha save (chromatic dragons have disadvantage) or is charmed for 1 hour as a trusted friend.

### White Abishai
*Medium Fiend (Devil), Typically Lawful Evil* | **CR 6** (2,300 XP) | PB +3
- **AC**: 15 | **HP**: 68 (8d8 + 32) | **Speed**: 30 ft., fly 40 ft. | **STR**: 16 (+3), **CON**: 18 (+4)
- **Reckless**: Advantage on melee weapon attack rolls; attacks against it have advantage.
- **Multiattack**: One Bite (+6 to hit, 5 piercing + 3 cold), one Claw (+6 to hit, 8 slashing), and one Longsword (+6 to hit, 7/8 force damage).
- **Reaction (Vicious Reprisal)**: When taking damage, make a Bite attack against random creature within 5 ft, or move up to half speed toward enemy.

---

## 🧠 Alhoon
*Medium Undead (Mind Flayer, Wizard), Typically Neutral Evil* | **CR 10** (5,900 XP) | PB +4
Mind flayers who abandoned elder brains to pursue wizardry and bound their souls collaboratively into a *periapt of mind trapping*.
- **AC**: 15 (natural armor) | **HP**: 150 (20d8 + 60) | **Speed**: 30 ft., fly 15 ft. (hover)
- **STR**: 11 (+0), **DEX**: 12 (+1), **CON**: 16 (+3), **INT**: 19 (+4), **WIS**: 17 (+3), **CHA**: 17 (+3)
- **Damage Resistances**: Cold, lightning, necrotic | **Damage Immunities**: Poison | **Condition Immunities**: Charmed, exhaustion, frightened, paralyzed, poisoned
- **Turn Resistance & Magic Resistance**: Advantage on saves against spells and turn effects.
- **Actions**:
  - **Multiattack**: Two Chilling Grasp (+8 to hit, 14 cold damage and regains 14 HP) or Arcane Bolt (+8 to hit, 120 ft, 28 force damage).
  - **Mind Blast (Recharge 5–6)**: 60-ft cone; DC 16 Int save or **22 (4d8 + 4) psychic damage and stunned for 1 min**.
  - **Spellcasting (DC 16, Int)**: At will: *detect magic, detect thoughts, disguise self, mage hand*; 1/day each: *dominate monster, globe of invulnerability, invisibility, modify memory, plane shift (self), wall of force*.
- **Reactions (Negate Spell, 3/Day)**: Counter a spell of 3rd level or lower cast within 60 ft.

---

## 🚪 Alkilith
*Medium Fiend (Demon), Typically Chaotic Evil* | **CR 11** (7,200 XP) | PB +4
Demonic fungal slime spawned from Juiblex that anchors around doors or windows, tearing open permanent rifts to the Abyss over 6d6 days.
- **AC**: 17 | **HP**: 168 (16d8 + 96) | **Speed**: 40 ft., climb 40 ft. | **Amorphous** (slips through 1-inch openings).
- **Foment Confusion**: Non-demons starting turn within 30 ft make DC 18 Wis save or suffer disadvantage on next attack/save/check; fail by 5+ subjects them to *confusion* for 1 min!
- **Actions**: Multiattack with three Tentacles (+8 to hit, reach 15 ft, 18 acid damage).

---

## 👻 Allip
*Medium Undead, Typically Neutral Evil* | **CR 5** (1,800 XP) | PB +3
A spectral horror spawned when a creature uncovers a forbidden cosmic secret protected by a mighty curse that annihilates its physical form.
- **AC**: 13 | **HP**: 40 (9d8) | **Speed**: 0 ft., fly 40 ft. (hover) | **Incorporeal Movement**.
- **Actions**:
  - **Maddening Touch**: *+6 to hit*, reach 5 ft. *Hit*: 17 (4d6 + 3) psychic damage.
  - **Howling Babble (Recharge 6)**: 30 ft radius; DC 14 Wis save or 12 psychic damage and **stunned** until end of next turn.
  - **Whispers of Compulsion**: Choose up to 3 creatures within 60 ft; DC 14 Wis save or take 12 psychic damage and spend reaction making a melee attack against an ally!

---

## ⚖️ Amnizu
*Medium Fiend (Devil), Typically Lawful Evil* | **CR 18** (20,000 XP) | PB +6
Infernal generals who command legions and marshal soul lemures emerging from the River Styx.
- **AC**: 21 | **HP**: 202 (27d8 + 81) | **Speed**: 30 ft., fly 40 ft. | **INT**: 20 (+5), **CHA**: 18 (+4)
- **Blinding Rot**: Targets 1 or 2 creatures within 60 ft; DC 19 Wis save or **26 (4d12) necrotic damage and blinded**.
- **Forgetfulness (Recharge 6)**: DC 18 Int save or 26 psychic damage and stunned 1 min; if stunned full minute, forgets everything experienced in the last 5 hours!
- **Reaction (Instinctive Charm)**: Attacker within 60 ft makes DC 19 Wis save or must redirect attack to closest creature other than the amnizu.

---

## 🧙 Archdruid
*Medium Humanoid (Druid), Any Alignment* | **CR 12** (8,400 XP) | PB +4
- **AC**: 14 (hide armor) | **HP**: 154 (28d8 + 28) | **Speed**: 30 ft. | **WIS**: 20 (+5)
- **Actions**: Three Staff (+6 to hit, 5 bludgeoning + 21 poison) or Wildfire (+9 to hit, 120 ft, 26 fire damage and target blinded).
- **Spellcasting (DC 17)**: *entangle, faerie fire, dominate beast, tree stride, mass cure wounds*.
- **Bonus Actions (Change Shape, 2/Day)**: Magically transform into a Beast or Elemental of CR 6 or less for up to 9 hours (keeps HP, ability to speak, and Spellcasting!).

---

## 🏹 Archer
*Medium Humanoid, Any Alignment* | **CR 3** (700 XP) | PB +2
- **AC**: 16 (studded leather) | **HP**: 75 (10d8 + 30) | **Speed**: 30 ft. | **DEX**: 18 (+4)
- **Longbow**: *+6 to hit*, range 150/600 ft. *Hit*: 8 (1d8 + 4) piercing damage.
- **Bonus Action (Archer's Eye, 3/Day)**: Add **1d10** to an attack or damage roll with a ranged weapon.

---

## 🌌 Astral Dreadnought
*Gargantuan Monstrosity (Titan), Unaligned* | **CR 21** (33,000 XP) | PB +7
Monstrous armatures gliding through the silver void of the Astral Plane since the dawn of time.
- **AC**: 20 (natural armor) | **HP**: 297 (17d20 + 119) | **Speed**: 15 ft., fly 80 ft. (hover) | **STR**: 28 (+9)
- **Antimagic Cone**: 150-foot cone of continuous antimagic from its central eye.
- **Sever Silver Cord**: Critical hit against a creature traveling by *astral projection* severs the silver cord, killing the traveler instantly.
- **Demiplanar Donjon**: Swallowed victims (or those sent via Donjon Visit) are trapped in an indestructible stomach demiplane 1,000 ft wide and 100 ft high.
- **Actions**: Multiattack with Bite (+16 to hit, 36 force + swallowed if Huge or smaller reduced to 0 HP) and two Claws (+16 to hit, reach 20 ft, 19 force).
- **Legendary Actions (3/Turn)**: Claw (1 action); Donjon Visit (2 actions, DC 19 Cha save or banished into donjon for 1 round); Psychic Projection (3 actions, 60 ft, DC 19 Wis save or 26 psychic damage).

---

## 👑 Archdevils & Demon Lords

### Bael (The Bronze General)
*Large Fiend (Devil), Lawful Evil* | **CR 19** (22,000 XP) | PB +6
- **AC**: 18 (plate) | **HP**: 189 (18d10 + 90) | **Regeneration 20 HP/turn** (stopped by cold/radiant).
- **Dread**: DC 22 Wis save or frightened within 10 ft.
- **Hellish Morningstar**: *+13 to hit*, reach 20 ft. *Hit*: 16 force + 9 necrotic damage.
- **Infernal Command**: Allies within 60 ft can't be charmed or frightened.
- **Legendary Actions**: Attack (2 actions), Fiendish Magic/Teleport (1 action), Infernal Command (1 action).

### Baphomet (The Horned King, Prince of Beasts)
*Huge Fiend (Demon), Chaotic Evil* | **CR 23** (50,000 XP) | PB +7
- **AC**: 22 | **HP**: 319 (22d12 + 176) | **Speed**: 40 ft. | **STR**: 30 (+10)
- **Labyrinthine Recall**: Perfectly recalls any path traveled, immune to *maze*.
- **Gore**: *+17 to hit*, 17 piercing (+16 on 10 ft charge; DC 25 Str save or pushed 10 ft and knocked prone).
- **Heartcleaver**: *+17 to hit*, reach 15 ft. *Hit*: 21 (2d10 + 10) force damage.
- **Lair Actions**: Reverse Gravity (100-ft room), Illusory Room (*mirage arcane*), Seal the Way (solid stone door).

---

## 🤖 Clockworks
Gnomish constructs built with precision gears, alchemical cores, and customizable augmentations.

### Clockwork Enhancements (1d10) & Malfunctions (1d8)
- **Enhancements**: 1. Camouflaged (+Stealth) | 2. Sensors (+60 ft darkvision, +Perception) | 3. Fortified (+2 AC) | 4. Increased Speed (+10 ft) | 5. Reinforced (Resist force/lightning/thunder) | 6. Self-Repairing (Regains 5 HP/turn) | 7. Sturdy Frame (+Hit Dice to max HP) | 8. Suction (Climb 30 ft) | 9. Vocal Resonator (Common/Gnomish) | 10. Water Propulsion (Swim 30 ft).
- **Malfunctions (1 on 1d6 each turn)**: 1. Blinded | 2. Disadvantage on attacks | 3. Lightning vulnerability | 4. Imprinting loop (friendly to 1 creature) | 5. Limited steering (straight line only) | 6. Overactive self-preservation (flees below half HP) | 7. Overheats (incapacitated) | 8. Rusty gears (-10 ft speed, disadv on initiative).

### Clockwork Bronze Scout
*Medium Construct, Unaligned* | **CR 1** (200 XP) | AC 13 | HP 36 | Burrow 30 ft. Earth Armor (no OA burrowing). Lightning Flare (15 ft, DC 13 Dex, 14 lightning).

### Clockwork Iron Cobra
*Medium Construct, Unaligned* | **CR 4** (1,100 XP) | AC 13 | HP 91. Bite (+5 to hit, 6 piercing + DC 13 Con save: 1-2 Confusion, 3-4 Paralysis, 5-6 13 poison damage).

### Clockwork Oaken Bolter
*Medium Construct, Unaligned* | **CR 5** (1,800 XP) | AC 16 | HP 117. Lancing Bolt (+7 to hit, 15 piercing), Harpoon (grapples and reels in 20 ft), Explosive Bolt (20-ft sphere, 17 fire damage).

### Clockwork Stone Defender
*Medium Construct, Unaligned* | **CR 4** (1,100 XP) | AC 16 | HP 105. Slam (+6 to hit, 17 bludgeoning and prone). Reaction (Intercept Attack: +5 AC to ally within 5 ft).

---

## 🌺 Corpse Flower
*Large Plant, Typically Chaotic Evil* | **CR 8** (3,900 XP) | PB +3
- **AC**: 12 | **HP**: 127 (15d10 + 45) | **Speed**: 20 ft., climb 20 ft.
- **Corpses**: Starts with 1d6 + 3 humanoid corpses (holds up to 9).
- **Stench of Death**: 10 ft radius; DC 14 Con save or poisoned.
- **Bonus Actions**:
  - **Digest**: Digests 1 corpse to regain **11 (2d10) HP**.
  - **Reanimate**: Animates 1 corpse as a **zombie** acting right after the flower in initiative!
`
  }
];
