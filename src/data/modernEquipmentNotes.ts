import { VaultNote } from '../types';

export const modernEquipmentNotes: VaultNote[] = [
  {
    id: "modern-armor-weapons",
    title: "Modern Armor & Weapons",
    folder: "Modern Equipment",
    category: "Modern Equipment",
    tags: ["modern", "equipment", "armor", "weapons", "firearms"],
    aliases: ["Modern Armor", "Modern Weapons", "Firearms"],
    content: `---
title: Modern Armor & Weapons
category: Modern Equipment
folder: Modern Equipment
tags: [modern, equipment, armor, weapons, firearms]
source: Modern Handbook
---

# Modern Armor & Weapons

## Modern Armor Table
| Armor | Cost | Armor Class (AC) | Strength | Stealth | Weight |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **Light Armor** | | | | | |
| Heavy coat | 5 gp | 11 + Dex modifier | — | Disadvantage | 6 lb. |
| Leather jacket | 10 gp | 11 + Dex modifier | — | — | 4 lb. |
| Light undercover shirt * | 45 gp | 11 + Dex modifier | — | — | 2 lb. |
| Kevlar-lined coat * | 50 gp | 12 + Dex modifier | — | — | 8 lb. |
| Undercover vest * | 75 gp | 13 + Dex modifier | — | — | 3 lb. |
| **Medium Armor** | | | | | |
| Concealable vest * | 75 gp | 13 + Dex modifier (max 2) | — | — | 4 lb. |
| Light-duty vest * | 500 gp | 14 + Dex modifier (max 3) | — | — | 8 lb. |
| Tactical vest * | 1,500 gp | 15 + Dex modifier (max 2) | Str 10 | Disadvantage | 10 lb. |
| **Heavy Armor** | | | | | |
| Special response vest * | 1,500 gp | 15 | Str 10 | Disadvantage | 15 lb. |
| Land warrior armor * | 2,000 gp | 17 | Str 13 | Disadvantage | 10 lb. |
| Forced entry unit * | 2,500 gp | 18 | Str 13 | Disadvantage | 20 lb. |
| **Shield** | | | | | |
| Riot shield * | 100 gp | +2 | — | — | 6 lb. |

### Modern Armor Descriptions & Properties
- **Light Undercover Shirt**: Piercing damage that you take from firearms is reduced by 2.
- **Kevlar-lined Coat**: Piercing damage that you take from firearms is reduced by 2.
- **Undercover Vest**: Piercing damage that you take from firearms is reduced by 2.
- **Concealable Vest**: Piercing damage that you take from firearms is reduced by 3.
- **Light-duty Vest**: Piercing damage that you take from firearms is reduced by 3.
- **Tactical Vest**: You have resistance against piercing damage you take from firearms.
- **Special Response Vest**: Resistance against piercing damage from firearms. Slashing damage taken is also reduced by 2.
- **Land Warrior Armor**: Modernized armor with helmet mounted flashlight, comms, infrared goggles. Piercing damage from firearms is reduced by 5. Slashing damage is reduced by 5.
- **Forced Entry Unit**: Heavy torso jacket with ceramic plates, neck and groin guards, helmet. Resistance against piercing damage from firearms and resistance against slashing damage.
- **Riot Shield**: Piercing damage that you take from firearms is reduced by 3.

---

## Modern Weapons Table
| Name | Cost | Damage | Weight | Properties |
| :--- | :---: | :--- | :---: | :--- |
| **Simple Melee Weapons** | | | | |
| Baton, expandable | 15 gp | 1d6 bludgeoning | 2 lb. | Covert, finesse, light |
| Baton, metal | 10 gp | 1d6 bludgeoning | 2 lb. | Finesse, light |
| Baton, stun | 20 gp | 1d4 lightning | 1 lb. | Finesse, light, special |
| Ketch-All pole | 10 gp | — | 8 lb. | Reach, special |
| Pocket knife | 3 gp | 1d4 piercing | 1 lb. | Covert, finesse, light, thrown (range 20/60) |
| **Simple Ranged Weapons** | | | | |
| Dart gun | 150 gp | Special | 3 lb. | Ammunition (range 40/120), reload 1 |
| Pistol, light | 200 gp | 2d6 piercing | 3 lb. | Ammunition (range 60/180), light, reload 12 |
| Pistol, pocket | 250 gp | 2d4 piercing | 1 lb. | Ammunition (range 20/60), covert, light, reload 7 |
| Revolver | 250 gp | 2d8 piercing | 2 lb. | Ammunition (range 50/150), reload 6 |
| Rifle, hunting | 500 gp | 2d10 piercing | 8 lb. | Ammunition (range 180/540), reload 1, two-handed |
| Shotgun, double-barrel | 500 gp | 2d8 piercing | 7 lb. | Ammunition (range 30/90), CQB, reload 2, two-handed |
| Taser gun | 100 gp | Special | 2 lb. | Ammunition (range 15/35), special |
| **Martial Ranged Weapons** | | | | |
| Grenade launcher | 750 gp | Special | 12 lb. | Ammunition (range 40/120), heavy, reload 6, two-handed |
| Light machinegun | 750 gp | 2d10 piercing | 20 lb. | Ammunition (range 100/300), autofire, heavy, reload 120, two-handed |
| Machine pistol | 350 gp | 2d6 piercing | 3 lb. | Ammunition (range 60/180), burst fire, light, reload 20 |
| Pistol, heavy | 300 gp | 2d8 piercing | 3 lb. | Ammunition (range 60/180), reload 7 |
| Rifle, sniper | 650 gp | 2d10 piercing | 8 lb. | Ammunition (range 180/540), reload 8, two-handed |
| Rifle, assault | 600 gp | 2d8 piercing | 8 lb. | Ammunition (range 100/300), burst fire, reload 30, two-handed |
| Shotgun, tactical | 550 gp | 2d8 piercing | 7 lb. | Ammunition (range 30/90), CQB, reload 6, two-handed |
| Submachine gun | 500 gp | 2d8 piercing | 6 lb. | Ammunition (range 80/240), burst fire, reload 30, two-handed |

### Special Weapon Rules & Properties
- **Autofire**: Can only spray a 10-foot-cube area within normal range. Dex save or take weapon's normal damage (\`DC = 12 + prof\`). Uses 10 pieces of ammunition.
- **Burst Fire**: Can make normal single-target attack, OR spray a 10-foot-cube area (Dex save or normal damage, DC \`12 + prof\`). Uses 10 ammo.
- **Covert**: Advantage on Dexterity (Sleight of Hand) checks to conceal this weapon.
- **CQB (Close Quarters Battle)**: Advantage on attack rolls made against targets within 20 feet or less from you.
- **Reload**: Can fire a number of times equal to Reload score before spending an action or bonus action to reload (requires one free hand).
- **Suppressing Fire**: As an action, spray a 10-foot-cube within normal range using up to 10 bullets. Each creature must make a Wisdom save (\`DC = 8 + bullets used\`) or be frightened until end of your next turn (immune for 24 hours on success).
- **Baton, Expandable**: Collapses to increase concealability (gains covert). Extending/collapsing is a free action.
- **Baton, Stun**: 5 charges. Hit target must make DC 10 Con save or be paralyzed until start of your next turn. Recharged with one battery.
- **Dart Gun**: Fires needle via air compressor. Inflicts no damage itself, but delivers poison. Dart cost: 5 sp (1 vial coats 3 darts).
- **Grenade Launcher**: Propels fragmentation, smoke, or tear gas grenade up to 120 ft. Target hit takes 1d6 bludgeoning damage before grenade detonates.
- **Ketch-All Pole**: Large or smaller creature hit is restrained until freed (DC 10 Strength check).
- **Revolver**: Reloading bullets one by one takes an action (unless using speed loader).
- **Taser Gun**: Deals 1d4 lightning damage; DC 15 Con save or paralyzed until start of next turn. Can use action on following turns to deal 1d4 lightning and maintain paralysis up to 4 turns. Recharges with 1 battery after 5 shots.
- *Firearms Damage Variant*: If firearms do too much damage, reduce damage to 1 die instead of 2.
`
  },
  {
    id: "modern-explosives-gear",
    title: "Modern Explosives, Gear & Tools",
    folder: "Modern Equipment",
    category: "Modern Equipment",
    tags: ["modern", "equipment", "explosives", "gear", "tools", "electronics"],
    aliases: ["Explosives", "Modern Gear", "Modern Tools"],
    content: `---
title: Modern Explosives, Gear & Tools
category: Modern Equipment
folder: Modern Equipment
tags: [modern, equipment, explosives, gear, tools, electronics]
source: Modern Handbook
---

# Modern Explosives, Gear & Tools

## Explosive Devices Table
| Item | Cost | Weight | Item | Cost | Weight |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Flashbang** | 40 gp | 1 lb. | **Smoke** | 25 gp | 1 lb. |
| **Fragmentation** | 50 gp | 1 lb. | **Tear Gas** | 40 gp | 1 lb. |
| **Plastic explosive** | 50 gp | 1 lb. | **Thermite** | 40 gp | 1 lb. |
| **White Phosphorus** | 50 gp | 1 lb. | | | |

### Explosive Rules
- **Grenades**: Martial ranged weapon (range 30/60). Saving throw DC = \`8 + Dex mod + proficiency bonus\`.
- **Planted Explosives**: Requires a detonator. Saving throw DC is 12 (unless user has [[Feats#Sapper|Sapper feat]]).
- **Flashbang**: 20-foot radius Dex save or [[Conditions#Blinded|blinded]] and [[Conditions#Deafened|deafened]] until end of next turn.
- **Fragmentation**: 20-foot radius Dex save taking **4d6 piercing damage** (half on save).
- **Plastic Explosive**: 5-foot radius Dex save taking **3d6 bludgeoning damage** (half on save; double damage to structures/objects). Each additional pound increases damage by +1d6 (max 10d6) and radius by +5 ft (max 20 ft), or shaped into a cone.
- **Smoke**: Emits cloud in 20-foot radius creating heavily obscured area for 1 minute (dispersed by strong wind in 1 round).
- **Tear Gas**: 20-foot radius heavily obscured cloud for 1 minute. Creatures inside are considered blinded and must make **DC 15 Con save or be incapacitated**. Gas mask grants automatic success.
- **Thermite**: Melts through objects for 1 minute. 6d6 fire damage to creatures in same space (Dex save half). Double damage to objects.
- **White Phosphorus**: 10-foot radius Dex save taking 2d6 fire damage. Emits cloud: blinded and DC 15 Con save taking 1d6 fire damage.

---

## Firearms Accessories & Gear
| Item | Cost | Weight | Item | Cost | Weight |
| :--- | :---: | :---: | :--- | :---: | :---: |
| Combined module | 550 gp | 1 lb. | Suppressor | 200 gp | 1 lb. |
| Concealed holster | 5 gp | 1/2 lb. | Tactical flashlight | 10 gp | 1/2 lb. |
| Deployable Bipod | 100 gp | 1 lb. | Scope, x2 (+50% range) | 100 gp | 1/2 lb. |
| Laser sight | 500 gp | 1/2 lb. | Scope, x4 (+100% range) | 200 gp | 1/2 lb. |
| Laser sight, infrared | 600 gp | 1/2 lb. | Scope, x8 (+200% range) | 400 gp | 1 lb. |
| Speed loader | 2 gp | 1/2 lb. | Scope, thermal (x4, heat vision) | 1,000 gp | 2 lb. |

### Special Ammunition
- **Acid (10)**: +100 gp (+1d4 acid damage)
- **Cold (10)**: +100 gp (+1d4 cold damage)
- **Fire (10)**: +100 gp (+1d4 fire damage)
- **Holy (10)**: +100 gp (+1d6 radiant damage vs fiend/undead)
- **Silvered (10)**: +100 gp (bypasses resistance)
- **Breaching shotgun shells (10)**: +5 gp (double damage to doors, deadbolts, locks)
- **XREP shotgun shells (10)**: +50 gp (deals lightning damage; DC 15 Con save or paralyzed until start of next turn)

### Detonators
- **Remote Detonator, Radio**: 20 gp (range 3,000 ft)
- **Remote Detonator, Wired**: 15 gp (range 1,000 ft)
- **Timed**: 5 gp (up to 10 minutes countdown)
- **Trigger, Pressure**: 10 gp (triggers when stepped on)
- **Trigger, Proximity**: 15 gp (triggers on movement in burst area; min 5 ft)
- **Trigger, Trip**: 5 gp (20-foot trip wire; DC 12 Perception to detect)

---

## Modern Tools
| Item | Cost | Weight |
| :--- | :---: | :---: |
| **Engineering kit** | 50 gp | 8 lb. |
| **Forensics kit** | 50 gp | 8 lb. |
| **Hacking tools** | 80 gp | 6 lb. |
| **Mechanic tools** | 50 gp | 8 lb. |
| **Spy kit** | 100 gp | 12 lb. |

- **Engineering Kit**: Soldering gun, wires, clips, cutters, diagnostics. Proficiency adds bonus to repair electrical devices and disarm planted explosives.
- **Forensics Kit**: Sterile swabs, evidence seals, footwear casting, test tubes. Proficiency adds bonus to investigate crime scenes.
- **Hacking Tools**: Port scanning, banner grabbing, footprinting, SQL injection, DDoS, data sniffing. Adds bonus to Intelligence checks to access/use computer systems.
- **Mechanic Tools**: Basic tools for repairing cars and motorcycles.
- **Spy Kit**: Camera detectors, sound amplifiers, microphones, noise generators, cell detectors and tracers.

### Mechanics for Devices & Explosives
- **Disabling Devices**: Reach device and make check using engineering kit (DC set by DM).
- **Disarming Explosives**: Action to disable planted explosive. DC equals saving throw DC (usually 12). Success recovers explosive; failure detonates it!
- **Repairing Devices**: Engineering kit check. Simple repair (DC 5–10, few minutes); complex repair (DC 15+, 1 hour+). Spare parts cost equals DC in gold pieces.
`
  },
  {
    id: "modern-vehicles-hacking-rules",
    title: "Vehicles, Hacking & Restricted Objects",
    folder: "Modern Equipment",
    category: "Modern Equipment",
    tags: ["modern", "vehicles", "hacking", "electronics", "rules"],
    aliases: ["Modern Vehicles", "Hacking Rules", "Vehicle Combat"],
    content: `---
title: Vehicles, Hacking & Restricted Objects
category: Modern Equipment
folder: Modern Equipment
tags: [modern, vehicles, hacking, electronics, rules]
source: Modern Handbook
---

# Vehicles, Hacking & Restricted Objects

## Modern Vehicles Table
| Name | Cost | Top Speed | Acceleration Speed | Passengers | Cargo | AC | HP | Damage Threshold |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- | :---: | :---: |
| **Motorcycle** | 1,000 gp | 270 ft. | 90 ft. | 1 | 0 | 13 + Dex mod | 22 | — |
| **Sedan** | 3,000 gp | 255 ft. | 85 ft. | 4 | 300 lb. | 13 + Dex mod | 40 | 8 |
| **Sports car** | 8,000 gp | 315 ft. | 105 ft. | 1 | 200 lb. | 13 + Dex mod | 34 | 8 |
| **SUV** | 4,000 gp | 210 ft. | 70 ft. | 4 | 500 lb. | 14 + Dex mod (max 2) | 50 | 10 |
| **Pickup** | 4,000 gp | 180 ft. | 60 ft. | 3 | 1,600 lb. | 14 + Dex mod (max 2) | 50 | 8 |
| **Van** | 4,000 gp | 165 ft. | 55 ft. | 8 | 4,800 lb. | 13 + Dex mod (max 2) | 50 | 8 |
| **Truck** | 8,000 gp | 120 ft. | 40 ft. | 2 | 33,000 lb. | 15 | 70 | 10 |
| **Wheeled APC** | 15,000 gp | 180 ft. | 60 ft. | 13 | 250 lb. | 16 + Dex mod (max 2) | 70 | 12 |

### Vehicle Rules & Combat
- **Getting In/Out**: Costs half your speed.
- **Acceleration**:
  - Driver action: increase/decrease speed up to acceleration speed.
  - DC 10 Dexterity check: accelerate up to 2× acceleration speed.
  - DC 15 Dexterity check: accelerate up to 3× acceleration speed (reach top speed in 1 turn).
- **Losing Control (d8)**:
  - 1: Decrease speed up to acceleration speed.
  - 2: Turn left, decrease speed.
  - 3: Turn right, decrease speed.
  - 4: Spin out of control, decrease speed up to 2× acceleration.
  - 5: Turn left and crash!
  - 6: Turn right and crash!
  - 7: Vehicle crashes!
  - 8: Rolls as it crashes (3d6 bludgeoning damage each turn until speed is 0).
  - Regain control: DC 10 Dexterity check as an action.
- **Crashing Damage**:
  | Speed | Damage | Speed | Damage |
  | :---: | :---: | :---: | :---: |
  | 30 or less | 1d8 | 151–170 | 8d8 |
  | 31–50 | 2d8 | 171–190 | 9d8 |
  | 51–70 | 3d8 | 191–210 | 10d8 |
  | 71–90 | 4d8 | 211–230 | 11d8 |
  | 91–110 | 5d8 | 231–250 | 12d8 |
  | 111–130 | 6d8 | 251–270 | 13d8 |
  | 131–150 | 7d8 | 311+ | 16d8 |
  *(Seat belts halve damage. DC 15 Acrobatics reaction escapes vehicle before crash and lands prone).*
- **Ramming**: Action to ram adjacent vehicle. Melee attack (+ Dex mod + land vehicle prof). Target takes damage based on threshold + driver's Dex mod (e.g. Sedan deals 1d8 + Dex). Contested DC = 10 or half damage to maintain control.
- **Vehicle HP & Fire**: Reduced to 0 HP = non-functional. If excess damage ≥ max HP, bursts into flames dealing **4d6 fire damage** to occupants.
- **Repair**: Mechanic tools repair \`1 + Int mod\` HP/day for 20 gp.

---

## Using Electronic Devices & Hacking

### Defeat Device Security
Intelligence check using [[Modern Tools#Hacking Tools|hacking tools]] vs security program:
| Security Level | DC |
| :--- | :---: |
| Minimum | 15 |
| Average | 20 |
| Exceptional | 25 |
| Maximum | 30 |
- *Failed check*: System alerts administrator. Administrator attempts contested Intelligence check using hacking tools. Failure locks out user for 24 hours.

### Find File (Investigation Check)
| Network Size | DC | Time |
| :--- | :---: | :---: |
| Personal computer | 10 | 1 round |
| Small office network | 15 | 2 rounds |
| Large office network | 20 | 1 minute |
| Massive corporate network | 25 | 10 minutes |

### Operate Remote Device
| Type of Operation | DC | Time |
| :--- | :---: | :---: |
| Shut down passive remote (cameras, door locks) | 20 | 1 round |
| Shut down active remote (motion detectors, alarms) | 25 | 1 round |
| Reset remote parameters | 25 | 1 minute |
| Change passcodes | 25 | 1 minute |

### Degrade Programming
- **Crash Device** (DC 10, 1 min): Restarts in 1 minute.
- **Damage Programming** (DC 15, 10 min): Disadvantage on all Intelligence checks with device until repaired.
- **Destroy Programming** (DC 20, 10 min): Device unusable until repaired.
- **Covering Tracks**: 1 min, DC 20 Intelligence check with hacking tools imposes disadvantage on admin tracking you.

---

## Restricted Objects & The Black Market
1. **Licensed**: Owner must obtain license (50 gp, 1 day).
2. **Restricted**: Specially qualified individuals/orgs (250 gp, 2 days).
3. **Military**: Police and military organizations (750 gp, 3 days).
4. **Illegal**: Highly regulated circumstances (1,500 gp, 4 days).
- **The Black Market**: Buy without license by finding black market merchant with an Intelligence (Investigation) check (\`DC = 15 + level of restriction\`).
`
  }
];
