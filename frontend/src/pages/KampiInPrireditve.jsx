import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Megaphone } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const IMG_JUDO_CAMP = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/y0yr019t_image.png";
const IMG_OLDER_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/o947sh5n_image.png";
const IMG_ALL_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/po5r0q2u_Andreja%20Le%C5%A1ki%20in%20Iztok%20Babi%C4%8D%20v%20judo%20kampu%20Izola.jpg";
const IMG_LESKI_SKUPINSKA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/r1tewi1y_Slika%20%C5%A1e%20s%20Andrejo%20le%C5%A1ki%20in%20predsednikom%20kluba.webp";
const IMG_MOJSTRSKI_IZPIT = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/o5lpkeom_Polaganje%20mojstrskega%20pasu%20pred%20komisijo.webp";
const IMG_NINA_DIPLOMA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/9gzrrkwa_Trener%20Ja%C5%A1a%20in%20Nina%20z%20diplomo%201.%20dan.webp";

const Prose = ({ children }) => (
  <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
    {children}
  </div>
);

const GoldQuote = ({ children, className = '' }) => (
  <div className={`border-l-4 border-[#D4AF37] pl-6 py-2 ${className}`}>
    <p className="font-['Manrope'] text-[#0A0A0A] font-semibold leading-relaxed">{children}</p>
  </div>
);

const SubTitle = ({ children }) => (
  <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">{children}</h3>
);

export default function KampiInPrireditve() {
  const { t } = useLang();
  const c = t.onas.camps;
  const tm = t.onas.tatami;
  const k = t.kampi;

  return (
    <div data-testid="kampi-page" className="min-h-screen pt-20">
      <SEO title={t.seo.kampi.title} description={t.seo.kampi.description} keywords={t.seo.kampi.keywords} path="/kampi-in-prireditve" />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
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

      {/* Event announcement */}
      <section data-testid="event-announcement" className="py-16 lg:py-20 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative bg-[#0A0A0A] overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-4 py-2 mb-8">
                <Megaphone className="h-4 w-4 text-[#D4AF37]" />
                <span className="uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope']">
                  {k.event.badge}
                </span>
              </div>
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 max-w-3xl">
                {k.event.title}
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-6 w-6 text-[#D4AF37]" />
                  <span className="font-['Manrope'] text-white font-semibold">{k.event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#D4AF37]" />
                  <span className="font-['Manrope'] text-white font-semibold">{k.event.place}</span>
                </div>
              </div>
              <p className="font-['Manrope'] text-base text-gray-400 leading-relaxed max-w-3xl mb-8">
                {k.event.text}
              </p>
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-6 py-3 font-['Manrope'] font-semibold text-sm tracking-wide border border-[#D4AF37]/30">
                {k.event.soon}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Judo camps intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {c.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {c.title}
            </h2>
            <Prose>{c.intro.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-12">
            <img src={IMG_JUDO_CAMP} alt={c.campCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{c.campCaption}</p>
          </div>

          <div className="mb-12"><Prose><p>{c.p1}</p></Prose></div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div><img src={IMG_OLDER_JUDOISTS} alt={c.livadeCaption} className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]" /></div>
            <div><img src={IMG_ALL_JUDOISTS} alt={c.livadeCaption} className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]" /></div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center">{c.livadeCaption}</p>
        </div>
      </section>

      {/* Poletje na tatamiju */}
      <section data-testid="poletje-na-tatamiju-section" className="py-24 lg:py-32 bg-[#FBF8F1] border-y border-[#EDE5D0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {tm.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {tm.title}
            </h2>
            <Prose>{tm.intro.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s1.title}</SubTitle>
            <Prose>{tm.s1.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s2.title}</SubTitle>
            <Prose>{tm.s2.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
            <GoldQuote className="mt-8">{tm.s2.quote}</GoldQuote>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s3.title}</SubTitle>
            <Prose>{tm.s3.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s4.title}</SubTitle>
            <Prose>{tm.s4.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s5.title}</SubTitle>
            <Prose>{tm.s5.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
            <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto items-start">
              <div>
                <img src={IMG_LESKI_SKUPINSKA} alt={tm.s5.imgCaption} className="w-full h-auto border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s5.imgCaption}</p>
              </div>
              <div>
                <img src={IMG_NINA_DIPLOMA} alt={tm.s6.cap2} className="w-full h-auto border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s6.cap2}</p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>{tm.s5.after}</p>
            </div>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s6.title}</SubTitle>
            <Prose>
              {tm.s6.p.map((p, i) => <p key={i}>{p}</p>)}
              <p className="font-semibold text-[#0A0A0A]">{tm.s6.bold}</p>
            </Prose>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8 mb-10">
              <p className="font-['Outfit'] text-xl text-[#0A0A0A] font-bold">{tm.s6.quote}</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <img src={IMG_MOJSTRSKI_IZPIT} alt={tm.s6.cap1} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s6.cap1}</p>
            </div>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>{tm.s6.after}</p>
            </div>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s7.title}</SubTitle>
            <Prose>
              {tm.s7.p.map((p, i) => <p key={i}>{p}</p>)}
              <p className="font-semibold text-[#0A0A0A]">{tm.s7.bold}</p>
            </Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s8.title}</SubTitle>
            <Prose>{tm.s8.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          <div className="mb-16">
            <SubTitle>{tm.s9.title}</SubTitle>
            <Prose>{tm.s9.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8">
              <p className="font-['Manrope'] text-[#0A0A0A] font-semibold italic leading-relaxed">{tm.s9.quote}</p>
            </div>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6 mt-8">
              {tm.s9.after.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div>
            <SubTitle>{tm.s10.title}</SubTitle>
            <Prose>
              <p>{tm.s10.p1}</p>
              <p className="font-semibold text-[#0A0A0A]">{tm.s10.bold}</p>
              {tm.s10.p.map((p, i) => <p key={i}>{p}</p>)}
            </Prose>
            <GoldQuote className="mt-8">{tm.s10.quote}</GoldQuote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
            {k.cta.title}
          </h2>
          <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {k.cta.text}
          </p>
          <Link
            to="/kontakt"
            data-testid="kampi-cta-kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-12 py-5 font-['Manrope'] font-semibold text-sm hover:bg-white transition-all duration-300 tracking-wide"
          >
            {k.cta.button}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
