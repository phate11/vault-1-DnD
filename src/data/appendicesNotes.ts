import { VaultNote } from '../types';

export const appendicesNotes: VaultNote[] = [
  {
    id: "appendix-a-conditions",
    title: "Appendix A - Conditions & Exhaustion",
    folder: "Rules & Mechanics",
    category: "Rule",
    tags: ["rules", "conditions", "exhaustion", "combat"],
    aliases: ["Conditions", "Exhaustion"],
    content: `---
title: Appendix A - Conditions & Exhaustion
category: Rule
folder: Rules & Mechanics
tags: [rules, conditions, exhaustion, combat]
---

# Appendix A - Conditions & Exhaustion

Conditions alter a creature's capabilities in a variety of ways and can arise as a result of a spell, a class feature, a monster's attack, or other effect.

### Blinded
- A blinded creature can't see and automatically fails any ability check that requires sight.
- Attack rolls against the creature have **advantage**, and the creature's attack rolls have **disadvantage**.

### Charmed
- A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.
- The charmer has **advantage on any ability check to interact socially** with the creature.

### Deafened
- A deafened creature can't hear and automatically fails any ability check that requires hearing.

### Exhaustion
Some special abilities and environmental hazards, such as starvation and the long-term effects of freezing or scorching temperatures, lead to a special condition called exhaustion. Exhaustion is measured in **six levels**:

| Level | Effect |
| :---: | :--- |
| **1** | Disadvantage on ability checks |
| **2** | Speed halved |
| **3** | Disadvantage on attack rolls and saving throws |
| **4** | Hit point maximum halved |
| **5** | Speed reduced to 0 |
| **6** | **Death** |

- An effect might give a creature one or more levels of exhaustion. If an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description.
- A creature suffers the effect of its current level of exhaustion as well as all lower levels.
- Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink.

### Frightened
- A frightened creature has **disadvantage on ability checks and attack rolls** while the source of its fear is within line of sight.
- The creature **can't willingly move closer** to the source of its fear.

### Grappled
- A grappled creature's **speed becomes 0**, and it can't benefit from any bonus to its speed.
- The condition ends if the grappler is incapacitated.
- The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect (such as when a creature is hurled away by the thunderwave spell).

### Incapacitated
- An incapacitated creature **can't take actions or reactions**.

### Invisible
- An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.
- Attack rolls against the creature have **disadvantage**, and the creature's attack rolls have **advantage**.

### Paralyzed
- A paralyzed creature is **incapacitated** and can't move or speak.
- The creature automatically fails Strength and Dexterity saving throws.
- Attack rolls against the creature have **advantage**.
- Any attack that hits the creature is a **critical hit** if the attacker is within 5 feet of the creature.

### Petrified
- A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.
- The creature is **incapacitated**, can't move or speak, and is unaware of its surroundings.
- Attack rolls against the creature have **advantage**.
- The creature automatically fails Strength and Dexterity saving throws.
- The creature has **resistance to all damage**.
- The creature is **immune to poison and disease**, although a poison or disease already in its system is suspended, not neutralized.

### Poisoned
- A poisoned creature has **disadvantage on attack rolls and ability checks**.

### Prone
- A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.
- The creature has **disadvantage on attack rolls**.
- An attack roll against the creature has **advantage if the attacker is within 5 feet** of the creature. Otherwise, the attack roll has **disadvantage**.

### Restrained
- A restrained creature's **speed becomes 0**, and it can't benefit from any bonus to its speed.
- Attack rolls against the creature have **advantage**, and the creature's attack rolls have **disadvantage**.
- The creature has **disadvantage on Dexterity saving throws**.

### Stunned
- A stunned creature is **incapacitated**, can't move, and can speak only falteringly.
- The creature automatically fails Strength and Dexterity saving throws.
- Attack rolls against the creature have **advantage**.

### Unconscious
- An unconscious creature is **incapacitated**, can't move or speak, and is unaware of its surroundings.
- The creature drops whatever it's holding and **falls prone**.
- The creature automatically fails Strength and Dexterity saving throws.
- Attack rolls against the creature have **advantage**.
- Any attack that hits the creature is a **critical hit** if the attacker is within 5 feet of the creature.
`
  },
  {
    id: "appendix-b-and-c-pantheons-planes",
    title: "Appendix B & C - Pantheons & The Multiverse Planes",
    folder: "Rules & Mechanics",
    category: "Lore",
    tags: ["lore", "pantheons", "gods", "planes", "multiverse", "planar-travel"],
    aliases: ["Pantheons", "Planes of Existence", "The Multiverse"],
    content: `---
title: Appendix B & C - Pantheons & The Multiverse Planes
category: Lore
folder: Rules & Mechanics
tags: [lore, pantheons, gods, planes, multiverse, planar-travel]
---

# Appendix B & C - Pantheons & The Multiverse Planes

## Pantheons of the Multiverse

Clerics and paladins serve powerful deities across varied cosmology.

### The Forgotten Realms Pantheons
- **Auril**, goddess of winter (NE, Nature, Tempest)
- **Azuth**, god of wizards (LN, Knowledge)
- **Bane**, god of tyranny (LE, War)
- **Chauntea**, goddess of agriculture (NG, Life)
- **Cyric**, god of lies (CE, Trickery)
- **Helm**, god of protection (LN, Life, Light)
- **Ilmater**, god of endurance (LG, Life)
- **Kelemvor**, god of the dead (LN, Death)
- **Lathander**, god of dawn and renewal (NG, Life, Light)
- **Mystra**, goddess of magic (NG, Knowledge)
- **Oghma**, god of knowledge (N, Knowledge)
- **Selûne**, goddess of the moon (CG, Knowledge, Life)
- **Shar**, goddess of darkness and loss (NE, Death, Trickery)
- **Silvanus**, god of wild nature (N, Nature)
- **Sune**, goddess of love and beauty (CG, Life, Light)
- **Tempus**, god of war (N, War)
- **Torm**, god of courage and self-sacrifice (LG, War)
- **Tymora**, goddess of good fortune (CG, Trickery)
- **Tyr**, god of justice (LG, War)

### Gods of Technology (Modern Handbook Setting)
- **Ada Lovelace / The First Coder**: Goddess of logic and software programming (LG, Knowledge, Technology)
- **Vulcan / The Industrial Forge**: God of factory machines, metallurgy, and heavy manufacture (LN, Forge, Technology)
- **Hermes Telecom**: God of telecommunication networks, fiber optics, and instant relays (CG, Trickery, Technology)
- **The Great Singularity**: Mysterious entity worshipped by technomages and data warlocks (N, Knowledge, Technology)

---

## Appendix C - The Planes of Existence

The cosmos is divided into distinct planes connected by magical conduits and gates.

### The Material Plane & Its Echoes
- **The Material Plane**: The nexus where mortal life, technological civilizations, and fantasy worlds reside.
- **The Feywild (Plane of Faerie)**: An echo overflowing with vibrant, wild nature, boundless magic, and whimsical passion.
- **The Shadowfell (Plane of Shadow)**: A bleak, monochrome reflection suffused with gloom, melancholy, and undead spirits.

### Transitive Planes
- **The Astral Plane**: The realm of thought, consciousness, and dreams—a silvery sea of memory dotted with portals (color pools) leading to the Outer Planes.
- **The Ethereal Plane**: A ghostly misty dimension overlapping the Material Plane, allowing incorporeal travel and passage through solid walls.

### The Inner (Elemental) Planes
Surrounding the Material Plane are the raw primal energies of creation:
- **Plane of Air**: Endless sky, floating islands, soaring djinni palaces.
- **Plane of Earth**: Infinite stone, jewel-studded caverns, crushing bedrock.
- **Plane of Fire**: Seas of liquid flame, smoking volcanoes, the City of Brass.
- **Plane of Water**: Boundless ocean depths, reefs, leviathans.
- **Elemental Chaos**: Where all four elements churn violently together.

### The Outer Planes (Alignments & Afterlives)
- **Mount Celestia**: The Seven Heavens of Lawful Good.
- **Bytopia**: The Twin Paradises of Neutral/Lawful Good craftsmen.
- **Elysium**: The Restful Fields of Neutral Good.
- **The Beastlands**: The Wilderness of Neutral/Chaotic Good beasts.
- **Arborea**: The Passionate Groves of Chaotic Good fey and elves.
- **Ysgard**: Heroic battlegrounds where fallen warriors feast and brawl eternally (CG/CN).
- **Limbo**: Swirling plane of pure mutable chaos (CN).
- **Pandemonium**: The howling mad caverns of madness (CN/CE).
- **The Abyss**: Infinite layers of monstrous, demonic evil (CE).
- **Carceri**: The Six-fold Tarterian prison plane of betrayers (NE/CE).
- **Hades**: The Gray Waste of soul-draining despair (NE).
- **Gehenna**: Steep volcanic furnaces of greed and yugoloths (NE/LE).
- **The Nine Hells (Baator)**: The strict, tyrannical domain of devils ruled by Asmodeus (LE).
- **Acheron**: Endless iron cubes clashing across battlefields of martial discipline (LE/LN).
- **Mechanus**: The plane of infinite ticking gears and absolute Law (LN).
- **Arcadia**: Perfect harmony and pristine ordered orchards (LN/LG).
- **The Outlands & Sigil**: The central wheel of Neutrality, crowned by the spire holding **Sigil, the City of Doors**, ruled by the enigmatic Lady of Pain.
`
  }
];
