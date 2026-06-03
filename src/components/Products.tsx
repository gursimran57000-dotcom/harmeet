import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';
import { TiltCard } from './TiltCard';

const products = [
  {
    category: "Designer PVC Door",
    name: "Pvc Skin Membrane Door",
    features: ["White Color", "Smooth Finish", "Impact Proof", "Elegant Design"],
    image: "https://images.unsplash.com/photo-1534138139598-63690d565251?q=80&w=1000&auto=format&fit=crop"
  },
  {
    category: "PVC Window",
    name: "Fancy PVC Window",
    features: ["Aesthetic Look", "Durable", "Age Group: 15 To 45", "Weather Proof"],
    image: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    category: "PVC Door Frames",
    name: "Weather Resistant Frame",
    features: ["Moisture Resistant", "Water Resistant", "Wind Resistant", "For Hotels & Offices"],
    image: "https://images.unsplash.com/photo-1510629471168-d0697ad5cfaa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    category: "Designer PVC Bed",
    name: "Semi-Automatic Pvc Bed",
    features: ["Customizable Dimensions", "Premium Material", "Elegant Finish", "Long-lasting"],
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    category: "Laminated Door",
    name: "Corrosion Resistance Door",
    features: ["Laminated PVC", "Anti-Corrosion", "Brass Details Custom", "Modern Esthetics"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    category: "Decorative Doors",
    name: "Plastic Decorative Pvc Doors",
    features: ["Industrial Application", "Coloring Options", "Robust", "Solid Core"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Product Showcase</h3>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Our Premium Products</h2>
            <p className="text-lg text-slate-600">
              Explore our extensive catalog of PVC solutions, designed for durability, aesthetic appeal, and long-lasting performance in any environment.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-blue-600 uppercase tracking-widest text-sm hover:text-blue-700 transition group whitespace-nowrap">
            Send Inquiry Bulk Order <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
            >
              <TiltCard className="h-full" zTranslate={30}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-full flex flex-col group relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[80px] z-10 flex items-center justify-center pt-2 pr-2 opacity-90 backdrop-blur pointer-events-none">
                     <span className="text-blue-300 text-3xl font-bold">0{index+1}</span>
                  </div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <div className="absolute inset-4 bg-white shadow-lg border border-slate-200 z-10 overflow-hidden rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    </div>
                    <div className="absolute left-4 bottom-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm border border-slate-200">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-6 pt-4 flex-1 flex flex-col relative z-20">
                    <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight mb-3">{product.name}</h3>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
                          <Box size={12} className="text-blue-500" /> {feature}
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="mt-auto w-full flex items-center justify-between text-xs font-bold text-blue-600 uppercase tracking-widest group-hover:text-blue-800 transition-colors">
                      <span>Send Inquiry</span>
                      <span className="text-slate-300 group-hover:text-blue-600 transition-colors">★</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Also Supplying Various Categories</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Solid Pvc Doors', 'Bathroom Doors', 'Decorative Interior Door', 'Moulded Doors', 'Pvc Casement Door', 'Safety Doors'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm hover:border-blue-300 hover:text-blue-600 transition cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
