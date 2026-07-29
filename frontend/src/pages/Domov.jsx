import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Image URLs
const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp";
const DEMO_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lm6c8pu4_Demonstracija%20vtopa%20z%20izravnote%C5%BEenjem.webp";
const GROUP_IMAGE = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp";
const MAIN_LOGO = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";
const JUDO_SOLA_LOGO = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/tstr51lv_image.png";

// Bežigrad Cup images
const BEZIGRAD_IMG_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zuprkk1x_image.png";
const BEZIGRAD_IMG_2 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zrkl7xcq_image.png";
const BEZIGRAD_IMG_3 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/ojg8ckaj_image.png";

export default function Domov() {
  const scrollToNews = () => {
    document.getElementById('novice')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-testid="domov-page" className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Clickable */}
        <div 
          className="absolute inset-0 cursor-pointer group"
          onClick={scrollToNews}
          data-testid="hero-image-clickable"
        >
          <img
            src={HERO_IMAGE}
            alt="Olimpijska prvakinja Andrea Leški v Judo klubu Izola"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none" />
        </div>

        {/* Project Info Box - Top Right Corner */}
        <div className="absolute top-24 right-6 z-20 max-w-sm pointer-events-auto hidden lg:block">
          <div className="bg-white/95 backdrop-blur-md p-6 shadow-2xl border-l-4 border-[#D4AF37]">
            <h3 className="font-['Outfit'] text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
              Judo klub Izola izvaja sledeči projekt:
            </h3>
            <h4 className="font-['Outfit'] text-lg font-bold text-[#0A0A0A] mb-3">
              Projekt Fit in vključeni
            </h4>
            <p className="font-['Manrope'] text-xs text-[#52525B] leading-relaxed mb-3">
              Sofinanciran v okviru Javnega razpisa za razvoj in profesionalizacijo NVO in prostovoljstva 2025. Financira se iz Sklada za razvoj nevladnih organizacij.
            </p>
            <div className="font-['Manrope'] text-xs text-[#52525B] mb-3">
              <p className="font-semibold text-[#0A0A0A] mb-1">V okviru projekta izvajamo:</p>
              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                <li>redno vadbo otrok in mladih</li>
                <li>promocijo juda na osnovnih šolah</li>
                <li>vključevanje otrok priseljencev</li>
                <li>individualno mentorstvo</li>
                <li>strokovni razvoj trenerjev</li>
                <li>promocijo zdravega življenjskega sloga</li>
              </ul>
            </div>
            <p className="font-['Manrope'] text-[10px] text-[#52525B] leading-relaxed italic">
              S projektom povečujemo dostopnost športa in prispevamo k razvoju kakovostnih športnih programov.
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none">
          <div className="animate-fade-in-up">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6 border border-[#D4AF37]/30 px-4 py-2 backdrop-blur-md bg-black/40">
              Dobrodošli
            </span>
          </div>
          <h1 className="font-['Outfit'] text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-6 animate-fade-in-up animation-delay-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Judo Klub
            <span className="block text-[#D4AF37] mt-2 drop-shadow-[0_4px_20px_rgba(212,175,55,0.3)]">Izola</span>
          </h1>
          <p className="font-['Manrope'] text-lg lg:text-xl text-white leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Tradicija, ustvarjalnost in odličnost v judu
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300 pointer-events-auto">
            <Link
              to="/kontakt"
              data-testid="hero-cta-kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-10 py-4 font-['Manrope'] font-semibold text-sm hover:bg-white transition-all duration-300 tracking-wide"
            >
              Pridruži se nam
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={scrollToNews}
              data-testid="hero-scroll-news"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 text-white px-10 py-4 font-['Manrope'] font-medium text-sm hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 tracking-wide backdrop-blur-sm"
            >
              Preberi novice
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* News Section - Andrea Leški */}
      <section id="novice" className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Novice
            </span>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
          </div>

          {/* Article */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight text-center">
                Olimpijska prvakinja Andrea Leški v Judo klubu Izola – Trening, ki ga ne pozabiš!
              </h2>
            </header>

            {/* Featured Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="overflow-hidden group">
                <img
                  src={DEMO_IMAGE}
                  alt="Demonstracija vtopa z izravnoteženjem"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden group">
                <img
                  src={GROUP_IMAGE}
                  alt="Skupina mlajših judoistov"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6 first-letter:text-5xl first-letter:font-['Outfit'] first-letter:font-bold first-letter:text-[#D4AF37] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                V Judo klubu Izola smo doživeli izjemen športni trenutek: obiskala nas je olimpijska prvakinja Andrea Leški in vodila poseben trening za naše člane. Trening je bil energičen, motivacijski in poln vrhunskih nasvetov iz prve roke – še posebej so ga z navdušenjem doživeli mladostniki, ki so dobili priložnost trenirati z najboljšo in izkusiti, kako razmišlja ter deluje olimpijska zmagovalka.
              </p>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Po treningu smo se z Andreo še skupinsko in individualno fotografirali, klub pa je doživel še prav posebno čast: Andrea je prinesla tudi olimpijsko medaljo, ki so jo naši člani lahko prijeli, si jo ogledali od blizu in se z njo fotografirali. To je bil trenutek ponosa, navdiha in dodatne motivacije za vse generacije.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-6 my-10 italic">
                <p className="font-['Manrope'] text-xl text-[#0A0A0A] leading-relaxed">
                  "To je bil trenutek ponosa, navdiha in dodatne motivacije za vse generacije."
                </p>
              </blockquote>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Ob tem pomembnem obisku pa klub praznuje tudi velik razvojni uspeh. Na javnem razpisu smo bili uspešni in podpisali novo pogodbo, s katero smo pridobili projekt, namenjen mladim, njihovim staršem ter širši javnosti. Gre za pomemben korak naprej, ki bo okrepil naše delo v lokalnem okolju in ustvaril nove priložnosti za športno udejstvovanje, povezovanje in zdrav življenjski slog.
              </p>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Zvečer smo izvedli še delovni sestanek projektne ekipe, kjer smo začrtali nadaljnje korake in simbolično nazdravili uspešni prihodnosti kluba ter trenerju, ki bo projekt vodil. Vsi člani kluba mu bomo pri izvedbi stali ob strani, pomagali in poskrbeli, da bo projekt dosegel svoj namen.
              </p>

              <p className="font-['Manrope'] text-xl text-[#0A0A0A] leading-relaxed font-medium mt-10 text-center">
                Hvala, Andrea, za obisk, znanje in navdih – takšni dnevi gradijo prihodnost našega kluba!
              </p>
            </div>

            {/* Gallery CTA */}
            <div className="mt-16 text-center">
              <Link
                to="/galerija"
                data-testid="news-cta-galerija"
                className="inline-flex items-center gap-3 text-[#0A0A0A] font-['Manrope'] font-medium text-sm hover:text-[#D4AF37] transition-colors group"
              >
                <span className="border-b-2 border-[#D4AF37] pb-1">Oglej si vse fotografije</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* News Section - Pokal Bežigrad */}
      <section className="py-32 lg:py-40 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Novice
            </span>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
          </div>

          {/* Article */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight text-center">
                Na Pokalu Bežigrad smo bili srebrni
              </h2>
            </header>

            {/* Featured Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="overflow-hidden group">
                <img
                  src={BEZIGRAD_IMG_1}
                  alt="Diana in Jora na podelitvi medalj"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden group">
                <img
                  src={BEZIGRAD_IMG_2}
                  alt="Podelitev medalj na Pokalu Bežigrad"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6 first-letter:text-5xl first-letter:font-['Outfit'] first-letter:font-bold first-letter:text-[#D4AF37] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Obe naši državni prvakinji v kategoriji mlajših deklic sta osvojili odlično drugo mesto: Jora Kuci in Diana Černec.
              </p>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Velik uspeh naše judo športne šole je pri mlajših kadetih dopolnil tudi Luka Angelini, ki je prav tako osvojil drugo mesto. Trenutno je na točkovnem mestu vseh tekmovanj pri ml. kadetih, si Luka skupaj z Galom Purnatom deli drugo mesto. Tudi Gal je na isti tekmi dosegel drugo mesto, zato oba ostajata v samem vrhu in si še naprej delita vodilni položaj.
              </p>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Ostali zasledovalci niso bili tako uspešni, zato sta se Luka in Gal točkovno od njih še nekoliko oddaljila. To pomeni, da imata ob koncu rang lestvice lepo možnost, da dosežeta najmanj tisti cilj, ki smo si ga zadali — uvrstitev vsaj na drugo mesto.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-6 my-10 italic">
                <p className="font-['Manrope'] text-xl text-[#0A0A0A] leading-relaxed">
                  "To je dober veter, morda za zdaj še rahla sapica, ki pa kaže, da se naša judo športna šola ponovno dviga in da znova dosegamo rezultate, kakršne smo nekoč že ustvarjali."
                </p>
              </blockquote>

              <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-6">
                Vsem tekmovalcem, ki so dosegli lepe uvrstitve, iskreno čestitamo za njihov uspeh.
              </p>
            </div>

            {/* Third Image - Jora in battle */}
            <div className="mt-12">
              <div className="overflow-hidden group">
                <img
                  src={BEZIGRAD_IMG_3}
                  alt="Jora v borbi z nasprotnico"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Na slikah: Diana in Jora na podelitvi medalj - medalje je podeljevala OI šampionka Andreja Leški. Tretja slika: Jora v borbi z nasprotnico.
              </p>
            </div>

            {/* Gallery CTA */}
            <div className="mt-16 text-center">
              <Link
                to="/galerija"
                className="inline-flex items-center gap-3 text-[#0A0A0A] font-['Manrope'] font-medium text-sm hover:text-[#D4AF37] transition-colors group"
              >
                <span className="border-b-2 border-[#D4AF37] pb-1">Oglej si vse fotografije</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 lg:py-40 bg-[#0A0A0A] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logos */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-2xl rounded-full" />
                  <img
                    src={MAIN_LOGO}
                    alt="Judo Klub Izola logo"
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain relative z-10"
                  />
                </div>
                <div className="relative">
                  <img
                    src={JUDO_SOLA_LOGO}
                    alt="Judo šola Iztoka Babiča logo"
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain relative z-10"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
                O klubu
              </span>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                Judo šola<br />
                <span className="text-[#D4AF37]">Iztoka Babiča</span>
              </h2>
              <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed mb-8">
                Naša šola zajema delo v Izoli, Kopru in Ankaranu – povezujemo tri klube z isto vizijo odličnosti. Tradicija, disciplina in prijateljstvo so temelji našega dela.
              </p>
              <Link
                to="/o-nas"
                data-testid="about-cta"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
              >
                Več o nas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-white relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tighter mb-6">
            Postani del naše zgodbe
          </h2>
          <p className="font-['Manrope'] text-lg text-[#52525B] leading-relaxed mb-10 max-w-2xl mx-auto">
            Pridruži se našemu klubu in začni svojo pot v svetu juda. Sprejemamo člane vseh starosti in izkušenj.
          </p>
          <Link
            to="/kontakt"
            data-testid="cta-kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white px-12 py-5 font-['Manrope'] font-semibold text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 tracking-wide"
          >
            Kontaktiraj nas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
