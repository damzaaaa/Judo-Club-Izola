import { FileText, PlayCircle, ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

const VIDEO_URL = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/g5kxh45l_Izsek%20S%20Predavanja%20Pred%20Predstavniki%20Jzs%20Leta%202011%20O%20Pre%C4%8Dasnosti%20%28Anticipaciji%29%20Ter%20Primerjava%20Z%20Borbeno%20Akcijo%282%29.mp4";
const PDF_SODOBNI = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/2qe765rn_Sodobni%20zgodovinski%20pogledi.pdf";
const PDF_ANTIKA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/3nsxkdwe_MLADI%20%C5%A0PORTNIKI%20V%20ANTI%C4%8CNIH%20OLIMPIJSKIH%20IGRAH.pdf";

export default function StrokovnaZnanja() {
  const { t } = useLang();
  const s = t.strokovna;
  const docLinks = [PDF_SODOBNI, PDF_ANTIKA];

  return (
    <div data-testid="strokovna-page" className="min-h-screen pt-20">
      <SEO title={t.seo.strokovna.title} description={t.seo.strokovna.description} keywords={t.seo.strokovna.keywords} path="/strokovna-znanja" />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {s.hero.label}
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              {s.hero.title}
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              {s.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Video / Lecture */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <PlayCircle className="h-5 w-5 text-[#D4AF37]" />
            <span className="uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope']">
              {s.video.label}
            </span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-6">
            {s.video.title}
          </h2>
          <p className="font-['Manrope'] text-base text-[#52525B] leading-relaxed mb-10 max-w-3xl">
            {s.video.desc}
          </p>

          <div className="bg-[#0A0A0A] p-2 sm:p-3 shadow-2xl">
            <video
              data-testid="lecture-video"
              controls
              preload="metadata"
              className="w-full h-auto max-h-[70vh] bg-black"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Historical documents */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              {s.docsLabel}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              {s.docsTitle}
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {s.docs.map((doc, i) => (
              <a
                key={i}
                href={docLinks[i]}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`doc-card-${i}`}
                className="group relative flex flex-col bg-white border border-[#E5E7EB] p-8 lg:p-10 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#0A0A0A] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <FileText className="h-7 w-7 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors" />
                  </div>
                  <span className="font-['Manrope'] text-xs uppercase tracking-wider text-[#52525B]/60">{doc.meta}</span>
                </div>
                <h3 className="font-['Outfit'] text-xl lg:text-2xl font-bold text-[#0A0A0A] leading-snug mb-4">
                  {doc.title}
                </h3>
                <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed mb-8 flex-grow">
                  {doc.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[#0A0A0A] group-hover:text-[#D4AF37] font-['Manrope'] font-semibold text-sm transition-colors">
                  <span className="border-b-2 border-[#D4AF37] pb-1">{doc.cta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>

          <p className="text-center font-['Manrope'] text-sm text-[#52525B] italic mt-12">
            {s.note}
          </p>
        </div>
      </section>
    </div>
  );
}
