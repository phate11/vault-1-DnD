// Procedural Web Audio Ambient Soundscape Generator
// Zero external files, 100% synthesized in-browser via Web Audio API nodes

export type SoundscapeType = 'tavern' | 'dungeon' | 'forest' | 'rain' | 'wardrums';

export interface SoundscapeInfo {
  id: SoundscapeType;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
}

export const SOUNDSCAPE_PRESETS: SoundscapeInfo[] = [
  {
    id: 'tavern',
    name: 'Tavern Hearth & Murmur',
    subtitle: 'Warm fire, wooden tavern ambience',
    icon: '🍺',
    description: 'Crackling fire embers, muted conversational hum, and cozy warmth.'
  },
  {
    id: 'dungeon',
    name: 'Dungeon Depths & Drips',
    subtitle: 'Echoing caverns & water drops',
    icon: '🏰',
    description: 'Subterranean low wind drones with randomized reverberant water drops.'
  },
  {
    id: 'forest',
    name: 'Enchanted Forest Breeze',
    subtitle: 'Rustling leaves & gentle chirps',
    icon: '🌲',
    description: 'Soothing wind sweep through canopy foliage with playful synthesized songbirds.'
  },
  {
    id: 'rain',
    name: 'Campfire in the Rain',
    subtitle: 'Steady rainfall & spitting coals',
    icon: '🌧️',
    description: 'Gentle patter of rain against tent canvas paired with crackling wood.'
  },
  {
    id: 'wardrums',
    name: 'War Drums & Tension',
    subtitle: 'Rhythmic tribal march & dark drone',
    icon: '🥁',
    description: 'Ominous sub-bass drum pulse with tense low drone for combat and suspense.'
  }
];

class ProceduralAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private activeSoundscape: SoundscapeType | null = null;
  private intervalIds: number[] = [];
  private activeNodes: (AudioNode | { stop: () => void })[] = [];
  private volume: number = 0.5;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getActiveSoundscape(): SoundscapeType | null {
    return this.activeSoundscape;
  }

  public stopAll() {
    this.intervalIds.forEach((id) => window.clearInterval(id));
    this.intervalIds = [];

    this.activeNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') {
          node.stop();
        }
        if ('disconnect' in node && typeof node.disconnect === 'function') {
          node.disconnect();
        }
      } catch {
        // Ignored if already stopped
      }
    });
    this.activeNodes = [];
    this.activeSoundscape = null;
  }

  public play(type: SoundscapeType) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.activeSoundscape === type) {
      this.stopAll();
      return;
    }

    this.stopAll();
    this.activeSoundscape = type;

    switch (type) {
      case 'tavern':
        this.startTavern();
        break;
      case 'dungeon':
        this.startDungeon();
        break;
      case 'forest':
        this.startForest();
        break;
      case 'rain':
        this.startRain();
        break;
      case 'wardrums':
        this.startWarDrums();
        break;
    }
  }

  // Create noise buffer helper
  private createNoiseBuffer(durationSeconds = 3): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * durationSeconds;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  // 1. TAVERN
  private startTavern() {
    if (!this.ctx || !this.masterGain) return;

    // Fire crackle noise
    const noiseBuffer = this.createNoiseBuffer(2);
    if (noiseBuffer) {
      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(1200, this.ctx.currentTime);
      bandpass.Q.setValueAtTime(3.0, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

      noiseSource.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noiseSource.start();
      this.activeNodes.push(noiseSource);
    }

    // Warm room hum (low filtered sine / rumble)
    const humOsc = this.ctx.createOscillator();
    humOsc.type = 'triangle';
    humOsc.frequency.setValueAtTime(110, this.ctx.currentTime);

    const humGain = this.ctx.createGain();
    humGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    humOsc.connect(humGain);
    humGain.connect(this.masterGain);
    humOsc.start();
    this.activeNodes.push(humOsc);

    // Random pops & hearth crackles
    const interval = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      if (Math.random() > 0.4) {
        const pop = this.ctx.createOscillator();
        pop.type = 'sine';
        pop.frequency.setValueAtTime(600 + Math.random() * 900, this.ctx.currentTime);

        const popGain = this.ctx.createGain();
        popGain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        popGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        pop.connect(popGain);
        popGain.connect(this.masterGain);

        pop.start();
        pop.stop(this.ctx.currentTime + 0.08);
      }
    }, 180);
    this.intervalIds.push(interval);
  }

  // 2. DUNGEON
  private startDungeon() {
    if (!this.ctx || !this.masterGain) return;

    // Deep resonant cave wind drone
    const drone = this.ctx.createOscillator();
    drone.type = 'sine';
    drone.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(160, this.ctx.currentTime);

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.2, this.ctx.currentTime);

    drone.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(this.masterGain);
    drone.start();
    this.activeNodes.push(drone);

    // Occasional resonant water drip
    const dripInterval = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      const drip = this.ctx.createOscillator();
      drip.type = 'sine';
      const startFreq = 1200 + Math.random() * 800;
      drip.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
      drip.frequency.exponentialRampToValueAtTime(startFreq * 1.5, this.ctx.currentTime + 0.06);

      const dripGain = this.ctx.createGain();
      dripGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      dripGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      drip.connect(dripGain);
      dripGain.connect(this.masterGain);

      drip.start();
      drip.stop(this.ctx.currentTime + 0.35);
    }, 1200 + Math.random() * 1500);
    this.intervalIds.push(dripInterval);
  }

  // 3. FOREST
  private startForest() {
    if (!this.ctx || !this.masterGain) return;

    // Gentle wind sweep
    const noiseBuffer = this.createNoiseBuffer(3);
    if (noiseBuffer) {
      const wind = this.ctx.createBufferSource();
      wind.buffer = noiseBuffer;
      wind.loop = true;

      const windFilter = this.ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.setValueAtTime(450, this.ctx.currentTime);

      const windGain = this.ctx.createGain();
      windGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

      wind.connect(windFilter);
      windFilter.connect(windGain);
      windGain.connect(this.masterGain);

      wind.start();
      this.activeNodes.push(wind);
    }

    // Bird chirping synth generator
    const birdInterval = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      if (Math.random() > 0.3) {
        const baseFreq = 2200 + Math.random() * 800;
        const bird = this.ctx.createOscillator();
        bird.type = 'sine';
        bird.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
        bird.frequency.exponentialRampToValueAtTime(baseFreq + 500, this.ctx.currentTime + 0.05);
        bird.frequency.exponentialRampToValueAtTime(baseFreq - 200, this.ctx.currentTime + 0.12);

        const birdGain = this.ctx.createGain();
        birdGain.gain.setValueAtTime(0.07, this.ctx.currentTime);
        birdGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

        bird.connect(birdGain);
        birdGain.connect(this.masterGain);

        bird.start();
        bird.stop(this.ctx.currentTime + 0.14);
      }
    }, 1400);
    this.intervalIds.push(birdInterval);
  }

  // 4. RAIN
  private startRain() {
    if (!this.ctx || !this.masterGain) return;

    const noiseBuffer = this.createNoiseBuffer(2);
    if (noiseBuffer) {
      const rain = this.ctx.createBufferSource();
      rain.buffer = noiseBuffer;
      rain.loop = true;

      const rainFilter = this.ctx.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.setValueAtTime(800, this.ctx.currentTime);

      const rainGain = this.ctx.createGain();
      rainGain.gain.setValueAtTime(0.16, this.ctx.currentTime);

      rain.connect(rainFilter);
      rainFilter.connect(rainGain);
      rainGain.connect(this.masterGain);

      rain.start();
      this.activeNodes.push(rain);
    }

    // Low rumble / distant thunder
    const thunderInterval = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      if (Math.random() < 0.25) {
        const thunder = this.ctx.createOscillator();
        thunder.type = 'triangle';
        thunder.frequency.setValueAtTime(65, this.ctx.currentTime);
        thunder.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 1.2);

        const thundGain = this.ctx.createGain();
        thundGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        thundGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

        thunder.connect(thundGain);
        thundGain.connect(this.masterGain);

        thunder.start();
        thunder.stop(this.ctx.currentTime + 1.4);
      }
    }, 5000);
    this.intervalIds.push(thunderInterval);
  }

  // 5. WAR DRUMS
  private startWarDrums() {
    if (!this.ctx || !this.masterGain) return;

    // Low dark organ / cello drone
    const darkDrone = this.ctx.createOscillator();
    darkDrone.type = 'sawtooth';
    darkDrone.frequency.setValueAtTime(55, this.ctx.currentTime);

    const darkFilter = this.ctx.createBiquadFilter();
    darkFilter.type = 'lowpass';
    darkFilter.frequency.setValueAtTime(140, this.ctx.currentTime);

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    darkDrone.connect(darkFilter);
    darkFilter.connect(droneGain);
    droneGain.connect(this.masterGain);

    darkDrone.start();
    this.activeNodes.push(darkDrone);

    // Percussive Drum Beat (BAM ... BAM-bam)
    let beatStep = 0;
    const drumInterval = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;

      const isAccent = beatStep % 4 === 0;
      const isGhost = beatStep % 4 === 2;

      if (isAccent || isGhost) {
        const drum = this.ctx.createOscillator();
        drum.type = 'sine';
        const startPitch = isAccent ? 120 : 95;
        drum.frequency.setValueAtTime(startPitch, this.ctx.currentTime);
        drum.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.35);

        const drumGain = this.ctx.createGain();
        const volume = isAccent ? 0.3 : 0.16;
        drumGain.gain.setValueAtTime(volume, this.ctx.currentTime);
        drumGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.38);

        drum.connect(drumGain);
        drumGain.connect(this.masterGain);

        drum.start();
        drum.stop(this.ctx.currentTime + 0.38);
      }
      beatStep++;
    }, 450);
    this.intervalIds.push(drumInterval);
  }
}

export const soundscapeEngine = new ProceduralAudioEngine();
