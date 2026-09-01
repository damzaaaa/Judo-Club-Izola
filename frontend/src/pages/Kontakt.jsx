import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function Kontakt() {
  const { t } = useLang();
  const k = t.kontakt;

  const infoItems = [
    { icon: MapPin, ...k.address },
    { icon: Phone, ...k.phone },
    { icon: Mail, ...k.email },
    { icon: Clock, ...k.hours },
  ];

  return (
    <div data-testid="kontakt-page" className="min-h-screen pt-20">
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

              {/* Map */}
              <div className="mt-12 aspect-video border border-[#E5E7EB] overflow-hidden">
                <iframe
                  title={k.map.title}
                  src="https://www.google.com/maps?q=Osnovna+%C5%A1ola+Dante+Alighieri+Izola&output=embed"
                  className="w-full h-full"
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
          </div>
        </div>
      </section>

      {/* Enrolment & Schedule Section */}
      <section data-testid="kontakt-enroll-section" className="py-24 lg:py-32 bg-[#F9F9F9]">
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

              <div className="space-y-4 mb-8">
                {k.enroll.rows.map((row) => (
                  <div
                    key={row.group}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white border border-[#E5E7EB] border-l-4 border-l-[#D4AF37] px-6 py-4"
                  >
                    <div>
                      <p className="font-['Outfit'] text-base font-semibold text-[#0A0A0A]">{row.group}</p>
                      <p className="font-['Manrope'] text-sm text-[#52525B]">{row.days}</p>
                    </div>
                    <p className="font-['Outfit'] text-lg font-bold text-[#D4AF37] whitespace-nowrap">{row.time}</p>
                  </div>
                ))}
              </div>

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
