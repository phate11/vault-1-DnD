import { VaultNote } from '../types';

export const tcoeSubclassesAndRulesNotes: VaultNote[] = [
  {
    id: 'tcoe-custom-lineages-and-character-options',
    title: "TCoE Custom Lineages and Origin Customization",
    folder: 'Rules',
    category: 'Rule',
    tags: ['rule', 'tcoe', 'character-creation', 'custom-lineage'],
    aliases: ['Custom Lineage', 'Origin Customization', 'TCoE Lineages'],
    source: "Tasha's Cauldron of Everything, Chapter 1",
    content: `---
title: TCoE Custom Lineages and Origin Customization
folder: Rules
category: Rule
source: Tasha's Cauldron of Everything
tags:
  - rule
  - tcoe
  - character-creation
  - custom-lineage
---

# TCoE Custom Lineages and Origin Customization

In *Tasha's Cauldron of Everything*, players gain official options to customize racial ability score increases, proficiencies, languages, and build entirely unique ancestries using the **Custom Lineage** framework.

> [!LORE]
> *"The origins of adventurers are as diverse as the multiverse itself. Rigid templates only serve those who lack imagination."*
> — Tasha

---

## Customizing Your Origin
If you choose a published race for your character, you can make the following modifications with your DM's approval:

1. **Ability Score Increases**: Whatever increases you gain in your race, you can replace each one with another ability score of your choice (e.g. +2 DEX / +1 CON can become +2 INT / +1 DEX). You cannot apply more than one increase to the same score unless specified.
2. **Languages**: You can substitute any language granted by your race with another language from the standard or exotic lists.
3. **Proficiencies**: You can exchange skill proficiencies for other skills, and weapon or armor proficiencies according to the proficiency swap table:
   - Skill proficiency $\\rightarrow$ Any other skill proficiency
   - Armor proficiency $\\rightarrow$ Simple weapon or tool proficiency
   - Simple weapon $\\rightarrow$ Simple weapon or tool proficiency
   - Martial weapon $\\rightarrow$ Simple/martial weapon or tool proficiency

---

## Custom Lineage Framework
Instead of choosing one of the game's races for your character at 1st level, you can build a custom lineage using these traits:

| Trait | Specification |
|---|---|
| **Creature Type** | You are a Humanoid. You determine your appearance and whether you resemble kin or are unique. |
| **Size** | Medium or Small (your choice when chosen). |
| **Speed** | 30 feet. |
| **Ability Score Increase** | One ability score of your choice increases by 2. |
| **Feat** | You gain one [[Feat]] of your choice for which you qualify. |
| **Variable Trait** | You gain a choice between **Darkvision** (60 ft.) or proficiency in one skill of your choice. |
| **Languages** | You can speak, read, and write Common and one other language that you and your DM agree is appropriate. |

---

## Related Notes
- [[Rules Overview]]
- [[Races Overview]]
- [[Feats Overview]]
- [[TCoE Optional Class Features]]
`
  },
  {
    id: 'tcoe-optional-class-features',
    title: "TCoE Optional Class Features",
    folder: 'Rules',
    category: 'Rule',
    tags: ['rule', 'tcoe', 'classes', 'optional-features'],
    aliases: ['Optional Class Features', 'TCoE Class Enhancements'],
    source: "Tasha's Cauldron of Everything, Chapter 1",
    content: `---
title: TCoE Optional Class Features
folder: Rules
category: Rule
source: Tasha's Cauldron of Everything
tags:
  - rule
  - tcoe
  - classes
  - optional-features
---

# TCoE Optional Class Features

*Tasha's Cauldron of Everything* introduces modular optional features for every single core class in 5e, supplementing or replacing standard abilities to modernize combat, spell choices, and out-of-combat utility.

---

## Barbarian
- **Primal Knowledge (3rd & 10th Level)**: Gain proficiency in one additional barbarian skill (Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival).
- **Instinctive Pounce (7th Level)**: As part of the bonus action used to enter rage, move up to half your walking speed.

---

## Bard
- **Additional Bard Spells**: Expanded spell list including *aid*, *mass healing word*, *color spray*, and *prismatic spray*.
- **Magical Inspiration (1st Level)**: When a creature with a Bardic Inspiration die casts a damaging or healing spell, they can roll the die and add the number to the damage or healing.
- **Bardic Versatility (4th Level)**: Swap expertise skill or cantrip upon reaching an ASI level.

---

## Cleric
- **Harness Divine Power (2nd Level)**: Expend a use of Channel Divinity as a bonus action to recover an expended spell slot up to a level equal to half your proficiency bonus (rounded up).
- **Cantrip Versatility (4th Level)**: Replace a cleric cantrip at each ASI level.
- **Blessed Strikes (8th Level)**: Replace Divine Strike or Potent Spellcasting with radiant damage on weapon and cantrip attacks.

---

## Druid
- **Wild Companion (2nd Level)**: Expend a use of Wild Shape to cast *find familiar* without material components; the familiar is fey and disappears after a number of hours equal to half druid level.
- **Cantrip Versatility (4th Level)**: Swap a cantrip on ASI level.

---

## Fighter
- **New Fighting Styles**: Blind Fighting, Interception, Superior Technique (gain a Battle Master maneuver and superiority die), and Thrown Weapon Fighting.
- **Martial Versatility (4th Level)**: Swap a fighting style or maneuver when gaining an ASI.

---

## Monk
- **Dedicated Weapon (2nd Level)**: Focus ki to make any simple or martial weapon without the heavy or special property count as a monk weapon.
- **Ki-Fueled Attack (3rd Level)**: If you spend ki during your action, make one unarmed strike or monk weapon attack as a bonus action.
- **Quickened Healing (4th Level)**: Spend 2 ki points as an action to roll Martial Arts die + proficiency bonus and regain that many hit points.
- **Focused Aim (5th Level)**: Spend 1 to 3 ki points to add +2 per ki point to a missed attack roll.

---

## Paladin
- **Harness Divine Power (3rd Level)**: Channel Divinity to regain a spell slot.
- **Martial Versatility (4th Level)**: Swap fighting style on ASI.

---

## Ranger
- **Deft Explorer (1st Level - Replaces Natural Explorer)**:
  - *Canny (1st)*: Expertise in one skill and two languages.
  - *Roving (6th)*: +5 ft. walking speed, climbing and swimming speed.
  - *Tireless (10th)*: Temp HP bonus action (1d8 + WIS) and remove exhaustion on short rests.
- **Favored Foe (1st Level - Replaces Favored Enemy)**: Mark a target on hit without requiring a bonus action; deal bonus 1d4 (scaling to 1d6, 1d8) damage once per turn.
- **Primal Companion (3rd Level - Beast Master enhancement)**: Summon a Beast of the Land, Sea, or Sky that uses your spell attack modifier and acts on your turn.

---

## Rogue
- **Steady Aim (3rd Level)**: As a bonus action, give yourself advantage on your next attack roll this turn, provided you haven't moved yet this turn. Your speed drops to 0 until end of turn.

---

## Sorcerer
- **Sorcerous Versatility (4th Level)**: Swap known spells or metamagic choices.
- **Magical Guidance (5th Level)**: Spend 1 sorcery point to reroll a failed ability check.

---

## Warlock
- **Talisman Pact Boon (3rd Level)**: Wearer gains 1d4 bonus on failed ability checks.
- **Eldritch Versatility (4th Level)**: Swap cantrips, pact boons, and invocations.

---

## Wizard
- **Cantrip Formulas (3rd Level)**: Swap prepared cantrips after a long rest directly from your spellbook.

---

## Related Notes
- [[Classes Overview]]
- [[TCoE Subclasses Overview]]
`
  },
  {
    id: 'tcoe-subclasses-overview',
    title: 'TCoE Subclasses Overview',
    folder: 'Subclasses',
    category: 'Subclass',
    tags: ['subclass', 'tcoe', 'classes', 'character-options'],
    aliases: ['Tasha Subclasses', 'TCoE Archetypes'],
    source: "Tasha's Cauldron of Everything, Chapter 1",
    content: `---
title: TCoE Subclasses Overview
folder: Subclasses
category: Subclass
source: Tasha's Cauldron of Everything
tags:
  - subclass
  - tcoe
  - classes
  - character-options
---

# TCoE Subclasses Overview

*Tasha's Cauldron of Everything* introduces 22 dynamic subclasses plus the official integration of the **Artificer** class and its specialists.

\`\`\`dataview
TABLE category, folder, tags
FROM "Subclasses"
WHERE contains(tags, "tcoe")
SORT file.name ASC
\`\`\`

---

## Subclasses by Class

| Class | Subclass | Core Flavor & Mechanics |
|---|---|---|
| **Artificer** | [[TCoE Artificer Armorer]] | Powered arcane powered-armor (Guardian & Infiltrator modes) |
| **Barbarian** | [[TCoE Barbarian Path of the Beast]] | Mutates natural fangs, claws, and tail weapons during rage |
| **Barbarian** | [[TCoE Barbarian Path of Wild Magic]] | Unpredictable planar surges upon raging |
| **Bard** | [[TCoE Bard College of Creation]] | Animates objects and sings the Song of Creation into physical items |
| **Bard** | [[TCoE Bard College of Eloquence]] | Unmatched persuasion/deception floors (Silver Tongue) and unsettling words |
| **Cleric** | [[TCoE Cleric Order Domain]] | Commands allies to strike with reactions when targeted by spells |
| **Cleric** | [[TCoE Cleric Peace Domain]] | Emboldening Bond connecting companions to share bonuses and absorb damage |
| **Cleric** | [[TCoE Cleric Twilight Domain]] | 300 ft. darkvision, twilight sanctuary temporary hit points and condition clearing |
| **Druid** | [[TCoE Druid Circle of Stars]] | Star map constellations (Archer, Chalice, Dragon) and cosmic omens |
| **Druid** | [[TCoE Druid Circle of Wildfire]] | Fiery primal spirit companion and healing/flame teleportation |
| **Fighter** | [[TCoE Fighter Psi Warrior]] | Telekinetic strikes, psionic shields, and psychokinetic leaps |
| **Fighter** | [[TCoE Fighter Rune Knight]] | Giant runes engraved on equipment for size expansion and damage resistance |
| **Monk** | [[TCoE Monk Way of Mercy]] | Implements Hands of Healing and Hands of Harm with a plague doctor mask |
| **Monk** | [[TCoE Monk Way of the Astral Self]] | Manifests ethereal arms, visage, and body of astral energy |
| **Paladin** | [[TCoE Paladin Oath of Glory]] | Peerless athletes performing legendary deeds and inspiring heroism |
| **Paladin** | [[TCoE Paladin Oath of the Watchers]] | Extraplanar vigilance, abjuration auras, and counterspelling aberrations |
| **Ranger** | [[TCoE Ranger Fey Wanderer]] | Dreadful strikes, charisma bonus from wisdom, and fey charms |
| **Ranger** | [[TCoE Ranger Swarmkeeper]] | Commands a gathering of spirits/insects to push foes and grant flight |
| **Rogue** | [[TCoE Rogue Phantom]] | Channels ghosts of the departed into soul trinkets and necrotic Sneak Attack |
| **Rogue** | [[TCoE Rogue Soulknife]] | Manifests psionic psychic blades and telepathic networks |
| **Sorcerer** | [[TCoE Sorcerer Aberrant Mind]] | Psionic spells, telepathic speech, and mind-warping alien transformations |
| **Sorcerer** | [[TCoE Sorcerer Clockwork Soul]] | Mechanus order, neutralizing advantage/disadvantage, and bastion of law |
| **Warlock** | [[TCoE Warlock Fathomless]] | Tentacle of the deep summon, ocean depths cold resistance, and grasping coils |
| **Warlock** | [[TCoE Warlock Genie]] | Patron vessel refuge, elemental damage extra punch, and Wish capabilities |
| **Wizard** | [[TCoE Wizard Bladesinging]] | Elven martial dance augmenting AC, concentration, and speed |
| **Wizard** | [[TCoE Wizard Order of Scribes]] | Awakened spellbook manifest, damage-type swapping, and scrolls crafting |

---

## Related Notes
- [[Classes Overview]]
- [[TCoE Optional Class Features]]
- [[TCoE Magical Tattoos]]
`
  },
  {
    id: 'tcoe-artificer-armorer',
    title: 'TCoE Artificer Armorer',
    folder: 'Subclasses',
    category: 'Subclass',
    tags: ['subclass', 'artificer', 'tcoe', 'armor', 'infusions'],
    aliases: ['Armorer', 'Artificer Armorer'],
    source: "Tasha's Cauldron of Everything, Chapter 1",
    content: `---
title: TCoE Artificer Armorer
folder: Subclasses
category: Subclass
source: Tasha's Cauldron of Everything
tags:
  - subclass
  - artificer
  - tcoe
  - armor
---

# TCoE Artificer: Armorer Specialist

An Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense.

> [!STATBLOCK]
> name: Arcane Armor Model
> type: Artificer Feature
> traits:
>   - name: Tools of the Trade (3rd Level)
>     desc: Gain proficiency with heavy armor and smith's tools.
>   - name: Arcane Armor (3rd Level)
>     desc: You can turn a suit of armor into arcane armor as an action using smith's tools. It attaches to you, replaces missing limbs, cannot be removed against your will, and ignores strength requirements.

---

## Armor Models
You can customize your arcane armor into one of two models during a short or long rest:

### 1. Guardian Mode
- **Thunder Gauntlets**: Your armored fists count as simple melee weapons dealing **1d8 thunder damage**. A creature hit has disadvantage on attack rolls against targets other than you until the start of your next turn.
- **Defensive Field**: As a bonus action, gain temporary hit points equal to your artificer level (usable proficiency bonus times per long rest).

### 2. Infiltrator Mode
- **Lightning Launcher**: A gem or node on your chest or fist deals **1d6 lightning damage** (range 90/300). Once on each of your turns, deals an extra 1d6 lightning damage to that target.
- **Powered Steps**: Your walking speed increases by 5 feet.
- **Dampening Field**: You have advantage on Dexterity (Stealth) checks.

---

## Advanced Features
- **Extra Attack (5th Level)**: Attack twice when taking the Attack action on your turn.
- **Armor Modifications (9th Level)**: Your arcane armor counts as separate items for infusions: chest piece, boots, helmet, and weapon (allowing two extra active infusions).
- **Perfected Armor (15th Level)**:
  - *Guardian*: Pull huge or smaller targets up to 30 ft. with a reaction on hit.
  - *Infiltrator*: Lightning launcher grants advantage to next attacker and adds 1d6 damage.

---

## Related Notes
- [[TCoE Subclasses Overview]]
- [[Equipment Overview]]
`
  },
  {
    id: 'tcoe-magical-tattoos-and-items',
    title: 'TCoE Magical Tattoos and Magic Items',
    folder: 'Equipment',
    category: 'Magic Item',
    tags: ['magic-item', 'tcoe', 'tattoos', 'equipment', 'attunement'],
    aliases: ['Magical Tattoos', 'TCoE Magic Items'],
    source: "Tasha's Cauldron of Everything, Chapter 3",
    content: `---
title: TCoE Magical Tattoos and Magic Items
folder: Equipment
category: Magic Item
source: Tasha's Cauldron of Everything
tags:
  - magic-item
  - tcoe
  - tattoos
  - equipment
---

# TCoE Magical Tattoos and Magic Items

*Tasha's Cauldron of Everything* formalizes magical tattoos, produced by magical needles that trace glowing patterns into flesh and attune like magic items.

---

## Magical Tattoos Overview

| Tattoo Name | Rarity | Attunement | Core Ability |
|---|---|---|---|
| **Absorbing Tattoo** | Very Rare | Yes | Grants resistance to one damage type (acid, cold, fire, lightning, etc.) and reaction to negate damage and regain HP. |
| **Barrier Tattoo** | Uncommon to Very Rare | Yes | Provides unarmored AC equal to 12 + DEX (uncommon), 15 + DEX (rare, max +2), or 18 (very rare). |
| **Blood Fury Tattoo** | Legendary | Yes | 10 charges: expend charge on hit for extra 4d6 necrotic damage and heal equal to damage; counter-attack with reaction on being hit. |
| **Coiling Maelstrom Tattoo** | Rare | Yes | Grapple foes at 15 ft. range with swirling water tendrils and deal 3d6 force damage. |
| **Eldritch Claw Tattoo** | Uncommon | Yes | +1 to unarmed strikes and magical damage. Bonus action Eldritch Maul empowers attacks with 30 ft. range and +1d6 force damage. |
| **Ghost Step Tattoo** | Very Rare | Yes | 3 charges: bonus action to become incorporeal, resistant to nonmagical damage, and move through solid objects. |
| **Illuminator's Tattoo** | Common | No | Write with your fingertip in invisible or glowing ink; erase or illuminate text at will. |
| **Lifewell Tattoo** | Very Rare | Yes | Necrotic resistance; drops to 1 HP instead of 0 once per long rest. |
| **Masquerade Tattoo** | Common | Yes | Cast *disguise self* once per day; reshape tattoo into any artistic form on your skin. |
| **Shadowfell Brand Tattoo** | Rare | Yes | Advantage on Stealth; reaction halves incoming damage when hit by an attacker you can see. |
| **Spellwrought Tattoo** | Common to Rare | No | Needle containing a single spell (cantrip up to 5th level) that can be cast once before the tattoo vanishes. |

---

## Notable TCoE Magic Items
- **All-Purpose Tool (+1, +2, +3)**: Focus for artificers; turns into any artisan's tool and grants knowledge of any cantrip for 8 hours.
- **Amulet of the Devout (+1, +2, +3)**: Paladin/Cleric focus; grants bonus to spell attack/DC and one free Channel Divinity daily.
- **Arcane Grimoire (+1, +2, +3)**: Wizard spellbook; boosts spell DC and increases Arcane Recovery slots by 1.
- **Bloodwell Vial (+1, +2, +3)**: Sorcerer focus; recovers 5 sorcery points when rolling Hit Dice during a short rest.
- **Moon Sickle (+1, +2, +3)**: Druid/Ranger sickle; boosts attack and spell DC, plus adds 1d4 healing to any healing spell cast.
- **Rhythm-Maker's Drum (+1, +2, +3)**: Bard drum; regains one use of Bardic Inspiration as an action once per day.
- **Rod of the Pact Keeper / Eldritch Claw**: Rebalanced casting catalysts for spellcasters.

---

## Related Notes
- [[Equipment Overview]]
- [[TCoE Subclasses Overview]]
`
  },
  {
    id: 'tcoe-sidekicks-and-group-patrons',
    title: 'TCoE Sidekicks and Group Patrons',
    folder: 'Rules',
    category: 'Rule',
    tags: ['rule', 'tcoe', 'sidekicks', 'group-patrons', 'dm-tools'],
    aliases: ['Sidekicks', 'Group Patrons', 'TCoE DM Tools'],
    source: "Tasha's Cauldron of Everything, Chapter 4",
    content: `---
title: TCoE Sidekicks and Group Patrons
folder: Rules
category: Rule
source: Tasha's Cauldron of Everything
tags:
  - rule
  - tcoe
  - sidekicks
  - group-patrons
  - dm-tools
---

# TCoE Sidekicks and Group Patrons

*Tasha's Cauldron of Everything* provides rules for companion characters (Sidekicks) and unifying faction sponsors (Group Patrons).

---

## Sidekick Classes (CR 1/2 or Lower Creatures)

### 1. Expert
- Master of skills, survival, and support.
- Features: **Helpful** (Help action as a bonus action), **Cunning Action**, **Expertise**, and **Reliable Talent**.

### 2. Spellcaster
- Mages, clerics, or druids casting through simplified slot progression.
- Roles: **Mage** (Wizard/Warlock spells), **Healer** (Cleric/Druid spells), or **Prodigy** (Bard/Sorcerer spells).
- Features: **Potent Cantrips**, **Empowered Spells**, and **Focused Casting**.

### 3. Warrior
- Frontline martial companion.
- Features: **Martial Role** (Attacker or Defender), **Second Wind**, **Extra Attack**, and **Indomitable**.

---

## Group Patrons Table
Roll or select a patron that funds, protects, and directs the adventuring party:

| d8 | Group Patron | Patron Perks & Campaign Style |
|---|---|---|
| 1 | **Academy** | Access to arcane libraries, lab equipment, research stipends, and sage advisors. |
| 2 | **Ancient Being** | Supernatural boons, mysterious omens, telepathic summons, and divine quests. |
| 3 | **Aristocrat** | High-society invites, legal immunity, bountiful gold, and courtly intrigue. |
| 4 | **Criminal Syndicate** | Black-market access, fences, hideouts, smugglers, and heist jobs. |
| 5 | **Guild** | Trade discounts, union protection, guildhall lodging, and craft masters. |
| 6 | **Military Force** | Weapon armories, rank authority, transport requisitions, and battle orders. |
| 7 | **Religious Order** | Sanctuary, free temple resurrection/healing, relics, and holy crusades. |
| 8 | **Sovereign** | Royal decrees, knighthood, sovereign immunity, and continental diplomacy. |

---

## Related Notes
- [[Rules Overview]]
- [[TCoE Optional Class Features]]
`
  }
];
