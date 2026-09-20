import { VaultNote } from '../types';

export const lmopCampaignNotes: VaultNote[] = [
  {
    id: "lmop-campaign-overview",
    title: "Lost Mine of Phandelver - Campaign Overview",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Campaign",
    tags: ["campaign", "lmop", "phandalin", "starter-set", "tier-1"],
    aliases: ["LMoP", "Lost Mine", "Phandelver Campaign"],
    content: `---
title: "Lost Mine of Phandelver - Campaign Overview"
campaign: "Lost Mine of Phandelver"
setting: "Sword Coast, Forgotten Realms"
levels: "1 to 5"
region: "Neverwinter & Phandalin"
tags: [campaign, lmop, phandalin, starter-set, tier-1]
---

# ⛏️ Lost Mine of Phandelver - Campaign Overview

> *"More than five hundred years ago, clans of dwarves and gnomes made an agreement known as the Phandelver's Pact, by which they would share a rich mine in a wondrous cavern known as Wave Echo Cave..."*

\`\`\`dataview
TABLE chapter, levels, status
FROM "Campaigns/Lost Mine of Phandelver"
SORT chapter ASC
\`\`\`

---

## 🗺️ Campaign Structure
The adventure is divided into four main episodes designed to take characters from 1st to 5th level:

1. **[[LMoP Part 1 - Goblin Arrows]]** (Level 1):
   - Journey along the High Road from Neverwinter.
   - The Goblin Ambush at the dead horses.
   - Infiltration of the **[[Cragmaw Hideout]]** and rescue of [[Sildar Hallwinter]].
   - Defeating [[Klarg the Bugbear]] and discovering the missing dwarf [[Gundren Rockseeker]].

2. **[[LMoP Part 2 - Phandalin Town Guide]]** (Level 2):
   - Arrival at the frontier boomtown of **[[Phandalin]]**.
   - Exploring key sites: [[Stonehill Inn]], [[Barthen's Provisions]], [[Townmaster's Hall]].
   - Confronting the ruthless **[[Redbrand Ruffians]]** in their lair beneath [[Tresendar Manor]].
   - Defeating or negotiating with **Iarno "Glasstaff" Albrek**.

3. **[[LMoP Part 3 - The Spider's Web]]** (Level 3):
   - Exploration of the Triboar Trail and Neverwinter Wood.
   - **[[Cragmaw Castle]]**: Storming King Grol's fortress to save Gundren and reclaim the Wave Echo Cave map.
   - **[[Ruins of Thundertree]]**: Meeting [[Reidoth the Druid]] and confronting [[Venomfang (Young Green Dragon)]].
   - Side quests: Old Owl Well, Wyvern Tor, and Agatha's Lair.

4. **[[LMoP Part 4 - Wave Echo Cave]]** (Level 4–5):
   - Delving into the lost subterranean complex of **[[Wave Echo Cave]]**.
   - Navigating dangers: The Flameskull, Ochre Jellies, and the legendary **[[Forge of Spells]]**.
   - Final confrontation with **[[Nezznar the Black Spider]]** and his drow bodyguards.

---

## 👥 Key NPCs & Dramatis Personae
- **[[Gundren Rockseeker]]**: Ambitious dwarf patron whose kidnapping sets the story in motion.
- **[[Sildar Hallwinter]]**: Veteran knight of the Lords' Alliance and steadfast ally in Phandalin.
- **[[Nezznar the Black Spider]]**: Mysterious drow mastermind seeking the Forge of Spells.
- **[[Iarno "Glasstaff" Albrek]]**: Rogue wizard who betrayed the Lords' Alliance to run the Redbrands.
- **[[Droop the Goblin]]**: Cowardly goblin captive who can become a beloved comedic sidekick.
- **[[Sister Garaele]]**: Cleric of Tymora and secret Harper agent in Phandalin.

---

## 💎 Factions Active in the Region
- **The Harpers**: Covert protectors represented by Sister Garaele.
- **The Lords' Alliance**: Law and order champions represented by Sildar Hallwinter.
- **The Order of the Gauntlet**: Devout paladins and vigilantes represented by Daran Edermath.
- **The Emerald Enclave**: Stewards of the wilderness represented by Reidoth the Druid.
- **The Zhentarim**: Ambitious merchant syndicate represented by Halia Thornton.
`
  },
  {
    id: "lmop-part-1-goblin-arrows",
    title: "LMoP Part 1 - Goblin Arrows",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Adventure Chapter",
    tags: ["lmop", "part-1", "goblin-arrows", "cragmaw-hideout"],
    aliases: ["Goblin Arrows", "Cragmaw Hideout Guide"],
    content: `---
title: "LMoP Part 1 - Goblin Arrows"
campaign: "Lost Mine of Phandelver"
chapter: 1
levels: "1"
location: "Triboar Trail & Cragmaw Hideout"
tags: [lmop, part-1, goblin-arrows, cragmaw-hideout]
---

# 🏹 Part 1: Goblin Arrows

## 📜 Scene 1: The Goblin Ambush
The adventure opens on the High Road south of Neverwinter as the party escorts a wagon of provisions to Phandalin for [[Gundren Rockseeker]].

### Setup & DM Read-Aloud:
> *"You've been on the Triboar Trail for about half a day. As you come around a bend, you spot two dead horses sprawled about fifty feet ahead of you, blocking the path. Each has black-feathered arrows sticking out of its flanks. The woods press close to the trail on both sides, with a steep embankment and dense thickets."*

- **The Trap**: 4 **Goblins** hide in the thickets (Stealth +6 vs Party Passive Perception).
- **Tactics**: Two archers fire from 30 ft away with half cover (+2 AC). Two rush in with scimitars.
- **Investigation**: The dead horses belonged to Gundren Rockseeker and Sildar Hallwinter. Gundren's map case is sliced open and empty!
- **Goblin Trail**: A DC 10 Wisdom (Survival) check identifies dragging footprints heading northwest along the goblin trail toward the **[[Cragmaw Hideout]]**.

---

## 🕳️ Cragmaw Hideout Dungeon Key

\`\`\`dataview
TABLE area, monsters, hazards
FROM "Campaigns/Lost Mine of Phandelver"
WHERE contains(tags, "cragmaw-hideout")
\`\`\`

### Area 1: Cave Mouth
- A shallow stream flows out of a 10-foot-high cave entrance overgrown with briars.
- Two **Goblins** stand guard in the briars on the east side of the stream. DC 10 Perception to spot them before they fire warnings.

### Area 2: Kennel
- 3 chained **Wolves** snarl fiercely. A DC 15 Animal Handling check calms them.
- A natural chimney climb (DC 10 Athletics) leads straight up into Area 8 (Klarg's Cave).

### Area 3: Goblin Blind & Snare
- A small guard post behind a rickety wooden screen. 2 Goblins look out.
- Floor snare trap: DC 12 Perception to spot; DC 10 Dexterity save or get hoisted upside down!

### Area 4: Steep Passage & Twin Water Pools
- The Cragmaw goblins built two stone-and-log dams holding back gallons of water.
- If alerted, goblins knock out the retaining wall, unleashing a **Torrential Flood**! (DC 15 Dexterity save or take 1d6 bludgeoning damage and get washed out of the cave).

### Area 5: Overpass
- A precarious rope-and-plank footbridge 20 feet above the floor.
- One goblin sentry spots anyone carrying torches.

### Area 6: Goblin Den & Yeemik's Hostage
- 5 Goblins plus **Yeemik** (Goblin second-in-command).
- **The Hostage**: Yeemik holds an unconscious, bruised human: **[[Sildar Hallwinter]]**!
- **Yeemik's Proposal**: Yeemik hates Klarg. He promises to spare Sildar if the party assassinates Klarg and brings Klarg's head back to him.

### Area 7: Twin Dams
- A pair of wide pools with 3 Goblins ready to release the second flood if Area 4 was not triggered.

### Area 8: Klarg's Cave (Boss Lair)
- **Boss**: **[[Klarg the Bugbear]]** (HP 27, AC 16, Morningstar 2d8+3 damage!).
- **Allies**: **Ripper** (his pet wolf) and 2 Goblins.
- **Tactics**: Klarg attempts to hide behind supply crates to deal +2d6 Surprise Attack damage.
- **Loot**:
  - Chest with 600 cp, 110 sp, two potions of healing, and an exquisite jade statuette of a frog (40 gp).
  - Several crates of supplies with the blue lion crest of the **Lionshield Coster** (can be returned in Phandalin for 50 gp reward!).

---

## 🗣️ Interrogating Sildar Hallwinter
Once rescued and healed, Sildar reveals:
1. Gundren Rockseeker had an ancient map locating the secret entrance to **[[Wave Echo Cave]]**.
2. A mysterious mastermind called **"The Black Spider"** sent word to the Cragmaws to ambush Gundren.
3. Gundren was taken by goblin messengers to the stronghold of **[[Cragmaw Castle]]**.
4. Sildar promises the party **50 gp** if they escort him safely to Phandalin and help locate Gundren.
`
  },
  {
    id: "lmop-part-2-phandalin",
    title: "LMoP Part 2 - Phandalin Town Guide",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Location",
    tags: ["lmop", "part-2", "phandalin", "town-guide", "tresendar-manor"],
    aliases: ["Phandalin", "Town of Phandalin"],
    content: `---
title: "LMoP Part 2 - Phandalin Town Guide"
campaign: "Lost Mine of Phandelver"
location: "Phandalin, Sword Mountains frontier"
population: "Roughly 150 (humans, dwarves, halflings)"
leader: "Harbin Wester (Townmaster)"
tags: [lmop, part-2, phandalin, town-guide, tresendar-manor]
---

# 🏡 Phandalin - Frontier Town Guide

> *"The rutted track emerges from a wooded hillside to reveal a scattering of forty or fifty stone-and-timber cottages, some built atop crumbling ancient foundations. The ruins of a large manor perch on a hillside east of the settlement."*

---

## 📍 Key Locations & Contacts

### 1. Stonehill Inn
- **Proprietor**: **Toblen Stonehill** (friendly human).
- **Rumors**:
  - Pip (Toblen's young son) saw strange men wearing red cloaks hanging around the woods near Tresendar Manor.
  - Elsa the barmaid notes that Sister Garaele has been troubled lately.
  - Freda the weaver mentions the Redbrands shook down her business.

### 2. Barthen's Provisions
- **Proprietor**: **Elmar Barthen** (elderly, practical merchant).
- **Purpose**: Destination for Gundren's supply wagon (pays the promised 10 gp per adventurer).
- Offers standard adventuring gear and buys salvaged supplies.

### 3. Lionshield Coster
- **Proprietor**: **Linene Graywind** (sharp-tongued, observant merchant).
- Rewards 50 gp if the party returns her stolen supply crates from Klarg's cave. Refuses to do business with Redbrands.

### 4. Shrine of Luck (Tymora)
- **Priestess**: **[[Sister Garaele]]** (half-elf acolyte, secret Harper).
- **Quest**: Travel to the ruins of Conyberry and seek the banshee **Agatha** to learn the fate of the spellbook of the legendary wizard Bowgentle (Offers 3 *Potions of Healing* as reward).

### 5. Townmaster's Hall
- **Townmaster**: **Harbin Wester** (pompous, cowardly bureaucrat).
- **Bounty**: Offers 100 gp to eliminate the orc raiders at **Wyvern Tor**.
- Sildar Hallwinter sets up headquarters here to establish Lords' Alliance law.

### 6. The Alderleaf Farm
- **Proprietress**: **Qelline Alderleaf** (kind-hearted halfling farmer).
- Mother of young **Carp Alderleaf**, who found a secret tunnel leading into the Redbrands' cellar!
- Recommends consulting her wise friend **[[Reidoth the Druid]]** in Thundertree.

### 7. The Sleeping Giant Taphouse
- A rundown shanty bar where 4 **Redbrand Ruffians** gather and pick fights with newcomers.

---

## 🏰 Redbrand Hideout (Tresendar Manor Cellars)

### The Redbrand Threat:
The Redbrands are a vicious mercenary gang led by a figure called **"Glasstaff"**. They extort townsfolk, kidnap dissenters, and serve [[Nezznar the Black Spider]].

### Key Hideout Encounters:
- **Area 1: Cellar Entrance**: Cask cellar with barrels of provision.
- **Area 3: Trapped Hallway**: 20-foot-deep pit trap concealed by false floorboards.
- **Area 8: The Nothic's Chasm**: A subterranean rift inhabited by a telepathic **Nothic** that feasts on corpses and probes party secrets (*"Weird Insight"* DC 12).
- **Area 5: Slave Pens**: 2 Redbrands guarding the imprisoned Dendrar family (Thel's widow Mirna and two children). Rescuing them yields an heirloom quest in Thundertree.
- **Area 11: Glasstaff's Quarters**:
  - **Iarno "Glasstaff" Albrek**: Former wizard of the Lords' Alliance. Uses *Mage Armor*, *Shield*, and holds the wondrous **[[Staff of Defense]]** (+1 AC, cast *Shield* and *Mage Armor*).
  - Rat familiar that squeaks a warning if adventurers approach noisily.
  - Secret correspondence from *The Black Spider* bearing an obsidian spider wax seal!
`
  },
  {
    id: "lmop-part-3-spiders-web",
    title: "LMoP Part 3 - The Spider's Web",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Adventure Chapter",
    tags: ["lmop", "part-3", "cragmaw-castle", "thundertree", "wilderness"],
    aliases: ["The Spider's Web", "Cragmaw Castle Guide"],
    content: `---
title: "LMoP Part 3 - The Spider's Web"
campaign: "Lost Mine of Phandelver"
chapter: 3
levels: "3"
locations: "Triboar Trail, Cragmaw Castle, Thundertree"
tags: [lmop, part-3, cragmaw-castle, thundertree, wilderness]
---

# 🕸️ Part 3: The Spider's Web

With Phandalin freed from the Redbrands, the heroes venture into the wilds of the Neverwinter region to track down Gundren's whereabouts and discover the path to Wave Echo Cave.

---

## 🌲 The Ruins of Thundertree

> *"Once a prosperous timber and herb community on the fringes of Neverwinter Wood, Thundertree was abandoned thirty years ago when Mount Hotenow erupted. Today, ash-choked cottages are choked with weeds, ash zombies, and sinister twighorrors."*

### Key Encounters:
- **Ash Zombies**: Zombies with the *Ash Puff* reaction (DC 10 Constitution save or blinded/choked for 1 round).
- **Blight Infestation**: Twig Blights lurk in garden plots and derelict barns.
- **Reidoth the Druid**: Member of the Emerald Enclave who knows the exact location of [[Cragmaw Castle]] and [[Wave Echo Cave]].
  - *Condition for Help*: Reidoth insists the party drive off or slay the green dragon that recently nested in the ruined wizard tower.
- **Cult of the Dragon**: 6 Dragon Cultists led by Favric who arrived seeking to pledge loyalty to the dragon.
- **Tower of the Dragon**:
  - **[[Venomfang (Young Green Dragon)]]**: CR 8 dragon (HP 136, AC 18, Poison Breath 12d6 poison!).
  - **Tactics**: A direct assault at level 3 is deadly! Smart players negotiate, trick the dragon, or leverage the cultists. If brought below half HP (68 HP), Venomfang takes flight and flees into the skies over Neverwinter Wood.

---

## 🏰 Cragmaw Castle Dungeon Key

Built by an ancient wizard long ago, this ruined stone castle is now the seat of **King Grol**, chieftain of the Cragmaw goblinoids.

\`\`\`dataview
TABLE area, residents, loot
FROM "Campaigns/Lost Mine of Phandelver"
WHERE contains(tags, "cragmaw-castle")
\`\`\`

### Area 1: Castle Gate
- Crumbling gatehouse flanked by two archery slits staffed by 2 goblins.

### Area 3: The Banquet Hall
- 7 Goblins and an angry cook shouting over a simmering pot of stew.

### Area 7: Shrine of Maglubiyet & Tymora
- Defiled altar where Goblins have overlaid an effigy of Maglubiyet over a marble statue of Tymora.
- Grick lurking in the rafters above!

### Area 8: Hobgoblin Barracks
- 4 disciplined **Hobgoblins** (AC 18 with chain mail & shields, Martial Advantage trait for +2d6 damage).

### Area 12: King Grol's Throne Room
- **King Grol**: Giant, scarred bugbear chieftain (HP 45, AC 15).
- **Snarl**: Grol's pet dire wolf (HP 37).
- **The Drow Emissary**: A female drow named **Vyerith** (a Doppelganger in disguise serving The Black Spider).
- **The Hostage**: **[[Gundren Rockseeker]]** lies bound and unconscious in the corner.
- **The Prize**: Gundren's bloodstained leather map to [[Wave Echo Cave]] tucked beneath Grol's mattress!
`
  },
  {
    id: "lmop-part-4-wave-echo-cave",
    title: "LMoP Part 4 - Wave Echo Cave",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Dungeon",
    tags: ["lmop", "part-4", "wave-echo-cave", "forge-of-spells", "dungeon"],
    aliases: ["Wave Echo Cave", "Phandelver Mine"],
    content: `---
title: "LMoP Part 4 - Wave Echo Cave"
campaign: "Lost Mine of Phandelver"
chapter: 4
levels: "4 to 5"
location: "Sword Mountains subterranean complex"
tags: [lmop, part-4, wave-echo-cave, forge-of-spells, dungeon]
---

# 🌊 Part 4: Wave Echo Cave

> *"The rhythmic thundering boom echoes every few minutes through the cavernous gloom—a surge of seawater slamming into an underground chasm deep within the mines, sounding like the crash of ocean surf."*

---

## 🗺️ Key Dungeon Encounters

### Area 1: Cave Entrance & Thug Camp
- Ropes lead down a 20-foot shaft. The dead bodies of Gundren's brothers, Tharden and Nundro, lie near an abandoned campsite.

### Area 2: Mine Tunnels
- Labyrinthine shafts with ore carts, rusty tracks, and stirge swarms.

### Area 3: Fungi Cavern
- Bioluminescent mushrooms. Violent Violet Fungi and Gas Spores (DC 15 Constitution save on burst or sprout spores in flesh!).

### Area 9: The Great Cavern
- Massive stalactite chamber with mineral pillars, guarded by 8 **Ghouls** gnawing on centuries-old dwarf bones.

### Area 12: Smelter Cavern & The Flameskull
- Blast furnace chamber guarded by 8 **Zombies** and a hovering, cackling **Flameskull**!
- **Flameskull Tactics**: Casts *Fireball* (8d6 fire) on the first round, followed by *Magic Missile* and *Shield*. Regenerates to full HP after 1 hour unless holy water or *Dispel Magic* is applied to its remains!

### Area 15: The Forge of Spells
- The mystical heart of the Phandelver Pact:
  - An altar bathed in pale green magical fire.
  - Non-magical weapons and armor placed in the flame gain a +1 bonus for 1d12 hours.
  - **Guardian**: **The Spectator**—a floating four-eyed aberration summoned five centuries ago to guard the forge. It is somewhat senile and believes the dwarf masters will return any minute.
  - **Treasures**:
    - **[[Lightbringer]]**: Legendary +1 mace that glows with bright light and deals an extra 1d6 radiant damage against undead.
    - **[[Dragonguard]]**: +1 breastplate adorned with a golden dragon motif; grants advantage on saving throws against breath weapons.

### Area 19: Temple of Dumathoin (Final Boss Chamber)
- Enormous pillared hall with a 10-foot marble statue of Dumathoin (dwarven god of mining) with emerald eyes.
- **The Boss**: **[[Nezznar the Black Spider]]** (Drow Mage, AC 14, HP 27).
  - Spells: *Invisibility*, *Spider Climb*, *Web*, *Mage Armor*, *Shield*, *Ray of Frost*.
  - Wields the **[[Spider Staff]]** (allows casting *Spider Climb* and *Web*, +1d6 poison damage on melee hits).
- **Allies**: 4 **Giant Spiders** clinging to the high ceiling shadows and 2 bugbear bodyguards.
- **Tactics**: Nezznar casts *Invisibility* before battle, sending his giant spiders to web frontline fighters while he casts spells from atop the Dumathoin statue.

---

## 🏆 Campaign Conclusion & Aftermath
- Rescuing Nundro Rockseeker and clearing the mine establishes a permanent 10% stake for the adventurers in Phandelver's mining yields.
- Sildar Hallwinter oversees the rebuilding of Tresendar Manor as a Lords' Alliance fortress.
- Characters reach **5th Level**, ready to segue into *Curse of Strahd*, *Rise of Tiamat*, or *Storm King's Thunder*!
`
  },
  {
    id: "lmop-magic-items",
    title: "LMoP Magic Items & Artifacts",
    folder: "Campaigns/Lost Mine of Phandelver",
    category: "Magic Item",
    tags: ["lmop", "magic-items", "equipment", "loot"],
    aliases: ["LMoP Magic Items", "Staff of Defense", "Spider Staff", "Lightbringer"],
    content: `---
title: "LMoP Magic Items & Artifacts"
campaign: "Lost Mine of Phandelver"
category: "Magic Item"
tags: [lmop, magic-items, equipment, loot]
---

# ⚔️ Lost Mine of Phandelver - Magic Items

Here are the signature magical treasures discovered across the Phandalin campaign:

---

## 🛡️ Staff of Defense
*Staff, rare (requires attunement)*
- **Bonus**: While holding this hollow glass staff, you gain a **+1 bonus to Armor Class**.
- **Spells**: The staff has **10 charges**. While holding it, you can use an action or reaction to cast:
  - *Mage Armor* (1 charge)
  - *Shield* (2 charges as a reaction)
- **Recharge**: Regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20; on a 1, the staff shatters into harmless glass shards.

---

## 🕷️ Spider Staff
*Staff, rare (requires attunement)*
- **Appearance**: A black wooden staff capped with a carved obsidian spider.
- **Melee Bonus**: The staff can be wielded as a magic quarterstaff. On a hit, it deals an extra **1d6 poison damage**.
- **Charges**: Has **10 charges**. While holding it, you can cast:
  - *Spider Climb* (1 charge)
  - *Web* (2 charges, spell save DC 15)
- **Recharge**: Regains 1d6 + 4 expended charges daily at dusk.

---

## ☀️ Lightbringer
*Weapon (mace), rare*
- **Origin**: Crafted by the Phandelver mages for a cleric of Lathander (god of dawn).
- **Light**: As a bonus action, you can command the mace to shed bright light in a 30-foot radius and dim light for an additional 30 feet.
- **Radiant Strike**: This +1 mace deals an extra **1d6 radiant damage** to undead targets when glowing.

---

## 🐉 Dragonguard
*Armor (breastplate), rare*
- **Appearance**: A gleaming silver breastplate engraved with a swooping gold dragon.
- **Bonus**: Grants a **+1 bonus to AC** (Base AC 15 + Dex mod up to +2).
- **Dragonward**: While wearing it, you have **advantage on saving throws against the breath weapons of dragons**.

---

## 🪓 Hew
*Weapon (battleaxe), uncommon*
- **Background**: A rusty-looking dwarven battleaxe forged for a woodcutter.
- **Bane of Plants**: Deals maximum damage against wooden objects and plant creatures.
- **Quirk**: The wielder feels uneasy whenever traveling through dense forests.
`
  }
];
