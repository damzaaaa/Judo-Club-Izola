import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useLang } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

// Shared event metadata (images), text comes from translations
const EVENTS_META = [
  {
    id: 'poletje-na-tatamiju-2026',
    date: '2026',
    coverImage: "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/sgl8eclb_20260805_184011.webp",
    photoUrls: [
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/sgl8eclb_20260805_184011.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/3flfkg3w_20260807_085212.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/6i5mcsgo_20260806_173858.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/t2fowaqk_20260806_173844.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/r1tewi1y_Slika%20%C5%A1e%20s%20Andrejo%20le%C5%A1ki%20in%20predsednikom%20kluba.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/o5lpkeom_Polaganje%20mojstrskega%20pasu%20pred%20komisijo.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/9gzrrkwa_Trener%20Ja%C5%A1a%20in%20Nina%20z%20diplomo%201.%20dan.webp",
    ],
  },
  {
    id: 'andreja-in-ekipa-2026',
    date: '2026',
    coverImage: "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/wg3a10zd_Andreja%20in%20na%C5%A1a%20ekipa.webp",
    photoUrls: [
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/wg3a10zd_Andreja%20in%20na%C5%A1a%20ekipa.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/3dfocqey_Diana%20in%20Andreja%20pri%20demonstraciji.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/loai83ri_POLETNI%20JUDO%20KAMP%20IZOLA.webp",
      "https://customer-assets-7cd3h4nn.emergentagent.net/job_izola-judo-club/artifacts/lynsuwk0_Jaka%20je%20v%20kampu%20potreboval%20fizioterapijo.webp",
    ],
  },
  {
    id: 'pokal-bezigrad-2024',
    date: '2024',
    coverImage: "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zuprkk1x_image.png",
    photoUrls: [
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zuprkk1x_image.png",
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/zrkl7xcq_image.png",
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/ojg8ckaj_image.png",
    ],
  },
  {
    id: 'andrea-leski-2024',
    date: '2024',
    coverImage: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp",
    photoUrls: [
      "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp",
      "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lm6c8pu4_Demonstracija%20vtopa%20z%20izravnote%C5%BEenjem.webp",
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/990d3srx_Demonstracija%20prijema.webp",
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/nn8ic7xd_Uspe%C5%A1en%20primer%20izravnote%C5%BEenja.webp",
      "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp",
      "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/3by1lev3_NAZDRAVILI%20K%20USPEHU%20NOVEGA%20PROJEKTA%20NAMENJEM%20MLADIM%20%C5%A0PORTNIKOM.webp",
    ],
  },
];

export default function Galerija() {
  const { t } = useLang();
  const g = t.galerija;

  const events = EVENTS_META.map((meta) => {
    const text = g.events[meta.id] || { title: '', description: '', photos: [] };
    return {
      ...meta,
      title: text.title,
      description: text.description,
      photos: meta.photoUrls.map((url, i) => ({ url, ...(text.photos?.[i] || {}) })),
    };
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openEvent = (event) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  const goToPrevious = () => {
    if (!selectedEvent) return;
    const newIndex = currentPhotoIndex === 0 ? selectedEvent.photos.length - 1 : currentPhotoIndex - 1;
    setCurrentPhotoIndex(newIndex);
  };

  const goToNext = () => {
    if (!selectedEvent) return;
    const newIndex = currentPhotoIndex === selectedEvent.photos.length - 1 ? 0 : currentPhotoIndex + 1;
    setCurrentPhotoIndex(newIndex);
  };

  return (
    <div data-testid="galerija-page" className="min-h-screen pt-20">
      <SEO title={t.seo.galerija.title} description={t.seo.galerija.description} keywords={t.seo.galerija.keywords} path="/galerija" />
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              {g.hero.label}
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              {g.hero.title}
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              {g.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer"
                onClick={() => openEvent(event)}
                data-testid={`event-card-${event.id}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F9F9F9]">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Event Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block text-[#D4AF37] text-xs font-['Manrope'] font-semibold tracking-wider uppercase mb-2">
                      {event.date} • {event.photos.length} {g.photosWord}
                    </span>
                    <h3 className="font-['Outfit'] text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                      {event.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-gray-300 line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#D4AF37] font-['Manrope'] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>{g.open}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Events Coming */}
          <div className="mt-20 text-center">
            <div className="inline-block border border-[#E5E7EB] px-8 py-6">
              <p className="font-['Manrope'] text-sm text-[#52525B]">
                {g.moreSoon}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Dialog */}
      <DialogPrimitive.Root open={selectedEvent !== null} onOpenChange={closeEvent}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm" />
          <DialogPrimitive.Content 
            className="fixed inset-0 z-50 flex flex-col"
            data-testid="event-gallery-dialog"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-black/20 bg-white flex-shrink-0">
              <div>
                {selectedEvent && (
                  <>
                    <DialogPrimitive.Title asChild>
                      <h3 className="font-['Outfit'] text-base md:text-lg font-semibold text-[#0A0A0A]">
                        {selectedEvent.title}
                      </h3>
                    </DialogPrimitive.Title>
                    <p className="font-['Manrope'] text-sm text-[#52525B] mt-1">
                      {currentPhotoIndex + 1} / {selectedEvent.photos.length}
                    </p>
                  </>
                )}
              </div>
              <button
                onClick={closeEvent}
                className="p-2 bg-[#0A0A0A]/10 hover:bg-[#0A0A0A]/20 rounded-full transition-colors"
                data-testid="gallery-close"
                aria-label={g.close}
              >
                <X className="h-6 w-6 text-[#0A0A0A]" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 min-h-0 flex items-center justify-center relative px-14 md:px-20 py-4 md:py-6 bg-[#F5F5F5]">
              {/* Previous Button */}
              {selectedEvent && selectedEvent.photos.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 md:left-6 z-50 p-2 md:p-4 bg-white shadow-lg hover:bg-[#D4AF37] hover:text-white rounded-full transition-all text-[#0A0A0A] border border-[#E5E7EB]"
                  data-testid="gallery-prev"
                  aria-label={g.prev}
                >
                  <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              )}

              {/* Image */}
              {selectedEvent && (
                <div className="flex flex-col items-center justify-center h-full w-full min-h-0">
                  <img
                    src={selectedEvent.photos[currentPhotoIndex].url}
                    alt={selectedEvent.photos[currentPhotoIndex].title}
                    className="max-w-full flex-1 min-h-0 object-contain shadow-2xl"
                  />
                  <div className="mt-3 md:mt-4 text-center bg-white px-4 md:px-8 py-2 md:py-3 rounded shadow-md border border-[#E5E7EB] flex-shrink-0 max-w-full">
                    <h4 className="font-['Outfit'] text-sm md:text-base font-semibold text-[#0A0A0A]">
                      {selectedEvent.photos[currentPhotoIndex].title}
                    </h4>
                    <p className="font-['Manrope'] text-xs md:text-sm text-[#52525B] mt-0.5">
                      {selectedEvent.photos[currentPhotoIndex].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Next Button */}
              {selectedEvent && selectedEvent.photos.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-2 md:right-6 z-50 p-2 md:p-4 bg-white shadow-lg hover:bg-[#D4AF37] hover:text-white rounded-full transition-all text-[#0A0A0A] border border-[#E5E7EB]"
                  data-testid="gallery-next"
                  aria-label={g.next}
                >
                  <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {selectedEvent && selectedEvent.photos.length > 1 && (
              <div className="p-3 md:p-4 border-t border-[#E5E7EB] bg-white flex-shrink-0">
                <div className="flex gap-3 justify-start md:justify-center overflow-x-auto pb-1">
                  {selectedEvent.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 overflow-hidden transition-all rounded ${
                        index === currentPhotoIndex 
                          ? 'ring-2 ring-[#D4AF37] opacity-100' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      data-testid={`thumbnail-${index}`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}
