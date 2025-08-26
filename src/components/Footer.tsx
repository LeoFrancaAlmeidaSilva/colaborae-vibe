import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-dark py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Colaboraê
            </h3>
            <p className="font-body text-white/70 mb-6">
              A casinha mais plural do Rio Vermelho. Onde música, gastronomia e 
              cultura se encontram.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/colaborae"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-colaborae-green/20 hover:text-colaborae-green transition-colors"
              >
                IG
              </a>
              <a
                href="https://youtube.com/@colaborae"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-colaborae-coral/20 hover:text-colaborae-coral transition-colors"
              >
                YT
              </a>
              <a
                href="https://facebook.com/colaborae"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-colaborae-cyan/20 hover:text-colaborae-cyan transition-colors"
              >
                FB
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-colaborae-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-white/90 text-sm">
                    Rua da Paciência, 42<br />
                    Rio Vermelho, Salvador - BA<br />
                    CEP: 40170-110
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-colaborae-green shrink-0" />
                <p className="font-body text-white/90 text-sm">(71) 99999-9999</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-colaborae-coral shrink-0" />
                <p className="font-body text-white/90 text-sm">contato@colaborae.com.br</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Funcionamento
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-colaborae-cyan" />
                <span className="font-body text-white/70 text-sm">Eventos</span>
              </div>
              <p className="font-body text-white/90 text-sm ml-6">
                Consulte a programação
              </p>
              
              <div className="flex items-center gap-2 mt-4">
                <Clock className="w-4 h-4 text-colaborae-green" />
                <span className="font-body text-white/70 text-sm">Bistrô</span>
              </div>
              <p className="font-body text-white/90 text-sm ml-6">
                Ter-Dom: 12h às 00h<br />
                Seg: Fechado
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              <a href="/eventos" className="block font-body text-white/70 hover:text-colaborae-cyan transition-colors text-sm">
                Eventos
              </a>
              <a href="/bistro" className="block font-body text-white/70 hover:text-colaborae-cyan transition-colors text-sm">
                Bistrô
              </a>
              <a href="/estudio" className="block font-body text-white/70 hover:text-colaborae-cyan transition-colors text-sm">
                Estúdio
              </a>
              <a href="/selo" className="block font-body text-white/70 hover:text-colaborae-cyan transition-colors text-sm">
                Selo Musical
              </a>
              <a href="/contato" className="block font-body text-white/70 hover:text-colaborae-cyan transition-colors text-sm">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/60 text-sm">
            © 2024 Colaboraê. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacidade" className="font-body text-white/60 hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="/termos" className="font-body text-white/60 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;