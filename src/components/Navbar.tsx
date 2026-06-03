import { motion } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-white font-bold text-2xl italic">H</span>
            </div>
            <span className="text-xl font-black uppercase tracking-tighter text-blue-900">Harmeet <span className="text-blue-600">PVC</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-bold uppercase text-xs tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <PhoneCall size={18} />
              Send Inquiry
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
