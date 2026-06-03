import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 selection:bg-blue-300 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
