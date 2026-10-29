import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { PROGRAMS, GYM_INFO } from '../data/gymData';

interface BookingModalProps {
  isOpen: boolean;
  initialProgramId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialProgramId,
  onClose,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<string>(initialProgramId || 'crossfit-wods');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('06:15 AM');
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Beginner / First Time CrossFit',
    primaryGoal: 'Fat Loss & Functional Strength',
    notes: '',
  });

  useEffect(() => {
    if (initialProgramId) {
      setSelectedProgram(initialProgramId);
    }
  }, [initialProgramId]);

  // Generate next 7 available dates
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push({
        full: d.toISOString().split('T')[0],
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: d.getDate(),
        monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
    return dates;
  }, []);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].full);
    }
  }, [availableDates, selectedDate]);

  const timeSlots = [
    '05:00 AM',
    '06:15 AM',
    '09:00 AM',
    '12:00 PM',
    '04:30 PM',
    '05:45 PM',
    '06:45 PM',
  ];

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsBooked(true);
    }, 700);
  };

  const currentProgramObj = PROGRAMS.find(p => p.id === selectedProgram) || PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto max-h-[92vh] text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          /* Success Screen */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                TRIAL SESSION CONFIRMED
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                WELCOME TO CROSSFIT ROUND ROCK TX
              </h2>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Your free trial / assessment at CrossFit Round Rock is confirmed! A calendar invite and box arrival guidelines have been sent to <span className="text-white font-medium">{formData.email}</span>.
              </p>
            </div>

            {/* Session Summary Card */}
            <div className="max-w-md mx-auto p-5 rounded-xl bg-[#181818] border border-white/10 text-left space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-xs">
                <span className="text-zinc-400">Class / Program</span>
                <span className="font-bold text-white uppercase">{currentProgramObj.title}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-xs">
                <span className="text-zinc-400">Scheduled Time</span>
                <span className="font-mono text-white font-bold">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Box Address</span>
                <span className="text-zinc-200">{GYM_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all cursor-pointer"
              >
                DONE & RETURN TO SITE
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Booking Form */
          <div>
            {/* Header */}
            <div className="space-y-1.5 pr-10 mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#e63925]">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>STEP {step} OF 2 — CLAIM YOUR FREE ROUND ROCK TRIAL</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                {step === 1 ? 'CHOOSE PROGRAM & TIME' : 'YOUR ATHLETIC PROFILE'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                {step === 1
                  ? 'Select your program format, preferred date, and class time at our Round Rock box.'
                  : 'Tell us a little about your fitness background so our coaches can welcome you.'}
              </p>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                {/* 1. Choose Program */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                    1. Program Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROGRAMS.map((prog) => (
                      <button
                        key={prog.id}
                        type="button"
                        onClick={() => setSelectedProgram(prog.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          selectedProgram === prog.id
                            ? 'bg-[#1e1210] border-[#e63925] text-white'
                            : 'bg-[#181818] border-white/5 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-black text-sm uppercase text-white">
                            {prog.title}
                          </span>
                          {selectedProgram === prog.id && (
                            <span className="w-2 h-2 rounded-full bg-[#e63925]" />
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-400 mt-1">{prog.duration}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Pick Date */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#e63925]" />
                      <span>2. Preferred Date</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                    {availableDates.map((d) => (
                      <button
                        key={d.full}
                        type="button"
                        onClick={() => setSelectedDate(d.full)}
                        className={`py-2.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                          selectedDate === d.full
                            ? 'bg-[#e63925] border-[#e63925] text-white shadow-md shadow-red-950/40'
                            : 'bg-[#181818] border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-bold tracking-wider">{d.dayName}</div>
                        <div className="font-display font-black text-lg my-0.5">{d.dayNum}</div>
                        <div className="text-[10px] uppercase opacity-75">{d.monthName}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Pick Time Slot */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e63925]" />
                    <span>3. Class / Session Time Slot</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border text-xs font-mono font-medium text-center transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#181818] border-white/5 text-zinc-300 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/50"
                  >
                    <span>CONTINUE TO DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Trainee Profile Details */
              <form onSubmit={handleConfirmBooking} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jordan Hayes"
                      className="w-full px-4 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jordan@example.com"
                      className="w-full px-4 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (512) 123-4567"
                      className="w-full px-4 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Primary Goal in Round Rock
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#e63925]"
                    >
                      <option value="Fat Loss & Functional Strength">Fat Loss & Functional Strength</option>
                      <option value="CrossFit Conditioning & Endurance">CrossFit Conditioning & Endurance</option>
                      <option value="Olympic Weightlifting Technique">Olympic Weightlifting Technique</option>
                      <option value="General Health & Community">General Health & Round Rock Community</option>
                      <option value="Competitive CrossFit Prep">Competitive CrossFit Prep</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Prior CrossFit or Lifting Experience & Injuries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Completely new to CrossFit, or previous affiliate experience? Any mobility issues or old injuries we should know?"
                    className="w-full px-4 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925] resize-none"
                  />
                </div>

                <div className="p-3.5 rounded-lg bg-[#181818] border border-white/5 flex items-center gap-2.5 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-[#e63925] shrink-0" />
                  <span>100% Free First Class for Round Rock & Greater Austin area residents. No high-pressure sales.</span>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-xs font-bold uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back to Timing
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all shadow-lg shadow-red-950/50 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>CONFIRMING...</span>
                    ) : (
                      <>
                        <span>CLAIM FREE TRIAL PASS</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
