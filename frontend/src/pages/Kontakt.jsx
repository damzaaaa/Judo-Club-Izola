import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Kontakt() {
  return (
    <div data-testid="kontakt-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Kontakt
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tighter leading-none mb-6">
              Stopite v stik
            </h1>
            <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed">
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
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-semibold text-[#0A0A0A] tracking-tight mb-8">
                Kontaktni podatki
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-medium text-[#0A0A0A] mb-1">
                      Naslov
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      Izola, Slovenija
                    </p>
                    <p className="font-['Manrope'] text-xs text-[#52525B]/60 mt-1">
                      (Natančen naslov bo dodan)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-medium text-[#0A0A0A] mb-1">
                      Telefon
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      +386 XX XXX XXX
                    </p>
                    <p className="font-['Manrope'] text-xs text-[#52525B]/60 mt-1">
                      (Številka bo dodana)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-medium text-[#0A0A0A] mb-1">
                      E-pošta
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      info@judoklubizola.si
                    </p>
                    <p className="font-['Manrope'] text-xs text-[#52525B]/60 mt-1">
                      (E-naslov bo potrjen)
                    </p>
                  </div>
                </div>

                {/* Training Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-medium text-[#0A0A0A] mb-1">
                      Urnik treningov
                    </h3>
                    <p className="font-['Manrope'] text-sm text-[#52525B]">
                      (Urnik bo dodan)
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="mt-12 pt-12 border-t border-[#E5E7EB]">
                <h3 className="font-['Outfit'] text-xl font-semibold text-[#0A0A0A] mb-6">
                  Naše lokacije
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {['Izola', 'Koper', 'Ankaran'].map((location) => (
                    <div
                      key={location}
                      className="bg-[#F9F9F9] p-4 border border-[#E5E7EB]"
                    >
                      <p className="font-['Outfit'] font-medium text-[#0A0A0A]">
                        {location}
                      </p>
                      <p className="font-['Manrope'] text-xs text-[#52525B]/60 mt-1">
                        Podrobnosti bodo dodane
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-semibold text-[#0A0A0A] tracking-tight mb-8">
                Lokacija
              </h2>
              <div className="aspect-square bg-[#F9F9F9] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                  <p className="font-['Outfit'] text-lg font-medium text-[#0A0A0A] mb-2">
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
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Judo šola
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-6">
              Judo šola Iztoka Babiča
            </h2>
            <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed">
              Naša šola deluje v treh lokacijah: Izola, Koper in Ankaran. Povezujemo tri klube z isto vizijo odličnosti in tradicijo vrhunskega juda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
