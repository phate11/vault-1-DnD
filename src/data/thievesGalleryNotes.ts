import { VaultNote } from '../types';

export const thievesGalleryNotes: VaultNote[] = [
  {
    id: "thieves-gallery-npcs",
    title: "Thieves' Gallery - D&D: Honor Among Thieves NPCs",
    folder: "Adventures & Settings/Honor Among Thieves",
    category: "NPC",
    tags: ["thieves-gallery", "honor-among-thieves", "npcs", "doric", "edgin", "forge", "holga", "simon", "sofina", "xenk", "nightbringer"],
    aliases: [
      "Doric", "Edgin Darvis", "Forge Fitzwilliam", "Holga Kilgore",
      "Simon Aumar", "Sofina", "Xenk Yendar", "Nightbringer"
    ],
    content: `---
title: Thieves' Gallery - D&D: Honor Among Thieves NPCs
category: NPC
folder: Adventures & Settings/Honor Among Thieves
tags: [thieves-gallery, honor-among-thieves, npcs, doric, edgin, forge, holga, simon, sofina, xenk, nightbringer]
---

# Thieves' Gallery: Heroes & Villains of *Honor Among Thieves*

Official 5e stat blocks and lore for the iconic characters from the film *Dungeons & Dragons: Honor Among Thieves*.

---

## 🌲 Doric
The tiefling Doric was taken in by a wood elf enclave in Neverwinter Wood after being abandoned as a child, guarding her adoptive community with nature's ferocity. Member of the Emerald Enclave.

\`\`\`statblock
monster: Doric
size: Medium
type: Humanoid (Druid)
alignment: Neutral Good
ac: 14 (leather armor)
hp: 104 (16d8 + 32)
speed: 30 ft.
stats: [12, 16, 14, 16, 19, 10]
saves:
  - Int: +6
  - Wis: +7
skills:
  - Insight: +7
  - Nature: +6
  - Perception: +7
  - Survival: +7
damage_resistances: fire
senses: darkvision 60 ft., passive Perception 17
languages: Common, Druidic, Elvish, Infernal, Sylvan
cr: 5 (1,800 XP)
actions:
  - name: Multiattack
    desc: "Doric makes two Shaped Claw or Sling attacks. She can replace one attack with a use of Spellcasting."
  - name: Shaped Claw
    desc: "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
  - name: Sling
    desc: "Ranged Weapon Attack: +6 to hit, range 30/120 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage."
  - name: Spellcasting
    desc: "Wisdom (DC 15). At will: animal messenger, beast sense, speak with animals; 2/day each: cure wounds, entangle, faerie fire, thunderwave."
bonus_actions:
  - name: Change Shape (5/Day)
    desc: "Doric magically transforms into a Beast with a CR of 3 or less or into an owlbear (Monster Manual) for up to 2 hours. Keeps her current HP, maximum HP, this bonus action, alignment, and Int/Wis/Cha scores."
reactions:
  - name: Fiery Rebuke (3/Day)
    desc: "When damaged by a creature within 60 ft she can see, target makes a DC 15 Dex save or takes 16 (3d10) fire damage (half on success)."
\`\`\`

---

## 🪕 Edgin Darvis
Former Harper spy turned rakish bard and heist mastermind whose confidence and moral compass guide the crew.

\`\`\`statblock
monster: Edgin Darvis
size: Medium
type: Humanoid (Bard)
alignment: Chaotic Good
ac: 14 (leather armor)
hp: 110 (17d8 + 34)
speed: 30 ft.
stats: [14, 16, 14, 14, 16, 18]
saves:
  - Dex: +6
  - Cha: +7
skills:
  - Deception: +7
  - Performance: +10
  - Persuasion: +10
  - Sleight of Hand: +6
senses: passive Perception 13
languages: Common
cr: 5 (1,800 XP)
actions:
  - name: Multiattack
    desc: "Edgin makes two Reinforced Lute or Shortsword attacks."
  - name: Reinforced Lute
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: 6 (1d8 + 2) bludgeoning + 11 (2d10) thunder damage."
  - name: Shortsword
    desc: "Melee Weapon Attack: +6 to hit, reach 5 ft. Hit: 6 (1d6 + 3) piercing + 11 (2d10) thunder damage."
  - name: Disorienting Words
    desc: "Magically taunts up to three creatures within 60 ft. DC 15 Wis save or take 10 (3d6) psychic damage and have disadvantage on their next attack roll."
  - name: Spellcasting
    desc: "Charisma (DC 15). At will: friends, message; 3/day each: charm person, disguise self; 1/day: suggestion."
reactions:
  - name: Inspiring Words (3/Day)
    desc: "When a creature within 60 ft fails an ability check, attack roll, or save, Edgin adds 1d8 to the roll, potentially turning failure into success."
\`\`\`

---

## 💰 Forge Fitzwilliam
Charismatic con artist and rogue who installed himself as the Lord of Neverwinter.

\`\`\`statblock
monster: Forge Fitzwilliam
size: Medium
type: Humanoid
alignment: Neutral Evil
ac: 17 (Disarming Charm)
hp: 110 (20d8 + 20)
speed: 30 ft.
stats: [11, 14, 13, 15, 17, 20]
saves:
  - Dex: +5
  - Int: +5
skills:
  - Deception: +11
  - Persuasion: +11
  - Investigation: +8
  - Stealth: +8
languages: Common, Thieves' Cant
cr: 8 (3,900 XP)
traits:
  - name: Disarming Charm
    desc: "While wearing no armor, AC includes Charisma modifier (+5)."
  - name: Double-Cross
    desc: "If Forge hits a creature friendly to him with an attack roll, it is automatically a critical hit."
  - name: Evasion
    desc: "Takes no damage on successful Dex saves for half damage, and half on failure."
actions:
  - name: Multiattack
    desc: "Forge makes two Dagger attacks, two Heavy Crossbow attacks, or one of each."
  - name: Dagger
    desc: "Melee or Ranged: +5 to hit, 20/60 ft. Hit: 4 (1d4 + 2) piercing + 24 (7d6) poison, and poisoned until next turn."
  - name: Heavy Crossbow
    desc: "Ranged: +5 to hit, 100/400 ft. Hit: 7 (1d10 + 2) piercing + 24 (7d6) poison; target has disadvantage on next attack."
bonus_actions:
  - name: Cunning
    desc: "Dash, Disengage, Hide, or gain advantage on next attack roll this turn."
reactions:
  - name: Uncanny Dodge
    desc: "Halves damage from an attack that hits him."
\`\`\`

---

## 🪓 Holga Kilgore
Exiled Uthgardt Elk Tribe warrior with immense barbarian strength, fierce loyalty, and a darksteel greataxe.

\`\`\`statblock
monster: Holga Kilgore
size: Medium
type: Humanoid
alignment: Chaotic Good
ac: 15 (Unarmored Defense)
hp: 120 (16d8 + 48)
speed: 40 ft.
stats: [19, 14, 16, 11, 16, 13]
saves:
  - Str: +7
  - Con: +6
skills:
  - Athletics: +7
  - Intimidation: +4
  - Survival: +6
damage_resistances: lightning (granted by darksteel greataxe)
languages: Common, Halfling
cr: 5 (1,800 XP)
traits:
  - name: Reckless
    desc: "Can gain advantage on melee weapon attacks on her turn, giving attackers advantage against her until next turn."
actions:
  - name: Multiattack
    desc: "Makes three Darksteel Greataxe or Improvised Weapon attacks in any combination."
  - name: Darksteel Greataxe
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 10 (1d12 + 4) slashing damage."
  - name: Improvised Weapon
    desc: "Melee or Ranged: +7 to hit, 20/60 ft. Hit: 7 (1d6 + 4) bludgeoning damage."
bonus_actions:
  - name: Wrestle
    desc: "Shoves a creature within 5 ft: DC 15 Str save or moved 5 ft into an unoccupied space of Holga's choice."
\`\`\`

---

## 🔮 Simon Aumar
Descendant of Elminster Aumar; wild magic sorcerer overcoming self-doubt with explosive clutch spellcasting.

\`\`\`statblock
monster: Simon Aumar
size: Medium
type: Humanoid (Sorcerer)
alignment: Chaotic Good
ac: 12 (15 with mage armor)
hp: 99 (18d8 + 18)
speed: 30 ft.
stats: [8, 14, 13, 16, 12, 17]
saves:
  - Con: +4
  - Cha: +6
skills:
  - Arcana: +6
  - Deception: +6
  - History: +6
  - Religion: +6
languages: Common, Draconic, Elvish
cr: 5 (1,800 XP)
traits:
  - name: Fey Ancestry
    desc: "Advantage on saves vs charmed; magic can't put him to sleep."
  - name: Wild Magic Surge
    desc: "When taking 20+ damage in a single hit or a critical hit, roll on the Wild Magic Surge table."
actions:
  - name: Multiattack
    desc: "Three attacks with Quarterstaff or Chaos Bolt, replacing one with Spellcasting."
  - name: Chaos Bolt
    desc: "Ranged Spell: +6 to hit, range 60 ft. Hit: 14 (2d10 + 3) damage of random type (d8: acid, cold, fire, force, lightning, poison, psychic, thunder)."
  - name: Spellcasting
    desc: "Roll d6: on a 1, rolls Wild Magic Surge. On 2+, casts: At will: mage hand, minor illusion, prestidigitation, speak with dead (deathly token); 2/day: fog cloud, mage armor, magic missile, spider climb; 1/day: Bigby's hand, major image."
reactions:
  - name: Sheltering Shield (3/Day)
    desc: "When Simon or creature within 10 ft takes damage, conjures a 10-ft sphere granting damage resistance to that triggering damage."
\`\`\`

---

## 💀 Sofina (Red Wizard of Thay)
Ruthless Thayan necromancer advancing Szass Tam's apocalyptic Beckoning Death plot.

\`\`\`statblock
monster: Sofina
size: Medium
type: Humanoid (Wizard)
alignment: Neutral Evil
ac: 14 (magic robe; 17 with mage armor)
hp: 161 (19d8 + 76)
speed: 30 ft.
stats: [12, 14, 18, 20, 14, 8]
saves:
  - Int: +11
  - Wis: +8
skills:
  - Arcana: +10
  - History: +10
  - Insight: +7
damage_resistances: necrotic
languages: Abyssal, Common, Draconic, Infernal, Thayan
cr: 15 (13,000 XP)
actions:
  - name: Multiattack
    desc: "Sofina makes three Necrotic Strike attacks."
  - name: Necrotic Strike
    desc: "Melee or Ranged Spell: +10 to hit, reach 5 ft or 120 ft. Hit: 32 (5d10 + 5) necrotic damage."
  - name: Spellcasting
    desc: "Intelligence (DC 18). At will: mage hand, message, prestidigitation; 2/day: bestow curse, Bigby's hand, dimension door, mage armor, Otiluke's resilient sphere, thunderwave; 1/day: Evard's black tentacles, finger of death, time stop."
  - name: Swarm of Meteors (1/Day)
    desc: "Four 40-ft-radius spheres within 1 mile: DC 18 Dex save or take 35 (10d6) fire + 35 (10d6) bludgeoning damage."
bonus_actions:
  - name: Summon Wraith (1/Day)
    desc: "Summons a Thayan assassin spirit as a wraith obeying her for 1 hour."
\`\`\`

---

## ⚔️ Xenk Yendar & Nightbringer
Thayan-born paladin of Devotion who escaped Szass Tam and wields the transforming daggersword.

\`\`\`statblock
monster: Xenk Yendar
size: Medium
type: Humanoid (Paladin)
alignment: Lawful Good
ac: 15 (half plate)
hp: 157 (21d8 + 63)
speed: 30 ft.
stats: [19, 11, 16, 14, 16, 17]
saves:
  - Str: +8
  - Cha: +7
skills:
  - Athletics: +8
  - Insight: +7
  - Survival: +7
condition_immunities: charmed, frightened, poisoned
languages: Common, Thayan, Undercommon
cr: 10 (5,900 XP)
traits:
  - name: Aura of Protection
    desc: "Xenk and allies within 10 ft have advantage on saving throws."
actions:
  - name: Multiattack
    desc: "Makes three Daggersword attacks and uses Daggersword Flourish (or Cleansing Touch)."
  - name: Daggersword (Longsword)
    desc: "Melee: +8 to hit, reach 5 ft. Hit: 8 (1d8 + 4) slashing + 6 (1d12) radiant."
  - name: Daggersword Flourish (Longsword)
    desc: "Launches blade up to 30 ft: DC 16 Dex save or 14 (3d6 + 4) piercing and knocked prone."
  - name: Cleansing Touch (1/Day)
    desc: "Touches creature within 5 ft: restores 27 (6d8) HP and confers lesser restoration."
bonus_actions:
  - name: Daggersword Shift
    desc: "Changes daggersword between longsword form and paired shortsword + dagger."
\`\`\`

### 🔨 Nightbringer
*Weapon (Mace), Legendary (Requires Attunement)*  
Given by the Dragon Queen Takhisis. +3 bonus to attack and damage rolls; deals extra **4d4 radiant damage**.  
- **Evil Alignment Boons**: Immunity to charmed, frightened, and one chosen elemental damage type (acid, cold, fire, lightning, or poison); Darkvision +60 ft.
- **Midnight Shroud (6 Charges)**: Spend 1 charge on hit: DC 20 Con save or blinded until start of next turn. Regains 1d6 daily at dawn.

---

*Related notes: [[Neverwinter]], [[The Harpers]], [[Szass Tam & Red Wizards of Thay]].*
`
  }
];
