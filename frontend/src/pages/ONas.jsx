import { Link } from 'react-router-dom';
import { ArrowRight, Facebook } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

// History images
const IMG_MINISTRY_LETTER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/p4f9o2rb_dokument%20iztok.png";
const IMG_BOOK_PAGES_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/czuwryzr_image.png";
const IMG_BOOK_COVER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/747xdlif_image.png";
const IMG_SECOND_BOOK = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/5b4e5juv_image.png";
const IMG_YOUTH_2007 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/3vn3ftgy_image.png";
const IMG_KATA_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/hd9cfm81_image.png";
const IMG_KATA_2 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/s9gy5ufe_image.png";
const IMG_PRAGUE_CEREMONY = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/h2pb10i1_image.png";
const IMG_FLAG_HANDOVER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/9izyj6b6_image.png";
const IMG_PREDAVANJA = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/ell6vyn1_image.png";
const IMG_JUDO_CAMP = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/y0yr019t_image.png";
const IMG_CAMP_LIVADE_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/cc7rik4a_image.png";
const IMG_CAMP_LIVADE_2 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/5lalwqz4_image.png";
const IMG_OLDER_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/o947sh5n_image.png";
const IMG_ALL_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/po5r0q2u_Andreja%20Le%C5%A1ki%20in%20Iztok%20Babi%C4%8D%20v%20judo%20kampu%20Izola.jpg";
const IMG_BOOK_COMPETITION = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/div7thij_image.png";

// Trainer photos
const IMG_TRAINER_IZTOK = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/hxf5pkhr_iztok%20naslovna.jpg";
const IMG_TRAINER_JASA = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/plesgyns_jasa%20babic.jpg";
const IMG_TRAINER_MOJMIR = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/uewtg9gb_momir%20kovac.jpg";
const IMG_TRAINER_OLEKSANDER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/37s92klc_oleksander.jpg";

// Recognition/Achievement images
const IMG_RECOGNITION_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/s9b6p646_iztok%20andrea%201.jpg";
const IMG_RECOGNITION_2 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/aol9ef7p_iztok%20andrea%202.jpg";
const IMG_RECOGNITION_3 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/s9706w9q_andrea%20iztok%203.jpg";
const IMG_RECOGNITION_4 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/gr8d8f8v_plaketa.jpg";

// Poletje na tatamiju images
const IMG_NINA_DIPLOMA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/9gzrrkwa_Trener%20Ja%C5%A1a%20in%20Nina%20z%20diplomo%201.%20dan.webp";
const IMG_MOJSTRSKI_IZPIT = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/o5lpkeom_Polaganje%20mojstrskega%20pasu%20pred%20komisijo.webp";
const IMG_LESKI_SKUPINSKA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/r1tewi1y_Slika%20%C5%A1e%20s%20Andrejo%20le%C5%A1ki%20in%20predsednikom%20kluba.webp";

// Social links
const FACEBOOK_KLUB = "https://www.facebook.com/profile.php?id=61588576934450";
const FACEBOOK_IZTOK = "https://www.facebook.com/iztok.babic";

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

export default function ONas() {
  const { t } = useLang();
  const o = t.onas;
  const tm = o.tatami;

  const trainers = [
    { data: o.trainers.iztok, img: IMG_TRAINER_IZTOK, fb: FACEBOOK_IZTOK },
    { data: o.trainers.jasa, img: IMG_TRAINER_JASA },
    { data: o.trainers.mojmir, img: IMG_TRAINER_MOJMIR },
    { data: o.trainers.oleksander, img: IMG_TRAINER_OLEKSANDER },
  ];

  return (
    <div data-testid="onas-page" className="min-h-screen pt-20">
      <SEO title={t.seo.onas.title} description={t.seo.onas.description} keywords={t.seo.onas.keywords} path="/o-nas" />
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.hero.label}
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              {o.hero.title}
            </h1>
            <p className="font-['Manrope'] text-xl text-[#D4AF37] leading-relaxed italic">
              {o.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Beginnings Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.beginnings.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.beginnings.title}
            </h2>
            <Prose><p>{o.beginnings.p1}</p></Prose>
          </div>

          <div className="mb-12 max-w-2xl mx-auto">
            <img src={IMG_BOOK_COMPETITION} alt={o.beginnings.imgCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.beginnings.imgCaption}</p>
          </div>

          <Prose>
            <p>{o.beginnings.p2}</p>
            <p>{o.beginnings.p3}</p>
            <p>{o.beginnings.p4}</p>
          </Prose>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.recognition.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.recognition.title}
            </h2>
            <Prose>
              {o.recognition.p.map((p, i) => <p key={i}>{p}</p>)}
            </Prose>
          </div>

          <div className="mb-8 max-w-xl mx-auto">
            <img src={IMG_MINISTRY_LETTER} alt={o.recognition.imgCaption} className="w-full h-auto border border-[#E5E7EB] bg-white p-4" />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.recognition.imgCaption}</p>
          </div>
        </div>
      </section>

      {/* Literature Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.literature.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.literature.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img src={IMG_BOOK_COVER} alt={o.literature.capCover} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.literature.capCover}</p>
            </div>
            <div>
              <img src={IMG_BOOK_PAGES_1} alt={o.literature.capPages} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.literature.capPages}</p>
            </div>
          </div>

          <Prose>
            {o.literature.p.map((p, i) => <p key={i}>{p}</p>)}
            <p className="font-semibold text-[#0A0A0A]">{o.literature.bold}</p>
          </Prose>
        </div>
      </section>

      {/* Second Book Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.book2.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.book2.title}
            </h2>
          </div>

          <div className="mb-12">
            <img src={IMG_SECOND_BOOK} alt={o.book2.imgCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.book2.imgCaption}</p>
          </div>

          <Prose>
            {o.book2.p.map((p, i) => <p key={i}>{p}</p>)}
          </Prose>

          <div className="mt-16">
            <img src={IMG_YOUTH_2007} alt={o.book2.youthCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.book2.youthCaption}</p>
          </div>
        </div>
      </section>

      {/* Judo Kata Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.kata.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.kata.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div><img src={IMG_KATA_1} alt={o.kata.kataCaption} className="w-full h-auto border border-[#E5E7EB]" /></div>
            <div><img src={IMG_KATA_2} alt={o.kata.kataCaption} className="w-full h-auto border border-[#E5E7EB]" /></div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mb-12">{o.kata.kataCaption}</p>

          <Prose>
            {o.kata.p.map((p, i) => <p key={i}>{p}</p>)}
          </Prose>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div><img src={IMG_PRAGUE_CEREMONY} alt={o.kata.flagCaption} className="w-full h-[300px] object-cover object-center border border-[#E5E7EB]" /></div>
            <div><img src={IMG_FLAG_HANDOVER} alt={o.kata.flagCaption} className="w-full h-[300px] object-cover object-center border border-[#E5E7EB]" /></div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{o.kata.flagCaption}</p>
        </div>
      </section>

      {/* Redna Predavanja Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.lectures.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.lectures.title}
            </h2>
          </div>

          <div className="mb-8">
            <img src={IMG_PREDAVANJA} alt={o.lectures.imgCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{o.lectures.imgCaption}</p>
          </div>
        </div>
      </section>

      {/* Judo Camps Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.camps.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.camps.title}
            </h2>
            <Prose>
              {o.camps.intro.map((p, i) => <p key={i}>{p}</p>)}
            </Prose>
          </div>

          <div className="mb-12">
            <img src={IMG_JUDO_CAMP} alt={o.camps.campCaption} className="w-full h-auto border border-[#E5E7EB]" />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{o.camps.campCaption}</p>
          </div>

          <div className="mb-12">
            <Prose><p>{o.camps.p1}</p></Prose>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div><img src={IMG_OLDER_JUDOISTS} alt={o.camps.livadeCaption} className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]" /></div>
            <div><img src={IMG_ALL_JUDOISTS} alt={o.camps.livadeCaption} className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]" /></div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center">{o.camps.livadeCaption}</p>
        </div>
      </section>

      {/* Poletje na tatamiju Section */}
      <section data-testid="poletje-na-tatamiju-section" className="py-24 lg:py-32 bg-[#FBF8F1] border-y border-[#EDE5D0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {tm.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {tm.title}
            </h2>
            <Prose>
              {tm.intro.map((p, i) => <p key={i}>{p}</p>)}
            </Prose>
          </div>

          {/* Prvi kamp */}
          <div className="mb-16">
            <SubTitle>{tm.s1.title}</SubTitle>
            <Prose>{tm.s1.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          {/* Znanje generacij */}
          <div className="mb-16">
            <SubTitle>{tm.s2.title}</SubTitle>
            <Prose>{tm.s2.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
            <GoldQuote className="mt-8">{tm.s2.quote}</GoldQuote>
          </div>

          {/* Prijateljstvo */}
          <div className="mb-16">
            <SubTitle>{tm.s3.title}</SubTitle>
            <Prose>{tm.s3.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          {/* Olimpijske medalje */}
          <div className="mb-16">
            <SubTitle>{tm.s4.title}</SubTitle>
            <Prose>{tm.s4.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          {/* Drugi kamp */}
          <div className="mb-16">
            <SubTitle>{tm.s5.title}</SubTitle>
            <Prose>{tm.s5.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>

            <div className="mt-10 max-w-xs mx-auto">
              <img src={IMG_LESKI_SKUPINSKA} alt={tm.s5.imgCaption} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s5.imgCaption}</p>
            </div>

            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>{tm.s5.after}</p>
            </div>
          </div>

          {/* Nina Jajić */}
          <div className="mb-16">
            <SubTitle>{tm.s6.title}</SubTitle>
            <Prose>
              {tm.s6.p.map((p, i) => <p key={i}>{p}</p>)}
              <p className="font-semibold text-[#0A0A0A]">{tm.s6.bold}</p>
            </Prose>

            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8 mb-10">
              <p className="font-['Outfit'] text-xl text-[#0A0A0A] font-bold">{tm.s6.quote}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={IMG_MOJSTRSKI_IZPIT} alt={tm.s6.cap1} className="w-full h-[420px] object-cover object-center border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s6.cap1}</p>
              </div>
              <div>
                <img src={IMG_NINA_DIPLOMA} alt={tm.s6.cap2} className="w-full h-[420px] object-cover object-top border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{tm.s6.cap2}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>{tm.s6.after}</p>
            </div>
          </div>

          {/* 16 dni juda */}
          <div className="mb-16">
            <SubTitle>{tm.s7.title}</SubTitle>
            <Prose>
              {tm.s7.p.map((p, i) => <p key={i}>{p}</p>)}
              <p className="font-semibold text-[#0A0A0A]">{tm.s7.bold}</p>
            </Prose>
          </div>

          {/* Obala */}
          <div className="mb-16">
            <SubTitle>{tm.s8.title}</SubTitle>
            <Prose>{tm.s8.p.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>

          {/* Evropski mladinski pokal */}
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

          {/* Otroci in prihodnje generacije */}
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

      {/* Judo Danes Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.today.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.today.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img src={IMG_CAMP_LIVADE_1} alt={o.today.cap1} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{o.today.cap1}</p>
            </div>
            <div>
              <img src={IMG_CAMP_LIVADE_2} alt={o.today.cap2} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">{o.today.cap2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {o.future.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              {o.future.title}
            </h2>
            <Prose>
              <p>{o.future.p1}</p>
              <p className="font-semibold text-[#0A0A0A]">{o.future.bold}</p>
            </Prose>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">{o.future.plans.lectures.title}</h3>
              <ul className="font-['Manrope'] text-[#52525B] space-y-2 text-sm">
                {o.future.plans.lectures.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">{o.future.plans.cooperation.title}</h3>
              <p className="font-['Manrope'] text-[#52525B] text-sm">{o.future.plans.cooperation.text}</p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">{o.future.plans.education.title}</h3>
              <p className="font-['Manrope'] text-[#52525B] text-sm">{o.future.plans.education.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              {o.trainers.label}
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              {o.trainers.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((trainer) => (
              <div key={trainer.data.name} className="bg-white p-8 border border-[#E5E7EB]">
                <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
                <div className="mb-6">
                  <img src={trainer.img} alt={trainer.data.name} className="w-full h-auto border border-[#E5E7EB]" />
                </div>
                <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0A0A] mb-1">{trainer.data.name}</h3>
                <p className="font-['Manrope'] text-sm text-[#D4AF37] mb-4">{trainer.data.role}</p>
                {trainer.data.desc && (
                  <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed">{trainer.data.desc}</p>
                )}
                {trainer.fb && (
                  <a
                    href={trainer.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#52525B] hover:text-[#D4AF37] transition-colors font-['Manrope'] text-sm mt-4"
                  >
                    <Facebook className="h-4 w-4" />
                    {o.trainers.fb}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section - After Trainers */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              {o.recognition2.label}
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              {o.recognition2.title}
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <img src={IMG_RECOGNITION_1} alt={o.recognition2.cap1} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.recognition2.cap1}</p>
            </div>

            <div>
              <img src={IMG_RECOGNITION_2} alt={o.recognition2.cap2} className="w-full h-auto border border-[#E5E7EB]" />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.recognition2.cap2}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={IMG_RECOGNITION_3} alt={o.recognition2.cap3} className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.recognition2.cap3}</p>
              </div>
              <div>
                <img src={IMG_RECOGNITION_4} alt={o.recognition2.cap4} className="w-full h-auto border border-[#E5E7EB]" />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">{o.recognition2.cap4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href={FACEBOOK_KLUB}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="onas-facebook-klub"
              className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all"
            >
              <Facebook className="h-5 w-5" />
              {o.social.fbKlub}
            </a>
            <a
              href={FACEBOOK_IZTOK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="onas-facebook-iztok"
              className="inline-flex items-center gap-3 border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#0A0A0A] hover:text-white transition-all"
            >
              <Facebook className="h-5 w-5" />
              {o.social.fbIztok}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">
            {o.cta.titleBefore}<span className="text-[#D4AF37]">{o.cta.titleGold}</span>
          </h2>
          <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {o.cta.text}
          </p>
          <Link
            to="/kontakt"
            data-testid="onas-cta-kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-12 py-5 font-['Manrope'] font-semibold text-sm hover:bg-white transition-all duration-300 tracking-wide"
          >
            {o.cta.button}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
