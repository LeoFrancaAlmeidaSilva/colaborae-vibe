import { Mic, Music2, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studioImage from '@/assets/studio.jpg';

const StudioSection = () => {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-colaborae-cyan/20 text-colaborae-cyan px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
                  ESTÚDIO & SELO
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Onde <span className="neon-green">novos talentos</span> nascem
              </h2>
              
              <p className="font-body text-lg text-white/80 mb-6 leading-relaxed">
                Nosso estúdio é equipado com tecnologia de ponta e nossa equipe 
                está pronta para transformar ideias em realidade musical. Do conceito 
                à distribuição, acompanhamos cada etapa da sua jornada artística.
              </p>

              <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
                Através do nosso selo, promovemos artistas locais e conectamos 
                a música baiana ao mundo.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-colaborae-green/20 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-colaborae-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Gravação Profissional</h4>
                    <p className="font-body text-sm text-white/70">Equipamentos de alta qualidade</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-colaborae-cyan/20 rounded-xl flex items-center justify-center">
                    <Music2 className="w-6 h-6 text-colaborae-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Produção Musical</h4>
                    <p className="font-body text-sm text-white/70">Da composição à masterização</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-colaborae-coral/20 rounded-xl flex items-center justify-center">
                    <Radio className="w-6 h-6 text-colaborae-coral" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">Distribuição</h4>
                    <p className="font-body text-sm text-white/70">Plataformas digitais e físicas</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="neon" size="lg">
                Conheça Nosso Selo
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={studioImage}
                  alt="Estúdio Colaboraê"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-colaborae-blue/30 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 glass-card p-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-colaborae-green mb-1">24/7</div>
                  <div className="text-xs font-body text-white/80">Estúdio Disponível</div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-colaborae-cyan/20 backdrop-blur-md p-4 rounded-2xl border border-colaborae-cyan/30">
                <Music2 className="w-8 h-8 text-colaborae-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;