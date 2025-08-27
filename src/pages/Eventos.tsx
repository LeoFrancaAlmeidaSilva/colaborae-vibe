import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Filter, Ticket } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  category: string;
  price: string;
  status: 'available' | 'sold-out' | 'coming-soon';
}

const mockEvents: Event[] = [
  {
    id: 'noite-eletronica-setembro',
    title: 'Noite Eletrônica',
    date: '15 SET 2024',
    time: '22:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Uma noite inesquecível com os melhores DJs da cena eletrônica baiana. Prepare-se para uma viagem sonora única.',
    category: 'eletronica',
    price: 'R$ 30,00',
    status: 'available'
  },
  {
    id: 'samba-de-roda-setembro',
    title: 'Samba de Roda',
    date: '22 SET 2024',
    time: '20:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Tradição e cultura baiana em uma noite especial de samba de roda com mestres da música tradicional.',
    category: 'samba',
    price: 'R$ 25,00',
    status: 'available'
  },
  {
    id: 'jazz-blues-night-setembro',
    title: 'Jazz & Blues Night',
    date: '29 SET 2024',
    time: '21:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Os clássicos do jazz e blues em uma atmosfera intimista com músicos renomados.',
    category: 'jazz',
    price: 'R$ 35,00',
    status: 'coming-soon'
  },
  {
    id: 'axe-music-festival-outubro',
    title: 'Axé Music Festival',
    date: '05 OUT 2024',
    time: '19:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Celebração da música baiana com grandes nomes do axé music em uma festa inesquecível.',
    category: 'axe',
    price: 'R$ 40,00',
    status: 'sold-out'
  },
  {
    id: 'rap-nacional-outubro',
    title: 'Rap Nacional',
    date: '12 OUT 2024',
    time: '21:30',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Os melhores MCs do rap nacional em uma noite de rimas, batidas e muita energia.',
    category: 'rap',
    price: 'R$ 28,00',
    status: 'available'
  },
  {
    id: 'bossa-nova-experience-outubro',
    title: 'Bossa Nova Experience',
    date: '19 OUT 2024',
    time: '20:30',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Uma homenagem à bossa nova com interpretações sofisticadas dos grandes clássicos.',
    category: 'bossa',
    price: 'R$ 32,00',
    status: 'available'
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'eletronica', label: 'Eletrônica' },
  { id: 'samba', label: 'Samba' },
  { id: 'jazz', label: 'Jazz' },
  { id: 'axe', label: 'Axé' },
  { id: 'rap', label: 'Rap' },
  { id: 'bossa', label: 'Bossa Nova' }
];

const Eventos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  const getStatusBadge = (status: Event['status']) => {
    switch (status) {
      case 'available':
        return <span className="bg-colaborae-green/20 text-colaborae-green px-3 py-1 rounded-full text-xs font-medium">Disponível</span>;
      case 'sold-out':
        return <span className="bg-colaborae-coral/20 text-colaborae-coral px-3 py-1 rounded-full text-xs font-medium">Esgotado</span>;
      case 'coming-soon':
        return <span className="bg-colaborae-cyan/20 text-colaborae-cyan px-3 py-1 rounded-full text-xs font-medium">Em breve</span>;
    }
  };

  const getActionButton = (event: Event) => {
    switch (event.status) {
      case 'available':
        return (
          <Button variant="ticket" size="lg" className="w-full">
            <Ticket className="w-4 h-4" />
            Comprar - {event.price}
          </Button>
        );
      case 'sold-out':
        return (
          <Button variant="outline" size="lg" disabled className="w-full">
            Ingressos Esgotados
          </Button>
        );
      case 'coming-soon':
        return (
          <Button variant="neon" size="lg" className="w-full">
            Notificar quando abrir
          </Button>
        );
    }
  };

  return (
    <div className="min-h-screen section-events">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
              Próximos <span className="neon-cyan">Eventos</span>
            </h1>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              Mergulhe na vibrante cena cultural do Rio Vermelho. Cada evento é uma 
              experiência única que conecta pessoas através da música e da arte.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Filter className="w-5 h-5 text-colaborae-cyan" />
              <h2 className="font-display font-semibold text-white text-lg">Filtrar por categoria:</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-body font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-colaborae-cyan text-white shadow-lg shadow-colaborae-cyan/25'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="glass-card p-6 hover:bg-white/15 transition-all duration-300 group">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {event.title}
                  </h3>

                  <p className="font-body text-white/70 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar className="w-4 h-4 text-colaborae-cyan" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock className="w-4 h-4 text-colaborae-green" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin className="w-4 h-4 text-colaborae-coral" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Link to={`/eventos/${event.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-white border-white/20 hover:bg-white/10">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>

                  {getActionButton(event)}
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white/40" />
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">
                  Nenhum evento encontrado
                </h3>
                <p className="font-body text-white/60">
                  Não há eventos para a categoria selecionada no momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventos;