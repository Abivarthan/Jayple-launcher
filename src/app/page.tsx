"use client";

import { Navbar, Footer } from "@/components/Layout";
import { Hero, HowItWorks, Features } from "@/components/Sections";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      
      {/* Newsletter CTA Section */}
      <section id="vendors" className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative background for CTA */}
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[4rem] -z-10" />
          
          <div className="glass-morphism p-12 md:p-24 rounded-[4rem] text-center shadow-premium relative overflow-hidden bg-white/40 border-white">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-8">
                Ready to elevate your <br className="hidden md:block" /> beauty experience?
              </h2>
              <p className="text-slate/70 mb-12 text-xl max-w-2xl mx-auto">
                Join 50,000+ users who have already upgraded their self-care routine with Jayple's expert network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="/apps/jayple-customer.apk" 
                  download
                  className="bg-charcoal text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-primary transition-all active:scale-95 text-lg min-w-[220px]"
                >
                  Download App
                </a>
                <a 
                  href="/apps/jayple-vendor.apk" 
                  download
                  className="bg-white text-charcoal px-12 py-5 rounded-full font-bold border border-mercury shadow-sm hover:bg-secondary transition-all active:scale-95 text-lg min-w-[220px]"
                >
                  Vendor Portal
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
