import { VaultNote } from '../types';

export const coreSpells4thTo9th: VaultNote = {
  id: "spells-4th-to-9th-level",
  title: "Spells - 4th through 9th Level",
  folder: "Spells",
  category: "Spell",
  tags: ["spells", "high-level", "4th-level", "5th-level", "9th-level", "wish", "magic"],
  aliases: ["4th Level Spells", "5th Level Spells", "High Level Spells"],
  content: `---
title: Spells - 4th through 9th Level
category: Spell
folder: Spells
tags: [spells, high-level, 4th-level, 5th-level, 9th-level, wish, magic]
---

# Spells - 4th through 9th Level

## 4th-Level Spells

### Banishment
*4th-level abjuration* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S, M (an item distasteful to the target) | **Duration**: Concentration, up to 1 minute  
You attempt to send one creature that you can see within range to another plane of existence. Target must succeed on a Charisma saving throw or be banished.
- *Native to plane*: Banished to harmless demiplane, incapacitated. Returns when spell ends.
- *Not native to plane*: Banished to home plane. If spell remains active for 1 full minute, creature doesn't return.  
*Higher Levels*: +1 target per slot level above 4th.

### Blight
*4th-level necromancy* | **Casting Time**: 1 action | **Range**: 30 feet | **Components**: V, S | **Duration**: Instantaneous  
Necromantic energy washes over creature within range. Constitution saving throw. Takes **8d8 necrotic damage** on failed save, half on success. Plant creatures have disadvantage and take maximum damage. Undead/constructs unaffected.  
*Higher Levels*: +1d8 necrotic damage per slot level above 4th.

### Confusion
*4th-level enchantment* | **Casting Time**: 1 action | **Range**: 90 feet | **Components**: V, S, M (three nut shells) | **Duration**: Concentration, up to 1 minute  
Assault minds in 10-foot-radius sphere. Wisdom saving throw. Affected creatures roll d10 at start of each turn:
- 1: Moves in random direction (d8).
- 2–6: Can't move or take actions.
- 7–8: Uses action to make melee attack against random adjacent creature.
- 9–10: Can act normally. Repeat save at end of each turn.  
*Higher Levels*: +5 ft radius per slot level above 4th.

### Conjure Minor Elementals
*4th-level conjuration* | **Casting Time**: 1 minute | **Range**: 90 feet | **Components**: V, S | **Duration**: Concentration, up to 1 hour  
Summon elementals: one of CR 2 or lower, two of CR 1 or lower, four of CR 1/2 or lower, or eight of CR 1/4 or lower. Obey verbal commands.

### Control Water
*4th-level transmutation* | **Casting Time**: 1 action | **Range**: 300 feet | **Components**: V, S, M (a drop of water and pinch of dust) | **Duration**: Concentration, up to 10 minutes  
Choose 100-foot cube of water. Cause **Flood** (raises level up to 20 ft, capsizes large ships), **Part Water** (parts water creating 20-ft trench), **Redirect Flow** (shifts current direction), or **Whirlpool** (50-ft whirlpool; Str save or take 2d8 bludgeoning and drawn in).

### Death Ward
*4th-level abjuration* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S | **Duration**: 8 hours  
Touch target. First time target would drop to 0 hit points as result of taking damage, target instead **drops to 1 hit point**, and spell ends. If target subjected to effect that would kill it instantly without dealing damage, that effect is negated against target and spell ends.

### Dimension Door
*4th-level conjuration* | **Casting Time**: 1 action | **Range**: 500 feet | **Components**: V | **Duration**: Instantaneous  
You teleport yourself from your current location to any other spot within **500 feet**. You arrive exactly at the spot desired. Can bring along objects and one willing creature of your size or smaller. If arriving in solid space, you take 4d6 force damage and teleport fails.

### Divination
*4th-level divination (ritual)* | **Casting Time**: 1 action | **Range**: Self | **Components**: V, S, M (incense and sacrificial offering worth 25 gp, consumed) | **Duration**: Instantaneous  
Ask a single question concerning a specific goal, event, or activity to occur within 7 days. DM offers truthful reply (cryptic rime or omen). Cumulative 25% failure chance on repeat casts before long rest.

### Dominate Beast
*4th-level enchantment* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Concentration, up to 1 minute  
Wisdom save or beast is charmed and controlled telepathically. Precise control uses action. Target repeats save with advantage whenever it takes damage.  
*Higher Levels*: 5th level: 10 min; 6th level: 1 hour; 7th level+: 8 hours.

### Evard's Black Tentacles
*4th-level conjuration* | **Casting Time**: 1 action | **Range**: 90 feet | **Components**: V, S, M (a piece of tentacle from a giant octopus or squid) | **Duration**: Concentration, up to 1 minute  
Squirming black tentacles fill a 20-foot square. Difficult terrain. Creature entering or starting turn makes Dexterity save or takes **3d6 bludgeoning damage and is [[Conditions#Restrained|restrained]]**. Takes 3d6 bludgeoning damage at start of turn while restrained. Action makes Str/Dex check vs DC to escape.

### Fabricate
*4th-level transmutation* | **Casting Time**: 10 minutes | **Range**: 120 feet | **Components**: V, S | **Duration**: Instantaneous  
Convert raw materials into products of same material (e.g. clump of flax into linen cloth, timber into bridge or door). Requires relevant artisan tool proficiency for items requiring high craftsmanship (weapons, armor).

### Fire Shield
*4th-level evocation* | **Casting Time**: 1 action | **Range**: Self | **Components**: V, S, M (a bit of phosphorus or firefly) | **Duration**: 10 minutes  
Thin, wispy flames wreath your body. Sheds bright light 10 ft, dim light 10 ft.
- **Warm Shield**: Resistance to cold damage. When creature within 5 ft hits you with melee attack, it takes **2d8 fire damage**.
- **Chill Shield**: Resistance to fire damage. When creature within 5 ft hits you with melee attack, it takes **2d8 cold damage**.

### Greater Invisibility
*4th-level illusion* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S | **Duration**: Concentration, up to 1 minute  
You or a creature you touch becomes [[Conditions#Invisible|invisible]] until the spell ends. **Does not end when target attacks or casts spells**.

### Guardian of Faith
*4th-level conjuration* | **Casting Time**: 1 action | **Range**: 30 feet | **Components**: V | **Duration**: 8 hours  
A large spectral guardian appears and hovers for the duration in an unoccupied space. Hostile creature moving within 10 ft makes Dexterity save taking **20 radiant damage** (10 on save). Guardian vanishes after dealing 60 total damage.

### Ice Storm
*4th-level evocation* | **Casting Time**: 1 action | **Range**: 300 feet | **Components**: V, S, M (a pinch of dust and a few drops of water) | **Duration**: Instantaneous  
Hailstones pound down in a 20-foot-radius, 40-foot-high cylinder. Dexterity saving throw. Creature takes **2d8 bludgeoning damage and 4d6 cold damage** on failed save (half on success). Area becomes difficult terrain until end of next turn.  
*Higher Levels*: +1d8 bludgeoning damage per slot level above 4th.

### Locate Creature
*4th-level divination* | **Casting Time**: 1 action | **Range**: Self | **Components**: V, S, M (a bit of hound's fur) | **Duration**: Concentration, up to 1 hour  
Sense direction to a creature familiar to you or the nearest creature of a specific kind within **1,000 feet**. Blocked by running water at least 10 feet wide.

### Otiluke's Resilient Sphere
*4th-level evocation* | **Casting Time**: 1 action | **Range**: 30 feet | **Components**: V, S, M (a hemispherical piece of clear crystal and a matching piece of gum arabic) | **Duration**: Concentration, up to 1 minute  
A sphere of shimmering force encloses a creature or object of Large size or smaller. Dexterity save negates. Enclosed target is protected from all damage; no spell or attack can pass through barrier. Target can breathe. Sphere can be rolled as an action.

### Phantasmal Killer
*4th-level illusion* | **Casting Time**: 1 action | **Range**: 120 feet | **Components**: V, S | **Duration**: Concentration, up to 1 minute  
Tap into target's deepest fears. Target makes Wisdom save or becomes [[Conditions#Frightened|frightened]]. At end of each turn, must make Wisdom save or take **4d10 psychic damage**. Save ends spell.  
*Higher Levels*: +1d10 psychic damage per slot level above 4th.

### Polymorph
*4th-level transmutation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S, M (a caterpillar cocoon) | **Duration**: Concentration, up to 1 hour  
Transform creature into a beast whose CR is equal to or less than target's level/CR. Wisdom saving throw for unwilling creatures.
- Target assumes beast's hit points, ability scores, and attacks. Retains alignment and personality.
- When it drops to 0 HP, reverts to original form with excess damage carrying over.
- Equipment melds into new form and cannot be used.

### Stone Shape
*4th-level transmutation* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S, M (soft clay) | **Duration**: Instantaneous  
Touch a stone object of Medium size or smaller and shape it into any form that suits your purpose (e.g. stone door into archway, block into weapon, create crude mechanical hinge).

### Stoneskin
*4th-level abjuration* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S, M (diamond dust worth 100 gp, consumed) | **Duration**: Concentration, up to 1 hour  
Until spell ends, willing target has **resistance to nonmagical bludgeoning, piercing, and slashing damage**.

### Wall of Fire
*4th-level evocation* | **Casting Time**: 1 action | **Range**: 120 feet | **Components**: V, S, M (a small piece of phosphorus) | **Duration**: Concentration, up to 1 minute  
Create wall of fire: up to 60 ft long, 20 ft high, 1 ft thick; or ringed wall up to 20 ft in diameter, 20 ft high. Choose one side to radiate heat: creatures ending turn within 10 ft or inside wall take **5d8 fire damage** (Dex save half).  
*Higher Levels*: +1d8 fire damage per slot level above 4th.

---

## 5th-Level Spells

### Animate Objects
*5th-level transmutation* | **Casting Time**: 1 action | **Range**: 120 feet | **Components**: V, S | **Duration**: Concentration, up to 1 minute  
Animate up to ten nonmagical objects:
- **Tiny**: HP 20, AC 18, +8 to hit, 1d4 + 4 damage, Str 4, Dex 18
- **Small**: HP 30, AC 16, +6 to hit, 1d8 + 2 damage, Str 6, Dex 14
- **Medium**: HP 40, AC 13, +5 to hit, 2d6 + 1 damage, Str 10, Dex 12 (counts as 2 objects)
- **Large**: HP 50, AC 10, +6 to hit, 2d10 + 2 damage, Str 14, Dex 10 (counts as 4 objects)
- **Huge**: HP 80, AC 10, +8 to hit, 2d12 + 4 damage, Str 18, Dex 6 (counts as 8 objects)  
Bonus action mentally commands all animated objects.

### Cloudkill
*5th-level conjuration* | **Casting Time**: 1 action | **Range**: 120 feet | **Components**: V, S | **Duration**: Concentration, up to 10 minutes  
20-foot-radius sphere of poisonous, yellow-green fog. Heavily obscured. Moves 10 feet away from you at start of each turn. Creature entering or starting turn makes Constitution save taking **5d8 poison damage** (half on save).

### Commune
*5th-level divination (ritual)* | **Casting Time**: 1 minute | **Range**: Self | **Components**: V, S, M (incense and holy water) | **Duration**: 1 minute  
Contact your deity and ask up to **three questions** that can be answered with yes or no.

### Cone of Cold
*5th-level evocation* | **Casting Time**: 1 action | **Range**: Self (60-foot cone) | **Components**: V, S, M (a small crystal or glass cone) | **Duration**: Instantaneous  
Blast of cold air in 60-foot cone. Constitution saving throw. Takes **8d8 cold damage** on failed save, half on success. Creatures killed become frozen statues.  
*Higher Levels*: +1d8 cold damage per slot level above 5th.

### Conjure Elemental
*5th-level conjuration* | **Casting Time**: 1 minute | **Range**: 90 feet | **Components**: V, S, M (burning incense, sulfur, water, or earth) | **Duration**: Concentration, up to 1 hour  
Summon an elemental of challenge rating 5 or lower (air, earth, fire, water elemental). Obeys verbal commands. If concentration broken, elemental becomes hostile and attacks party.

### Contact Other Plane
*5th-level divination (ritual)* | **Casting Time**: 1 minute | **Range**: Self | **Components**: V | **Duration**: 1 minute  
Contact extraplanar entity and ask up to five questions. Must make **DC 15 Intelligence saving throw**: on failure, take 6d6 psychic damage and become [[Conditions#Incapacitated|incapacitated]] until finish long rest. On success, entity answers each question with one word.

### Dominate Person
*5th-level enchantment* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Concentration, up to 1 minute  
Wisdom save or humanoid is charmed and telepathically controlled. Precise control uses action. Save with advantage when taking damage.  
*Higher Levels*: 6th level: 10 min; 7th level: 1 hour; 8th level+: 8 hours.

### Dream
*5th-level illusion* | **Casting Time**: 1 minute | **Range**: Special | **Components**: V, S, M (a handful of sand, dab of ink, and writing quill) | **Duration**: 8 hours  
Enter trance and send messenger into dreams of sleeping target. Convey information or create nightmare: target gains no benefit from rest and takes **3d6 psychic damage** upon waking (Wisdom save negates).

### Flame Strike
*5th-level evocation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S, M (pinch of sulfur) | **Duration**: Instantaneous  
Vertical column of divine fire (10-ft radius, 40-ft high). Dexterity save taking **4d6 fire damage and 4d6 radiant damage** (half on save).  
*Higher Levels*: +1d6 fire or radiant per slot level above 5th.

### Geas
*5th-level enchantment* | **Casting Time**: 1 minute | **Range**: 60 feet | **Components**: V | **Duration**: 30 days  
Command creature to carry out service or refrain from action. Wisdom save. Each day creature acts contrary to instructions, takes **5d10 psychic damage**.  
*Higher Levels*: 7th/8th level: 1 year; 9th level: until dispelled.

### Greater Restoration
*5th-level abjuration* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S, M (diamond dust worth 100 gp, consumed) | **Duration**: Instantaneous  
Touch creature to reduce exhaustion by 1 level or end: one charm or petrify effect, any curse (including attunement to cursed item), any reduction to ability scores, or any effect reducing maximum hit points.

### Hold Monster
*5th-level enchantment* | **Casting Time**: 1 action | **Range**: 90 feet | **Components**: V, S, M (a small straight piece of iron) | **Duration**: Concentration, up to 1 minute  
Choose any creature. Target makes Wisdom saving throw or is [[Conditions#Paralyzed|paralyzed]] for duration. Repeat save at end of each turn.  
*Higher Levels*: +1 creature per slot level above 5th.

### Mass Cure Wounds
*5th-level evocation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Instantaneous  
Heal up to six creatures in 30-foot-radius sphere for **3d8 + spellcasting ability modifier** hit points.  
*Higher Levels*: +1d8 healing per slot level above 5th.

### Raise Dead
*5th-level necromancy* | **Casting Time**: 1 hour | **Range**: Touch | **Components**: V, S, M (a diamond worth at least 500 gp, consumed) | **Duration**: Instantaneous  
Return creature dead no longer than 10 days to life with 1 HP. Neutralizes poisons and nonmagical diseases. -4 penalty to attack rolls, saving throws, and ability checks, reduced by 1 each long rest. Cannot restore missing limbs.

### Telekinesis
*5th-level transmutation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Concentration, up to 10 minutes  
Move creature or object up to 1,000 pounds by will. Contested spellcasting ability check vs target's Strength (Athletics) check to restrain and move target up to 30 feet in any direction.

### Wall of Force
*5th-level evocation* | **Casting Time**: 1 action | **Range**: 120 feet | **Components**: V, S, M (a pinch of powder from a clear gem) | **Duration**: Concentration, up to 10 minutes  
Invisible wall of force up to ten 10-foot-by-10-foot panels or sphere up to 10 feet in radius. Immune to all damage and cannot be dispelled by Dispel Magic (destroyed by Disintegrate).

---

## 6th through 9th-Level Master Spells

### Chain Lightning
*6th-level evocation* | **Casting Time**: 1 action | **Range**: 150 feet | **Components**: V, S, M (a bit of fur, amber, and three silver pins) | **Duration**: Instantaneous  
Bolt of lightning strikes target and arcs to up to three other targets within 30 feet of first target. Dexterity save: **10d8 lightning damage** on failed save, half on success.

### Disintegrate
*6th-level transmutation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S, M (a lodestone and pinch of dust) | **Duration**: Instantaneous  
Thin green ray shoots from finger. Dexterity saving throw. Target takes **10d6 + 40 force damage** on failed save. If reduced to 0 HP, target and everything nonmagical it carries turns to a pile of gray dust. Instantly destroys force constructs (like Wall of Force).

### Heal
*6th-level evocation* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Instantaneous  
Target regains **70 hit points**. Ends blindness, deafness, and all diseases affecting target.  
*Higher Levels*: +10 HP per slot level above 6th.

### Heroes' Feast
*6th-level conjuration* | **Casting Time**: 10 minutes | **Range**: 30 feet | **Components**: V, S, M (a gem-encrusted bowl worth 1,000 gp, consumed) | **Duration**: Instantaneous  
Magnificent feast for up to 12 creatures taking 1 hour to consume. Benefits for 24 hours: cured of all diseases and poison, immune to poison and fright, advantage on Wisdom saves, and max HP increases by **2d10**.

### Delayed Blast Fireball
*7th-level evocation* | **Casting Time**: 1 action | **Range**: 150 feet | **Components**: V, S, M (a tiny ball of bat guano and sulfur) | **Duration**: Concentration, up to 1 minute  
Yellow glowing bead sits for duration. Base damage **12d6 fire** in 20-ft radius. For every round bead remains unexploded, damage increases by **1d6** (up to +10d6).

### Finger of Death
*7th-level necromancy* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Instantaneous  
Send negative energy into creature. Constitution save: **7d8 + 30 necrotic damage** on failed save, half on success. Humanoid killed by spell rises at start of your next turn as a **zombie permanently under your command**.

### Forcecage
*7th-level evocation* | **Casting Time**: 1 action | **Range**: 100 feet | **Components**: V, S, M (ruby dust worth 1,500 gp) | **Duration**: 1 hour (no concentration)  
Imprison creature in 20-foot cube cage or 10-foot solid box of magical force. Prevents nonmagical escape. Magical teleportation requires Charisma saving throw to succeed.

### Plane Shift
*7th-level conjuration* | **Casting Time**: 1 action | **Range**: Touch | **Components**: V, S, M (a forked, metal rod worth 250 gp attuned to target plane) | **Duration**: Instantaneous  
Transport yourself and up to eight willing creatures to a different plane of existence. Or make melee spell attack to banish unwilling creature (Charisma save negates).

### Antimagic Field
*8th-level abjuration* | **Casting Time**: 1 action | **Range**: Self (10-foot-radius sphere) | **Components**: V, S, M (a pinch of powdered iron or iron filings) | **Duration**: Concentration, up to 1 hour  
Invisible 10-foot-radius sphere moves with you. Suppresses all magic, spells, magic items, and magical summonings within area. Spells cannot be cast within area.

### Dominate Monster
*8th-level enchantment* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V, S | **Duration**: Concentration, up to 1 hour  
Dominate any creature. Telepathic control, precise action commands. Repeats save with advantage whenever it takes damage. (9th level: 8 hours).

### Meteor Swarm
*9th-level evocation* | **Casting Time**: 1 action | **Range**: 1 mile | **Components**: V, S | **Duration**: Instantaneous  
Blazing orbs of fire plummet to four separate 40-foot-radius spheres. Dexterity saving throw. Creatures take **20d6 fire damage and 20d6 bludgeoning damage** on failed save, half on success. Creature in multiple spheres is affected only once.

### Power Word Kill
*9th-level enchantment* | **Casting Time**: 1 action | **Range**: 60 feet | **Components**: V | **Duration**: Instantaneous  
You utter a word of power. If the creature you choose has **100 hit points or fewer, it dies instantly**. Otherwise, the spell has no effect.

### Time Stop
*9th-level transmutation* | **Casting Time**: 1 action | **Range**: Self | **Components**: V | **Duration**: Instantaneous  
You swiftly stop the flow of time for everyone but yourself. You take **1d4 + 1 turns in a row**, during which you can use actions and move as normal. Ends early if an action affects another creature or moves more than 1,000 feet from cast location.

### Wish
*9th-level conjuration* | **Casting Time**: 1 action | **Range**: Self | **Components**: V | **Duration**: Instantaneous  
Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.
- The basic use of this spell is to **duplicate any other spell of 8th level or lower** (no need to meet requirements or components).
- Alternatively, you can create one object worth up to 25,000 gp, allow up to twenty creatures to regain all hit points + greater restoration, grant up to ten creatures resistance to a damage type, grant up to ten creatures immunity to a spell/effect for 8 hours, or undo a single recent event (forcing reroll with advantage/disadvantage).
- Attempting anything beyond spell duplication causes extreme stress: Strength drops to 3 for 2d4 days; taking actions that cast spells deals **1d10 necrotic damage per spell level**; and there is a **33% chance you can never cast Wish again**.
`
};
