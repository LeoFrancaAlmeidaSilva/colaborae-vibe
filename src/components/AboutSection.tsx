import { Heart, Music, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-colaborae-blue mb-6">
                A casinha mais <span className="text-colaborae-green">plural</span> do Rio Vermelho
              </h2>
              
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                O Colaboraê é mais que um espaço de entretenimento. Somos um ponto de encontro 
                onde a cultura baiana se mistura com a inovação, criando experiências únicas 
                que conectam pessoas através da música, gastronomia e arte.
              </p>

              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Localizado no coração do Rio Vermelho, oferecemos eventos únicos, 
                um bistrô acolhedor e um estúdio para novos talentos florescerem.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-colaborae-green/10 rounded-2xl flex items-center justify-center">
                    <Music className="w-8 h-8 text-colaborae-green" />
                  </div>
                  <h3 className="font-display font-semibold text-colaborae-blue mb-2">Eventos</h3>
                  <p className="font-body text-sm text-gray-600">Shows e festivais únicos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-colaborae-coral/10 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-colaborae-coral" />
                  </div>
                  <h3 className="font-display font-semibold text-colaborae-blue mb-2">Bistrô</h3>
                  <p className="font-body text-sm text-gray-600">Sabores autênticos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-colaborae-cyan/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-colaborae-cyan" />
                  </div>
                  <h3 className="font-display font-semibold text-colaborae-blue mb-2">Comunidade</h3>
                  <p className="font-body text-sm text-gray-600">Conexões genuínas</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/placeholder.svg"
                  alt="Interior do Colaboraê"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-colaborae-blue/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-colaborae-blue">5+</div>
                  <div className="text-sm font-body text-gray-600">Anos de história</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;