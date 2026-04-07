import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Image URLs
const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lm6c8pu4_Demonstracija%20vtopa%20z%20izravnote%C5%BEenjem.webp";
const TRAINING_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp";
const ALL_LOGOS = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/3462nyw9_JUDO.jpg";

export default function Domov() {
  return (
    <div data-testid="domov-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F9] to-white" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6 animate-fade-in-up">
                Dobrodošli v našem klubu
              </span>
              <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tighter leading-none mb-6 animate-fade-in-up animation-delay-100">
                Judo Klub<br />
                <span className="text-[#D4AF37]">Izola</span>
              </h1>
              <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed mb-8 max-w-lg animate-fade-in-up animation-delay-200">
                Tradicija, disciplina in odličnost. Klub, ki gradi prihodnost mladih judoistov že več kot desetletje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
                <Link
                  to="/kontakt"
                  data-testid="hero-cta-kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#D4AF37] transition-colors"
                >
                  Pridruži se nam
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/o-nas"
                  data-testid="hero-cta-onas"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#F9F9F9] transition-colors"
                >
                  Več o klubu
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200">
              <div className="relative overflow-hidden">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37] opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37] opacity-50" />
                <img
                  src={HERO_IMAGE}
                  alt="Demonstracija judo tehnike"
                  className="w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - Andrea Leški */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="overflow-hidden group">
              <img
                src={TRAINING_IMAGE}
                alt="Olimpijska prvakinja Andrea Leški v Judo klubu Izola"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
                Novice
              </span>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-6">
                Olimpijska prvakinja Andrea Leški v Judo klubu Izola
              </h2>
              <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mb-6">
                V Judo klubu Izola smo doživeli izjemen športni trenutek: obiskala nas je olimpijska prvakinja Andrea Leški in vodila poseben trening za naše člane. Trening je bil energičen, motivacijski in poln vrhunskih nasvetov iz prve roke.
              </p>
              <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mb-6">
                Še posebej so ga z navdušenjem doživeli mladostniki, ki so dobili priložnost trenirati z najboljšo in izkusiti, kako razmišlja ter deluje olimpijska zmagovalka.
              </p>
              <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mb-8">
                Po treningu smo se z Andreo še skupinsko in individualno fotografirali, klub pa je doživel še prav posebno čast: Andrea je prinesla tudi olimpijsko medaljo, ki so jo naši člani lahko prijeli, si jo ogledali od blizu in se z njo fotografirali.
              </p>
              <Link
                to="/galerija"
                data-testid="news-cta-galerija"
                className="inline-flex items-center gap-2 text-[#0A0A0A] font-['Manrope'] font-medium text-sm hover:text-[#D4AF37] transition-colors gold-underline"
              >
                Oglej si galerijo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Success Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Razvojni uspeh
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Uspešen javni razpis
            </h2>
            <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed mb-6">
              Ob pomembnem obisku klub praznuje tudi velik razvojni uspeh. Na javnem razpisu smo bili uspešni in podpisali novo pogodbo, s katero smo pridobili projekt, namenjen mladim, njihovim staršem ter širši javnosti.
            </p>
            <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed mb-8">
              Gre za pomemben korak naprej, ki bo okrepil naše delo v lokalnem okolju in ustvaril nove priložnosti za športno udejstvovanje, povezovanje in zdrav življenjski slog.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-[#E5E7EB]">
              <div className="text-center">
                <p className="font-['Outfit'] text-4xl font-bold text-[#D4AF37]">10+</p>
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-1">Let tradicije</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#E5E7EB]" />
              <div className="text-center">
                <p className="font-['Outfit'] text-4xl font-bold text-[#D4AF37]">100+</p>
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-1">Aktivnih članov</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#E5E7EB]" />
              <div className="text-center">
                <p className="font-['Outfit'] text-4xl font-bold text-[#D4AF37]">3</p>
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-1">Lokacije</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated Clubs Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Naši klubi
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] tracking-tight leading-tight">
              Judo šola Iztoka Babiča
            </h2>
            <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mt-4 max-w-2xl mx-auto">
              Naša šola zajema delo v Izoli, Kopru in Ankaranu – povezujemo tri klube z isto vizijo odličnosti.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-[#F9F9F9] p-8 lg:p-12 max-w-4xl">
              <img
                src={ALL_LOGOS}
                alt="Logotipi vseh klubov - Judo Klub Izola, Judo Klub Ankaran, Judo Klub 15. Maj Marezige, Judo šola Iztoka Babiča"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
            Postani del naše <span className="text-[#D4AF37]">zgodbe</span>
          </h2>
          <p className="font-['Manrope'] text-base lg:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Pridruži se našemu klubu in začni svojo pot v svetu juda. Sprejemamo člane vseh starosti in izkušenj.
          </p>
          <Link
            to="/kontakt"
            data-testid="cta-kontakt"
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
