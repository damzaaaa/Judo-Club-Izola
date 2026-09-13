import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang, LANGS } from '../i18n/LanguageContext';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

function LanguageSwitcher({ className = '', idSuffix = '' }) {
  const { lang, changeLang } = useLang();
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid={`language-switcher${idSuffix}`}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => changeLang(l.code)}
          data-testid={`lang-${l.code}${idSuffix}`}
          title={l.label}
          aria-label={l.label}
          className={`relative rounded-[5px] overflow-hidden w-9 h-[26px] border transition-all duration-300 shadow-sm ${
            lang === l.code
              ? 'ring-2 ring-[#D4AF37] border-[#D4AF37] scale-110 shadow-md'
              : 'border-black/10 opacity-50 hover:opacity-100 hover:scale-105 grayscale-[40%] hover:grayscale-0'
          }`}
        >
          <img src={l.flag} alt={l.label} className="w-full h-full object-cover" />
        </button>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
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
          <div className="hidden lg:flex items-center gap-6">
            {t.nav.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                data-testid={`nav-link-${link.path === '/' ? 'domov' : link.path.replace('/', '')}`}
                className={`font-['Manrope'] text-sm font-bold transition-colors relative gold-underline whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-[#0A0A0A] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-[#E5E7EB]" />
            <LanguageSwitcher />
          </div>

          {/* Mobile: switcher + menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <LanguageSwitcher idSuffix="-mobile" />
            <button
              data-testid="mobile-menu-button"
              className="p-2"
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
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            data-testid="mobile-menu"
            className="lg:hidden bg-white border-t border-[#E5E7EB] py-4"
          >
            <div className="flex flex-col gap-4">
              {t.nav.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  data-testid={`mobile-nav-link-${link.path === '/' ? 'domov' : link.path.replace('/', '')}`}
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
