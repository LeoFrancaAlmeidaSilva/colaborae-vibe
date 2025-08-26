import { Download, Phone, Clock, ChefHat, Utensils, Star, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import bistroImage from '@/assets/bistro-interior.jpg';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

const menuHighlights: MenuItem[] = [
  {
    id: '1',
    name: 'Moqueca Baiana Tradicional',
    description: 'Peixe fresco no leite de coco com dendê, pimentões e coentro. Acompanha farofa de dendê e arroz de jasmin.',
    price: 'R$ 45,00',
    category: 'Pratos Principais',
    image: bistroImage,
    featured: true
  },
  {
    id: '2',
    name: 'Bobó de Camarão',
    description: 'Cremoso bobó de mandioca com camarões frescos, leite de coco e temperos especiais da casa.',
    price: 'R$ 38,00',
    category: 'Pratos Principais',
    image: bistroImage,
    featured: true
  },
  {
    id: '3',
    name: 'Acarajé Gourmet',
    description: 'Acarajé artesanal recheado com vatapá, caruru, camarão seco e pimenta de cheiro.',
    price: 'R$ 18,00',
    category: 'Petiscos',
    image: bistroImage
  },
  {
    id: '4',
    name: 'Cocada de Forno Colaboraê',
    description: 'Sobremesa exclusiva da casa com coco fresco, leite condensado e toque de canela.',
    price: 'R$ 12,00',
    category: 'Sobremesas',
    image: bistroImage
  },
  {
    id: '5',
    name: 'Caipirinha de Cajá',
    description: 'Drink refrescante com cachaça artesanal, cajá fresco e açúcar mascavo.',
    price: 'R$ 16,00',
    category: 'Bebidas',
    image: bistroImage
  },
  {
    id: '6',
    name: 'Casquinha de Siri',
    description: 'Tradicional casquinha com siri catado na hora, temperos baianos e farofa crocante.',
    price: 'R$ 22,00',
    category: 'Petiscos',
    image: bistroImage
  }
];

const features = [
  {
    icon: ChefHat,
    title: 'Chef Especializado',
    description: 'Comando do Chef Baiano com 15 anos de experiência na culinária regional'
  },
  {
    icon: Utensils,
    title: 'Ingredientes Frescos',
    description: 'Selecionamos os melhores ingredientes direto dos produtores locais'
  },
  {
    icon: Heart,
    title: 'Receitas Tradicionais',
    description: 'Pratos preparados seguindo receitas ancestrais passadas por gerações'
  }
];

const Bistro = () => {
  return (
    <div className="min-h-screen section-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-bistro">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-colaborae-coral/10 text-colaborae-coral px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                    BISTRÔ COLABORAÊ
                  </span>
                </div>
                
                <h1 className="font-display font-bold text-5xl md:text-6xl text-colaborae-blue mb-6">
                  Sabores que <span className="text-colaborae-coral">contam histórias</span>
                </h1>
                
                <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                  Uma jornada gastronômica pelas tradições baianas, onde cada prato 
                  carrega o sabor autêntico da nossa terra e o carinho de quem 
                  prepara com paixão.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="bistro" size="lg" className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Baixar Cardápio Completo
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2 text-colaborae-blue border-colaborae-blue hover:bg-colaborae-blue hover:text-white">
                    <Phone className="w-5 h-5" />
                    (71) 99999-9999
                  </Button>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-colaborae-green" />
                  <span className="font-body">Ter-Dom: 12h às 00h | Seg: Fechado</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={bistroImage}
                    alt="Bistrô Colaboraê"
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Floating Review */}
                <div className="absolute -bottom-6 -right-6 glass-card-light p-4 max-w-xs">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-colaborae-coral text-colaborae-coral" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-colaborae-blue">
                    "A melhor moqueca do Rio Vermelho!"
                  </p>
                  <p className="font-body text-xs text-gray-500 mt-1">Maria Santos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-colaborae-blue mb-4">
                Nossa Filosofia Gastronômica
              </h2>
              <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
                Cada prato é uma celebração da rica cultura culinária baiana, 
                preparado com técnicas tradicionais e ingredientes selecionados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-colaborae-green/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-colaborae-green" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-colaborae-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 section-bistro">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-colaborae-blue mb-4">
                Destaques do <span className="text-colaborae-coral">Cardápio</span>
              </h2>
              <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
                Uma seleção especial dos nossos pratos mais amados, 
                que representam o melhor da culinária baiana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuHighlights.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    item.featured ? 'ring-2 ring-colaborae-coral/20' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="bg-colaborae-coral text-white text-center py-2">
                      <span className="font-body font-medium text-sm">⭐ DESTAQUE DA CASA</span>
                    </div>
                  )}
                  
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-display font-bold text-colaborae-blue">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-colaborae-blue/10 text-colaborae-blue px-2 py-1 rounded-full text-xs font-body font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl text-colaborae-blue mb-3">
                      {item.name}
                    </h3>
                    
                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="bistro" size="xl">
                <Download className="w-5 h-5" />
                Ver Cardápio Completo (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16 bg-colaborae-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Reserve sua Mesa
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Garante seu lugar na nossa mesa e desfrute de uma experiência 
              gastronômica única no coração do Rio Vermelho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ligar: (71) 99999-9999
              </Button>
              <Button variant="glass" size="xl">
                WhatsApp: Reservar Mesa
              </Button>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl inline-block">
              <p className="font-body text-white/90 text-sm">
                <strong>💡 Dica:</strong> Reservas com antecedência garantem melhor atendimento<br/>
                <strong>⏰ Funcionamento:</strong> Ter-Dom 12h-00h | Seg: Fechado
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bistro;