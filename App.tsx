
import React, { useState, useEffect } from 'react';
import { WifiIcon, ParkingIcon, AirConditionerIcon, BedIcon, StarIcon, PriceTagIcon, PhoneIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, InstagramIcon, FilledStarIcon } from './components/Icons';
import type { Feature, Review } from './types';

const CONTACT_NUMBER = "03000466682";
const CONTACT_LINK = `tel:${CONTACT_NUMBER}`;

const features: Feature[] = [
  {
    icon: <AirConditionerIcon />,
    title: 'Inverter AC',
    description: 'Enjoy a comfortable stay with our energy-efficient and powerful inverter air conditioners in every room.',
  },
  {
    icon: <WifiIcon />,
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access available throughout the guest house.',
  },
  {
    icon: <ParkingIcon />,
    title: 'Secure Parking',
    description: 'We offer safe and secure parking space for your vehicle, giving you peace of mind during your stay.',
  },
  {
    icon: <BedIcon />,
    title: '10 Comfortable Rooms',
    description: 'Choose from our 10 well-maintained and tastefully decorated rooms, designed for your relaxation.',
  },
  {
    icon: <PriceTagIcon />,
    title: 'Affordable Prices',
    description: 'Experience premium hospitality without breaking the bank. We offer competitive and budget-friendly rates.',
  },
  {
    icon: <StarIcon />,
    title: 'Excellent Service',
    description: 'Our dedicated staff is committed to providing you with exceptional service to make your stay memorable.',
  },
];

const galleryImages: { src: string; caption: string }[] = [
  {
    src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
    caption: 'Relax in our modern and spacious rooms, designed for ultimate comfort.',
  },
  {
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1932&auto=format&fit=crop',
    caption: 'Unwind in our comfortable lounge, the perfect place to relax.',
  },
  {
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    caption: 'Modern and clean bathrooms with all the essential amenities.',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop',
    caption: 'Well-appointed rooms with plush bedding for a restful night\'s sleep.',
  },
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    caption: 'Experience a warm welcome and exceptional service from the moment you arrive.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    caption: 'Each room is thoughtfully designed with attention to detail.',
  },
];

const reviews: Review[] = [
    {
      name: 'Ali Khan',
      rating: 5,
      comment: 'Absolutely loved my stay! The room was spotless, the staff was incredibly friendly, and the location is perfect. Highly recommended!',
    },
    {
      name: 'Fatima Ahmed',
      rating: 5,
      comment: 'A hidden gem in Islamabad. The service was top-notch, and the amenities like the fast WiFi and secure parking made my business trip hassle-free.',
    },
    {
      name: 'Usman Tariq',
      rating: 4,
      comment: 'Great value for money. The rooms are comfortable and clean. The staff is very cooperative. I will definitely stay here again on my next visit.',
    },
  ];

const Logo: React.FC = () => (
  <div className="flex items-center justify-center bg-green-700 text-white p-2 rounded-lg shadow-md w-64">
    <div className="flex items-center space-x-2">
      <svg width="40" height="40" viewBox="0 0 100 100" className="text-white">
        <path d="M20 20 L20 80 L30 80 L30 55 L45 55 L45 80 L55 80 L55 20 L45 20 L45 45 L30 45 L30 20 Z" fill="currentColor" />
        <path d="M60 20 L60 80 L70 80 L70 55 L85 55 L85 80 L95 80 L95 20 L85 20 L85 45 L70 45 L70 20 Z" fill="currentColor" />
      </svg>
      <div className="text-center">
        <span className="text-xl font-bold tracking-wider">ISLAMABAD</span>
        <span className="block text-sm font-semibold text-yellow-400">GUEST HOUSE</span>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Logo />
      <a href={CONTACT_LINK} className="hidden md:flex items-center space-x-2 px-6 py-2 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors">
        <PhoneIcon />
        <span>Book Now</span>
      </a>
    </nav>
  </header>
);

const Hero: React.FC = () => (
  <section 
    className="relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center" 
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1534351583645-81711836a89c?q=80&w=1974&auto=format&fit=crop')"}}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 text-center p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow">Welcome to Islamabad Guest House</h1>
      <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto text-shadow-sm">Your perfect retreat for comfort, service, and affordability in the heart of the city.</p>
    </div>
  </section>
);

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700 mb-4">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center text-yellow-400">
      {[...Array(rating)].map((_, i) => (
        <FilledStarIcon key={i} />
      ))}
    </div>
  );
  
  const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-stone-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <StarRating rating={review.rating} />
      <blockquote className="text-gray-600 italic mt-4 flex-grow">
        "{review.comment}"
      </blockquote>
      <p className="text-right text-green-700 font-bold mt-6">- {review.name}</p>
    </div>
  );


const App: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, showNextImage, showPrevImage]);

  return (
    <div className="bg-stone-50 min-h-screen">
      <Header />

      <main>
        <Hero />

        <section id="amenities" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Amenities</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We provide everything you need for a relaxing and productive stay.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-16 md:py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Guests Say</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Hear from our happy customers who enjoyed their stay with us.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Explore Our Rooms</h2>
              <p className="mt-4 text-lg text-gray-600">Clean, comfortable, and beautifully designed for your comfort.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer" onClick={() => openLightbox(index)}>
                  <img src={image.src} alt={image.caption} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-green-700 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready for a Memorable Stay?</h2>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-3xl mx-auto">Contact us now to book your room at an unbeatable price. We look forward to welcoming you!</p>
            <a href={CONTACT_LINK} className="inline-block bg-white text-green-700 font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-yellow-300 hover:text-green-800 transition-all transform hover:scale-105">
              Call Us: {CONTACT_NUMBER}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6 flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Islamabad Guest House. All Rights Reserved.</p>
        </div>
      </footer>
      
      <a href={CONTACT_LINK} className="fixed bottom-6 right-6 md:hidden z-50 flex items-center justify-center h-16 w-16 bg-green-700 text-white rounded-full shadow-lg animate-bounce hover:animate-none">
        <PhoneIcon />
      </a>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] transition-opacity duration-300"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[110]"
            aria-label="Close image gallery"
          >
            <CloseIcon />
          </button>

          <button
            onClick={showPrevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-[110]"
            aria-label="Previous image"
          >
            <ChevronLeftIcon />
          </button>

          <button
            onClick={showNextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-[110]"
            aria-label="Next image"
          >
            <ChevronRightIcon />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
            <div className="relative text-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white mt-4 text-base md:text-lg bg-black/50 p-2 rounded-md inline-block">
                {galleryImages[currentImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
