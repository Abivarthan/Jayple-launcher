"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Star, MapPin, Calendar, CreditCard, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-secondary/40 blur-[100px] rounded-full" />
      <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] bg-accent/20 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-charcoal leading-[1.05] mb-8">
            The Future of <br />
            <span className="text-primary italic">Self-Care</span> <br />
            is Here.
          </h1>
          <p className="text-xl text-slate/80 leading-relaxed mb-10 max-w-lg">
            Stop waiting on hold. Direct access to the highest-rated beauty and wellness professionals, right in your pocket.
          </p>

          {/* New Mobile Image Section (More Creative) */}
          <div className="block lg:hidden mb-12 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50 rounded-[3rem]" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000" 
                alt="Male Grooming" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-morphism p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-bold">The Royal Barber</p>
                    <p className="text-white/60 text-xs">Mayfair, London</p>
                  </div>
                  <button className="bg-primary text-white p-2 rounded-lg">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="/apps/jayple-customer.apk" 
              download
              className="bg-charcoal text-white px-10 py-5 rounded-full font-bold flex items-center justify-center hover:bg-primary transition-all shadow-premium group text-lg"
            >
              Get Started
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/apps/jayple-vendor.apk" 
              download
              className="bg-white text-charcoal px-10 py-5 rounded-full font-bold border border-mercury hover:bg-secondary transition-all shadow-sm text-lg"
            >
              Partner
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-12 hidden lg:flex items-center justify-center"
        >
          {/* Main App Frame */}
          <div className="relative z-20 w-[340px] aspect-[1/2] bg-charcoal rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[10px] border-charcoal overflow-hidden group">
             <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col pt-10">
                <div className="px-6 flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate/40 tracking-widest uppercase">Welcome back,</p>
                      <h4 className="text-xl font-bold text-charcoal">Jessica 💅</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary border border-primary/20 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=32" alt="avatar" />
                    </div>
                  </div>
                  
                  {/* Search Bar UI */}
                  <div className="bg-secondary/50 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-primary/40" />
                    <div className="h-2 w-32 bg-slate/10 rounded" />
                  </div>

                  <div className="h-44 w-full bg-primary/20 rounded-3xl overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1621605815971-fbc98d635a9c?auto=format&fit=crop&q=80&w=400" 
                      alt="Barber" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-white font-bold text-sm">New: Precision Fade</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-bold text-charcoal uppercase tracking-wider">Top Services</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-accent/20 rounded-2xl overflow-hidden group-hover:-translate-y-1 transition-transform">
                        <img 
                          src="https://images.unsplash.com/photo-1522337660859-02fbefca470c?auto=format&fit=crop&q=80&w=200" 
                          alt="Nails" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-24 bg-primary/10 rounded-2xl overflow-hidden group-hover:-translate-y-1 transition-transform delay-75">
                        <img 
                          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=200" 
                          alt="Makeup" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Bar UI */}
                <div className="h-20 bg-white border-t border-mercury/30 flex items-center justify-around px-4">
                  {[1,2,3,4].map(i => <div key={i} className={`w-8 h-2 rounded-full ${i===1 ? 'bg-primary' : 'bg-mercury/40'}`} />)}
                </div>
             </div>
          </div>

          {/* Dynamic Floating Notification (Creative Add) */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-10 -right-16 z-30 glass-morphism p-5 rounded-[2rem] shadow-premium max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(34,197,94,0.3)]">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate/40 uppercase">Confirmed</p>
                <p className="text-xs font-bold text-charcoal">Booking Success!</p>
              </div>
            </div>
            <p className="text-[10px] text-slate leading-relaxed">Your haircut with <strong>Sarah</strong> is confirmed for tomorrow at 10:00 AM.</p>
          </motion.div>

          {/* Floating Rating */}
          <div className="absolute bottom-40 -left-10 z-30 glass-morphism px-6 py-4 rounded-[1.5rem] shadow-premium animate-float">
            <div className="flex items-center space-x-3">
              <div className="flex text-yellow-500">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-charcoal">4.9/5</span>
              <span className="text-[10px] text-slate font-medium">Expert Rating</span>
            </div>
          </div>

          {/* Experience Card */}
          <div className="absolute bottom-0 -right-5 z-20 glass-morphism p-5 rounded-[2rem] shadow-premium animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-dark">
                 <Zap size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-charcoal">Instant Access</p>
                  <p className="text-[10px] text-slate">No queues. No waiting.</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: <MapPin size={28} />,
    title: "Discover nearby",
    desc: "Search for the highest-rated salons and wellness experts in your neighborhood."
  },
  {
    icon: <Calendar size={28} />,
    title: "Book instantly",
    desc: "Pick a time that fits your schedule and confirm your booking in seconds."
  },
  {
    icon: <Zap size={28} />,
    title: "Enjoy the experience",
    desc: "Show up, relax, and let the professionals take care of the rest."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">Your wellness journey, simplified</h2>
          <p className="text-slate max-w-2xl mx-auto">Connecting you to the best in beauty with seamless technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-secondary border border-mercury hover:shadow-premium transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-charcoal mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{step.title}</h3>
              <p className="text-slate leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const list = [
    { title: "Smart Discovery", desc: "AI-powered recommendations based on your unique style.", icon: <Star /> },
    { title: "Secure Payments", desc: "One-tap checkout with Apple Pay and major cards.", icon: <CreditCard /> },
    { title: "Verified Vendors", desc: "Only the best professionals make it onto Jayple.", icon: <Shield /> },
    { title: "Real-time Rescheduling", desc: "Life happens. Change bookings with zero friction.", icon: <Calendar /> },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeInUp}>
          <span className="text-xs font-bold tracking-widest text-slate mb-4 uppercase block">Features</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 leading-tight">Everything you need for self-care in one app.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {list.map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <div className="text-primary-dark">{item.icon}</div>
                <h4 className="font-bold text-charcoal">{item.title}</h4>
                <p className="text-sm text-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
            <div className="bg-mercury rounded-[2rem] h-[500px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                alt="Salon" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-2xl font-serif font-bold">Premium Experience</p>
                <p className="text-white/80">Only at Jayple verified studios.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
