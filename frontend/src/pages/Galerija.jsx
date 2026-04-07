import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Events with photos
const EVENTS = [
  {
    id: 'andrea-leski-2024',
    title: 'Olimpijska prvakinja Andrea Leški v Judo klubu Izola',
    date: '2024',
    coverImage: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp",
    description: 'Trening, ki ga ne pozabiš! Olimpijska prvakinja Andrea Leški je obiskala naš klub.',
    photos: [
      {
        url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp",
        title: "Nadzor vadbe",
        description: "Andrea Leški nadzoruje vadbo članov"
      },
      {
        url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lm6c8pu4_Demonstracija%20vtopa%20z%20izravnote%C5%BEenjem.webp",
        title: "Demonstracija vtopa z izravnoteženjem",
        description: "Andrea Leški prikazuje tehniko"
      },
      {
        url: "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/990d3srx_Demonstracija%20prijema.webp",
        title: "Demonstracija prijema",
        description: "Prikaz judo prijema"
      },
      {
        url: "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/nn8ic7xd_Uspe%C5%A1en%20primer%20izravnote%C5%BEenja.webp",
        title: "Uspešen primer izravnoteženja",
        description: "Andrea prikazuje izravnoteženje"
      },
      {
        url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp",
        title: "Skupina mlajših judoistov",
        description: "Naši mladi judoisti po treningu"
      },
      {
        url: "https://customer-assets.emergentagent.com/job_izola-judo-club/artifacts/3by1lev3_NAZDRAVILI%20K%20USPEHU%20NOVEGA%20PROJEKTA%20NAMENJEM%20MLADIM%20%C5%A0PORTNIKOM.webp",
        title: "Nazdravili k uspehu novega projekta",
        description: "Praznovanje uspešnega projekta namenjenega mladim športnikom"
      },
    ]
  }
];

export default function Galerija() {
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
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.3em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Galerija
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              Foto utrinki
            </h1>
            <p className="font-['Manrope'] text-lg text-gray-400 leading-relaxed">
              Trenutki, ki jih hranimo. Treningi, tekmovanja in dogodki, ki gradijo našo zgodbo.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {EVENTS.map((event) => (
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
                      {event.date} • {event.photos.length} fotografij
                    </span>
                    <h3 className="font-['Outfit'] text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                      {event.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-gray-300 line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#D4AF37] font-['Manrope'] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Odpri galerijo</span>
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
                Več dogodkov kmalu...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Dialog */}
      <DialogPrimitive.Root open={selectedEvent !== null} onOpenChange={closeEvent}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-sm" />
          <DialogPrimitive.Content 
            className="fixed inset-0 z-50 flex flex-col"
            data-testid="event-gallery-dialog"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                {selectedEvent && (
                  <>
                    <h3 className="font-['Outfit'] text-lg font-semibold text-white">
                      {selectedEvent.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-gray-400 mt-1">
                      {currentPhotoIndex + 1} / {selectedEvent.photos.length}
                    </p>
                  </>
                )}
              </div>
              <button
                onClick={closeEvent}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                data-testid="gallery-close"
                aria-label="Zapri"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 flex items-center justify-center relative px-16">
              {/* Previous Button */}
              {selectedEvent && selectedEvent.photos.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] rounded-full transition-all text-white"
                  data-testid="gallery-prev"
                  aria-label="Prejšnja"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Image */}
              {selectedEvent && (
                <div className="flex flex-col items-center justify-center max-h-full">
                  <img
                    src={selectedEvent.photos[currentPhotoIndex].url}
                    alt={selectedEvent.photos[currentPhotoIndex].title}
                    className="max-w-[85vw] max-h-[65vh] object-contain"
                  />
                  <div className="mt-6 text-center">
                    <h4 className="font-['Outfit'] text-lg font-semibold text-white">
                      {selectedEvent.photos[currentPhotoIndex].title}
                    </h4>
                    <p className="font-['Manrope'] text-sm text-gray-400 mt-1">
                      {selectedEvent.photos[currentPhotoIndex].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Next Button */}
              {selectedEvent && selectedEvent.photos.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] rounded-full transition-all text-white"
                  data-testid="gallery-next"
                  aria-label="Naslednja"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {selectedEvent && selectedEvent.photos.length > 1 && (
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                  {selectedEvent.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 overflow-hidden transition-all ${
                        index === currentPhotoIndex 
                          ? 'ring-2 ring-[#D4AF37] opacity-100' 
                          : 'opacity-50 hover:opacity-80'
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
