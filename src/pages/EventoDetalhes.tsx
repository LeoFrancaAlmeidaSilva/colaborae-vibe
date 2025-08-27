import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Music, ArrowLeft, ExternalLink } from 'lucide-react';
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
  fullDescription: string;
  price: string;
  category: string;
  capacity: number;
  artist: string;
  ticketUrl: string;
  status: 'available' | 'sold-out' | 'last-tickets';
}

// Mock event data - in real app this would come from API
const mockEvents: Event[] = [
  {
    id: 'noite-eletronica-setembro',
    title: 'Noite Eletrônica',
    date: '15 SET',
    time: '22:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Uma noite inesquecível com os melhores DJs da cena eletrônica baiana',
    fullDescription: 'Prepare-se para uma experiência sonora única no coração do Rio Vermelho. Nossa Noite Eletrônica traz os beats mais quentes da cena underground baiana, com uma curadoria especial que mistura house, techno e breakbeat. O ambiente intimista do Colaboraê se transforma em uma pista de dança vibrante, onde cada batida ecoa pelas paredes históricas deste espaço cultural icônico.',
    price: 'R$ 25,00',
    category: 'eletronica',
    capacity: 200,
    artist: 'DJ Maré + Convidados',
    ticketUrl: 'https://exemplo.com/ingressos',
    status: 'available'
  },
  {
    id: 'samba-de-roda-setembro',
    title: 'Samba de Roda',
    date: '22 SET',
    time: '20:00',
    location: 'Colaboraê',
    image: heroEventImage,
    description: 'Tradição e cultura baiana em uma roda de samba autêntica',
    fullDescription: 'O samba de roda patrimônio cultural imaterial da humanidade ganha vida no Colaboraê. Uma experiência autêntica que celebra as raízes da cultura baiana, com mestres sambadores, percussionistas renomados e a energia contagiante que só a Bahia sabe criar. Venha fazer parte desta roda e se conectar com a essência da nossa terra.',
    price: 'R$ 20,00',
    category: 'cultura',
    capacity: 150,
    artist: 'Mestre João do Samba + Roda Cultural',
    ticketUrl: 'https://exemplo.com/ingressos-samba',
    status: 'last-tickets'
  }
];

const EventoDetalhes = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = mockEvents.find(e => e.id === slug);

  if (!event) {
    return (
      <div className="min-h-screen section-dark">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display font-bold text-4xl text-white mb-4">Evento não encontrado</h1>
            <Link to="/eventos">
              <Button variant="hero">Voltar para Eventos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sold-out': return 'bg-colaborae-coral';
      case 'last-tickets': return 'bg-orange-500';
      default: return 'bg-colaborae-green';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'sold-out': return 'ESGOTADO';
      case 'last-tickets': return 'ÚLTIMOS INGRESSOS';
      default: return 'DISPONÍVEL';
    }
  };

  return (
    <div className="min-h-screen section-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link to="/eventos" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body">Voltar para Eventos</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Event Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 ${getStatusColor(event.status)} text-white px-3 py-1 rounded-full font-body font-medium text-sm`}>
                  {getStatusText(event.status)}
                </div>
              </div>

              {/* Event Details */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-colaborae-cyan/20 text-colaborae-cyan px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                    {event.category.toUpperCase()}
                  </span>
                </div>
                
                <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                  {event.title}
                </h1>
                
                <p className="font-body text-xl text-white/80 mb-8 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Info Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-colaborae-green/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-colaborae-green" />
                    </div>
                    <div>
                      <p className="font-body text-white/60 text-sm">Data</p>
                      <p className="font-body text-white font-medium">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-colaborae-coral/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-colaborae-coral" />
                    </div>
                    <div>
                      <p className="font-body text-white/60 text-sm">Horário</p>
                      <p className="font-body text-white font-medium">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-colaborae-cyan/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-colaborae-cyan" />
                    </div>
                    <div>
                      <p className="font-body text-white/60 text-sm">Local</p>
                      <p className="font-body text-white font-medium">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-body text-white/60 text-sm">Capacidade</p>
                      <p className="font-body text-white font-medium">{event.capacity} pessoas</p>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 mb-8">
                  <div>
                    <p className="font-body text-white/60 text-sm">Ingresso</p>
                    <p className="font-display font-bold text-2xl text-white">{event.price}</p>
                  </div>
                  
                  {event.status !== 'sold-out' ? (
                    <Button variant="hero" size="lg" className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      Comprar Ingresso
                    </Button>
                  ) : (
                    <Button variant="outline" size="lg" disabled className="opacity-50">
                      Esgotado
                    </Button>
                  )}
                </div>

                {/* Artist Info */}
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-colaborae-green" />
                  <span className="font-body text-white/80">
                    <strong className="text-white">Artista:</strong> {event.artist}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-white mb-6">
              Sobre o Evento
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="font-body text-white/80 text-lg leading-relaxed">
                {event.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                Local do Evento
              </h2>
              <p className="font-body text-white/70 text-lg">
                Rua da Paciência, 42 - Rio Vermelho, Salvador - BA
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-colaborae-green/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-colaborae-green text-3xl">🚗</span>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">Estacionamento</h3>
                  <p className="font-body text-white/70 text-sm">Vagas limitadas no local</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-colaborae-coral/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-colaborae-coral text-3xl">🚌</span>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">Transporte</h3>
                  <p className="font-body text-white/70 text-sm">Linhas 1003, 1004, 1005</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-colaborae-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-colaborae-cyan text-3xl">🍺</span>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">Bistrô</h3>
                  <p className="font-body text-white/70 text-sm">Gastronomia baiana disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventoDetalhes;