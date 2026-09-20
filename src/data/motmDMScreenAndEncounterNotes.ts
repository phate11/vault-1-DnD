import { VaultNote } from '../types';

export const motmDMScreenAndEncounterNotes: VaultNote[] = [
  {
    id: "motm-dm-tools-and-encounters",
    title: "Monsters of the Multiverse - DM Encounter Tables & Tactical Guide",
    folder: "Monsters of the Multiverse/DM Tools",
    category: "Tool",
    tags: [
      "motm", "dm-tools", "encounters", "random-tables", "tactics", "demon-lords", "archdevils"
    ],
    aliases: [
      "MotM DM Guide", "Multiverse Encounter Tables", "MotM Boss Tactics", "Multiverse DM Screen"
    ],
    content: `---
title: Monsters of the Multiverse - DM Encounter Tables & Tactical Guide
category: Tool
folder: Monsters of the Multiverse/DM Tools
tags: [motm, dm-tools, encounters, random-tables, tactics, demon-lords, archdevils]
source: Mordenkainen Presents: Monsters of the Multiverse
---

# Monsters of the Multiverse: DM Encounter Tables & Tactical Guide

This DM companion brings the monsters of *Monsters of the Multiverse* to your table with rapid encounter generation tables, modern 5e monster design principles, and boss tactics.

---

## ⚡ 1. Modern 5e Monster Design System

*Monsters of the Multiverse* introduced core system modernizations across all monster stat blocks:
1. **Action-Oriented Spellcasting**: Rather than managing spell slots and full spell lists during combat, spellcasting monsters now use streamlined *At will* and *X/day* actions, frequently with dedicated **Arcane Burst** attacks (+PB to hit, force/psychic/elemental damage).
2. **Components Removed**: Innate and standard monster spellcasting in MotM generally requires **no material components**.
3. **Dedicated Bonus Actions**: Monsters now feature explicit **Bonus Actions** (e.g., *Shadow Step*, *Aggressive*, *Change Shape*, *Enlarge*, *Rampage*) clearly demarcated from standard actions.
4. **Force Damage Standardization**: Magical weapon attacks that previously dealt bludgeoning, piercing, or slashing damage now deal **force damage** directly to prevent clunky nonmagical resistance bookkeeping.
5. **Proficiency Bonus (PB) Integration**: The monster's PB (+2 to +8) is explicitly printed next to the Challenge Rating and tied to save DCs and skill proficiencies.

---

## 🎲 2. Multiverse Random Encounter Tables (1d8)

### 🌲 Feywild & Ancient Forest (1d8)
| d8 | Encounter | Danger / Hook |
|:--:|:----------|:--------------|
| 1 | 1 \`[[Boggle]]\` and 1d4 \`[[Quickling]]\` | Mischievous ambush stealing spell foci and tying boots together |
| 2 | 1 \`[[Redcap]]\` hunting a runaway merchant | Looking to soak its iron hat in fresh blood before 3 days expire |
| 3 | 1 \`[[Annis Hag]]\` offering an *Iron Token* | Posing as a grandmother offering poisoned sweetmeats |
| 4 | 1 \`[[Autumn Eladrin]]\` with 2 \`[[Banderhobb]]\` guards | Sponsoring a woodland negotiation that threatens to turn sinister |
| 5 | 1 \`[[Korred]]\` commanding 50-ft hair ropes | Dancing atop megaliths, offended by metal digging picks |
| 6 | 1 \`[[Corpse Flower]]\` with 3 zombie thralls | Scavenging the site of a long-past skirmish |
| 7 | 1 \`[[Wood Woad]]\` guarding a hollow heart tree | Standing motionless until intruders step near the druidic grove |
| 8 | 1 \`[[Froghemoth]]\` worshipped by bullywugs | Rising from a stagnant peat pool to swallow mounts whole |

### ⛏️ Underdark & Sunless Caverns (1d8)
| d8 | Encounter | Danger / Hook |
|:--:|:----------|:--------------|
| 1 | 2d4 \`[[Derro]]\` led by 1 \`[[Derro Savant]]\` | Laying ambush with hooked spears and chromatic radiant beams |
| 2 | 1 \`[[Cave Fisher]]\` clinging to a 40-ft ceiling | Dangles nearly invisible sticky filaments to hoist scout |
| 3 | 1 \`[[Choldrith]]\` commanding 1d6 \`[[Chitine]]\` | Web-trapping a chasm crossing to harvest sacrifices for Lolth |
| 4 | 1 \`[[Duergar Kavalrachni]]\` mounted on a \`[[Female Steeder]]\` | Patrolling deep fungal tunnels with shared invisibility |
| 5 | 1 \`[[Flail Snail]]\` scraping crystal walls | Leaving a glistening trail of glass valuable for window panes |
| 6 | 1 \`[[Mindwitness]]\` transmitting illithid telepathy | Flanked by 1d4 \`[[Cranium Rat]]\` swarms acting as remote eyes |
| 7 | 1 \`[[Drow Shadowblade]]\` on an assassination mission | Stalking targets from dim shadows with a shadowy blade |
| 8 | 1 \`[[Elder Oblex]]\` impersonating 3 lost travelers | Mimicking sulfur-scented replicas to lure party into a dead-end |

### 🔥 The Nine Hells & Infernal Ruins (1d8)
| d8 | Encounter | Danger / Hook |
|:--:|:----------|:--------------|
| 1 | 2 \`[[Merregon]]\` legionnaires with iron masks | Holding a narrow causeway over a boiling river of blood |
| 2 | 1 \`[[Black Abishai]]\` assassin | Weaving magical darkness along gothic parapets |
| 3 | 1 \`[[Orthon]]\` infernal bounty hunter | Tracking an escaped fugitive across planar boundaries |
| 4 | 1 \`[[Narzugon]]\` mounted on a hellfire nightmare | Wielding a lance that condemns slain foes directly to the Styx |
| 5 | 1 \`[[Amnizu]]\` inspecting a company of lemures | Guarding a citadel overlooking the banks of the River Styx |
| 6 | 1 \`[[Hellfire Engine]]\` rumbling across plains | Semiautonomous siege machine mowing down all non-devils |
| 7 | 1 \`[[Titivilus]]\` courier escorted by 2 \`[[Boneclaw]]\` | Offering an ironclad contract with treacherous small print |
| 8 | Herald of \`[[Zariel]]\` wielding a flaming flail | Demanding martial fealty in the eternal Blood War |

### 🩸 The Abyss & Abyssal Rifts (1d8)
| d8 | Encounter | Danger / Hook |
|:--:|:----------|:--------------|
| 1 | 1d6 \`[[Rutterkin]]\` fiends | Howling mob spreading disease that transforms victims into manes |
| 2 | 1 \`[[Babau]]\` demon | Weakening gaze that cripples Strength-based frontline fighters |
| 3 | 1 \`[[Maw Demon]]\` feasting on carrion | Regurgitating corrosive acid and teleporting meals to Yeenoghu |
| 4 | 1 \`[[Armanite]]\` charging through rifts | Thunderous cavalry unleashing lightning lances |
| 5 | 1 \`[[Shoosuva]]\` paired with a gnoll war band | Paralyzing poison stinger hunting alongside a \`[[Flind]]\` |
| 6 | 1 \`[[Alkilith]]\` slime coating an archway | Expanding an active planar rift to the Abyss |
| 7 | 1 \`[[Molydeus]]\` wielding a vorpal weapon | Two-headed enforcer searching for blasphemers against its master |
| 8 | 1 \`[[Sibriex]]\` floating in a pool of bile | Flesh-crafting horrific mutations and inflicting exhaustion |

---

## 👑 3. Demon Lords & Archdevils Quick Reference

| Entity | Domain / Layer | CR | Primary Threat / Special Mechanics |
|:-------|:---------------|:--:|:-----------------------------------|
| \`[[Bael]]\` | Avernus / Bronze General | 19 | Regeneration 20 HP, Dread aura DC 22, Hellish Morningstar |
| \`[[Baphomet]]\` | Endless Maze (Lyktion) | 23 | Charge gore DC 25 Str save, Heartcleaver, *maze* immunity, Reverse Gravity |
| \`[[Demogorgon]]\` | Gaping Maw (Abysm) | 26 | Dual Gaze (Beguiling/Confusing/Hypnotic), max HP drain tentacles, duplicate illusion |
| \`[[Fraz-Urb'luu]]\` | Hollow's Heart (Zoragmelok) | 23 | Undetectable by divination, Phantasmal Terror, shape-shifting deception |
| \`[[Geryon]]\` | Stygia (Coldsteel) | 22 | Regeneration 20 HP, Stinger DC 21 max HP drain, Minotaur horn summons |
| \`[[Graz'zt]]\` | Azzatar (Argent Palace) | 24 | Wave of Sorrow acid greatsword, Negate Spell reaction, *Dance, My Puppet!* |
| \`[[Hutijin]]\` | Cania | 21 | Infernal Despair (disadvantage on all saves in 30 ft!), 4-attack multiattack |
| \`[[Juiblex]]\` | Shedaklah (Slime Pits) | 23/24 | Foul aura, Eject Slime corrodes weapons/armor, Acid Lash reach 60/120 ft |
| \`[[Moloch]]\` | Exiled Archdevil | 21 | 30-ft Many-Tailed Whip pull, Breath of Despair flee condition |
| \`[[Orcus]]\` | Thanatos (Naratyr) | 26 | Wand of Orcus, Conjure 500 HP of Undead, Deadly Utterance (*power word kill*) |
| \`[[Titivilus]]\` | Dis | 16 | Silver Sword necrotic drain, Twisting Words DC 21 charm, Corrupting Guidance |
| \`[[Yeenoghu]]\` | Death Dells | 24/25 | Butcher triple-flail (Confusion/Force/Paralysis), Incite the Pack advantage |
| \`[[Zariel]]\` | Avernus | 26 | AC 21, HP 420, Horrid Touch 44 necrotic + blind/deafen, Immolating Gaze |
| \`[[Zuggtmoy]]\` | Shedaklah | 23 | Infestation Spores (spore servant disease), Mind Control Spores (24h charm) |
`
  }
];
