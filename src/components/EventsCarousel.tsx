import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroEventImage from '@/assets/hero-event.jpg';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

const mockEvents: Event[] = [
  {
    id: 'noite-eletronica-setembro',
    title: 'Noite Eletrônica',
    date: '15 SET',
    time: '22:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Uma noite inesquecível com os melhores DJs da cena eletrônica baiana'
  },
  {
    id: 'samba-de-roda-setembro',
    title: 'Samba de Roda',
    date: '22 SET',
    time: '20:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Tradição e cultura baiana em uma noite especial'
  },
  {
    id: 'jazz-blues-night-setembro',
    title: 'Jazz & Blues Night',
    date: '29 SET',
    time: '21:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Os clássicos do jazz e blues em uma atmosfera intimista'
  }
];

const EventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockEvents.length) % mockEvents.length);
  };

  return (
    <section className="section-hero min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block bg-colaborae-cyan/20 text-colaborae-cyan px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                  PRÓXIMO EVENTO
                </span>
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
                {mockEvents[currentSlide].title}
              </h1>
              
              <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {mockEvents[currentSlide].description}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-colaborae-cyan" />
                  <span className="font-body">{mockEvents[currentSlide].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-colaborae-cyan" />
                  <span className="font-body">{mockEvents[currentSlide].time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-colaborae-cyan" />
                  <span className="font-body">{mockEvents[currentSlide].location}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Comprar Ingresso
                </Button>
                <Link to={`/eventos/${mockEvents[currentSlide].id}`}>
                  <Button variant="glass" size="lg">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {mockEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-colaborae-cyan' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;