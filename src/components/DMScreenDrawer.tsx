import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Swords, 
  Eye, 
  HeartPulse, 
  Flame, 
  Brain, 
  Sparkles, 
  X, 
  ChevronRight, 
  BookOpen,
  Sun,
  Moon,
  Scale
} from 'lucide-react';

interface DMScreenDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToNote?: (noteId: string) => void;
}

type TabType = 'conditions' | 'actions' | 'combat_rules' | 'dcs_senses' | 'resting';

export const DMScreenDrawer: React.FC<DMScreenDrawerProps> = ({ isOpen, onClose, onNavigateToNote }) => {
  const [activeTab, setActiveTab] = useState<TabType>('conditions');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const conditionsList = [
    {
      name: 'Blinded',
      desc: "Can't see and automatically fails any ability check requiring sight. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.",
      badge: 'Disadv on Attacks / Adv Against'
    },
    {
      name: 'Charmed',
      desc: "Can't attack the charmer or target them with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.",
      badge: 'No Attacks on Charmer'
    },
    {
      name: 'Deafened',
      desc: "Can't hear and automatically fails any ability check that requires hearing.",
      badge: 'Fail Hearing Checks'
    },
    {
      name: 'Exhaustion',
      desc: 'Cumulative levels: 1 = Disadv on ability checks; 2 = Speed halved; 3 = Disadv on attacks & saves; 4 = Max HP halved; 5 = Speed 0; 6 = Death. Long rest reduces 1 level.',
      badge: 'Levels 1–6 Stacking'
    },
    {
      name: 'Frightened',
      desc: "Disadvantage on ability checks and attack rolls while the source of fear is within line of sight. Can't willingly move closer to the source of fear.",
      badge: 'Disadv & No Approach'
    },
    {
      name: 'Grappled',
      desc: "Speed becomes 0, and it can't benefit from any bonus to its speed. Ends if grappler is incapacitated or an effect pushes the target out of reach.",
      badge: 'Speed = 0'
    },
    {
      name: 'Incapacitated',
      desc: "Can't take actions or reactions.",
      badge: 'No Actions or Reactions'
    },
    {
      name: 'Invisible',
      desc: 'Impossible to see without special senses. For hiding, heavily obscured. Attacks against have disadvantage; attacks by have advantage.',
      badge: 'Adv on Attacks / Disadv Against'
    },
    {
      name: 'Paralyzed',
      desc: 'Incapacitated and cannot move or speak. Auto-fails Str and Dex saving throws. Attacks against have advantage. Any attack that hits within 5 ft is a critical hit.',
      badge: 'Incap + Auto-Crit within 5ft'
    },
    {
      name: 'Petrified',
      desc: 'Transformed into solid stone. Incapacitated, weight ×10, cease aging. Resistance to all damage, immune to poison/disease. Auto-fails Str & Dex saves.',
      badge: 'Stone + All Resistance'
    },
    {
      name: 'Poisoned',
      desc: 'Disadvantage on attack rolls and ability checks.',
      badge: 'Disadv on Attacks & Checks'
    },
    {
      name: 'Prone',
      desc: "Only movement is crawling (costs 1 extra ft per ft) unless it stands up (costs half speed). Disadvantage on attacks. Attacks against within 5 ft have advantage; attacks beyond 5 ft have disadvantage.",
      badge: 'Stand costs half speed'
    },
    {
      name: 'Restrained',
      desc: "Speed becomes 0. Attacks against have advantage; attacks by have disadvantage. Disadvantage on Dexterity saving throws.",
      badge: 'Speed 0 + Disadv Dex Saves'
    },
    {
      name: 'Stunned',
      desc: 'Incapacitated, cannot move, can speak only falteringly. Auto-fails Str and Dex saving throws. Attack rolls against have advantage.',
      badge: 'Incap + Fail Str/Dex Saves'
    },
    {
      name: 'Unconscious',
      desc: 'Incapacitated, drops what holding, falls prone. Auto-fails Str and Dex saves. Attacks against have advantage; hits within 5 ft are critical hits.',
      badge: 'Incap + Prone + Auto-Crit'
    }
  ];

  const filteredConditions = conditionsList.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-stone-900 border-l border-amber-800/40 shadow-2xl flex flex-col font-sans animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 border-b border-amber-900/40 bg-stone-950 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <h2 className="font-serif text-lg font-bold text-amber-200 tracking-wide">DM Screen Quick HUD</h2>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {onNavigateToNote && (
            <>
              <button
                onClick={() => {
                  onNavigateToNote('rules-dictionary-core-mechanics');
                  onClose();
                }}
                title="Open Full 5e Rules Dictionary Note"
                className="px-2 py-1 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/50 rounded text-xs flex items-center gap-1 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>A-Z Dict</span>
              </button>
              <button
                onClick={() => {
                  onNavigateToNote('dm-tools-encounter-builder-and-xp');
                  onClose();
                }}
                title="Open Encounter Builder & XP Thresholds Note"
                className="px-2 py-1 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/50 rounded text-xs flex items-center gap-1 transition-colors"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Encounter Builder</span>
              </button>
              <button
                onClick={() => {
                  onNavigateToNote('dm-treasure-hoards-and-loot');
                  onClose();
                }}
                title="Open Treasure Hoards & Loot Generation Note"
                className="px-2 py-1 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/50 rounded text-xs flex items-center gap-1 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Loot Tables</span>
              </button>
            </>
          )}
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-100 p-1 rounded hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-amber-900/30 bg-stone-950/70 overflow-x-auto scrollbar-none text-xs">
        <button
          onClick={() => setActiveTab('conditions')}
          className={`flex items-center gap-1 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
            activeTab === 'conditions'
              ? 'border-amber-500 text-amber-300 bg-amber-950/30'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <HeartPulse className="w-3.5 h-3.5" />
          Conditions
        </button>
        <button
          onClick={() => setActiveTab('actions')}
          className={`flex items-center gap-1 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
            activeTab === 'actions'
              ? 'border-amber-500 text-amber-300 bg-amber-950/30'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Swords className="w-3.5 h-3.5" />
          Actions
        </button>
        <button
          onClick={() => setActiveTab('combat_rules')}
          className={`flex items-center gap-1 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
            activeTab === 'combat_rules'
              ? 'border-amber-500 text-amber-300 bg-amber-950/30'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Brain className="w-3.5 h-3.5" />
          Rules & Cover
        </button>
        <button
          onClick={() => setActiveTab('dcs_senses')}
          className={`flex items-center gap-1 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
            activeTab === 'dcs_senses'
              ? 'border-amber-500 text-amber-300 bg-amber-950/30'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          DCs & Senses
        </button>
        <button
          onClick={() => setActiveTab('resting')}
          className={`flex items-center gap-1 px-3 py-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
            activeTab === 'resting'
              ? 'border-amber-500 text-amber-300 bg-amber-950/30'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          Rests & Death
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-stone-300">
        {/* CONDITIONS TAB */}
        {activeTab === 'conditions' && (
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter conditions (e.g. Paralyzed, Prone)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-1.5 bg-stone-950 border border-stone-700 rounded text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2.5">
              {filteredConditions.map((cond) => (
                <div key={cond.name} className="p-2.5 rounded bg-stone-950/70 border border-stone-800/80 hover:border-amber-800/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-amber-300 text-sm">{cond.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-800/40">
                      {cond.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">{cond.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTIONS TAB */}
        {activeTab === 'actions' && (
          <div className="space-y-2.5">
            <div className="p-2 bg-amber-950/30 border border-amber-800/40 rounded text-xs text-amber-200/90 leading-relaxed mb-3">
              <strong>Turn Structure:</strong> Movement (up to speed) + <strong>1 Action</strong> + 1 Bonus Action (if granted by feature/spell) + 1 Reaction (when triggered).
            </div>

            {[
              { name: 'Attack', desc: 'Make melee or ranged weapon attack(s). Features like Extra Attack grant multiple attacks with this action.' },
              { name: 'Cast a Spell', desc: 'Casting time of 1 action. Bonus Action Spell rule: If you cast a bonus action spell, only a 1-action cantrip can be cast on that same turn.' },
              { name: 'Dash', desc: 'Gain extra movement equal to your speed for the current turn.' },
              { name: 'Disengage', desc: "Your movement doesn't provoke opportunity attacks for the rest of the turn." },
              { name: 'Dodge', desc: 'Attacks against you have disadvantage if you can see the attacker; advantage on Dex saves. Ends if incapacitated or speed drops to 0.' },
              { name: 'Help', desc: "Give advantage to an ally's next ability check, or to an attack against an enemy within 5 ft of you before your next turn." },
              { name: 'Hide', desc: 'Make a Dexterity (Stealth) check to become hidden. Requires being unseen/heavily obscured.' },
              { name: 'Ready', desc: 'Declare a trigger and reaction action. Readying a spell expends the slot and requires Concentration until triggered.' },
              { name: 'Search', desc: 'Devote full attention to finding something (Wisdom Perception or Intelligence Investigation check).' },
              { name: 'Use an Object', desc: 'Interact with a second object on your turn, or use a complex mechanical item/potion.' },
              { name: 'Grapple (Special Attack)', desc: 'Replaces one attack. Str (Athletics) vs. target Str (Athletics) or Dex (Acrobatics). Target speed = 0.' },
              { name: 'Shove (Special Attack)', desc: 'Replaces one attack. Str (Athletics) vs. target Str (Athletics) or Dex (Acrobatics). Knock prone or push 5 ft away.' },
              { name: 'Two-Weapon Fighting', desc: 'Bonus action attack with second light weapon. Does NOT add ability modifier to damage unless negative or with fighting style.' }
            ].map((action) => (
              <div key={action.name} className="p-2.5 rounded bg-stone-950/70 border border-stone-800/80">
                <span className="font-serif font-bold text-amber-300 text-xs block mb-0.5">{action.name}</span>
                <p className="text-xs text-stone-400 leading-relaxed">{action.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* RULES & COVER TAB */}
        {activeTab === 'combat_rules' && (
          <div className="space-y-3">
            {/* Cover Card */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded">
              <h3 className="font-serif font-bold text-amber-300 text-xs flex items-center gap-1.5 mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                Cover Rules
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span className="text-stone-300 font-medium">Half Cover</span>
                  <span className="text-amber-300 font-mono">+2 AC & Dex Saves</span>
                </div>
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span className="text-stone-300 font-medium">3/4 Cover</span>
                  <span className="text-amber-300 font-mono">+5 AC & Dex Saves</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-300 font-medium">Total Cover</span>
                  <span className="text-red-400 font-mono">Cannot be targeted directly</span>
                </div>
              </div>
            </div>

            {/* Concentration Card */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded">
              <h3 className="font-serif font-bold text-amber-300 text-xs flex items-center gap-1.5 mb-2">
                <Brain className="w-3.5 h-3.5 text-amber-400" />
                Concentration Rules
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed mb-2">
                Broken by: casting another concentration spell, incapacitation, death, or taking damage.
              </p>
              <div className="p-2 bg-stone-900 border border-stone-800 rounded text-center">
                <span className="text-[11px] text-stone-400">Save on taking damage:</span>
                <div className="text-sm font-bold font-mono text-amber-300">
                  DC = Max(10, Damage ÷ 2)
                </div>
                <span className="text-[10px] text-stone-500">Separate Con save for each instance of damage.</span>
              </div>
            </div>

            {/* Critical Hits & Advantage */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded space-y-2">
              <h3 className="font-serif font-bold text-amber-300 text-xs flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                Key Mechanics
              </h3>
              <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                <li><strong className="text-stone-200">Critical Hit:</strong> Roll all weapon & feature damage dice twice. Add static flat bonuses once.</li>
                <li><strong className="text-stone-200">Advantage / Disadvantage:</strong> 1 source of disadvantage cancels any number of advantages (and vice versa). They never stack.</li>
                <li><strong className="text-stone-200">Opportunity Attacks:</strong> Provoked when moving out of reach. Disengage action prevents this. Forced movement (pushes, teleports) never provokes.</li>
                <li><strong className="text-stone-200">Difficult Terrain:</strong> Costs 1 extra foot of movement per foot moved (half effective speed).</li>
              </ul>
            </div>
          </div>
        )}

        {/* DCS & SENSES TAB */}
        {activeTab === 'dcs_senses' && (
          <div className="space-y-3">
            {/* DCs Table */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded">
              <h3 className="font-serif font-bold text-amber-300 text-xs mb-2">Standard Difficulty Classes (DCs)</h3>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Very Easy</span>
                  <span className="font-mono text-emerald-400 font-bold">DC 5</span>
                </div>
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Easy</span>
                  <span className="font-mono text-emerald-300 font-bold">DC 10</span>
                </div>
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Medium</span>
                  <span className="font-mono text-amber-300 font-bold">DC 15</span>
                </div>
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Hard</span>
                  <span className="font-mono text-orange-400 font-bold">DC 20</span>
                </div>
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Very Hard</span>
                  <span className="font-mono text-red-400 font-bold">DC 25</span>
                </div>
                <div className="flex justify-between p-1.5 bg-stone-900 rounded">
                  <span className="text-stone-300">Nearly Impossible</span>
                  <span className="font-mono text-purple-400 font-bold">DC 30</span>
                </div>
              </div>
            </div>

            {/* Vision & Obscurement */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded space-y-2">
              <h3 className="font-serif font-bold text-amber-300 text-xs flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Light & Obscurement
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="p-2 bg-stone-900 rounded">
                  <strong className="text-amber-300 block">Dim Light (Lightly Obscured):</strong>
                  <span className="text-stone-400">Disadvantage on Wisdom (Perception) checks relying on sight (-5 to Passive Perception).</span>
                </div>
                <div className="p-2 bg-stone-900 rounded">
                  <strong className="text-amber-300 block">Darkness (Heavily Obscured):</strong>
                  <span className="text-stone-400">Vision completely blocked. Effectively Blinded (attackers have advantage; attacks by have disadvantage).</span>
                </div>
                <div className="p-2 bg-stone-900 rounded">
                  <strong className="text-amber-300 block">Darkvision in Pitch Black:</strong>
                  <span className="text-stone-400">Treats darkness as Dim Light: suffers disadvantage on Perception checks (-5 Passive) and only discerns shades of gray!</span>
                </div>
              </div>
            </div>

            {/* Light Sources */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded">
              <h3 className="font-serif font-bold text-amber-300 text-xs mb-2">Common Light Radii</h3>
              <div className="space-y-1 text-xs text-stone-300 font-mono">
                <div className="flex justify-between"><span>Torch</span><span className="text-amber-300">20 ft bright + 20 ft dim (1 hr)</span></div>
                <div className="flex justify-between"><span>Hooded Lantern</span><span className="text-amber-300">30 ft bright + 30 ft dim</span></div>
                <div className="flex justify-between"><span>Bullseye Lantern</span><span className="text-amber-300">60 ft cone bright + 60 ft dim</span></div>
                <div className="flex justify-between"><span>Light Cantrip</span><span className="text-amber-300">20 ft bright + 20 ft dim (1 hr)</span></div>
              </div>
            </div>
          </div>
        )}

        {/* RESTS & DEATH TAB */}
        {activeTab === 'resting' && (
          <div className="space-y-3">
            {/* Death Saves Card */}
            <div className="p-3 bg-stone-950/70 border border-red-900/40 rounded">
              <h3 className="font-serif font-bold text-red-300 text-xs flex items-center gap-1.5 mb-2">
                <HeartPulse className="w-3.5 h-3.5 text-red-400" />
                Death Saving Throws
              </h3>
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span>Roll 10 or Higher</span>
                  <span className="text-emerald-400 font-mono font-bold">1 Success</span>
                </div>
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span>Roll 9 or Lower</span>
                  <span className="text-red-400 font-mono font-bold">1 Failure</span>
                </div>
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span>Natural 20</span>
                  <span className="text-emerald-300 font-mono font-bold">Regain 1 HP immediately</span>
                </div>
                <div className="flex justify-between border-b border-stone-800/50 pb-1">
                  <span>Natural 1</span>
                  <span className="text-red-500 font-mono font-bold">Counts as 2 Failures</span>
                </div>
                <div className="p-2 bg-stone-900 rounded text-stone-400 mt-2">
                  <strong className="text-stone-200 block mb-1">Damage at 0 HP:</strong>
                  Taking damage at 0 HP = 1 failure. If from a critical hit (any melee hit within 5 ft) = 2 failures.
                </div>
              </div>
            </div>

            {/* Resting Card */}
            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded space-y-2">
              <h3 className="font-serif font-bold text-amber-300 text-xs flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                Short & Long Rest
              </h3>
              <div className="p-2 bg-stone-900 rounded text-xs text-stone-400 space-y-1">
                <strong className="text-amber-300 block">Short Rest (At least 1 hour):</strong>
                <span>Spend 1 or more Hit Dice to regain HP (Roll + Con modifier per die).</span>
              </div>
              <div className="p-2 bg-stone-900 rounded text-xs text-stone-400 space-y-1">
                <strong className="text-amber-300 block">Long Rest (At least 8 hours):</strong>
                <span>Regain ALL lost HP. Regain spent Hit Dice up to half total maximum. Only 1 long rest per 24 hours. Must have at least 1 HP to begin.</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-amber-900/30 bg-stone-950 text-center text-xs text-stone-500">
        Click outside or press Esc to close • D&D 5e Standard Reference Rules
      </div>
    </div>
  );
};
