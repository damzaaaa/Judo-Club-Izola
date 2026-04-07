import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Kontakt() {
  return (
    <div data-testid="kontakt-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Kontakt
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              Stopite v stik
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              Imate vprašanja? Želite izvedeti več o članstvu? Kontaktirajte nas.
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
                Kontaktni podatki
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <MapPin className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                      Naslov
                    </h3>
                    <p className="font-['Manrope'] text-base text-[#52525B]">
                      Izola, Slovenija
                    </p>
                    <p className="font-['Manrope'] text-sm text-[#52525B]/60 mt-1">
                      (Natančen naslov bo dodan)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Phone className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                      Telefon
                    </h3>
                    <p className="font-['Manrope'] text-base text-[#52525B]">
                      +386 XX XXX XXX
                    </p>
                    <p className="font-['Manrope'] text-sm text-[#52525B]/60 mt-1">
                      (Številka bo dodana)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Mail className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                      E-pošta
                    </h3>
                    <p className="font-['Manrope'] text-base text-[#52525B]">
                      info@judoklubizola.si
                    </p>
                    <p className="font-['Manrope'] text-sm text-[#52525B]/60 mt-1">
                      (E-naslov bo potrjen)
                    </p>
                  </div>
                </div>

                {/* Training Hours */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Clock className="h-6 w-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                      Urnik treningov
                    </h3>
                    <p className="font-['Manrope'] text-base text-[#52525B]">
                      (Urnik bo dodan)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-12">
                Naše lokacije
              </h2>
              
              <div className="space-y-6">
                {['Izola', 'Koper', 'Ankaran'].map((location, index) => (
                  <div
                    key={location}
                    className="group border-l-4 border-[#0A0A0A] hover:border-[#D4AF37] pl-6 py-4 transition-colors"
                  >
                    <h3 className="font-['Outfit'] text-xl font-semibold text-[#0A0A0A] mb-2">
                      {location}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      Podrobnosti bodo dodane
                    </p>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-[#F9F9F9] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">
                    Zemljevid
                  </p>
                  <p className="font-['Manrope'] text-sm text-[#52525B]">
                    Zemljevid bo dodan ko prejmemo natančen naslov.
                  </p>
                </div>
              </div>
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
              Judo šola
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              Judo šola Iztoka Babiča
            </h2>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              Naša šola deluje v treh lokacijah: Izola, Koper in Ankaran. Povezujemo tri klube z isto vizijo odličnosti in tradicijo vrhunskega juda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
