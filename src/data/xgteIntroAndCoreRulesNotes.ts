import { VaultNote } from '../types';

export const xgteIntroAndCoreRulesNotes: VaultNote[] = [
  {
    id: "xgte-overview-ten-rules",
    title: "XGtE - Xanathar's Guide to Everything - Introduction & Ten Rules to Remember",
    folder: "Xanathar's Guide (XGtE)",
    category: "Rule",
    tags: ["xgte", "xanathar", "core-rules", "reference", "rules", "dnd5e"],
    aliases: [
      "Xanathar's Guide",
      "Ten Rules to Remember",
      "XGtE Rules",
      "Sylgar"
    ],
    content: `---
title: XGtE - Xanathar's Guide to Everything - Introduction & Ten Rules to Remember
category: Rule
folder: Xanathar's Guide (XGtE)
tags: [xgte, xanathar, core-rules, reference, rules, dnd5e]
---

# Xanathar's Guide to Everything - Introduction & Ten Rules to Remember

> [!lore] Sylgar and the Beholder Crime Lord
> Beneath the bustling City of [[Waterdeep]], a beholder crime lord keeps tabs on everyone and everything—or so the beholder thinks. Known as **Xanathar**, this bizarre being believes it can gather information on everything in the D&D multiverse. The beholder desires to know it all! But no matter what the beholder learns and what treasures it acquires, its most prized possession in all the multiverse remains its pet goldfish, **Sylgar**.

The first major rules expansion to the fifth edition of D&D, *Xanathar's Guide to Everything* provides a wealth of new options:
- **Chapter 1: Character Options**: 31 subclasses, the comprehensive **[[XGtE - This Is Your Life - Origins, Family & Childhood|This Is Your Life]]** backstory generation system, and **[[XGtE - Racial Feats|Racial Feats]]**.
- **Chapter 2: Dungeon Master's Tools**: Modular rules for falling, sleep, adamantine weapons, tool proficiencies, spellcasting on grids, **[[XGtE - Encounter Building & Quick Matchups|Encounter Building]]**, simple & complex **[[XGtE - Traps Revisited - Simple Traps & Hazards|Traps Revisited]]**, **[[XGtE - Downtime Revisited - Rivals & Activities|Downtime Activities Revisited & Rivals]]**, and **[[XGtE - Awarding Magic Items & Common Magic Items|Awarding Magic Items]]**.
- **Chapter 3: Spells**: An arsenal of arcane and divine spells.
- **Appendices**: Shared Campaigns & Character Names tables.

---

## The Core Rules & The DM's Role

This book relies on the three core rulebooks (Player's Handbook, Monster Manual, and Dungeon Master's Guide). One rule overrides all others:

> [!dm] The Golden Rule of Adjudication
> **The DM is the final authority on how the rules work in play.**
> Rules are meant to organize and inspire the action. Many unexpected events occur in a campaign; the rules lay a foundation that a DM can build on, bridging what the rules address and what they don't.

---

## Ten Rules to Remember

A few fundamental rules sometimes trip up players and DMs. Keeping these ten rules in mind clarifies game situations:

### 1. Exceptions Supersede General Rules
General rules govern each part of the game (e.g., melee weapon attacks use Strength). When a specific game element (class feature, feat, spell, magic item, or monster trait) explicitly contradicts a general rule, **the exception wins**. For example, Hexblade warlocks make weapon attacks using Charisma.

### 2. Round Down
Whenever you divide or multiply a number in the game, **round down** if you end up with a fraction, even if the fraction is one-half or greater (e.g., half of 5 is 2).

### 3. Advantage and Disadvantage
Even if multiple factors give you advantage or disadvantage on a d20 roll, you have it **only once**. If you have both advantage and disadvantage on the same roll, they **cancel each other out**, regardless of how many sources grant either.

### 4. Combining Different Effects
Different game effects can affect a target at the same time. However, when two or more effects share the **same proper name**, only the most potent one (or the most recent if identical) applies while their durations overlap. You cannot stack two *Bless* spells, nor can you benefit from multiple overlapping *Auras of Protection*.

### 5. Reaction Timing
Certain features allow a reaction (such as opportunity attacks or the *Shield* spell). A reaction occurs **immediately after its trigger completes**, unless the description of the reaction explicitly says otherwise (such as *Counterspell* or *Shield*, which interrupt their triggers). You have only one reaction per combat round, resetting at the start of your turn.

### 6. Resistance and Vulnerability
Modifiers to damage are applied in strict mathematical sequence:
1. **Damage Immunity**
2. **Additions or Subtractions** (e.g., Heavy Armor Master)
3. **Damage Resistance** (halve the remaining damage)
4. **Damage Vulnerability** (double the remaining damage)

Multiple sources of resistance or vulnerability do **not** stack.

### 7. Proficiency Bonus
If your proficiency bonus applies to a roll, you can add it **only once**, even if multiple features say it applies. Furthermore, if multiple features tell you to double or halve your bonus (like Expertise), you double or halve it **only once** before applying it.

### 8. Bonus Action Spells
If you cast a spell that has a casting time of **1 bonus action** (such as *Misty Step* or *Healing Word*), you **cannot** cast another spell during the same turn, except for a **cantrip with a casting time of 1 action**.

### 9. Concentration
As soon as you begin casting a spell or using a special ability that requires concentration, your concentration on any previous effect **ends instantly**. You cannot maintain two concentration spells simultaneously.

### 10. Temporary Hit Points
Temporary hit points are **never cumulative**. If you have temporary hit points and receive more, you choose whether to keep your current amount or take the new amount.

---

## 🧭 Fast Navigation
- Subclasses: **[[XGtE - Character Options & Subclasses Overview]]**
- Racial Feats: **[[XGtE - Racial Feats]]**
- Backstory Generation: **[[XGtE - This Is Your Life - Origins, Family & Childhood]]**
- DM Tools & Mechanics: **[[XGtE - Dungeon Master's Tools - Mechanics & Environment]]**
- Downtime & Rivals: **[[XGtE - Downtime Revisited - Rivals & Activities]]**
- Traps: **[[XGtE - Traps Revisited - Simple Traps & Hazards]]**
`
  },
  {
    id: "xgte-this-is-your-life-origins",
    title: "XGtE - This Is Your Life - Origins, Family & Childhood",
    folder: "Xanathar's Guide (XGtE)",
    category: "Rule",
    tags: ["xgte", "backstory", "character-creation", "origins", "this-is-your-life"],
    aliases: [
      "This Is Your Life Origins",
      "Parents and Siblings Table",
      "Childhood Home",
      "Childhood Memories"
    ],
    content: `---
title: XGtE - This Is Your Life - Origins, Family & Childhood
category: Rule
folder: Xanathar's Guide (XGtE)
tags: [xgte, backstory, character-creation, origins, this-is-your-life]
---

# This Is Your Life - Origins, Family & Childhood

"This Is Your Life" provides a comprehensive system of tables to build deep, roleplayable character backstories. Use the dice to discover your roots, or pick results that spark your imagination!

---

## 1. Parents

| d100 | Parents |
|:---:|---|
| 01–95 | You know who your parents are or were. |
| 96–00 | You do not know who your parents were. |

### Nonhuman Parents
If you are a half-elf, half-orc, or tiefling, use these tables to determine parentage. Roll randomly to decide which parent is the mother and which is the father.

#### Half-Elf Parents
| d8 | Parents |
|:---:|---|
| 1–5 | One parent was an elf and the other was a human. |
| 6 | One parent was an elf and the other was a half-elf. |
| 7 | One parent was a human and the other was a half-elf. |
| 8 | Both parents were half-elves. |

#### Half-Orc Parents
| d8 | Parents |
|:---:|---|
| 1–3 | One parent was an orc and the other was a human. |
| 4–5 | One parent was an orc and the other was a half-orc. |
| 6–7 | One parent was a human and the other was a half-orc. |
| 8 | Both parents were half-orcs. |

#### Tiefling Parents
| d8 | Parents |
|:---:|---|
| 1–4 | Both parents were humans, their infernal heritage dormant until you came along. |
| 5–6 | One parent was a tiefling and the other was a human. |
| 7 | One parent was a tiefling and the other was a devil. |
| 8 | One parent was a human and the other was a devil. |

---

## 2. Birthplace

Roll d100. On a roll of **00**, an uncanny omen coincided with your birth: the moon briefly turned scarlet, all milk within a mile curdled, water froze in midsummer, or local iron turned to silver!

| d100 | Location |
|:---:|---|
| 01–50 | Home |
| 51–55 | Home of a family friend |
| 56–63 | Home of a healer or midwife |
| 64–65 | Carriage, cart, or wagon |
| 66–68 | Barn, shed, or other outbuilding |
| 69–70 | Cave |
| 71–72 | Field |
| 73–74 | Forest |
| 75–77 | Temple |
| 78 | Battlefield |
| 79–80 | Alley or street |
| 81–82 | Brothel, tavern, or inn |
| 83–84 | Castle, keep, tower, or palace |
| 85 | Sewer or rubbish heap |
| 86–88 | Among people of a different race |
| 89–91 | On board a boat or a ship |
| 92–93 | In a prison or in the headquarters of a secret organization |
| 94–95 | In a sage's laboratory |
| 96 | In the Feywild |
| 97 | In the Shadowfell |
| 98 | On the Astral Plane or the Ethereal Plane |
| 99 | On an Inner Plane of your choice |
| 00 | On an Outer Plane of your choice |

---

## 3. Siblings

Roll d10 for number of siblings (*dwarves and elves subtract 2*).

| d10 | Siblings |
|:---:|---|
| 1–2 | None |
| 3–4 | 1d3 siblings |
| 5–6 | 1d4 + 1 siblings |
| 7–8 | 1d6 + 2 siblings |
| 9–10 | 1d8 + 3 siblings |

### Birth Order (2d6 per Sibling)
| 2d6 | Relative Age |
|:---:|---|
| 2 | Twin, triplet, or quadruplet |
| 3–7 | Older than you |
| 8–12 | Younger than you |

---

## 4. Family and Upbringing

| d100 | Raised By |
|:---:|---|
| 01 | None (raised yourself on the streets) |
| 02 | Institution, such as an asylum |
| 03 | Temple |
| 04–05 | Orphanage |
| 06–07 | Guardian |
| 08–15 | Paternal or maternal aunt, uncle, or both |
| 16–25 | Paternal or maternal grandparent(s) |
| 26–35 | Adoptive family (same or different race) |
| 36–55 | Single father or stepfather |
| 56–75 | Single mother or stepmother |
| 76–00 | Mother and father |

### Absent Parent Fate (d4)
If your parents did not raise you, roll d4:
1. **Died**: Roll on Cause of Death supplemental table.
2. **Imprisoned / Enslaved**: Taken away by force or captivity.
3. **Abandoned You**: Left voluntarily.
4. **Disappeared**: Vanished to an unknown fate.

---

## 5. Family Lifestyle & Childhood Home

Roll 3d6 to determine family lifestyle. Apply the listed modifier to the Childhood Home roll.

| 3d6 | Lifestyle | Childhood Home Modifier |
|:---:|---|:---:|
| 3 | Wretched | -40 |
| 4–5 | Squalid | -20 |
| 6–8 | Poor | -10 |
| 9–12 | Modest | +0 |
| 13–15 | Comfortable | +10 |
| 16–17 | Wealthy | +20 |
| 18 | Aristocratic | +40 |

### Childhood Home (d100 + Lifestyle Modifier)
| Result | Home |
|:---:|---|
| 0 or lower | On the streets |
| 01–20 | Rundown shack |
| 21–30 | No permanent residence (nomadic) |
| 31–40 | Encampment or village in the wilderness |
| 41–50 | Apartment in a rundown neighborhood |
| 51–70 | Small house |
| 71–90 | Large house |
| 91–110 | Mansion |
| 111+ | Palace or castle |

### Childhood Memories (3d6 + Charisma Modifier)
| Total | Memory |
|:---:|---|
| 1–3 | I am still haunted by my childhood, when I was treated badly by my peers. |
| 4–5 | I spent most of my childhood alone, with no close friends. |
| 6–8 | Others saw me as being different or strange, and so I had few companions. |
| 9–12 | I had a few close friends and lived an ordinary childhood. |
| 13–15 | I had several friends, and my childhood was generally a happy one. |
| 16–17 | I always found it easy to make friends, and I loved being around people. |
| 18+ | Everyone knew who I was, and I had friends everywhere I went. |

---

## Next Steps:
- Continue to **[[XGtE - This Is Your Life - Personal Decisions & Class Training]]**
- Roll life events: **[[XGtE - This Is Your Life - Life Events & Supplemental Tables]]**
`
  },
  {
    id: "xgte-this-is-your-life-decisions",
    title: "XGtE - This Is Your Life - Personal Decisions & Class Training",
    folder: "Xanathar's Guide (XGtE)",
    category: "Rule",
    tags: ["xgte", "backstory", "character-creation", "backgrounds", "classes", "this-is-your-life"],
    aliases: [
      "Background Reasons",
      "Class Training Origins",
      "Why I Became An Adventurer"
    ],
    content: `---
title: XGtE - This Is Your Life - Personal Decisions & Class Training
category: Rule
folder: Xanathar's Guide (XGtE)
tags: [xgte, backstory, character-creation, backgrounds, classes, this-is-your-life]
---

# This Is Your Life - Personal Decisions & Class Training

Why did you choose your background? What sparked your devotion to your class? Roll a d6 on the appropriate table to uncover the pivotal catalyst of your adventuring career.

---

## Background Motivations (d6)

### Acolyte
1. I ran away from home at an early age and found refuge in a temple.
2. My family gave me to a temple, since they were unable or unwilling to care for me.
3. I grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural.
4. An impassioned sermon struck a chord deep in my soul and moved me to serve the faith.
5. I followed a childhood friend, a respected acquaintance, or someone I loved into religious service.
6. After encountering a true servant of the gods, I was so inspired that I immediately entered the service of a religious group.

### Charlatan
1. I was left to my own devices, and my knack for manipulating others helped me survive.
2. I learned early on that people are gullible and easy to exploit.
3. I often got in trouble, but I managed to talk my way out of it every time.
4. I took up with a confidence artist, from whom I learned my craft.
5. After a charlatan fleeced my family, I decided to learn the trade so I would never be fooled again.
6. I was poor or I feared becoming poor, so I learned the tricks I needed to keep myself out of poverty.

### Criminal
1. I resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression.
2. Necessity forced me to take up the life, since it was the only way I could survive.
3. I fell in with a gang of reprobates and ne'er-do-wells, and I learned my specialty from them.
4. A parent or relative taught me my criminal specialty to prepare me for the family business.
5. I left home and found a place in a thieves' guild or some other criminal organization.
6. I was always bored, so I turned to crime to pass the time and discovered I was quite good at it.

### Entertainer
1. Members of my family made ends meet by performing, so it was fitting for me to follow their example.
2. I always had a keen insight into other people, enough so that I could make them laugh or cry with stories or songs.
3. I ran away from home to follow a minstrel troupe.
4. I saw a bard perform once, and I knew from that moment on what I was born to do.
5. I earned coin by performing on street corners and eventually made a name for myself.
6. A traveling entertainer took me in and taught me the trade.

### Folk Hero
1. I learned what was right and wrong from my family.
2. I was always enamored by tales of heroes and wished I could be something more than ordinary.
3. I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.
4. A parent or one of my relatives was an adventurer, and I was inspired by that person's courage.
5. A mad old hermit spoke a prophecy when I was born, saying that I would accomplish great things.
6. I have always stood up for those who are weaker than I am.

### Guild Artisan
1. I was apprenticed to a master who taught me the guild's business.
2. I helped a guild artisan keep a secret or complete a task, and in return I was taken on as an apprentice.
3. One of my family members who belonged to the guild made a place for me.
4. I was always good with my hands, so I took the opportunity to learn a trade.
5. I wanted to get away from my home situation and start a new life.
6. I learned the essentials of my craft from a mentor but had to join the guild to finish my training.

### Hermit
1. My enemies ruined my reputation, and I fled to the wilds to avoid further disparagement.
2. I am comfortable with being isolated, as I seek inner peace.
3. I never liked the people I called my friends, so it was easy for me to strike out on my own.
4. I felt compelled to forsake my past, but did so with great reluctance, and sometimes I regret making that decision.
5. I lost everything—my home, my family, my friends. Going it alone was all I could do.
6. Society's decadence disgusted me, so I decided to leave it behind.

### Noble
1. I come from an old and storied family, and it fell to me to preserve the family name.
2. My family has been disgraced, and I intend to clear our name.
3. My family recently came by its title, and that elevation thrust us into a new and strange world.
4. My family has a title, but none of my ancestors have distinguished themselves since we gained it.
5. My family is filled with remarkable people. I hope to live up to their example.
6. I hope to increase my family's power and influence.

### Outlander
1. I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.
2. From a young age, I couldn't abide the stink of the cities and preferred to spend my time in nature.
3. I came to understand the darkness that lurks in the wilds, and I vowed to combat it.
4. My people lived on the edges of civilization, and I learned the methods of survival from my family.
5. After a tragedy I retreated to the wilderness, leaving my old life behind.
6. My family moved away from civilization, and I learned to adapt to my new environment.

### Sage
1. I was naturally curious, so I packed up and went to a university to learn more about the world.
2. My mentor's teachings opened my mind to new possibilities in that field of study.
3. I was always an avid reader, and I learned much about my favorite topic on my own.
4. I discovered an old library and pored over the texts I found there. That experience awakened a hunger for knowledge.
5. I impressed a wizard who told me I was squandering my talents and should seek out an education.
6. One of my parents or a relative gave me a basic education that whetted my appetite, and I left home to build on it.

### Sailor
1. I was press-ganged by pirates and forced to serve on their ship until I finally escaped.
2. I wanted to see the world, so I signed on as a deck-hand for a merchant ship.
3. One of my relatives was a sailor who took me to sea.
4. I needed to escape my community quickly, so I stowed away on a ship and was forced to work my passage.
5. Reavers attacked my community, so I found refuge on a ship until I could seek vengeance.
6. I had few prospects where I was living, so I left to find my fortune elsewhere.

### Soldier
1. I joined the militia to help protect my community from monsters.
2. A relative of mine was a soldier, and I wanted to carry on the family tradition.
3. The local lord forced me to enlist in the army.
4. War ravaged my homeland while I was growing up. Fighting was the only life I ever knew.
5. I wanted fame and fortune, so I joined a mercenary company, selling my sword to the highest bidder.
6. Invaders attacked my homeland. It was my duty to take up arms in defense of my people.

### Urchin
1. Wanderlust caused me to leave my family to see the world. I look after myself.
2. I ran away from a bad situation at home and made my own way in the world.
3. Monsters wiped out my village, and I was the sole survivor. I had to find a way to survive.
4. A notorious thief looked after me and other orphans, and we spied and stole to earn our keep.
5. One day I woke up on the streets, alone and hungry, with no memory of my early childhood.
6. My parents died, leaving no one to look after me. I raised myself.

---

## Class Training Origins (d6)

### Barbarian
1. My devotion to my people lifted me in battle, making me powerful and dangerous.
2. The spirits of my ancestors called on me to carry out a great task.
3. I lost control in battle one day, and it was as if something else was manipulating my body, forcing it to kill every foe.
4. I went on a spiritual journey to find myself and instead found a spirit animal to guide, protect, and inspire me.
5. I was struck by lightning and lived. Afterward, I found a new strength within me that let me push beyond limitations.
6. My anger needed to be channeled into battle, or I risked becoming an indiscriminate killer.

### Bard
1. I awakened my latent bardic abilities through trial and error.
2. I was a gifted performer and attracted the attention of a master bard who schooled me in the old techniques.
3. I joined a loose society of scholars and orators to learn new techniques of performance and magic.
4. I felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.
5. I joined one of the great colleges to learn old lore, the secrets of magic, and the art of performance.
6. I picked up a musical instrument one day and instantly discovered that I could play it.

### Cleric
1. A supernatural being in service to the gods called me to become a divine agent in the world.
2. I saw the injustice and horror in the world and felt moved to take a stand against them.
3. My god gave me an unmistakable sign. I dropped everything to serve the divine.
4. Although I was always devout, it wasn't until I completed a pilgrimage that I knew my true calling.
5. I used to serve in my religion's bureaucracy but found I needed to work in the world, bringing faith to dark corners.
6. I realize that my god works through me, and I do as commanded, even though I don't know why I was chosen.

### Druid
1. I saw too much devastation in the wild places. I joined a circle of druids to fight back against the despoilers.
2. I found a place among a group of druids after I fled a catastrophe.
3. I have always had an affinity for animals, so I explored my talent to see how I could best use it.
4. I befriended a druid and was moved by druidic teachings. I decided to give something back to the world.
5. While I was growing up, I saw spirits all around me. I sought out druids to help me understand the visions.
6. I have always felt disgust for creatures of unnatural origin. I became a champion of the natural order.

### Fighter
1. I wanted to hone my combat skills, and so I joined a war college.
2. I squired for a knight who taught me how to fight, care for a steed, and conduct myself with honor.
3. Horrible monsters descended on my community, killing someone I loved. I took up arms to destroy them.
4. I joined the army and learned how to fight as part of a disciplined group.
5. I grew up fighting, and I refined my talents by defending myself against people who crossed me.
6. I could always pick up just about any weapon and know how to use it effectively.

### Monk
1. I was chosen to study at a secluded monastery, where I mastered fundamental techniques.
2. I sought instruction to gain a deeper understanding of existence and my place in the world.
3. I stumbled into a portal to the Shadowfell and took refuge in a monastery that defended against the dark.
4. I was overwhelmed with grief after losing someone close, and sought philosophers to help cope with loss.
5. I could feel a special power within me, so I sought masters who could help me call it forth.
6. I was wild and undisciplined as a youngster, but applied to a monastery to live a life of discipline.

### Paladin
1. A fantastical being appeared before me and called on me to undertake a holy quest.
2. One of my ancestors left a holy quest unfulfilled, so I intend to finish that work.
3. The world is a dark and terrible place. I decided to serve as a beacon of light shining out against shadows.
4. I served as a paladin's squire, learning all I needed to swear my own sacred oath.
5. Evil must be opposed on all fronts. I feel compelled to seek out wickedness and purge it from the world.
6. Becoming a paladin was a natural consequence of my unwavering faith; I became the holy sword of my religion.

### Ranger
1. I found purpose while honing my hunting skills by bringing down dangerous animals at civilization's edge.
2. I always had a way with animals, able to calm them with a soothing word and a touch.
3. I suffer from terrible wanderlust, so being a ranger gave me a reason not to remain in one place.
4. I have seen what happens when monsters come out from the dark. I became the first line of defense.
5. I met a grizzled ranger who taught me woodcraft and the secrets of the wild lands.
6. I served in an army, learning woodcraft while blazing trails and scouting enemy encampments.

### Rogue
1. I've always been nimble and quick of wit, so I decided to use those talents to make my way in the world.
2. An assassin or thief wronged me, so I mastered the skills of my enemy to better combat foes of that sort.
3. An experienced rogue saw something in me and taught me several useful tricks.
4. I decided to turn my natural lucky streak into a career, though improving my skills is essential.
5. I took up with ruffians who showed me how to get what I want through sneakiness rather than confrontation.
6. I'm a sucker for a shiny bauble or a sack of coins, as long as I can get it without risking life and limb.

### Sorcerer
1. When I was born, all the water in the house froze solid, the milk spoiled, or all iron turned to copper.
2. I suffered a terrible emotional or physical strain, which brought forth my latent magical power.
3. My family never spoke of my ancestors. When strange talents appeared, the truth of my heritage came out.
4. When a monster threatened my friend, I lashed out instinctively with magical force from within me.
5. Sensing something special in me, a stranger taught me how to control my gift.
6. After escaping a magical conflagration, I was unharmed but changed, exhibiting unusual arcane abilities.

### Warlock
1. While wandering in a forbidden place, I encountered an otherworldly being that offered a pact with me.
2. I was examining a strange tome in an abandoned library when the entity that became my patron appeared.
3. I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.
4. Faced with a terrible crisis, I prayed to any being who would listen, and the creature that answered became my patron.
5. My future patron visited me in my dreams and offered great power in exchange for my service.
6. One of my ancestors had a pact with my patron, so that entity was determined to bind me to the agreement.

### Wizard
1. An old wizard chose me from among several candidates to serve an apprenticeship.
2. When I became lost in a forest, a hedge wizard took me in and taught me the rudiments of magic.
3. I grew up listening to tales of great wizards and strove to be accepted at an academy of magic.
4. One of my relatives was an accomplished wizard who decided I was smart enough to learn the craft.
5. While exploring an old tomb or library, I found a spellbook and was driven to learn all I could.
6. I was a prodigy who demonstrated arcane mastery at an early age and set out to expand my power.

---

## Continue:
- Roll life events: **[[XGtE - This Is Your Life - Life Events & Supplemental Tables]]**
`
  },
  {
    id: "xgte-this-is-your-life-events",
    title: "XGtE - This Is Your Life - Life Events & Supplemental Tables",
    folder: "Xanathar's Guide (XGtE)",
    category: "Rule",
    tags: ["xgte", "backstory", "life-events", "tables", "this-is-your-life"],
    aliases: [
      "Life Events by Age",
      "Life Events Tables",
      "Supplemental Tables",
      "Cause of Death Table"
    ],
    content: `---
title: XGtE - This Is Your Life - Life Events & Supplemental Tables
category: Rule
folder: Xanathar's Guide (XGtE)
tags: [xgte, backstory, life-events, tables, this-is-your-life]
---

# This Is Your Life - Life Events & Supplemental Tables

Every adventurer's life has been marked by signature events—wondrous boons, grim tragedies, battles, crimes, or brush with the supernatural.

---

## 1. Life Events by Age

| d100 | Current Age | Number of Life Events |
|:---:|---|:---:|
| 01–20 | 20 years or younger | 1 |
| 21–59 | 21–30 years | 1d4 |
| 60–69 | 31–40 years | 1d6 |
| 70–89 | 41–50 years | 1d8 |
| 90–99 | 51–60 years | 1d10 |
| 00 | 61 years or older | 1d12 |

---

## 2. Life Events (d100)

| d100 | Event |
|:---:|---|
| 01–10 | You suffered a tragedy. Roll on the **Tragedies** table. |
| 11–20 | You gained a bit of good fortune. Roll on the **Boons** table. |
| 21–30 | You fell in love or got married (or had a child if rolled again). Work with your DM to determine their identity. |
| 31–40 | You made an enemy of an adventurer. Roll d6: odd = you are to blame; even = blameless. |
| 41–50 | You made a friend of an adventurer. Use supplemental tables to define them. |
| 51–70 | You worked in a job related to your background. Start the game with an extra **2d6 gp**. |
| 71–75 | You met someone important. Use supplemental tables to determine their identity and attitude. |
| 76–80 | You went on an adventure. Roll on the **Adventures** table. |
| 81–85 | You had a supernatural experience. Roll on the **Supernatural Events** table. |
| 86–90 | You fought in a battle. Roll on the **War** table. |
| 91–95 | You committed a crime or were wrongly accused. Roll on **Crime** and **Punishment** tables. |
| 96–99 | You encountered something magical. Roll on the **Arcane Matters** table. |
| 00 | Something truly strange happened to you. Roll on the **Weird Stuff** table. |

---

## 3. Secondary Tables

### Adventures (d100)
| d100 | Outcome |
|:---:|---|
| 01–10 | You nearly died. You have nasty scars, missing an ear, 1d3 fingers, or 1d4 toes. |
| 11–20 | You suffered a grievous injury that still pains you from time to time. |
| 21–30 | You were wounded, but in time fully recovered. |
| 31–40 | You contracted a disease in a filthy warren; recovered, but have a persistent cough or premature gray hair. |
| 41–50 | You were poisoned by a trap/monster. Disadvantage on your next saving throw against poison. |
| 51–60 | You lost something of sentimental value during the adventure (remove one trinket). |
| 61–70 | Terribly frightened, you ran away, abandoning companions to their fate. |
| 71–80 | You learned a great deal. Advantage on your next ability check or saving throw. |
| 81–90 | You found treasure! You have **2d6 gp** left from your share. |
| 91–99 | You found considerable treasure! You have **1d20 + 50 gp** left. |
| 00 | You came across a **common magic item** (DM's choice). |

### Arcane Matters (d10)
1. You were charmed or frightened by a spell.
2. You were injured by a magical spell.
3. You witnessed an epic spell cast by a high-level spellcaster.
4. You drank a mysterious potion (DM's choice).
5. You found a spell scroll and successfully cast it.
6. You were affected by teleportation magic.
7. You turned invisible for a time.
8. You identified an illusion for what it truly was.
9. You saw an otherworldly creature conjured by magic.
10. A diviner read your fortune (DM portends a future event).

### Boons (d10)
1. A friendly wizard gave you a spell scroll containing one cantrip.
2. You saved a commoner who owes you a life debt and acts as your mundane hireling/companion.
3. You found a riding horse.
4. You found extra money: start with an additional **1d20 gp**.
5. A relative bequeathed you a simple weapon of your choice.
6. You found an intriguing trinket.
7. You performed a service for a temple; next visit grants full healing to hit point max.
8. An alchemist gifted you a *potion of healing* or a flask of acid.
9. You found a treasure map!
10. A stipend lets you live at a comfortable lifestyle for 1d20 years (reduces cost by 2 gp/day).

### Crime (d8) & Punishment (d12)
- **Crime**: 1: Murder; 2: Theft; 3: Burglary; 4: Assault; 5: Smuggling; 6: Kidnapping; 7: Extortion; 8: Counterfeiting.
- **Punishment**:
  - **1–3**: Exonerated (falsely accused).
  - **4–6**: Found not guilty despite involvement.
  - **7–8**: Nearly caught; fled and are now wanted in that community.
  - **9–12**: Convicted; served 1d4 years hard labor/prison or escaped after that time.

### Supernatural Events (d100)
- **01–05**: Ensorcelled by fey and enslaved for 1d6 years before escaping.
- **06–10**: Saw a demon and fled before harm befell you.
- **11–15**: A devil tempted you (DC 10 Wis save: fail = shift 1 step toward evil, start with +1d20+50 gp).
- **16–20**: Woke up miles away from home with no memory of how you got there.
- **21–30**: Visited a holy sanctuary and felt the tangible presence of the divine.
- **31–40**: Saw a falling red star or omen in the frost.
- **41–50**: Escaped certain death and believe divine intervention saved you.
- **51–60**: Witnessed a minor miracle.
- **61–70**: Explored an empty, haunted house.
- **71–75**: Briefly possessed (1: Celestial; 2: Devil; 3: Demon; 4: Fey; 5: Elemental; 6: Undead).
- **76–80**: Saw a ghost.
- **81–85**: Saw a ghoul feeding in a graveyard.
- **86–90**: A Celestial or Fiend visited your dreams with a grave warning.
- **91–95**: Briefly stepped through a crossing into the Feywild or Shadowfell.
- **96–00**: Discovered an active planar portal.

### Tragedies (d12)
- **1–2**: Family member or close friend died (roll Cause of Death).
- **3**: A friendship ended bitterly; they are now hostile to you.
- **4**: Lost all possessions in a disaster and had to rebuild life from scratch.
- **5**: Imprisoned for a crime you didn't commit; spent 1d6 years in hard labor or galley slave.
- **6**: War ravaged your home town, reducing it to rubble.
- **7**: A lover vanished without a trace; you are still searching.
- **8**: Blight and famine struck; lost a family member to starvation.
- **9**: You brought terrible shame to your family (scandal or dark magic).
- **10**: Exiled from your community for reasons never disclosed to you.
- **11**: Romantic relationship ended (odd = bitter, even = amicable).
- **12**: Romantic partner died (if murdered, roll d12: on a 1, you were responsible).

### War (d12)
- **1**: Knocked out and left for dead; woke hours later.
- **2–3**: Badly injured; bear prominent scars.
- **4**: Ran away from the fight; still carry the shame of cowardice.
- **5–7**: Suffered minor injuries that healed cleanly.
- **8–9**: Survived, but suffer recurring nightmares of the carnage.
- **10–11**: Escaped unscathed, though many friends were lost.
- **12**: Acquitted yourself heroically and received a medal or commendation.

### Weird Stuff (d12)
1. Turned into a toad for 1d4 weeks.
2. Petrified as a stone statue until freed by adventurers.
3. Enslaved by a hag or satyr for 1d6 years.
4. Kept prisoner by a dragon for 1d4 months.
5. Captured by drow or kuo-toa and enslaved in the Underdark before escaping.
6. Served as a hireling to a legendary hero.
7. Went insane for 1d6 years; lingering eccentricity remains.
8. A former lover of yours was secretly a silver dragon!
9. Nearly sacrificed by a cult on a blood altar before escaping.
10. Met an archdevil, demon lord, archfey, or titan and lived.
11. Swallowed whole by a giant sea monster and lived in its belly for a month.
12. Granted a *Wish* by a genie or deity, but squandered it on something trivial!

---

## 4. Supplemental Reference Tables

### Alignment (3d6)
- **3**: CE (50%) or CN (50%)
- **4–5**: Lawful Evil
- **6–8**: Neutral Evil
- **9–12**: True Neutral
- **13–15**: Neutral Good
- **16–17**: LG (50%) or LN (50%)
- **18**: CG (50%) or CN (50%)

### Cause of Death (d12)
1. Unknown
2. Murdered
3. Killed in battle
4. Accident related to occupation
5. Accident unrelated to occupation
6–7. Natural causes (disease or old age)
8. Apparent suicide
9. Torn apart by wild beasts or natural disaster
10. Consumed by a monster
11. Executed for a crime
12. Bizarre event (meteorite strike, wrath of god, slaad tadpole hatching)

### Class (d100)
- 01–07: Barbarian
- 08–14: Bard
- 15–29: Cleric
- 30–36: Druid
- 37–52: Fighter
- 53–58: Monk
- 59–64: Paladin
- 65–70: Ranger
- 71–84: Rogue
- 85–89: Sorcerer
- 90–94: Warlock
- 95–00: Wizard

### Occupation (d100)
- 01–05: Academic
- 06–10: Adventurer
- 11: Aristocrat
- 12–26: Artisan / Guild Craftsman
- 27–31: Criminal
- 32–36: Entertainer
- 37–38: Exile / Hermit / Refugee
- 39–43: Explorer / Wanderer
- 44–55: Farmer / Herder
- 56–60: Hunter / Trapper
- 61–75: Laborer
- 76–80: Merchant
- 81–85: Politician / Bureaucrat
- 86–90: Priest
- 91–95: Sailor
- 96–00: Soldier

### Relationship Attitude (3d4)
- **3–4**: Hostile
- **5–10**: Friendly
- **11–12**: Indifferent

### Sibling / NPC Status (3d6)
- **3**: Dead (roll Cause of Death)
- **4–5**: Missing or unknown
- **6–8**: Alive, but struggling (injury, debt, troubles)
- **9–12**: Alive and well
- **13–15**: Alive and quite successful
- **16–17**: Alive and infamous
- **18**: Alive and famous!
`
  }
];
