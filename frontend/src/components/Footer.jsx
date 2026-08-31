import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";
const JUDO_SOLA_LOGO = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/tstr51lv_image.png";

const FACEBOOK_KLUB = "https://www.facebook.com/profile.php?id=61588576934450";
const FACEBOOK_IZTOK = "https://www.facebook.com/iztok.babic";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

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
                <p className="text-[#D4AF37] text-sm font-['Manrope']">{t.footer.country}</p>
              </div>
            </div>
            <p className="font-['Manrope'] text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              {t.footer.desc}
            </p>
            {/* Facebook Links */}
            <div className="flex flex-col gap-3">
              <a
                href={FACEBOOK_KLUB}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="facebook-klub"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors font-['Manrope'] text-sm"
              >
                <Facebook className="h-4 w-4" />
                Judo klub Izola
              </a>
              <a
                href={FACEBOOK_IZTOK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="facebook-iztok"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors font-['Manrope'] text-sm"
              >
                <Facebook className="h-4 w-4" />
                Iztok Babič
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-lg mb-6 text-[#D4AF37]">
              {t.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-3">
              {t.nav.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`footer-link-${link.path === '/' ? 'domov' : link.path.replace('/', '')}`}
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
              {t.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="font-['Manrope'] text-sm text-gray-400">
                  {t.footer.address}
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
              © {currentYear} Judo Klub Izola. {t.footer.rights}
            </p>
            <p className="font-['Manrope'] text-xs text-gray-600">
              {t.footer.school}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
