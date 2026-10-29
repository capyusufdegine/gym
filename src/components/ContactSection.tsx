import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'CrossFit Group WODs',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#e63925]" />
                <span>VISIT OUR ROUND ROCK BOX</span>
              </div>
              <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                CROSSFIT <br />
                <span className="text-[#e63925]">ROUND ROCK</span> TX
              </h2>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-normal">
                Conveniently located in Round Rock, TX with over 6,000 sq ft of dedicated CrossFit training space, Rogue & Eleiko barbells, competition rigs, and turf.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141414] border border-white/5">
                <div className="p-2.5 rounded-lg bg-[#e63925]/10 text-[#e63925] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Box Location</div>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    {GYM_INFO.address}
                  </p>
                  <span className="text-[11px] text-zinc-500 font-mono mt-1 block">Near Dell Diamond & Old Settlers Park</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141414] border border-white/5">
                <div className="p-2.5 rounded-lg bg-[#e63925]/10 text-[#e63925] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Class & Open Gym Hours</div>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    {GYM_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs text-zinc-300">
                    {GYM_INFO.hours.saturday}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {GYM_INFO.hours.sunday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141414] border border-white/5">
                <div className="p-2.5 rounded-lg bg-[#e63925]/10 text-[#e63925] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Direct Phone & Text</div>
                  <p className="text-xs text-zinc-300 mt-0.5 font-mono">
                    {GYM_INFO.phone}
                  </p>
                  <span className="text-[11px] text-zinc-500 mt-0.5 block">Call or text for drop-ins & visitor passes</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141414] border border-white/5">
                <div className="p-2.5 rounded-lg bg-[#e63925]/10 text-[#e63925] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Email</div>
                  <p className="text-xs text-zinc-300 mt-0.5 font-mono">
                    {GYM_INFO.email}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                REACH OUT TO OUR COACHES
              </h3>
              <p className="text-xs text-zinc-400 mb-8">
                Visiting Round Rock or curious about starting? Send a message and our head coach will get back to you today.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    MESSAGE RECEIVED
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Thanks, {formData.name}! A coach from CrossFit Round Rock TX will review your inquiry and reach out via email or text shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'CrossFit Group WODs', message: '' });
                    }}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] rounded cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925] transition-colors"
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
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (512) 000-0000"
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Program of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#181818] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#e63925] transition-colors cursor-pointer"
                      >
                        <option value="CrossFit Group WODs">01. CrossFit Group WODs</option>
                        <option value="One-on-One Coaching">02. 1-on-1 Personal Coaching</option>
                        <option value="Nutrition Coaching">03. Nutrition & Macro Coaching</option>
                        <option value="On-Ramp Foundations">04. On-Ramp Foundations (Beginners)</option>
                        <option value="Drop-in Visitor">Round Rock Drop-in Visitor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Tell Us About Your Fitness Background *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Have you done CrossFit or barbell lifting before? What are your current goals in Round Rock?"
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63925] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT INQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
