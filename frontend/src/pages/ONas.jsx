import { Link } from 'react-router-dom';
import { ArrowRight, Facebook } from 'lucide-react';

// Image URLs
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/vvsly6ll_JUDO%20%282%29.jpg";

// History images - reorganized
const IMG_MINISTRY_LETTER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/p4f9o2rb_dokument%20iztok.png";
const IMG_BOOK_PAGES_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/czuwryzr_image.png";
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
const IMG_ALL_JUDOISTS = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/po5r0q2u_Andreja%20Le%C5%A1ki%20in%20Iztok%20Babi%C4%8D%20v%20judo%20kampu%20Izola.jpg";
const IMG_BOOK_COMPETITION = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/div7thij_image.png";

// Trainer photos
const IMG_TRAINER_IZTOK = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/hxf5pkhr_iztok%20naslovna.jpg";
const IMG_TRAINER_JASA = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/plesgyns_jasa%20babic.jpg";
const IMG_TRAINER_MOJMIR = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/uewtg9gb_momir%20kovac.jpg";
const IMG_TRAINER_OLEKSANDER = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/37s92klc_oleksander.jpg";

// Poletje na tatamiju images
const IMG_NINA_DIPLOMA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/9gzrrkwa_Trener%20Ja%C5%A1a%20in%20Nina%20z%20diplomo%201.%20dan.webp";
const IMG_MOJSTRSKI_IZPIT = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/o5lpkeom_Polaganje%20mojstrskega%20pasu%20pred%20komisijo.webp";
const IMG_LESKI_SKUPINSKA = "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/r1tewi1y_Slika%20%C5%A1e%20s%20Andrejo%20le%C5%A1ki%20in%20predsednikom%20kluba.webp";

// Recognition/Achievement images
const IMG_RECOGNITION_1 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/s9b6p646_iztok%20andrea%201.jpg";
const IMG_RECOGNITION_2 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/aol9ef7p_iztok%20andrea%202.jpg";
const IMG_RECOGNITION_3 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/s9706w9q_andrea%20iztok%203.jpg";
const IMG_RECOGNITION_4 = "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/gr8d8f8v_plaketa.jpg";

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
              O nas
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
            </div>
          </div>

          {/* Book Competition Image - smaller */}
          <div className="mb-12 max-w-2xl mx-auto">
            <img
              src={IMG_BOOK_COMPETITION}
              alt="Tekmovanje v mali judo igri na treningu - slike iz knjige"
              className="w-full h-auto border border-[#E5E7EB]"
            />
            <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
              Slike iz knjige Judo za mlade, sezona 1999/2000
            </p>
          </div>

          <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
            <p>Tako se je začela druga šolska sezona, 1999/2000.</p>
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

          {/* Ministry Letter Image - smaller */}
          <div className="mb-8 max-w-xl mx-auto">
            <img
              src={IMG_MINISTRY_LETTER}
              alt="Odgovor ministrstva"
              className="w-full h-auto border border-[#E5E7EB] bg-white p-4"
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
              Za uspeh je bila potrebna bogata literatura – Izašla je prva knjiga
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
                src={IMG_BOOK_PAGES_1}
                alt="Judo za mlade - notranja vsebina"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Judo za mlade – notranja vsebina, tudi slike.
              </p>
            </div>
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

          {/* Prague Ceremony Images - more proportional */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <img
                src={IMG_PRAGUE_CEREMONY}
                alt="Prevzem zastave v Pragi 2012"
                className="w-full h-[300px] object-cover object-center border border-[#E5E7EB]"
              />
            </div>
            <div>
              <img
                src={IMG_FLAG_HANDOVER}
                alt="Prevzem zastave v Pragi 2012"
                className="w-full h-[300px] object-cover object-center border border-[#E5E7EB]"
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

          {/* Camp Livade Images - swapped with Judo Danes images, equal sizes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img
                src={IMG_OLDER_JUDOISTS}
                alt="Starejša skupina mladostnikov"
                className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]"
              />
            </div>
            <div>
              <img
                src={IMG_ALL_JUDOISTS}
                alt="Andreja Leški in Iztok Babič v judo kampu Izola"
                className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]"
              />
            </div>
          </div>
          <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center">
            Poletni judo kamp Izola 2023 v dvorani OŠ Livade, ki so ga redno obiskovali vsi mladi judoisti z Obale. Na drugi sliki pa smo trenirali tudi z olimpijskim prvakom Ilio Iliadisom.
          </p>
        </div>
      </section>

      {/* Poletje na tatamiju Section */}
      <section data-testid="poletje-na-tatamiju-section" className="py-24 lg:py-32 bg-[#FBF8F1] border-y border-[#EDE5D0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Poletje na tatamiju
            </span>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-8">
              Izola – več kot 30 let judo kampov, izobraževanja, prijateljstva in vrhunskega športa
            </h2>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Letošnje poletje je znova potrdilo pomembno mesto Izole na zemljevidu slovenskega in mednarodnega juda. Z dvema zaporednima judo kampoma smo ustvarili kar 16 dni intenzivnega športnega treniranja, izobraževanja, druženja in mednarodnega povezovanja.
              </p>
              <p>
                Toda zgodba izoljskih judo kampov je veliko daljša. Nastajala je več kot tri desetletja in skozi čas prerasla okvir običajnih športnih priprav. Kampi so postali tudi pomemben prostor izobraževanja, kjer se znanje in izkušnje prenašajo med trenerji, tekmovalci in generacijami.
              </p>
              <p>
                Mladi se tukaj ne učijo samo tehnik in borbe. Učijo se ob starejših in izkušenejših, spoznavajo različne načine treniranja, pridobivajo nove izkušnje ter znanje postopoma nadgrajujejo. Hkrati se izobražujejo tudi trenerji, saj mednarodno okolje omogoča izmenjavo strokovnih pogledov, metod dela in dobrih praks.
              </p>
              <p>
                Prav izobraževanje in neprekinjen prenos znanja sta bila skozi več kot trideset let pomembna gradnika razvoja mladih športnikov. Nadarjeni in vztrajni so postopoma napredovali od mlajših kategorij do mladinskega in članskega juda, nekateri pa vse do evropskih, svetovnih in olimpijskih medalj.
              </p>
              <p>
                Zato naših kampov ne razumemo samo kot športne priprave. So prostor športnega treniranja in izobraževanja, medgeneracijskega prenosa znanja, prijateljstva ter mednarodnega povezovanja. Prav preplet vseh teh dejavnosti je ustvaril okolje, v katerem so lahko mladi skozi leta napredovali in dosegali tudi najvišje športne cilje.
              </p>
            </div>
          </div>

          {/* Prvi kamp */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Prvi kamp – več kot 30 let tradicije in mednarodnega povezovanja
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Prvi mednarodni judo kamp skupaj vodita Judo klub Izola in Judo klub Impol. Njegova posebnost je več kot tridesetletna tradicija, v kateri so pomembno vlogo odigrali tudi številni tuji klubi. Nekateri se v Izolo vračajo že več kot tri desetletja.
              </p>
              <p>
                Pri razvoju te zgodbe je pomembno vlogo odigral domači Judo klub Izola, ki je skozi leta skrbel, da se znanje in izkušnje starejših trenerjev in tekmovalcev niso izgubili, temveč so se prenašali na nove generacije.
              </p>
              <p>
                Mladi so trenirali ob starejših in uspešnejših tekmovalcih, jih opazovali, se od njih učili ter jih sčasoma skušali dohiteti in tudi preseči. Najbolj nadarjeni, vztrajni in uspešni so napredovali v mladinske in članske kategorije, nekateri pa vse do največjih mednarodnih tekmovanj.
              </p>
              <p>
                Tako je kamp skozi desetletja postal pomemben gradnik športnega treniranja in izobraževanja mladih.
              </p>
            </div>
          </div>

          {/* Znanje generacij */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Znanje prve generacije se ne izgubi – nova ga prevzema in nadgrajuje
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Posebna vrednost več kot tridesetletne tradicije je prav v tem, da se pridobljeno znanje s prihodom novih generacij ne izgubi.
              </p>
              <p>
                Prve generacije trenerjev in tekmovalcev so skozi dolgoletno delo pridobivale izkušnje, razvijale načine treniranja in svoje znanje prenašale na mlajše. Ti so ga prevzemali, bogatili z lastnimi izkušnjami in novimi strokovnimi spoznanji ter ga nato predajali naprej.
              </p>
              <p>
                Tako se je oblikovala neprekinjena razvojna veriga: ena generacija postavlja temelje, naslednja jih prevzame, nadgradi in razvija naprej.
              </p>
              <p>
                Mladi, ki so se nekoč na kampih učili od starejših, so pozneje sami postajali vrhunski tekmovalci, trenerji in vzorniki naslednjim generacijam.
              </p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8">
              <p className="font-['Manrope'] text-[#0A0A0A] font-semibold leading-relaxed">
                Prav v tem vidimo eno največjih vrednosti našega sistema: novo ne izniči starega, ampak iz njega raste in ga nadgrajuje.
              </p>
            </div>
          </div>

          {/* Prijateljstvo */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Prijateljstvo in mednarodna izmenjava znanja
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Kampi pa skozi desetletja niso povezovali samo generacij, ampak tudi ljudi iz različnih držav.
              </p>
              <p>
                V Izoli so skupaj trenirali športniki iz Slovenije, Italije, Kosova, Poljske in številnih drugih okolij. Trenerji so izmenjevali strokovna spoznanja, metode dela in dobre prakse, tekmovalci pa so dobivali nove partnerje ter spoznavali različne načine juda.
              </p>
              <p>
                Ob tem so nastajala prijateljstva, ki so pogosto trajala veliko dlje od posameznega kampa. Prav dejstvo, da se nekateri tuji klubi v Izolo vračajo že več kot trideset let, najbolje kaže, da se je iz športnega sodelovanja razvila prava mednarodna skupnost.
              </p>
              <p>
                Znanja nismo zadrževali zase. Izmenjevali smo ga, se učili drug od drugega in si mednarodno pomagali napredovati.
              </p>
              <p>
                Tudi zaradi tega je izolski kamp skozi desetletja postal prepoznaven v širšem evropskem judo prostoru.
              </p>
            </div>
          </div>

          {/* Olimpijske medalje */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Od mladih udeležencev do olimpijskih medalj
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>Rezultati takšnega dela se ne pokažejo čez noč.</p>
              <p>
                Za vrhunskim športnikom stojijo leta dela v matičnem klubu, trenerji, reprezentančni programi, tekmovanja in številni drugi dejavniki. Kamp pa je lahko pomemben del tega procesa, saj športniku ponudi drugačne partnerje, nova znanja, nove izkušnje in primerjavo z najboljšimi.
              </p>
              <p>
                V več kot treh desetletjih so številni športniki, ki so se izpopolnjevali tudi na naših kampih, pozneje osvajali medalje na evropskih in svetovnih prvenstvih ter olimpijskih igrah.
              </p>
              <p>
                Še posebej smo ponosni na našo obalno olimpijsko prvakinjo Andrejo Leški, ki je leta 2024 v Parizu osvojila zlato olimpijsko medaljo.
              </p>
              <p>
                Njena pot ima za naše mlade posebno sporočilo: kaže jim, da lahko otrok, ki danes stopi na tatami na slovenski Obali, s talentom, vztrajnostjo, kakovostnim treningom in pravim strokovnim okoljem nekoč pride tudi do največjih športnih dosežkov.
              </p>
            </div>
          </div>

          {/* Drugi kamp */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Drugi kamp – nova generacija nadaljuje zgodbo
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                To kontinuiteto je lepo pokazal tudi drugi letošnji kamp, ki ga je organizirala Judo zveza Slovenije.
              </p>
              <p>
                Program je zajemal članske in mladinske borbene treninge, delo z mlajšimi starostnimi kategorijami ter učenje kat in priprave na izpite za mojstrske stopnje.
              </p>
              <p>
                Tudi tukaj se je pokazalo, kako pomembno je povezovanje generacij. Mladi danes pridobivajo znanje od vrhunskih tekmovalcev in trenerjev, ti pa nadaljujejo proces, ki so ga pred desetletji začele prejšnje generacije. Tako se izkušnje preteklosti povezujejo s sodobnimi pristopi športnega treniranja.
              </p>
              <p>
                Prva dva dneva je mlajše judoiste vodila Kaja Kajzer, dvakratna evropska podprvakinja, v nadaljevanju pa olimpijska prvakinja Andreja Leški.
              </p>
              <p>
                Na kampu so aktivno sodelovali tudi naši mladi člani Judo kluba Izola. Zanje je bila to dragocena športna in izobraževalna izkušnja, saj so lahko neposredno trenirali ob vrhunskih športnicah, jih opazovali, poslušali njihove nasvete ter pridobivali nova znanja.
              </p>
              <p>
                Poseben trenutek je bilo srečanje z Andrejo Leški, s katero so se naši mladi člani tudi fotografirali.
              </p>
            </div>

            <div className="mt-10 max-w-2xl mx-auto">
              <img
                src={IMG_LESKI_SKUPINSKA}
                alt="Mladi člani Judo kluba Izola z Andrejo Leški in predsednikom kluba"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Naši mladi člani z olimpijsko prvakinjo Andrejo Leški.
              </p>
            </div>

            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>
                Ta fotografija lepo simbolizira bistvo naših kampov: danes se mladi učijo od olimpijske prvakinje, jutri pa bodo morda prav oni svoje znanje in izkušnje predajali naslednji generaciji.
              </p>
            </div>
          </div>

          {/* Nina Jajić */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Pomemben uspeh Nine Jajić
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Pomemben izobraževalni del kampa so predstavljale tudi priprave na izpite za mojstrske stopnje.
              </p>
              <p>
                Poseben uspeh je dosegla Nina Jajić, ki je uspešno opravila izpit za 1. DAN – črni pas ter tako iz šolskih prestopila v mojstrske stopnje juda.
              </p>
              <p className="font-semibold text-[#0A0A0A]">
                S tem je postala prva ženska mojstrica juda v našem klubu.
              </p>
            </div>

            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8 mb-10">
              <p className="font-['Outfit'] text-xl text-[#0A0A0A] font-bold">
                Nina, iskrene čestitke!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={IMG_MOJSTRSKI_IZPIT}
                  alt="Polaganje mojstrskega pasu pred komisijo"
                  className="w-full h-[420px] object-cover object-center border border-[#E5E7EB]"
                />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                  Polaganje izpita za mojstrsko stopnjo pred komisijo.
                </p>
              </div>
              <div>
                <img
                  src={IMG_NINA_DIPLOMA}
                  alt="Trener Jaša Babič in Nina Jajić z diplomo za 1. DAN"
                  className="w-full h-[420px] object-cover object-top border border-[#E5E7EB]"
                />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                  Trener Jaša Babič in Nina Jajić z diplomo za 1. DAN – črni pas.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed mt-10">
              <p>
                Tudi njen uspeh potrjuje, da judo kamp ni samo prostor borbenega treninga, ampak tudi prostor širšega judo izobraževanja, tehničnega izpopolnjevanja in osebnega razvoja.
              </p>
            </div>
          </div>

          {/* 16 dni juda */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              16 dni juda in potreba po nadaljnjem razvoju
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Z letošnjima kampoma se je obdobje organiziranih poletnih judo aktivnosti v Izoli z nekdanjih enajstih povečalo na kar 16 dni.
              </p>
              <p>
                Več udeležencev, več treningov in več mednarodnega sodelovanja pa pomeni tudi potrebo po boljših pogojih.
              </p>
              <p>
                Zato smo se povezani klubi odločili za vlaganje v novo opremo in dodatne tatamije. Sedanjih približno 700 kvadratnih metrov vadbene površine želimo povečati na približno 1.000 kvadratnih metrov.
              </p>
              <p>
                Del sredstev smo že zbrali sami, pri nadaljnjem razvoju pa želimo k sodelovanju povabiti tudi širšo javnost in vse, ki prepoznavajo pomen vlaganja v šport in mladino.
              </p>
              <p className="font-semibold text-[#0A0A0A]">
                To ni samo naložba v nove blazine. Je naložba v več prostora za otroke, več kakovostnega treninga, več izobraževanja, več mednarodnih povezav in več možnosti za prihodnje generacije.
              </p>
            </div>
          </div>

          {/* Obala */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Znanje širimo na celotno slovensko Obalo
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Naše delo želimo v prihodnje še bolj razširiti in povezati celotno slovensko Obalo.
              </p>
              <p>
                Sodelovanje in delo Judo kluba Izola in Judo kluba Ankaran omogočata, da znanje in izkušnje, ki so nastajali skozi desetletja, prenašamo tudi v druga okolja.
              </p>
              <p>
                Naš cilj ni zapirati znanja znotraj posameznega kluba. Nasprotno – želimo ga širiti, oplemenititi in ustvarjati možnosti za otroke v Izoli, Ankaranu, Kopru in drugod na Obali.
              </p>
              <p>
                Koper že ima olimpijsko prvakinjo Andrejo Leški. Naša želja pa je, da bi z dobrim strokovnim delom in sodelovanjem ustvarjali pogoje, da bi v prihodnosti vrhunski športniki lahko prihajali tudi iz Izole, Ankarana in drugih obalnih okolij.
              </p>
              <p>
                Ne gre za tekmovanje med občinami, katera bo dobila naslednjega olimpijskega prvaka. Gre za nekaj pomembnejšega: da celotna Obala postane okolje, v katerem imajo mladi možnost razviti svoj talent do najvišje ravni.
              </p>
              <p>
                Vsaka prihodnja evropska, svetovna ali olimpijska medalja z naše Obale bo zato uspeh širšega okolja, ki je mlademu športniku omogočilo razvoj.
              </p>
            </div>
          </div>

          {/* Evropski mladinski pokal */}
          <div className="mb-16">
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Po kampih nas čaka še evropski mladinski pokal
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Z zaključkom poletnih kampov pa naše skupno delo še zdaleč ni končano.
              </p>
              <p>Čaka nas še en lep in pomemben del letošnje judo zgodbe.</p>
              <p>
                Judo klub Izola in Judo klub Impol bosta konec novembra skupaj sodelovala pri organizaciji evropskega mladinskega judo pokala v Areni Bonifika v Kopru.
              </p>
              <p>
                To je pomembno tudi zato, ker ponovno kaže moč sodelovanja obeh klubov. Sodelovanje, ki ga gradimo na kampih, se nadaljuje pri organizaciji velikega mednarodnega tekmovanja.
              </p>
              <p>
                Od dela z otroki in mladimi, preko kampov in izobraževanja tako prihajamo do evropskega tekmovalnega prostora.
              </p>
              <p>
                Posebno simboliko ima tudi prizorišče. Prav v tem okolju je trenirala Andreja Leški. Borilnica, v kateri se je pripravljala aktualna olimpijska prvakinja, bo ob evropskem pokalu ponovno del športnega dogajanja. Mladi tekmovalci se bodo tam pripravljali in ogrevali, nato pa stopili na tekmovalni prostor Arene Bonifika.
              </p>
              <p>Ob fotografiji tega prostora lahko zato upravičeno zapišemo:</p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8">
              <p className="font-['Manrope'] text-[#0A0A0A] font-semibold italic leading-relaxed">
                »V tej borilnici je trenirala aktualna olimpijska prvakinja Andreja Leški.«
              </p>
            </div>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6 mt-8">
              <p>
                Za mladega športnika je to lahko močno sporočilo. Na istem prostoru, kjer se danes pripravlja na svojo borbo, je nekoč trenirala športnica, ki je pozneje osvojila olimpijsko zlato.
              </p>
              <p>
                Tudi evropski mladinski pokal bo zato nadaljevanje tistega, kar že več kot tri desetletja gradimo na naših kampih: izobraževanje, športno treniranje, mednarodno sodelovanje, prijateljstvo in prenos znanja na mlade.
              </p>
            </div>
          </div>

          {/* Otroci in prihodnje generacije */}
          <div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-[#0A0A0A] tracking-tight mb-6">
              Najpomembnejši ostajajo otroci in prihodnje generacije
            </h3>
            <div className="prose prose-lg max-w-none font-['Manrope'] text-[#52525B] leading-relaxed space-y-6">
              <p>
                Ko govorimo o olimpijskih medaljah, velikih mednarodnih tekmovanjih, 1.000 kvadratnih metrih tatamija in več kot tridesetletni tradiciji, ne smemo pozabiti, zaradi koga vse to počnemo.
              </p>
              <p className="font-semibold text-[#0A0A0A]">Zaradi otrok in mladih.</p>
              <p>
                Na fotografijah letošnjih kampov vidimo otroke, ki danes šele začenjajo svojo športno pot. Ob njih stojijo starejši tekmovalci, trenerji, evropski dobitniki medalj in olimpijska prvakinja.
              </p>
              <p>
                Pred desetletji so bili na njihovem mestu neki drugi otroci. Nekateri so pozneje postali vrhunski športniki in osvojili evropske, svetovne in olimpijske medalje.
              </p>
              <p>Danes je pred nami nova generacija.</p>
              <p>
                Naša odgovornost je, da ji zagotovimo znanje, kakovosten trening, izobraževanje, dobre pogoje, mednarodne izkušnje, prijateljstvo in možnost napredovanja.
              </p>
              <p>
                Zato povezujemo klube, generacije in občine. Zato širimo prostor za trening. Zato organiziramo kampe in mednarodna tekmovanja. In zato znanje, ki smo ga pridobivali več kot trideset let, predajamo naprej.
              </p>
              <p>
                Ne moremo vedeti, kateri otrok bo nekoč postal vrhunski športnik. Lahko pa ustvarimo okolje, v katerem bo vsak dobil možnost razviti svoje sposobnosti.
              </p>
              <p>
                Morda je prav med otroki, ki danes trenirajo na naših blazinah in se fotografirajo z olimpijsko prvakinjo, nekdo, ki bo nekoč osvojil naslednjo evropsko, svetovno ali olimpijsko medaljo.
              </p>
              <p>
                Takrat to ne bo samo uspeh enega športnika, enega kluba ali ene občine. To bo uspeh vseh, ki smo znanje ohranjali, ga razvijali, delili in prenašali iz generacije v generacijo.
              </p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 py-2 mt-8">
              <p className="font-['Manrope'] text-[#0A0A0A] font-semibold leading-relaxed">
                To je zgodba naših judo kampov – zgodba več kot tridesetih let znanja, izobraževanja, prijateljstva in sodelovanja ter hkrati zgodba prihodnosti juda na celotni slovenski Obali.
              </p>
            </div>
          </div>
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

          {/* Swapped images - now showing camp livade images - equal sizes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img
                src={IMG_CAMP_LIVADE_1}
                alt="Starejša skupina mladostnikov"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
                Starejša skupina mladostnikov.
              </p>
            </div>
            <div>
              <img
                src={IMG_CAMP_LIVADE_2}
                alt="Skupina vseh mlajših in starejših judoistov"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] italic text-center mt-4">
                Skupina vseh mlajših in starejših judoistov (manjkajo le naši najmlajši člani).
              </p>
            </div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Iztok Babič */}
            <div className="bg-white p-8 border border-[#E5E7EB]">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <div className="mb-6">
                <img
                  src={IMG_TRAINER_IZTOK}
                  alt="Iztok Babič"
                  className="w-full h-auto border border-[#E5E7EB]"
                />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0A0A] mb-1">
                Iztok Babič
              </h3>
              <p className="font-['Manrope'] text-sm text-[#D4AF37] mb-4">
                profesor športne vzgoje in Mentor športnega treniranja
              </p>
              <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed">
                Pedagoški vodja judo športne šole – s klubom ima sklenjeno volontersko pogodbo.
              </p>
              <a
                href={FACEBOOK_IZTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#52525B] hover:text-[#D4AF37] transition-colors font-['Manrope'] text-sm mt-4"
              >
                <Facebook className="h-4 w-4" />
                Facebook profil
              </a>
            </div>

            {/* Jaša Babič */}
            <div className="bg-white p-8 border border-[#E5E7EB]">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <div className="mb-6">
                <img
                  src={IMG_TRAINER_JASA}
                  alt="Jaša Babič"
                  className="w-full h-auto border border-[#E5E7EB]"
                />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0A0A] mb-1">
                Jaša Babič
              </h3>
              <p className="font-['Manrope'] text-sm text-[#D4AF37] mb-4">
                diplomant športnega treniranja (UN)
              </p>
              <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed">
                Glavni trener – pogodbeno zaposlen pri Judo klubu Izola s polnim delavnim časom.
              </p>
            </div>

            {/* Mojmir Kovač */}
            <div className="bg-white p-8 border border-[#E5E7EB]">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <div className="mb-6">
                <img
                  src={IMG_TRAINER_MOJMIR}
                  alt="Mojmir Kovač"
                  className="w-full h-auto border border-[#E5E7EB]"
                />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0A0A] mb-1">
                Mojmir Kovač
              </h3>
              <p className="font-['Manrope'] text-sm text-[#D4AF37] mb-4">
                trener 2. stopnje
              </p>
              <p className="font-['Manrope'] text-sm text-[#52525B] leading-relaxed">
                Zunanji strokovni delavec – s klubom ima sklenjeno volontersko pogodbo.
              </p>
            </div>

            {/* Oleksander Makhovsky */}
            <div className="bg-white p-8 border border-[#E5E7EB]">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <div className="mb-6">
                <img
                  src={IMG_TRAINER_OLEKSANDER}
                  alt="Oleksander Makhovsky"
                  className="w-full h-auto border border-[#E5E7EB]"
                />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#0A0A0A] mb-1">
                Oleksander Makhovsky
              </h3>
              <p className="font-['Manrope'] text-sm text-[#D4AF37] mb-4">
                pomočnik trenerja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section - After Trainers */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-4">
              Priznanje
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              Strokovni kader Judo športne šole Iztoka Babiča je pripeljal do izjemne predstavitve in priznanja
            </h2>
          </div>

          {/* Recognition Images Grid */}
          <div className="space-y-12">
            {/* First Image - Full Width */}
            <div>
              <img
                src={IMG_RECOGNITION_1}
                alt="Predstavitev na Evropskem kadetskem pokalu Koper 2024"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Predstavitev na Evropskem kadetskem pokalu Koper 2024: olimpijske prvakinje Andreje Leški in njenega prvega trenerja Iztoka Babiča.
              </p>
            </div>

            {/* Second Image - Full Width */}
            <div>
              <img
                src={IMG_RECOGNITION_2}
                alt="Podelitev šopka rož olimpijski šampionki"
                className="w-full h-auto border border-[#E5E7EB]"
              />
              <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                Mladi člani so olimpijski šampionki Andreji Leški na evropskem pokalu svečano podelili šopek rož.
              </p>
            </div>

            {/* Third and Fourth Images - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={IMG_RECOGNITION_3}
                  alt="Podelitev plakete"
                  className="w-full h-[400px] object-cover object-center border border-[#E5E7EB]"
                />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                  Andreja Leški je svojemu nekdanjemu trenerju Iztoku Babiču podelila plaketo, darilo Evropske judo zveze.
                </p>
              </div>
              <div>
                <img
                  src={IMG_RECOGNITION_4}
                  alt="Plaketa OI Pariz 2024"
                  className="w-full h-auto border border-[#E5E7EB]"
                />
                <p className="font-['Manrope'] text-sm text-[#52525B] mt-4 italic text-center">
                  Plaketa z vsemi evropskimi imeni dobitnikov medalj, ki so osvojili medaljo na OI Pariz 2024.
                </p>
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
