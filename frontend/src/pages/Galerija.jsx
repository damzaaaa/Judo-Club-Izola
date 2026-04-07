import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Image URLs
const IMAGES = [
  {
    url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lm6c8pu4_Demonstracija%20vtopa%20z%20izravnote%C5%BEenjem.webp",
    title: "Demonstracija vtopa z izravnoteženjem",
    description: "Andrea Leški prikazuje tehniko na treningu",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/kbs2nshy_Nadzor%20vadbe.webp",
    title: "Nadzor vadbe",
    description: "Olimpijska prvakinja nadzoruje vadbo članov",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_ad56f1e8-e5f7-431f-947a-6697b9684b20/artifacts/lhho1c0o_Skupina%20mlaj%C5%A1ih%20judoistov.webp",
    title: "Skupina mlajših judoistov",
    description: "Naši mladi judoisti po treningu",
  },
];

export default function Galerija() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(IMAGES[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === IMAGES.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(IMAGES[newIndex]);
  };

  return (
    <div data-testid="galerija-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block uppercase text-xs tracking-[0.2em] text-[#D4AF37] font-semibold font-['Manrope'] mb-6">
              Galerija
            </span>
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tighter leading-none mb-6">
              Foto utrinki
            </h1>
            <p className="font-['Manrope'] text-base lg:text-lg text-[#52525B] leading-relaxed">
              Trenutki, ki jih hranimo. Treningi, tekmovanja in dogodki, ki gradijo našo zgodbo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Images - Larger */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {IMAGES.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden bg-[#F9F9F9]"
                onClick={() => openLightbox(image, index)}
                data-testid={`gallery-image-featured-${index}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-['Outfit'] text-lg font-semibold text-white">
                      {image.title}
                    </h3>
                    <p className="font-['Manrope'] text-sm text-gray-200 mt-1">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Smaller Images */}
          <div className="grid md:grid-cols-3 gap-8">
            {IMAGES.slice(2).map((image, index) => (
              <div
                key={index + 2}
                className="group cursor-pointer overflow-hidden bg-[#F9F9F9]"
                onClick={() => openLightbox(image, index + 2)}
                data-testid={`gallery-image-${index + 2}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-['Outfit'] text-base font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Photos Coming Soon */}
          <div className="mt-16 text-center">
            <p className="font-['Manrope'] text-sm text-[#52525B]">
              Več fotografij kmalu...
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <DialogPrimitive.Root open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95" />
          <DialogPrimitive.Content 
            className="fixed inset-0 z-50 flex items-center justify-center"
            data-testid="lightbox-dialog"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              data-testid="lightbox-close"
              aria-label="Zapri"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              data-testid="lightbox-prev"
              aria-label="Prejšnja"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Image */}
            {selectedImage && (
              <div className="flex flex-col items-center justify-center p-8 max-w-full max-h-full">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-[90vw] max-h-[75vh] object-contain"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-['Outfit'] text-lg font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="font-['Manrope'] text-sm text-gray-400 mt-1">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              data-testid="lightbox-next"
              aria-label="Naslednja"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <p className="font-['Manrope'] text-sm text-gray-400">
                {currentIndex + 1} / {IMAGES.length}
              </p>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}
