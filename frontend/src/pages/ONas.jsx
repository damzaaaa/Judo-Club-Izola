import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Image URLs
const GROUP_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

export default function ONas() {
  return (
    <div data-testid="onas-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              O nas
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              Naša zgodba
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
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
              <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
                Zgodovina
              </span>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
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
                <div className="absolute -inset-8 bg-[#D4AF37]/5 rounded-full blur-2xl" />
                <img
                  src={LOGO_URL}
                  alt="Judo Klub Izola logo"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Naši člani
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              Skupnost judoistov
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37]" />
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37]" />
            <img
              src={GROUP_IMAGE}
              alt="Skupina mlajših judoistov"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed text-center mt-12 max-w-3xl mx-auto">
            Naši mladi judoisti so ponos kluba. Z vsakim treningom rastejo, se učijo in postajajo boljši – tako v judu kot v življenju.
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Vodstvo
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
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
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
            Začni svojo <span className="text-[#D4AF37]">judo pot</span>
          </h2>
          <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Kontaktiraj nas za več informacij o članstvu in urnikih treningov.
          </p>
          <Link
            to="/kontakt"
            data-testid="onas-cta-kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-12 py-5 font-['Manrope'] font-semibold text-sm hover:bg-white transition-all duration-300 tracking-wide"
          >
            Kontaktiraj nas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
