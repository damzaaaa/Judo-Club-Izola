import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";
const JUDO_SOLA_LOGO = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/tstr51lv_image.png";

const navLinks = [
  { name: 'Domov', path: '/' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Galerija', path: '/galerija' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={LOGO_URL}
                alt="Judo Klub Izola"
                className="h-14 w-14 object-contain rounded-full bg-white p-1"
              />
              <img
                src={JUDO_SOLA_LOGO}
                alt="Judo šola Iztoka Babiča"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h3 className="font-['Outfit'] font-bold text-xl tracking-tight">
                  Judo Klub Izola
                </h3>
                <p className="text-[#D4AF37] text-sm font-['Manrope']">Slovenija</p>
              </div>
            </div>
            <p className="font-['Manrope'] text-gray-400 text-sm leading-relaxed max-w-md">
              Tradicija, disciplina in odličnost v judu. Judo Klub Izola je dom za vse generacije judoistov.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-lg mb-6 text-[#D4AF37]">
              Navigacija
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  className="font-['Manrope'] text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-lg mb-6 text-[#D4AF37]">
              Kontakt
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="font-['Manrope'] text-sm text-gray-400">
                  Izola, Slovenija
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <span className="font-['Manrope'] text-sm text-gray-400">
                  +386 XX XXX XXX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                <span className="font-['Manrope'] text-sm text-gray-400">
                  info@judoklubizola.si
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Manrope'] text-sm text-gray-500">
              © {currentYear} Judo Klub Izola. Vse pravice pridržane.
            </p>
            <p className="font-['Manrope'] text-xs text-gray-600">
              Judo šola Iztoka Babiča
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
