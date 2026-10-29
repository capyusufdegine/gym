import React, { useState } from 'react';
import { Sparkles, ArrowRight, Activity, Flame, Target, Shield } from 'lucide-react';
import { Program, PROGRAMS } from '../data/gymData';

interface FitnessAssessmentProps {
  onSelectProgram: (program: Program) => void;
  onOpenBooking: (programId?: string) => void;
}

export const FitnessAssessment: React.FC<FitnessAssessmentProps> = ({ onSelectProgram, onOpenBooking }) => {
  const [goal, setGoal] = useState<'shred' | 'muscle' | 'strength' | 'hybrid'>('shred');
  const [experience, setExperience] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [frequency, setFrequency] = useState<number>(4);

  // Recommendations logic
  const getRecommendation = () => {
    if (experience === 'beginner' || goal === 'shred') {
      return {
        program: PROGRAMS[0], // One-on-one
        weeklyVolume: '14–18 working sets / muscle group',
        cardioProtocol: '2x Zone-2 aerobic + 1x interval sprint',
        nutritionFocus: 'Moderate deficit (-350 kcal) + 2.0g/kg protein',
        timeToSeeResults: '3 to 4 Weeks for visible body recomposition',
      };
    } else if (goal === 'muscle') {
      return {
        program: PROGRAMS[1], // Online
        weeklyVolume: '16–22 working sets with progressive RPE 8-9',
        cardioProtocol: 'Low impact 8,000-10,000 daily steps for recovery',
        nutritionFocus: 'Clean surplus (+250 kcal) + high peri-workout carbs',
        timeToSeeResults: '6 to 8 Weeks for lean hypertrophy adaptations',
      };
    } else if (goal === 'strength') {
      return {
        program: PROGRAMS[0], // One-on-one
        weeklyVolume: 'Primary barbell compounds @ 75-87.5% 1RM',
        cardioProtocol: 'Dynamic mobility & sled drag recovery',
        nutritionFocus: 'Maintenance calories + 5g daily creatine monohydrate',
        timeToSeeResults: '4 to 6 Weeks for major barbell PR breakthrough',
      };
    } else {
      return {
        program: PROGRAMS[2], // Nutrition Planning or Group
        weeklyVolume: 'Hybrid functional power + metabolic thresholds',
        cardioProtocol: 'HIIT kettlebell intervals + track sessions',
        nutritionFocus: 'Targeted carb-cycling around demanding sessions',
        timeToSeeResults: '4 Weeks for athletic output surge',
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-20 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
            <Sparkles className="w-4 h-4 text-[#e63925]" />
            <span>INTERACTIVE ASSESSMENT</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
            FIND YOUR OPTIMAL BLUEPRINT
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Configure your target goals and availability to generate your tailored training frequency and recommended program.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Primary Goal */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                1. Select Primary Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'shred', label: 'Fat Loss', icon: Flame },
                  { id: 'muscle', label: 'Hypertrophy', icon: Activity },
                  { id: 'strength', label: 'Pure Strength', icon: Target },
                  { id: 'hybrid', label: 'Athletic Hybrid', icon: Shield },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = goal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setGoal(item.id as any)}
                      className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        active
                          ? 'bg-[#e63925] border-[#e63925] text-white shadow-lg shadow-red-950/40'
                          : 'bg-[#1a1a1a] border-white/5 text-zinc-300 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-2 ${active ? 'text-white' : 'text-[#e63925]'}`} />
                      <span className="text-xs font-bold uppercase tracking-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Experience Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                2. Lifting Experience
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'beginner', label: 'Beginner', desc: '< 1 Year' },
                  { id: 'intermediate', label: 'Intermediate', desc: '1–3 Years' },
                  { id: 'advanced', label: 'Advanced', desc: '3+ Years' },
                ].map((item) => {
                  const active = experience === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setExperience(item.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-[#e63925] border-[#e63925] text-white'
                          : 'bg-[#1a1a1a] border-white/5 text-zinc-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase">{item.label}</div>
                      <div className={`text-[10px] mt-0.5 ${active ? 'text-white/80' : 'text-zinc-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Availability Slider/Buttons */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  3. Dedicated Sessions Per Week
                </label>
                <span className="text-xs font-mono font-bold text-[#e63925]">
                  {frequency} Days / Week
                </span>
              </div>
              <div className="flex gap-2">
                {[2, 3, 4, 5, 6].map((days) => (
                  <button
                    key={days}
                    onClick={() => setFrequency(days)}
                    className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border transition-all cursor-pointer ${
                      frequency === days
                        ? 'bg-white text-black border-white'
                        : 'bg-[#1a1a1a] text-zinc-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {days}x
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Output Blueprint Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1a0806] via-[#161616] to-[#0f0f0f] border border-[#e63925]/30 rounded-xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e63925] font-bold">
                RECOMMENDED BLUEPRINT
              </span>
              <span className="text-xs font-display font-black text-white uppercase">
                {recommendation.program.title}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono">Volume Target</span>
                <span className="text-white font-medium">{recommendation.weeklyVolume}</span>
              </div>

              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono">Cardio & Recovery</span>
                <span className="text-white font-medium">{recommendation.cardioProtocol}</span>
              </div>

              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono">Nutritional Strategy</span>
                <span className="text-white font-medium">{recommendation.nutritionFocus}</span>
              </div>

              <div>
                <span className="text-zinc-400 block text-[10px] uppercase font-mono">Expected Timeline</span>
                <span className="text-emerald-400 font-medium">{recommendation.timeToSeeResults}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => onOpenBooking(recommendation.program.id)}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LOCK IN THIS BLUEPRINT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectProgram(recommendation.program)}
                className="w-full py-2 px-4 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors text-center cursor-pointer"
              >
                View Program Details & Pricing
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
