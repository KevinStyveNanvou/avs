import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import BubbleBackground from './components/BubbleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Image from './components/image';
import Leading from './components/Leading'; // <-- import du composant

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule le temps de chargement (à remplacer par vos vraies initialisations)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 secondes d'affichage du loader

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Leading />;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-gray-100 dark:bg-[#0E0A1A] text-gray-900 dark:text-white transition-colors duration-300">
          <BubbleBackground />
          <Navbar />
          <main className="relative z-10 w-full max-w-full overflow-x-hidden">
            <Hero />
            <About />
            <Image />
            <Services />
            <References />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;