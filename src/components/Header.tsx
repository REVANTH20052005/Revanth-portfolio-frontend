import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-csk-yellow/95 backdrop-blur-md shadow-lg' : 'bg-csk-yellow/95 backdrop-blur-md shadow-lg'
    } p-2`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300`} style={{ color: "#0065b3" }}>
            Revanth V
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-9 text-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-black font-bold hover:text-[#0065b3] transition-colors duration-300`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-navy-900 hover:text-navy-700' : 'text-white hover:text-csk-yellow'} transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${isScrolled ? 'bg-csk-yellow/95' : 'bg-navy-900/95'} rounded-lg`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 text-white font-bold hover:text-[#0065b3] transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;