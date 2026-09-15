import { Mail, MapPin, Phone, Star } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const GOOGLE_URL = 'https://www.google.com/maps/search/?api=1&query=Judo+klub+Izola+O%C5%A0+Dante+Alighieri+Izola';

export default function Kontakt() {
  const { t } = useLang();
  const k = t.kontakt;
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#vpis') {
      setTimeout(() => {
        document.getElementById('vpis')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const infoItems = [
    { icon: MapPin, ...k.address },
    { icon: Phone, ...k.phone },
    { icon: Mail, ...k.email },
  ];

  return (
    <div data-testid="kontakt-page" className="min-h-screen pt-20">
      <SEO title={t.seo.kontakt.title} description={t.seo.kontakt.description} keywords={t.seo.kontakt.keywords} path="/kontakt" />
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {k.hero.label}
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              {k.hero.title}
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              {k.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-12">
                {k.infoTitle}
              </h2>

              <div className="space-y-10">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                      <item.icon className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-['Manrope'] text-base text-[#52525B]">
                        {item.value}
                      </p>
                      {item.note && (
                        <p className="font-['Manrope'] text-sm text-[#52525B]/60 mt-1">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-12">
                {k.locationsTitle}
              </h2>
              
              <div className="space-y-6">
                {k.locations.map((location) => (
                  <div
                    key={location.name}
                    className="group border-l-4 border-[#0A0A0A] hover:border-[#D4AF37] pl-6 py-4 transition-colors"
                  >
                    <h3 className="font-['Outfit'] text-xl font-semibold text-[#0A0A0A] mb-2">
                      {location.name}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      {location.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map + Find us on Google side by side */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col">
              <div className="flex-grow min-h-[340px] border border-[#E5E7EB] overflow-hidden">
                <iframe
                  title={k.map.title}
                  src="https://www.google.com/maps?q=Osnovna+%C5%A1ola+Dante+Alighieri+Izola&output=embed"
                  className="w-full h-full min-h-[340px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="kontakt-map"
                />
              </div>
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-3 italic text-center">
                {k.map.text}
              </p>
            </div>

            {/* Find us on Google */}
            <div data-testid="google-block" className="bg-[#0A0A0A] p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-2">
                  {k.google.label}
                </span>
                <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-3">
                  {k.google.title}
                </h3>
                <p className="font-['Manrope'] text-sm text-gray-400 leading-relaxed mb-6">
                  {k.google.text}
                </p>
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="google-cta"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 font-['Manrope'] font-semibold text-sm hover:bg-white transition-all duration-300 tracking-wide self-start"
                >
                  {k.google.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section id="urnik" data-testid="kontakt-schedule-section" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              {k.schedule.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-4">
              {k.schedule.title}
            </h2>
            <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed max-w-2xl mx-auto">
              {k.schedule.text}
            </p>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-6" />
          </div>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/u6mawded_URNIK%20TRENINGOV%20VSEH%20SKUPIN.jpg"
              alt={k.schedule.imgAlt}
              data-testid="schedule-image"
              className="w-full h-auto border border-[#E5E7EB] shadow-xl rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Enrolment & Schedule Section */}
      <section id="vpis" data-testid="kontakt-enroll-section" className="py-24 lg:py-32 bg-[#F9F9F9] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Poster */}
            <div className="max-w-md mx-auto lg:mx-0 w-full">
              <img
                src="https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/qmh70ujo_IZOLA%20Vpis%20za%20vse%20skupine.png"
                alt={k.enroll.posterAlt}
                data-testid="enroll-poster"
                className="w-full h-auto border border-[#E5E7EB] shadow-xl"
              />
            </div>

            {/* Schedule */}
            <div>
              <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
                {k.enroll.label}
              </span>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-6">
                {k.enroll.title}
              </h2>
              <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mb-10">
                {k.enroll.intro}
              </p>

              <p className="font-['Manrope'] text-sm text-[#52525B] italic">
                {k.enroll.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Judo School Info */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {k.school.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              {k.school.title}
            </h2>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              {k.school.text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
