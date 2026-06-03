import { MapPin, Mail, Phone, Clock, MoveRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Footer background styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 border-b md:border-b-0 border-blue-800 pb-8 md:pb-0">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Harmeet <span className="text-blue-500">PVC</span></h3>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm">
              Leading manufacturer and supplier of supreme quality Designer PVC Doors, Windows, Frames, and Bedding in India.
            </p>
            <div className="inline-flex gap-2 items-center px-3 py-1 bg-blue-800 rounded text-[10px] font-bold uppercase tracking-widest text-blue-200 border border-blue-700">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Verified Seller on TradeIndia
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Send Inquiry', 'Seller Profile'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-white transition flex items-center gap-2 group">
                    <MoveRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Top Categories</h4>
            <ul className="space-y-3">
              {['Designer PVC Door', 'PVC Window', 'PVC Door Frames', 'PVC Bed', 'Membrane Doors', 'Pvc Laminated Door'].map((cat) => (
                <li key={cat}>
                  <a href="#products" className="text-xs font-bold uppercase tracking-widest text-blue-300 hover:text-white transition">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TiltCard zTranslate={15}>
              <div className="bg-blue-800/80 backdrop-blur border border-blue-700 rounded-2xl p-6 shadow-xl">
                <h4 className="font-bold mb-4 text-white uppercase tracking-widest text-xs">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-xs font-bold tracking-widest uppercase text-blue-200">
                    <MapPin size={20} className="text-blue-400 shrink-0 mt-1" />
                    <span>Bathinda, Punjab, India (Established 2004)</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-blue-200">
                    <Phone size={20} className="text-blue-400 shrink-0" />
                    <a href="#" className="hover:text-white transition">View Number</a>
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-blue-200">
                    <Clock size={20} className="text-blue-400 shrink-0" />
                    <span>Mon - Sun: Open</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white font-bold text-sm tracking-widest uppercase py-3 rounded hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 active:scale-95 duration-200">
                  Send Inquiry
                </button>
              </div>
            </TiltCard>
          </div>

        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-300 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Harmeet PVC Doors. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
