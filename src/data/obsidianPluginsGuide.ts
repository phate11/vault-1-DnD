import { VaultNote } from '../types';

export const obsidianPluginsGuideNote: VaultNote = {
  id: "obsidian-community-plugins-guide",
  title: "Obsidian Community Plugins & Power-Ups Guide",
  folder: "Index",
  category: "Index",
  tags: ["obsidian", "plugins", "dataview", "statblocks", "leaflet", "callouts", "guide"],
  aliases: ["Plugins Guide", "Community Plugins", "Obsidian Power-Ups"],
  content: `---
title: Obsidian Community Plugins & Power-Ups Guide
category: Index
folder: Index
tags: [obsidian, plugins, dataview, statblocks, leaflet, callouts, guide]
---

# Obsidian Community Plugins & Power-Ups Guide

This vault is engineered to run seamlessly as both a standalone web application and as an authentic, high-powered desktop & mobile **Obsidian** knowledge base. 

When you export and extract this vault, it comes pre-configured with support for the most popular TTRPG community plugins in the Obsidian ecosystem.

---

## ⚡ Pre-Configured Community Plugins

Your exported vault includes ready-to-run configurations for three premier community plugins:

1. **Dataview**: Dynamic database queries, filterable tables, and indexes across all 5e rules, monsters, spells, and locations.
2. **Obsidian 5e-Statblocks (TTRPG Statblocks)**: Authentic parchment-style monster and NPC stat blocks with interactive dice rolling.
3. **Obsidian Leaflet**: Interactive tactical map pins, coordinate markers, and deep-linked location cartography for Barovia and the Sword Coast.

> [!tip] 1-Click Activation in Obsidian
> When you open this vault in Obsidian for the first time:
> 1. Go to **Settings > Community plugins**.
> 2. Turn off **Restricted mode** ("Safe mode").
> 3. Click **Enable** on **Dataview**, **TTRPG Statblocks**, and **Obsidian Leaflet**. All default layouts and settings have already been pre-bundled in your \`.obsidian\` directory!

---

## 📊 1. Dataview Query Engine

Dataview treats your notes like a SQL/relational database. You can write simple \`\`\`dataview\` code blocks to dynamically generate tables of spells, monsters, magic items, or NPCs without manually updating lists.

### Live Dataview Table: High-Level Demon Lords & Foes
The query below scans the vault and builds a live table of high-CR foes:

\`\`\`dataview
TABLE category, folder, tags
FROM "Mordenkainen (MTF)"
WHERE contains(tags, "statblock")
\`\`\`

### Live Dataview Table: Spell Catalogs
Query spells dynamically by school, level, or source:

\`\`\`dataview
TABLE category, folder
FROM "Spells"
\`\`\`

### Dataview Query Cheat Sheet for Your Campaigns:
- **All Undead Monsters in Barovia**:
  \`\`\`dataview
  TABLE cr, type, alignment
  FROM "Curse of Strahd"
  WHERE contains(tags, "creature") OR contains(tags, "npc")
  \`\`\`
- **Modern Firearms & Armor**:
  \`\`\`dataview
  TABLE category, tags
  FROM "Modern Equipment"
  \`\`\`
- **Sword Coast Regional Factions**:
  \`\`\`dataview
  LIST
  FROM "Sword Coast (SCAG)"
  WHERE contains(tags, "faction")
  \`\`\`

---

## 🐉 2. 5e TTRPG Statblocks (Obsidian-5e-Statblocks)

The vault supports authentic WotC-style monster parchment statblocks. Below is an interactive statblock formatted using the \`\`\`statblock\` code block syntax. Click on any ability score or action to roll checks directly in the app!

\`\`\`statblock
name: Strahd von Zarovich
size: Medium
type: undead (shapechanger)
alignment: lawful evil
ac: 16 (natural armor)
hp: 144 (17d8 + 68)
speed: 30 ft.
stats: [18, 18, 18, 17, 15, 18]
saves: Dex +9, Wis +7, Cha +9
skills: Arcana +15, Perception +12, Religion +10, Stealth +14
damage_resistances: necrotic; bludgeoning, piercing, and slashing from nonmagical attacks
senses: darkvision 120 ft., passive Perception 22
languages: Abyssal, Common, Draconic, Elvish, Giant, Infernal
cr: 15 (13,000 XP)
traits:
  - name: Shapechanger
    desc: If Strahd isn't in sunlight or running water, he can use his action to polymorph into a Tiny bat or a Medium wolf, or back into his true form.
  - name: Legendary Resistance (3/Day)
    desc: If Strahd fails a saving throw, he can choose to succeed instead.
  - name: Misty Escape
    desc: When he drops to 0 hit points outside his resting place, Strahd transforms into a cloud of mist instead of falling unconscious.
  - name: Regeneration
    desc: Strahd regains 20 hit points at the start of his turn if he has at least 1 hit point and isn't in sunlight or running water.
actions:
  - name: Multiattack
    desc: Strahd makes two attacks, only one of which can be a bite attack.
  - name: Unarmed Strike
    desc: Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) bludgeoning damage plus 14 (4d6) necrotic damage. The target is grappled (escape DC 18) if Strahd isn't already grappling a creature.
  - name: Bite
    desc: Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by Strahd, incapacitated, or restrained. Hit: 12 (2d6 + 4) piercing damage plus 10 (3d6) necrotic damage.
legendary_actions:
  - name: Move
    desc: Strahd moves up to his speed without provoking opportunity attacks.
  - name: Unarmed Strike
    desc: Strahd makes one unarmed strike attack (+9 to hit).
  - name: Bite (Costs 2 Actions)
    desc: Strahd makes one bite attack against a grappled or incapacitated creature.
\`\`\`

---

## 🗺️ 3. Obsidian Leaflet Map Integration

Leaflet map blocks link tactical coordinates directly to your notes. Below is a sample interactive Leaflet coordinate grid for the valley of Barovia. Click any pin or list entry to jump directly to that note!

\`\`\`leaflet
id: barovia-regional-overview
lat: 50
long: 50
unit: miles
scale: 1
marker: castle, 54.2, 48.8, Castle Ravenloft, [[Castle Ravenloft - Overview]]
marker: town, 51.5, 38.2, Village of Barovia, [[Village of Barovia]]
marker: town, 53.8, 62.1, Town of Vallaki, [[Town of Vallaki]]
marker: dungeon, 50.1, 71.4, The Amber Temple, [[The Amber Temple - Upper & Lower Sanctuaries]]
marker: village, 48.6, 52.3, Village of Krezk, [[The Village of Krezk & Abbey of Saint Markovia]]
marker: landmark, 49.3, 55.7, Wizard of Wines, [[The Wizard of Wines Winery]]
marker: danger, 52.9, 58.6, Argynvostholt, [[Argynvostholt - Dragon Mansion]]
marker: danger, 47.8, 65.2, Berez & Baba Lysaga, [[The Ruins of Berez & Baba Lysaga]]
\`\`\`

---

## 🎨 4. Custom D&D 5e Callout Blocks

Obsidian supports custom callouts with the \`> [!type]\` syntax. This vault includes styling for authentic D&D callouts:

> [!tarokka] The High Deck: The Darklord
> *The card of evil and ancient suffering. It whispers of the ancient master who sits upon the throne of Barovia, cloaked in mist and shadow.*

> [!statblock] Quick Combat Rule: Concentration
> Whenever a spellcaster takes damage while concentrating on a spell, they must make a **Constitution saving throw** to maintain focus. The DC equals **10 or half the damage taken**, whichever number is higher!

> [!spell] Technomagic: Haywire
> *3rd-level transmutation (technomagic)*. You cause electronic systems within a 30-foot cube to overload, short-circuit, and discharge arcing sparks.

> [!loot] Hoard Item: The Sunsword
> *Weapon (longsword), legendary (requires attunement)*. The Sunsword is a unique \`+2 blade of pure radiant sunlight\`. Against undead, it deals an extra \`1d8\` radiant damage.

> [!dm] Dungeon Master Note: Atmospheric Mist
> Remember that the mists of Ravenloft cannot be dispelled by natural or magical wind. Any creature that enters the mists without Strahd's blessing suffers cumulative levels of exhaustion!

---

*For full instructions on opening your vault with all pre-configured plugins, see \`README.md\` in the exported ZIP archive.*
`
};
