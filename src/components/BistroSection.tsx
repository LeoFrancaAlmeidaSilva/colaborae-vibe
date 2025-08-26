import { Download, Phone, ChefHat, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bistroImage from '@/assets/bistro-interior.jpg';

const BistroSection = () => {
  return (
    <section className="section-bistro py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={bistroImage}
                  alt="Bistrô Colaboraê"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-colaborae-green text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <ChefHat className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xs font-body font-medium">Culinária<br />Baiana</div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-colaborae-coral/10 text-colaborae-coral px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                  BISTRÔ
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl text-colaborae-blue mb-6">
                Sabores que <span className="text-colaborae-coral">contam histórias</span>
              </h2>
              
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa cozinha é uma celebração dos sabores baianos, onde tradição e 
                criatividade se encontram. Cada prato é preparado com ingredientes 
                frescos e muito carinho.
              </p>

              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Do café da manhã ao jantar, oferecemos experiências gastronômicas 
                que despertam os sentidos e aquecem o coração.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-colaborae-green/10 rounded-lg flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-colaborae-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-colaborae-blue">Pratos Autorais</h4>
                    <p className="font-body text-sm text-gray-600">Receitas exclusivas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-colaborae-coral/10 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-colaborae-coral" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-colaborae-blue">Chef Especializado</h4>
                    <p className="font-body text-sm text-gray-600">Culinária baiana</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="bistro" size="lg" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Baixar Cardápio (PDF)
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 text-colaborae-blue border-colaborae-blue hover:bg-colaborae-blue hover:text-white">
                  <Phone className="w-5 h-5" />
                  Fazer Reserva
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="font-body text-sm text-gray-600">
                  <strong>Funcionamento:</strong> Ter-Dom, 12h às 00h<br />
                  <strong>Reservas:</strong> (71) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BistroSection;