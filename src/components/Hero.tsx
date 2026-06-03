import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Gem, Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full opacity-20 bg-gradient-to-br from-blue-400 to-sky-200 blur-3xl mix-blend-multiply" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-20 bg-gradient-to-tr from-blue-500 to-indigo-300 blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold uppercase text-[10px] tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Top Manufacturer in Bathinda, Punjab
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
              Premium <span className="text-blue-600">PVC Doors</span> <br />& Furniture
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-lg">
              Established in 2004. We manufacture and supply verified, supreme quality Designer PVC Doors, Windows, Frames, and Beds. Durable, weather-resistant, and elegantly crafted.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded font-bold uppercase tracking-widest text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                Explore Products <ArrowRight size={20} />
              </a>
              <a href="#contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-3.5 rounded font-bold hover:border-blue-500 hover:text-blue-600 uppercase tracking-widest text-sm transition-all active:scale-95">
                Contact Us
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-black text-blue-600">20Y+</p>
                <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-600">40+</p>
                <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mt-1">Skilled Employees</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-600">100%</p>
                <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mt-1">Verified Quality</p>
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative perspective-1000"
          >
            <TiltCard className="w-full aspect-[4/5] max-w-md mx-auto" zTranslate={40}>
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-xl border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
                {/* Decorative shapes inside the card for 3D depth */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-[100px] -z-10" />
                
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Impact Proof</h3>
                  <p className="text-slate-500 text-sm">Weather resistant, moisture resistant, and built for durability.</p>
                </div>

                <div className="relative mt-8 group h-64 w-full bg-cover bg-center rounded-xl overflow-hidden shadow-inner flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] before:absolute before:inset-0 before:bg-black/20">
                  <div className="absolute inset-0 border-4 border-white/30 m-4 rounded-lg pointer-events-none" />
                  <span className="relative text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Designer PVC Door</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
