import { VaultNote } from '../types';

export const dungeonOfMadMageDenizensNotes: VaultNote[] = [
  {
    id: "dotmm-appendix-a-denizens",
    title: "Undermountain Appendix A: Dungeon Denizens & Halaster Blackcloak Stat Block",
    folder: "Undermountain/Bestiary",
    category: "Creature",
    tags: ["undermountain", "halaster-blackcloak", "muiral", "scaladar", "ulitharid", "neothelid", "werebat", "lava-child", "shadow-assassin", "githyanki-gish", "cr23"],
    aliases: ["Halaster Blackcloak", "Muiral", "Scaladar", "Ulitharid", "Neothelid", "Dungeon of the Mad Mage Bestiary"],
    content: `---
title: Undermountain Appendix A: Dungeon Denizens & Halaster Blackcloak Stat Block
category: Creature
folder: Undermountain/Bestiary
tags: [undermountain, halaster-blackcloak, muiral, scaladar, ulitharid, neothelid, werebat, lava-child, shadow-assassin, githyanki-gish, cr23]
source: Waterdeep: Dungeon of the Mad Mage (Appendix A)
---

# Undermountain: Dungeon Denizens

---

## 🧙 Halaster Blackcloak

*Medium humanoid (human), chaotic evil*

- **Armor Class**: 14 (17 with *mage armor*)
- **Hit Points**: 246 (29d8 + 116)
- **Speed**: 30 ft.
- **STR**: 10 (+0) | **DEX**: 18 (+4) | **CON**: 18 (+4) | **INT**: 24 (+7) | **WIS**: 18 (+4) | **CHA**: 18 (+4)
- **Saving Throws**: Int +14, Wis +11
- **Skills**: Arcana +21, History +21, Perception +11
- **Damage Resistances**: Fire and lightning (granted by the *blast scepter*)
- **Senses**: Darkvision 120 ft., passive Perception 21
- **Languages**: Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish, Infernal, Undercommon
- **Challenge**: 23 (50,000 XP)

### Special Equipment
- **Robe of Eyes**: Lets him see in all directions, gives darkvision 120 ft., advantage on sight Perception checks, and truesight / ethereal vision 120 ft.
- **Blast Scepter**: Very rare arcane focus. Grants fire & lightning resistance. As an action, casts *thunderwave* at 4th level (save DC 16) without expending a spell slot.
- **Horned Ring**: Very rare item allowing wearer to completely ignore Undermountain's magical restrictions.

### Traits
- **Arcane Recovery (1/Day)**: After a short rest, recovers all spell slots of 5th level and lower.
- **Legendary Resistance (3/Day)**: If Halaster fails a saving throw, he can choose to succeed instead.
- **Rejuvenation**: If Halaster dies in Undermountain, he revives after 1d10 days with all hit points and missing body parts restored, reforming in a random safe location.
- **Spellcasting**: 20th-level spellcaster (spell save DC 22, +14 to hit with spell attacks). Can cast *disguise self* and *invisibility* at will. Can cast *fly* and *lightning bolt* once each per rest without expending a spell slot.
  - *Cantrips*: *dancing lights*, *fire bolt*, *light*, *mage hand*, *prestidigitation*
  - *1st level (4 slots)*: *mage armor*, *magic missile*, *shield*, *silent image*
  - *2nd level (3 slots)*: *arcane lock*, *cloud of daggers*, *darkvision*, *knock*
  - *3rd level (3 slots)*: *counterspell*, *dispel magic*, *fireball*
  - *4th level (3 slots)*: *confusion*, *hallucinatory terrain*, *polymorph*
  - *5th level (3 slots)*: *Bigby's hand*, *geas*, *wall of force*
  - *6th level (2 slots)*: *chain lightning*, *globe of invulnerability*, *programmed illusion*
  - *7th level (2 slots)*: *finger of death*, *symbol*, *teleport*
  - *8th level (1 slot)*: *maze*, *mind blank*
  - *9th level (1 slot)*: *meteor swarm*, *wish*

### Actions & Legendary Actions
- **Blast Scepter**: Casts *thunderwave* at 4th level (save DC 16).
- **Cast Spell (1 Action)**: Casts a spell of 3rd level or lower.
- **Spell Ward (2 Actions)**: Expends a spell slot of 4th level or lower and gains 5 temporary HP per level of the slot.

---

## 🦂 Muiral

*Large monstrosity, chaotic evil* (CR 13, 10,000 XP)
- **AC**: 16 (natural armor) | **HP**: 195 (23d10 + 69) | **Speed**: 50 ft.
- **Stats**: Str 19 (+4), Dex 11 (+0), Con 16 (+3), Int 18 (+4), Wis 13 (+1), Cha 18 (+4)
- **Senses**: Darkvision 120 ft., passive Perception 16
- **Spellcasting (13th-Level)**: DC 17, +9 hit. Spells: *expeditious retreat*, *fog cloud*, *magic missile*, *shield*, *darkness*, *knock*, *see invisibility*, *spider climb*, *animate dead*, *counterspell*, *lightning bolt*, *greater invisibility*, *polymorph*, *animate objects*, *wall of force*, *create undead*, *flesh to stone*, *finger of death*.
- **Multiattack**: Two longsword attacks (+9 hit, 2d8+4 or 2d10+4) and one sting attack (+9 hit, reach 10 ft, 1d10+4 piercing + 6d8 poison, DC 16 Con half).
- **Legendary Actions (3/Round)**: Cast Cantrip (1), Lunging Attack (2; 10-ft reach longsword), Retreating Strike (3; moves up to 50 ft without provoking opportunity attacks and makes 1 longsword attack).

---

## 🤖 Scaladar

*Huge construct, unaligned* (CR 8, 3,900 XP)
- **AC**: 19 (natural armor) | **HP**: 94 (7d12 + 49) | **Speed**: 30 ft., climb 20 ft.
- **Damage Resistances**: Fire; bludgeoning, piercing, and slashing from nonmagical attacks
- **Damage Immunities**: Force, lightning, poison
- **Lightning Absorption**: When subjected to lightning damage, takes no damage and sting deals an extra 2d10 lightning until next turn.
- **Scaladar Link**: Knows location of other scaladar within 100 ft and senses when they take damage.
- **Trobriand's Rings**: Controlled by wearers of Trobriand's black stinger rings within 100 ft.
- **Multiattack**: Two claw attacks (+7 hit, reach 10 ft, 1d12+4 bludgeoning + grapple DC 15) and one sting attack (+7 hit, reach 10 ft, 1d10+4 piercing + 2d10 lightning).

---

## 🦑 Ulitharid

*Large aberration, lawful evil* (CR 9, 5,000 XP)
- **AC**: 15 (breastplate) | **HP**: 127 (17d10 + 34) | **Speed**: 30 ft.
- **Stats**: Str 15 (+2), Dex 12 (+1), Con 15 (+2), Int 21 (+5), Wis 19 (+4), Cha 21 (+5)
- **Senses**: Darkvision 120 ft., passive Perception 18; Telepathy 2 miles
- **Creature Sense**: Aware of intelligent creatures within 2 miles (direction, distance, Int score).
- **Psionic Hub**: Can bridge psychic link between elder brain and detected creatures.
- **Innate Psionics (DC 17)**: At will: *detect thoughts*, *levitate*; 1/day: *confusion*, *dominate monster*, *eyebite*, *feeblemind*, *mass suggestion*, *plane shift (self)*, *project image*, *scrying*, *telekinesis*.
- **Tentacles**: +9 hit, reach 10 ft, 4d10+5 psychic + grapple DC 14 + DC 17 Int save or stunned.
- **Extract Brain**: +9 hit, reach 5 ft, one incapacitated humanoid grappled. Hit: 10d10 piercing (kills if 0 HP).
- **Mind Blast (Recharge 5–6)**: 60-ft cone, DC 17 Int save or 4d12+5 psychic and stunned 1 minute.
- **Extractor Staff**: Used to extract its own brain into a brine pool to become an elder brain.

---

## 🐛 Neothelid

*Gargantuan aberration, chaotic evil* (CR 13, 10,000 XP)
- **AC**: 16 (natural armor) | **HP**: 325 (21d20 + 105) | **Speed**: 30 ft.
- **Creature Sense**: Senses Int 4+ creatures within 1 mile.
- **Tentacles**: +13 hit, reach 15 ft, 3d8+8 bludgeoning + 3d8 psychic. DC 18 Str save or swallowed (blinded, restrained, 10d6 acid at start of turns).
- **Acid Breath (Recharge 5–6)**: 60-ft cone, DC 18 Dex save or 10d6 acid damage (half on success).

---

## 🦇 Werebat

*Small humanoid (goblin, shapechanger), neutral evil* (CR 2, 450 XP)
- **AC**: 13 | **HP**: 24 (7d6) | **Speed**: 30 ft., climb 30 ft., fly 60 ft. (bat/hybrid)
- **Immunities**: Bludgeoning, piercing, slashing from nonmagical, non-silvered attacks
- **Bite**: +5 hit, 1d6+3 piercing + regains temp HP equal to damage. DC 10 Con save or cursed with werebat lycanthropy.

---

## 🌋 Lava Child

*Medium humanoid (lava child), neutral* (CR 3, 700 XP)
- **AC**: 11 | **HP**: 60 (8d8 + 24) | **Speed**: 25 ft., climb 20 ft.
- **Damage Immunities**: Fire; bludgeoning, piercing, and slashing from metal weapons!
- **Metal Immunity**: Moves through metal without hindrance; advantage on attack rolls against targets wearing metal armor or wielding metal shields.
`
  }
];
