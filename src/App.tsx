import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    // Autoplay muted on page load (allowed by browsers)
    audioRef.current.muted = true;
    audioRef.current.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction...");
    });

    // First user interaction anywhere on the page
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // unmute
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Playback failed:", err));
      }
      // Remove listener after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
