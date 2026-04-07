import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Image URLs
const GROUP_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

export default function ONas() {
  return (
    <div data-testid="onas-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              O nas
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tighter leading-none mb-6">
              Naša zgodba
            </h1>
            <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed">
              Judo Klub Izola je dom za vse generacije judoistov, ki gradimo skupnost na temeljih spoštovanja, discipline in športne odličnosti.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-8">
                Zgodovina kluba
              </h2>
              <div className="space-y-6 font-['Manrope'] text-base text-[#52525B] leading-relaxed">
                <p>
                  {/* Placeholder for club history - will be filled in later */}
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4AF37] opacity-20" />
                <img
                  src={LOGO_URL}
                  alt="Judo Klub Izola logo"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain relative z-10 bg-white p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Naše vrednote
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight">
              Temelji juda
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spoštovanje',
                description: 'Spoštovanje do nasprotnika, trenerja in sebe je temelj vsakega treninga.',
              },
              {
                title: 'Disciplina',
                description: 'Reden trening in vztrajnost gradita karakter in tehnične sposobnosti.',
              },
              {
                title: 'Prijateljstvo',
                description: 'V klubu gradimo trajne vezi in skupnost, ki sega izven blazin.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-[#E5E7EB] hover:border-[#D4AF37] transition-colors group"
              >
                <div className="w-12 h-1 bg-[#D4AF37] mb-6 group-hover:w-16 transition-all" />
                <h3 className="font-['Outfit'] text-xl font-semibold text-[#0A0A0A] mb-4">
                  {value.title}
                </h3>
                <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Naši člani
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight">
              Skupnost judoistov
            </h2>
          </div>

          <div className="overflow-hidden">
            <img
              src={GROUP_IMAGE}
              alt="Skupina mlajših judoistov"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed text-center mt-8 max-w-2xl mx-auto">
            Naši mladi judoisti so ponos kluba. Z vsakim treningom rastejo, se učijo in postajajo boljši – tako v judu kot v življenju.
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Vodstvo
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight">
              Naši trenerji
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed">
              {/* Placeholder for trainer information - will be filled in later */}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
            Začni svojo <span className="text-[#D4AF37]">judo pot</span>
          </h2>
          <p className="font-['Manrope'] text-base lg:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Kontaktiraj nas za več informacij o članstvu in urnikih treningov.
          </p>
          <Link
            to="/kontakt"
            data-testid="onas-cta-kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-10 py-4 font-['Manrope'] font-semibold text-sm hover:bg-[#C5A059] transition-colors"
          >
            Kontaktiraj nas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
