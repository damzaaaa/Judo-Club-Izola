import { Link } from 'react-router-dom';
import { ArrowRight, Facebook } from 'lucide-react';

// Image URLs
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

// History images
const IMG_BOOK_PAGES_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/czuwryzr_image.png";
const IMG_MINISTRY_LETTER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zby9nwpi_image.png";
const IMG_BOOK_COVER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/747xdlif_image.png";
const IMG_BOOK_CONTENT = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/9p6lw5fh_image.png";
const IMG_BOOK_TABLES = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/jallxasv_image.png";
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
const IMG_ALL_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/fxfhv74f_image.png";

// Social links
const FACEBOOK_KLUB = "https://www.facebook.com/profile.php?id=61588576934450";
const FACEBOOK_IZTOK = "https://www.facebook.com/iztok.babic";

export default function ONas() {
  return (
    <div data-testid="onas-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Judo Klub Izola
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              O nas – Predstavitev z zgodovino
            </h1>
            <p className="font-['Manrope'] text-xl text-[#D4AF37] leading-relaxed italic">
              Zgodba predanosti, znanja in razvoja
            </p>
          </div>
        </div>
      </section>

      {/* Beginnings Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Začetki
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Prvi slikovni materiali, ki nakazujejo začetke, se najdejo že v strokovni literaturi
            </h2>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Judo klub Izola, takrat še pod imenom Športno društvo Vitalis, je začel delovati leta 1998. Tega leta so odprli Osnovno šolo z italijanskim učnim jezikom Dante Alighieri, iste jeseni pa so začeli z vpisom novincev v judo.
              </p>
              <p>Tako se je začela druga šolska sezona, 1999/2000.</p>
            </div>
          </div>

          {/* First Image */}
          <div className="mb-12">
            <img
              src={IMG_BOOK_PAGES_1}
              alt="Judo za mlade - slike iz knjige 1999/2000"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Slike iz knjige Judo za mlade, sezona 1999/2000
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
            <p>
              Obe zgornji sliki sta bili objavljeni v knjigi Judo za mlade, ki je bila pripravljena že leta 2000, izšla pa leto kasneje, leta 2001. To pomeni, da so bili otroci fotografirani v sezoni 1999/2000, dogajanje pa je potekalo v telovadnici omenjene šole. Na desni strani je trener Iztok Babič – na zgornji sliki v pripravi na predstavitev, na spodnji pa med predstavitvijo klubskega tekmovanja pred prvimi gledalci, to je starši, v prilagojeni judo/sumo borbi za najmlajše.
            </p>
            <p>
              Tako je zgodovina juda v Izoli že v prvih letih zabeležena tudi v literaturi, kjer trener kot avtor sporoča, da je borba pomembna za razvoj že pri zelo rosnih letih, če je seveda pedagoško prilagojena otrokovi starosti. To je v knjigi zelo dobro predstavljeno.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Priznanje
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Prizadevanje za priznanje Judo kluba Izola kot športne šole nacionalnega pomena
            </h2>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Trener Iztok Babič je bil sofinanciran v okviru zgoraj navedenega projekta preko Judo kluba 15. maj Marezige in si je prizadeval, da bi ta program zajel vse judo klube, ki jih je organiziral. Še posebej pomembno je bilo to za Judo klub Izola, ki je v tem programu sodeloval.
              </p>
              <p>
                Zato je na Ministrstvo za šolstvo in šport, s katerim je imel podpisano pogodbo, naslovil dopis, da bi se mu delo v drugem klubu ne le priznalo, temveč tudi formalno uredilo zaradi določila o konkurenčni klavzuli, da to delo ne bi bilo sporno. Na ta dopis je prejel skromen, vendar pozitiven odgovor.
              </p>
              <p>
                Lahko rečemo, da je bilo s tem Judo klubu Izola priznano delo z mladimi, tudi z nadarjenimi mladimi člani. To je sicer pomenilo določeno prestižnost, vendar je bilo bistveno predvsem to, da je šlo za priznanje kakovostnega in strokovno nespornega dela.
              </p>
            </div>
          </div>

          {/* Ministry Letter Image */}
          <div className="mb-8">
            <img
              src={IMG_MINISTRY_LETTER}
              alt="Odgovor ministrstva"
              className="w-full max-w-2xl mx-auto h-auto border border-[#E5E7EB] bg-white p-4"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Odgovor ministrstva na dopis, s katerim je bilo dovoljeno strokovno delo v okviru Športne šole nacionalnega pomena.
            </p>
          </div>
        </div>
      </section>

      {/* Literature Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Literatura
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Za uspeh je bila potrebna bogata literatura – Izšla je prva knjiga
            </h2>
          </div>

          {/* Book Cover */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={IMG_BOOK_COVER}
                alt="Judo za mlade - naslovnica knjige"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Judo za mlade – naslovnica knjige iz leta 2001.
              </p>
            </div>
            <div>
              <img
                src={IMG_BOOK_CONTENT}
                alt="Judo za mlade - notranja vsebina"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Judo za mlade – notranja vsebina, tudi slike.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <img
              src={IMG_BOOK_TABLES}
              alt="Judo za mlade - tabele"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Judo za mlade – notranja vsebina, tudi tabele.
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
            <p>
              Knjigo sta sofinancirala Ministrstvo za šolstvo in šport ter Fundacija za šport Republike Slovenije. Da je ministrstvo sofinanciralo takšno knjigo, je bilo zelo redko. Če pa pomislimo, da so leta 1996 pri Judo zvezi predlagali vključitev juda v šolska športna tekmovanja in želeli, da to vodi Iztok Babič, je to lahko eden izmed razlogov, zakaj so njegovo delo podprli.
            </p>
            <p>
              To pa še ni bilo vse. Zveza je bila seznanjena tudi s tem, da je bil leta 1997 sprejet kot trener v Športno šolo nacionalnega pomena. Vse to zgovorno kaže, da je bil trener s svojim delom opažen že prej in da so mu bile s strani države ponujene možnosti za strokovno delo z mladimi v judu. Kmalu zatem je izšla tudi literatura, ki jo danes predstavljamo.
            </p>
            <p className="font-semibold text-[#0A0A0A]">
              To pa še ni konec. V nadaljevanju na kratko predstavljamo napredek, katerega krona je bila osvojena olimpijska zlata medalja v Parizu 2024, ki jo je osvojila Andreja Leški, vpisana v Športno šolo Iztoka Babiča jeseni 2002.
            </p>
          </div>
        </div>
      </section>

      {/* Second Book Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Nadaljevanje
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Nato je prišla druga knjiga
            </h2>
          </div>

          {/* Second Book Image */}
          <div className="mb-12">
            <img
              src={IMG_SECOND_BOOK}
              alt="Druga knjiga - Evropsko kadetsko prvenstvo 2009"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Knjiga, izdana leta 2010: zgoraj njena naslovnica in zadnja platnica, spodaj pa njena vsebina.
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
            <p>
              Druga knjiga se vsebinsko naslanja na prvo knjigo Judo za mlade, pri čemer skuša na praktičnem prikazu Evropskega kadetskega prvenstva 2009, ki je bilo v Areni Bonifika v Kopru, pokazati nadaljnji razvoj strokovnega dela.
            </p>
            <p>
              Sporočilo je dvojno oziroma lahko rečemo, da sloni na dveh pomembnih stebrih. Prvič: od prijaznih začetnih pedagoških pristopov pri športnih tekmovanjih najmlajših v klubski organizaciji do največjih vrhunskih tekmovanj mladostnikov. Trener je torej evropska tekmovanja pripeljal domov in jih preučeval tako rekoč na lastnem pragu.
            </p>
            <p>
              Drugič: vso strokovno znanost, ki je bila na voljo v knjižnicah, vse strokovne članke z laboratorijskimi raziskavami in njihovimi ugotovitvami, je trener povezal v nov koncept razlage prakse. Poleg tega je razvijal tudi metode, kako na podlagi teh spoznanj vplivati na še učinkovitejši razvoj mladega človeka v športnem treniranju.
            </p>
          </div>

          {/* Youth 2007 Image */}
          <div className="mt-16">
            <img
              src={IMG_YOUTH_2007}
              alt="Izolski mladostniki 2007"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Izolski mladostniki 2007: skrajno desno kleče Andreja Leški, za njo stoje pa njena stalna spremljevalka na tekmovanjih Lea Knez.
            </p>
          </div>
        </div>
      </section>

      {/* Judo Kata Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Judo kate
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Andreja Leški in Lea Knez - judo kata nastop l. 2011
            </h2>
          </div>

          {/* Kata Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={IMG_KATA_1}
                alt="Judo kata nastop - Andreja Leški in Lea Knez"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
            <div>
              <img
                src={IMG_KATA_2}
                alt="Judo kata nastop - Andreja Leški in Lea Knez"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mb-12">
            Andreja Leški in Lea Knez - judo kata nastop l. 2011.
          </p>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
            <p>
              Športna šola Iztoka Babiča je na treninge uvajala tudi judo kate. Na tem področju smo bili pionirji razvoja, kar je vključevalo udeležbo na mednarodnih srečanjih in seminarjih, organizacijo mednarodnih tekmovanj, državnih prvenstev in celo dveh evropskih prvenstev, leta 2013 in 2017, na OŠ Koper.
            </p>
            <p>
              Leta 2012 je Igor Albreht, ki je ta program vodil, v Pragi dosegel 3. mesto, trener Iztok Babič pa je prevzel zastavo kot naslednji organizator.
            </p>
          </div>

          {/* Prague Ceremony Images */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <img
                src={IMG_PRAGUE_CEREMONY}
                alt="Prevzem zastave v Pragi 2012"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
            <div>
              <img
                src={IMG_FLAG_HANDOVER}
                alt="Prevzem zastave v Pragi 2012"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
            Prevzem zastave v Pragi 2012 na EP judo kat, kot naslednji organizator v l. 2013.
          </p>
        </div>
      </section>

      {/* Redna Predavanja Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Izobraževanje
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Redna predavanja
            </h2>
          </div>

          <div className="mb-8">
            <img
              src={IMG_PREDAVANJA}
              alt="Redna predavanja za starše in mladostnike"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
              Redna predavanja za starše in mladostnike so potekala v telovadnici OŠ Dante Alighieri leta 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Judo Camps Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Judo kampi
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Poletni judo kampi v Izoli
            </h2>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Že več kot 30 let redno poteka Poletni judo kamp Izola pod pokroviteljstvom Judo zveze Slovenije, pri katerem je imel Judo klub Izola kot domači klub pomembno organizacijsko vlogo.
              </p>
              <p>
                Z leti se je razvil tudi redni družinski poletni kamp judoistov iz Dunaja. Od leta 2024 dalje pa poteka še tretji Poletni TC judo kamp Izola v organizaciji Judo kluba Izola.
              </p>
            </div>
          </div>

          {/* Judo Camp Image */}
          <div className="mb-12">
            <img
              src={IMG_JUDO_CAMP}
              alt="Poletni TC judo kamp Izola"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
              Izobraževanje je potekalo v vseh judo kampih v Izoli – slika je s telovadnice OŠ D. Alighieri. Na sliki prvi z desne Slavko Obadov, prvi judoist, ki je za Jugoslavijo osvojil medaljo na OI in sicer l. 1976 v Montreal (Kanada).
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6 mb-12">
            <p>
              V kampih, kjer sodelujejo praktično vse starostne skupine, velja posebej poudariti, da med člani prihajajo tudi najelitnejši judoisti iz vse Evrope, med njimi številni dobitniki olimpijskih medalj, tudi zlatih. Omenimo samo enega – Ilias Iliadisa, ki je osvojil zlate medalje na največjih tekmovanjih. Avgusta 2013 je bil pri nas, konec istega meseca pa je ob izteku kariere osvojil še zadnjo medaljo z velikih tekmovanj, in sicer bronasto medaljo na svetovnem prvenstvu v Riu de Janeiru v Braziliji.
            </p>
          </div>

          {/* Camp Livade Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img
                src={IMG_CAMP_LIVADE_1}
                alt="Poletni judo kamp Izola 2023"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
            <div>
              <img
                src={IMG_CAMP_LIVADE_2}
                alt="Poletni judo kamp Izola 2023 - z olimpijskim prvakom"
                className="w-full h-auto border border-[#E5E7EB]"
              />
            </div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center">
            Poletni judo kamp Izola 2023 v dvorani OŠ Livade, ki so ga redno obiskovali vsi mladi judoisti z Obale. Na drugi sliki pa smo trenirali tudi z olimpijskim prvakom Ilio Iliadisom.
          </p>
        </div>
      </section>

      {/* Judo Danes Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Sedanjost
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Judo danes
            </h2>
          </div>

          {/* Older Judoists Image */}
          <div className="mb-8">
            <img
              src={IMG_OLDER_JUDOISTS}
              alt="Starejša skupina mladostnikov"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
              Starejša skupina mladostnikov.
            </p>
          </div>

          {/* All Judoists Image */}
          <div className="mb-8">
            <img
              src={IMG_ALL_JUDOISTS}
              alt="Skupina vseh mlajših in starejših judoistov"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
              Skupina vseh mlajših in starejših judoistov (manjkajo le naši najmlajši člani).
            </p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Prihodnost
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Judo jutri
            </h2>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Programi, ki jih sprejemamo, so nadaljevanje dosedanjega dela, kateremu dodajamo aktualne teme kot nadgradnjo. Te novosti so posledica našega stalnega napredovanja in potreb, ki jih zaznavamo v okolju.
              </p>
              <p className="font-semibold text-[#0A0A0A]">Omenimo le nekatere nove vsebine:</p>
            </div>
          </div>

          {/* Future Plans List */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">Predavanja</h3>
              <ul className="font-['Manrope'] text-[#52525B] space-y-2 text-sm">
                <li>• Staršem bomo osvetlili, kako pripraviti učence, da bodo bolj učinkovito usklajevali šolo in športno treniranje.</li>
                <li>• Prehrana športnika</li>
                <li>• Športno treniranje – strokovne članke že pišemo, prve smo tudi že objavili</li>
                <li>• Športna tekmovanja – posebej za začetnike in tudi za tiste, ki imajo manj znanja</li>
              </ul>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">Sodelovanje</h3>
              <p className="font-['Manrope'] text-[#52525B] text-sm">
                Več bomo sodelovali z vrtci, šolami in učitelji športne vzgoje.
              </p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <h3 className="font-['Outfit'] text-lg font-semibold text-[#0A0A0A] mb-2">Izobraževanje</h3>
              <p className="font-['Manrope'] text-[#52525B] text-sm">
                Postopno pripravljamo pravi izobraževalni center na Obali. Kaže se potreba po večji integraciji vseh nas na Obali, po tesnejšem sodelovanju in po razvojni mreži, ki bi vključevala tudi druge strokovnjake ter njihova znanja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Vodstvo
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              Naši trenerji
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Iztok Babič */}
            <div className="bg-white p-8 border border-[#E5E7EB] text-center">
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6" />
              <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] mb-2">
                Iztok Babič
              </h3>
              <p className="font-['Manrope'] text-sm text-[#D4AF37] uppercase tracking-wider mb-4">
                Glavni trener
              </p>
              <a
                href={FACEBOOK_IZTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#52525B] hover:text-[#D4AF37] transition-colors font-['Manrope'] text-sm"
              >
                <Facebook className="h-4 w-4" />
                Facebook profil
              </a>
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
              Judo klub Izola na Facebooku
            </a>
            <a
              href={FACEBOOK_IZTOK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="onas-facebook-iztok"
              className="inline-flex items-center gap-3 border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 font-['Manrope'] font-medium text-sm hover:bg-[#0A0A0A] hover:text-white transition-all"
            >
              <Facebook className="h-5 w-5" />
              Iztok Babič na Facebooku
            </a>
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
