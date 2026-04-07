import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

const navLinks = [
  { name: 'Domov', path: '/' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Galerija', path: '/galerija' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3"
            data-testid="logo-link"
          >
            <img
              src={LOGO_URL}
              alt="Judo Klub Izola"
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-['Outfit'] font-bold text-lg text-[#0A0A0A] tracking-tight">
                Judo Klub Izola
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`font-['Manrope'] text-sm font-medium transition-colors relative gold-underline ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-[#0A0A0A] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0A0A0A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0A0A0A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            data-testid="mobile-menu"
            className="md:hidden bg-white border-t border-[#E5E7EB] py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  className={`font-['Manrope'] text-base font-medium px-4 py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-[#0A0A0A] hover:text-[#D4AF37] hover:bg-[#F9F9F9]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
