
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  serviceType: string;
}

const ImageGallery = ({ serviceType }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  // Sample images for each service type
  const serviceImages = {
    'wedding-love': [
      '/packagesimg/wedding/1.jpg',
      '/packagesimg/wedding/2.jpg',
      '/packagesimg/wedding/3.jpg',
      '/packagesimg/wedding/4.jpg',
      '/packagesimg/wedding/5.jpg',
    ],
    'wedding-honey': [
      '/packagesimg/wedding/6.jpg',
      '/packagesimg/wedding/7.jpg',
      '/packagesimg/wedding/8.jpg',
      '/packagesimg/wedding/9.jpg',
      '/packagesimg/wedding/10.jpg',
    ],
    'debutant-roses': [
      '/packagesimg/debutant/1.jpg',
      '/packagesimg/debutant/2.jpg',
      '/packagesimg/debutant/3.jpg',
      '/packagesimg/debutant/4.jpg',
      '/packagesimg/debutant/5.jpg',
    ],
    'debutant-treasures': [
      '/packagesimg/debutant/6.jpg',
      '/packagesimg/debutant/7.jpg',
      '/packagesimg/debutant/8.jpg',
      '/packagesimg/debutant/9.jpg',
      '/packagesimg/debutant/10.jpg',
    ],
    'birthday-baptismal-adventure': [
      '/packagesimg/bbap/1.jpg',
      '/packagesimg/bbap/2.jpg',
      '/packagesimg/bbap/3.jpg',
      '/packagesimg/bbap/4.jpg',
      '/packagesimg/bbap/5.jpg',
    ],
    'birthday-baptismal-fantasy': [
      '/packagesimg/bbap/6.jpg',
      '/packagesimg/bbap/7.jpg',
      '/packagesimg/bbap/8.jpg',
      '/packagesimg/bbap/9.jpg',
      '/packagesimg/bbap/10.jpg',
    ]
  };

  const images = serviceImages[serviceType as keyof typeof serviceImages] || serviceImages['wedding-catering'];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Gallery</h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                    <div className="relative">
                      <img
                        src={selectedImage || image}
                        alt={`Gallery image ${index + 1} - Zoomed`}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-white/80 hover:bg-white shadow-lg" />
          <CarouselNext className="right-2 md:-right-12 bg-white/80 hover:bg-white shadow-lg" />
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGallery;
