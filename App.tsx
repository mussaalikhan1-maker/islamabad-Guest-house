
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { WifiIcon, ParkingIcon, AirConditionerIcon, BedIcon, StarIcon, PriceTagIcon, PhoneIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon, FacebookIcon, InstagramIcon, FilledStarIcon, MapPinIcon, Loader, ExternalLinkIcon } from './components/Icons';
import type { Feature, Review, GroundingLink, MapData } from './types';

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
    caption: 'Step into a realm of tranquility. Our spacious rooms are meticulously designed with a modern aesthetic, plush furnishings, and calming tones to ensure your ultimate comfort.',
  },
  {
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1932&auto=format&fit=crop',
    caption: 'Our inviting lounge area offers a perfect blend of comfort and style. It\'s the ideal spot to unwind with a book, catch up on emails, or socialize with other guests.',
  },
  {
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    caption: 'Immaculate and modern, our bathrooms are equipped with high-quality fixtures and all the essential amenities to help you refresh and rejuvenate during your stay.',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop',
    caption: 'Drift into a peaceful slumber on our premium, plush bedding. Every room is a sanctuary designed for a restful night\'s sleep after a day of exploring Islamabad.',
  },
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop',
    caption: 'Experience the warm, welcoming ambiance from the moment you step in. Our commitment to excellent service ensures a personalized and memorable hospitality experience.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every corner of our guest house is thoughtfully designed with a keen eye for detail, blending functionality with elegance to create a truly comfortable and beautiful environment.',
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
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [groundingLinks, setGroundingLinks] = useState<GroundingLink[]>([]);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const locationSectionRef = useRef<HTMLElement>(null);
  const locationFetchInitiated = useRef(false);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    setIsZoomedIn(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsZoomedIn(false);
  };

  const showNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    setIsZoomedIn(false);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setIsZoomedIn(false);
  };

  const handleFetchLocationInfo = useCallback(async () => {
    if (locationFetchInitiated.current) return;
    locationFetchInitiated.current = true;

    setIsLocating(true);
    setLocationError(null);
    setMapData(null);
    setGroundingLinks([]);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

          const responseSchema = {
            type: Type.OBJECT,
            properties: {
              directions: {
                type: Type.STRING,
                description: "Turn-by-turn directions from the user's location to the guest house, formatted as a single string with newlines."
              },
              guestHouse: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "The name of the guest house." },
                  description: { type: Type.STRING, description: "A brief description of the guest house location." },
                  latitude: { type: Type.NUMBER, description: "Latitude of the guest house." },
                  longitude: { type: Type.NUMBER, description: "Longitude of the guest house." },
                },
                required: ['name', 'latitude', 'longitude']
              },
              nearbyPlaces: {
                type: Type.ARRAY,
                description: "A list of 5 popular tourist attractions or restaurants near the guest house.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: "Name of the place." },
                    description: { type: Type.STRING, description: "A brief, one-sentence description of the place." },
                    latitude: { type: Type.NUMBER, description: "Latitude of the place." },
                    longitude: { type: Type.NUMBER, description: "Longitude of the place." },
                  },
                  required: ['name', 'description', 'latitude', 'longitude']
                }
              }
            },
            required: ['directions', 'guestHouse', 'nearbyPlaces']
          };

          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Based on my current location (latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}), provide directions to 'Islamabad Guest House, Islamabad'. Also, find its coordinates. Then, list exactly 5 popular tourist attractions or restaurants near the guest house, including a brief, one-sentence description and the precise latitude and longitude for each.`,
            config: {
              tools: [{ googleMaps: {} }],
              responseMimeType: "application/json",
              responseSchema: responseSchema,
              toolConfig: {
                retrievalConfig: {
                  latLng: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  },
                },
              },
            },
          });
          
          const resultText = response.text;
          const resultData: MapData = JSON.parse(resultText);
          setMapData(resultData);

          const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
          if (chunks) {
            const links: GroundingLink[] = chunks
              .map((chunk: any) => ({
                uri: chunk.maps?.uri || '',
                title: chunk.maps?.title || 'Source',
              }))
              .filter((link: GroundingLink) => link.uri);
            setGroundingLinks(links);
          }
        } catch (error) {
          console.error("Error fetching location info from Gemini:", error);
          setLocationError("Sorry, we couldn't fetch location details right now. Please try again later.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("You denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("The request to get user location timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
        setIsLocating(false);
      }
    );
  }, []);

  useEffect(() => {
    const currentRef = locationSectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                handleFetchLocationInfo();
                observer.unobserve(currentRef); 
            }
        },
        {
            threshold: 0.1, 
        }
    );

    observer.observe(currentRef);

    return () => {
        observer.disconnect();
    };
  }, [handleFetchLocationInfo]);

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

        <section id="location" className="py-16 md:py-24 bg-stone-50" ref={locationSectionRef}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Find Us & Explore</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get personalized directions and discover popular attractions near you.</p>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <button 
                onClick={handleFetchLocationInfo} 
                disabled={isLocating}
                className="inline-flex items-center justify-center bg-green-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-green-800 transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
              >
                <MapPinIcon />
                <span className='ml-2'>Show Directions & Nearby Places</span>
              </button>

              {isLocating && <Loader />}
              {locationError && <p className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">{locationError}</p>}
              
              {mapData && (
                <div className="mt-8 text-left bg-white p-6 rounded-xl shadow-lg animate-fade-in space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Personalized Map</h3>
                        <div className="relative h-96 w-full rounded-lg overflow-hidden border-2 border-gray-200">
                            <iframe
                                src={`https://maps.google.com/maps?q=${mapData.guestHouse.latitude},${mapData.guestHouse.longitude}&z=15&output=embed`}
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map of ${mapData.guestHouse.name}`}
                            ></iframe>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Directions to {mapData.guestHouse.name}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{mapData.directions}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nearby Attractions & Restaurants</h3>
                        <ul className="space-y-4">
                            {mapData.nearbyPlaces.map((place, index) => (
                                <li key={index} className="p-4 bg-stone-100 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{place.name}</h4>
                                            <p className="text-gray-600 mt-1">{place.description}</p>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps?q=${place.latitude},${place.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm bg-green-100 text-green-800 font-semibold py-1 px-3 rounded-full hover:bg-green-200 transition-colors flex-shrink-0"
                                        >
                                            View Map <ExternalLinkIcon />
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {groundingLinks.length > 0 && (
                        <div className="border-t pt-6">
                            <h4 className="font-bold text-gray-800 mb-2">Sources from Google Maps:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {groundingLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.uri} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
              )}
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
                className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 ${isZoomedIn ? 'scale-125 md:scale-150' : 'scale-100'} ${isZoomedIn ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomedIn(!isZoomedIn)}
              />
              <p className="text-white mt-4 text-base md:text-lg bg-black/50 p-2 rounded-md inline-block max-w-2xl">
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
