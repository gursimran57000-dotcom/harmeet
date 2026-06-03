import { motion } from 'motion/react';
import { MapPin, Building, Users, Calendar } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">About Harmeet PVC Doors</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Established in 2004, HARMEET PVC DOORS has made a name for itself in the list of top suppliers of PVC Door, Pvc Window, and PVC Door Frames in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <TiltCard className="w-full h-full min-h-[400px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-100 shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Architecture featuring our PVC Doors" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <p className="text-white font-medium text-lg italic">
                    "Delivering supreme quality and verified service to customers Pan-India."
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              Located in <strong className="text-slate-900">Bathinda, Punjab</strong>, we are one of the leading sellers of PVC products. Rated in Trade India's list of verified sellers, we offer supreme quality designer doors and furniture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Calendar className="text-blue-600" size={24}/>, label: "Establishment", value: "2004" },
                { icon: <Users className="text-blue-600" size={24}/>, label: "Employee Count", value: "40 Professionals" },
                { icon: <MapPin className="text-blue-600" size={24}/>, label: "Location", value: "Bathinda, Punjab" },
                { icon: <Building className="text-blue-600" size={24}/>, label: "Business Type", value: "Manufacturer & Supplier" },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-slate-50 rounded-xl p-5 border border-slate-100 shadow-inner flex gap-4 items-start hover:shadow-md transition-shadow"
                >
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.label}</h4>
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <a href="#products" className="inline-block mt-4 text-blue-600 font-bold uppercase tracking-widest text-sm hover:text-blue-700 hover:underline underline-offset-4 transition">
              View Our Catalog &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
