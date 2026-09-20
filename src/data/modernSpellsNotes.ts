import { VaultNote } from '../types';

export const modernSpellsNotes: VaultNote[] = [
  {
    id: "modern-spells-complete",
    title: "Modern Spells & Technomagic",
    folder: "Modern Spells",
    category: "Modern Spell",
    tags: ["modern", "spells", "technomagic", "hacking", "electronic"],
    aliases: ["Modern Spells", "Technomagic"],
    content: `---
title: Modern Spells & Technomagic
category: Modern Spell
folder: Modern Spells
tags: [modern, spells, technomagic, hacking, electronic]
source: Modern Handbook
---

# Modern Spells & Technomagic

The modern world introduces a whole new school of magic intertwined with electronic circuits, telecommunications networks, cyberspace, and vehicle automation.

### Modern Spell Lists
- **Cleric**:
  - *Cantrips*: [[#Haywire|Haywire]]
  - *1st Level*: [[#Power Device|Power Device]], [[#Tracker|Tracker]]
  - *2nd Level*: [[#Dataread|Dataread]], [[#Find Vehicle|Find Vehicle]], [[#Relay Text|Relay Text]]
  - *3rd Level*: [[#Electromagnetic Pulse|Electromagnetic Pulse]], [[#Infallible Relay|Infallible Relay]], [[#Shutdown|Shutdown]]
  - *4th Level*: [[#Wire Walk|Wire Walk]]
  - *5th Level*: [[#Instant Connectivity|Instant Connectivity]], [[#Synchronicity|Synchronicity]]
- **Druid**:
  - *1st Level*: [[#Tracker|Tracker]]
  - *2nd Level*: [[#Dataread|Dataread]], [[#Find Vehicle|Find Vehicle]]
  - *3rd Level*: [[#Shutdown|Shutdown]]
  - *5th Level*: [[#Synchronicity|Synchronicity]]
- **Paladin**:
  - *2nd Level*: [[#Find Vehicle|Find Vehicle]]
- **Ranger**:
  - *1st Level*: [[#Tracker|Tracker]]
  - *2nd Level*: [[#Dataread|Dataread]], [[#Find Vehicle|Find Vehicle]]
- **Sorcerer**:
  - *Cantrips*: [[#Cryospray|Cryospray]], [[#Glitch|Glitch]], [[#Haywire|Haywire]], [[#On/Off|On/Off]]
  - *1st Level*: [[#Arcane Hacking|Arcane Hacking]], [[#Degauss|Degauss]], [[#Machine Invisibility|Machine Invisibility]], [[#Power Device|Power Device]], [[#Tracker|Tracker]]
  - *2nd Level*: [[#Biometrics|Biometrics]], [[#Dataread|Dataread]], [[#Relay Text|Relay Text]], [[#Remote Access|Remote Access]]
  - *3rd Level*: [[#Electromagnetic Pulse|Electromagnetic Pulse]], [[#Infallible Relay|Infallible Relay]], [[#Shutdown|Shutdown]]
  - *4th Level*: [[#Wire Walk|Wire Walk]]
  - *5th Level*: [[#Instant Connectivity|Instant Connectivity]], [[#Synchronicity|Synchronicity]]
- **Warlock**:
  - *Cantrips*: [[#Glitch|Glitch]], [[#On/Off|On/Off]]
  - *1st Level*: [[#Arcane Hacking|Arcane Hacking]], [[#Degauss|Degauss]], [[#Machine Invisibility|Machine Invisibility]], [[#Tracker|Tracker]]
  - *2nd Level*: [[#Biometrics|Biometrics]], [[#Dataread|Dataread]], [[#Relay Text|Relay Text]], [[#Remote Access|Remote Access]]
  - *3rd Level*: [[#Electromagnetic Pulse|Electromagnetic Pulse]], [[#Infallible Relay|Infallible Relay]], [[#Shutdown|Shutdown]]
  - *4th Level*: [[#Wire Walk|Wire Walk]]
  - *5th Level*: [[#Instant Connectivity|Instant Connectivity]], [[#Synchronicity|Synchronicity]]
- **Wizard**:
  - *Cantrips*: [[#Cryospray|Cryospray]], [[#Glitch|Glitch]], [[#Haywire|Haywire]], [[#On/Off|On/Off]]
  - *1st Level*: [[#Arcane Hacking|Arcane Hacking]], [[#Degauss|Degauss]], [[#Machine Invisibility|Machine Invisibility]], [[#Power Device|Power Device]], [[#Tracker|Tracker]]
  - *2nd Level*: [[#Biometrics|Biometrics]], [[#Dataread|Dataread]], [[#Relay Text|Relay Text]], [[#Remote Access|Remote Access]]
  - *3rd Level*: [[#Electromagnetic Pulse|Electromagnetic Pulse]], [[#Infallible Relay|Infallible Relay]], [[#Shutdown|Shutdown]]
  - *4th Level*: [[#Wire Walk|Wire Walk]]
  - *5th Level*: [[#Instant Connectivity|Instant Connectivity]], [[#Synchronicity|Synchronicity]]

---

## Spell Descriptions

### Arcane Hacking
*1st-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a piece of copper wire)  
**Duration**: Concentration, up to 1 hour  
You touch an electronic device with a digital lock or security measure. For the duration, you gain advantage on any Intelligence check using [[Modern Tools#Hacking Tools|hacking tools]] to bypass that security or gain unauthorized access. In addition, you reduce the time required to attempt such a check by half.

### Biometrics
*2nd-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S  
**Duration**: 1 hour  
You touch a willing creature. Until the spell ends, the target can fool biometric scanners, such as fingerprint, retina, and facial recognition systems. You can choose to mimic the biometric data of a specific creature you have seen, or create false biometric data that register as authorized on scanners of your choice.

### Cryospray
*Evocation cantrip*  
**Casting Time**: 1 action  
**Range**: 10 feet  
**Components**: V, S  
**Duration**: Instantaneous  
A blast of frigid gas sprays from your outstretched hand. Each creature in a 10-foot cone must make a Constitution saving throw. A creature takes **1d6 cold damage** on a failed save.  
This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).

### Dataread
*2nd-level divination (technomagic, ritual)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a piece of magnetic tape)  
**Duration**: Concentration, up to 10 minutes  
You touch an electronic storage device (hard drive, flash drive, smartphone, optical disc) and immediately understand its contents, directory structure, and unencrypted files as though you had read through them thoroughly. You can search the data mentally for specific terms or filenames. Encrypted files require an Intelligence (Investigation) or hacking tools check against the encryption DC.

### Degauss
*1st-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a magnet)  
**Duration**: Instantaneous  
You touch an electronic storage device and erase all magnetic or digital data stored on it. The files are irrevocably destroyed and cannot be recovered by conventional or nonmagical forensic methods.

### Electromagnetic Pulse
*3rd-level evocation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Self (30-foot radius)  
**Components**: V, S, M (a piece of copper coil and a capacitor)  
**Duration**: Instantaneous  
You release a burst of electromagnetic energy. All electronic devices within a 30-foot radius that are not shielded immediately shut down and are rendered nonfunctional for 1 minute. Constructs in the area must make a Constitution saving throw, taking **5d8 lightning damage** on a failed save, or half as much damage on a successful one.

### Find Vehicle
*2nd-level conjuration*  
**Casting Time**: 10 minutes  
**Range**: 30 feet  
**Components**: V, S  
**Duration**: Instantaneous  
You summon a spirit that assumes the form of a nonmilitary land vehicle of your choice (such as a motorcycle, sedan, or pickup truck). The vehicle has the statistics of a standard vehicle of its type, but it is treated as a celestial, fey, or fiend (your choice) instead of an object. The vehicle requires no fuel and can be dismissed to an extradimensional pocket as an action.

### Glitch
*Transmutation cantrip (technomagic)*  
**Casting Time**: 1 action  
**Range**: 60 feet  
**Components**: V, S  
**Duration**: Instantaneous  
You cause a momentary software error or physical jam in a target device or firearm within range. If targeting a firearm, the next attack made with it before the end of the target's next turn is made with disadvantage. If targeting an electronic device, it freezes or fails to respond until the end of the target's next turn.

### Haywire
*Enchantment cantrip (technomagic)*  
**Casting Time**: 1 action  
**Range**: 60 feet  
**Components**: V, S  
**Duration**: 1 round  
You disrupt an electronic system or mechanical construct within range. Target creature (construct) or device must succeed on a Wisdom saving throw or behave erratically for 1 round: roll a d4:
- 1: Device activates or fires randomly in a direction chosen by DM.
- 2: Device shuts down or construct cannot take reactions.
- 3: Device sparks dealing 1d4 lightning damage to wielder.
- 4: Device operates in reverse (e.g. locks instead of unlocks).

### Infallible Relay
*3rd-level divination (technomagic)*  
**Casting Time**: 1 minute  
**Range**: Self  
**Components**: V, S, M (a mobile phone or radio transmitter)  
**Duration**: Concentration, up to 10 minutes  
With this spell, you can open a line of communication with any specific individual you name or describe whose contact number or frequency you know, regardless of distance, signal jamming, dead zones, or lack of network coverage. The communication is entirely clear and cannot be intercepted by electronic eavesdropping.

### Instant Connectivity
*5th-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Self  
**Components**: V, S  
**Duration**: 1 hour  
You establish a high-bandwidth magical uplink to the global internet and network infrastructure. You can access any database, search engine, or connected camera in the world with no signal latency. You gain advantage on all Intelligence checks to find information, and you can hack into any connected system without needing physical proximity.

### Machine Invisibility
*1st-level illusion (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a glass lens)  
**Duration**: Concentration, up to 1 hour  
A creature or object you touch becomes completely invisible to electronic sensors, surveillance cameras, motion detectors, infrared scanners, and automated targeting systems. The target remains visible to normal organic vision.

### On/Off
*Transmutation cantrip (technomagic)*  
**Casting Time**: 1 bonus action  
**Range**: 60 feet  
**Components**: V, S  
**Duration**: Instantaneous  
You toggle the power state of a single electronic device or machine you can see within range that has an on/off switch or power button (such as a light switch, computer monitor, vehicle engine, television, or automated door).

### Power Device
*1st-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a dead battery)  
**Duration**: 8 hours  
You channel magical energy into a battery, fuel cell, or dead electronic device, restoring its power completely. The device functions as if fully charged for 8 hours, after which its power drains completely unless regular power is supplied.

### Relay Text
*2nd-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: Unlimited  
**Components**: V, S, M (a phone or keyboard)  
**Duration**: Instantaneous  
You transmit a short text message of twenty-five words or fewer, or an image or video file of up to 10 seconds, to a specific electronic device, screen, or smartphone you have previously interacted with or whose identifier you know. The message appears prominently on the screen.

### Remote Access
*2nd-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: 120 feet  
**Components**: V, S  
**Duration**: Concentration, up to 10 minutes  
You create a wireless link between your own computing device (or mind) and a target electronic device you can see within range. You can interact with the target device as if you were physically touching its controls or plugged directly into its terminal.

### Shutdown
*3rd-level transmutation (technomagic)*  
**Casting Time**: 1 action  
**Range**: 120 feet  
**Components**: V, S  
**Duration**: Concentration, up to 1 minute  
You shut down power to all electronic devices and machines in a 20-foot cube within range. Cameras go black, engines stall, lights turn off, and alarms cease sounding. Any electronic device brought into the area immediately ceases to function.

### Synchronicity
*5th-level enchantment (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S  
**Duration**: Concentration, up to 1 hour  
The creature you touch is brought into perfect rhythm with the modern urban environment. Traffic lights turn green as the target approaches, elevators arrive immediately, subway doors open right as the target steps onto the platform, and security guards glance away at the exact right moment. The target cannot be delayed by mundane urban transit, traffic, or crowd congestion, and has advantage on Dexterity (Stealth) checks in city streets.

### Tracker
*1st-level divination (technomagic)*  
**Casting Time**: 1 action  
**Range**: Touch  
**Components**: V, S, M (a small microchip or coin)  
**Duration**: 24 hours  
You attach a small magical signature to an object or creature you touch. For the duration, you always know the exact distance and direction to the target as long as it is on the same plane of existence, and you can display its real-time location on any digital map or GPS application.

### Wire Walk
*4th-level conjuration (technomagic)*  
**Casting Time**: 1 action  
**Range**: 500 feet  
**Components**: V, S  
**Duration**: Instantaneous  
You step into an electronic device connected to a power grid or data network and instantly teleport out of another connected device within 500 feet that you can see or whose exact location you know. You can bring along willing creatures that you touch, up to a maximum equal to your spellcasting ability modifier.

---
*Backlinks: [[Spellcasting Rules]], [[School of Technomancy]], [[Technology Domain]], [[The Superintelligence]], [[The Network]]*
`
  }
];
