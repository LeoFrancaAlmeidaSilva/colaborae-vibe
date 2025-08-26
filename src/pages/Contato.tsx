import { MapPin, Phone, Mail, Clock, Send, Instagram, Youtube, Facebook } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contato = () => {
  return (
    <div className="min-h-screen section-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-colaborae-blue mb-6">
              Fale <span className="text-colaborae-green">Conosco</span>
            </h1>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos sempre prontos para receber você! Entre em contato para 
              tirar dúvidas, fazer reservas ou conhecer nossos espaços.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="font-display font-bold text-3xl text-colaborae-blue mb-8">
                  Informações de Contato
                </h2>

                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div className="w-12 h-12 bg-colaborae-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-colaborae-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-colaborae-blue text-lg mb-2">
                        Endereço
                      </h3>
                      <p className="font-body text-gray-600">
                        Rua da Paciência, 42<br />
                        Rio Vermelho, Salvador - BA<br />
                        CEP: 40170-110
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div className="w-12 h-12 bg-colaborae-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-colaborae-green" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-colaborae-blue text-lg mb-2">
                        Telefone & WhatsApp
                      </h3>
                      <p className="font-body text-gray-600 mb-2">
                        (71) 99999-9999
                      </p>
                      <p className="font-body text-sm text-gray-500">
                        Atendimento: Seg-Sex 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div className="w-12 h-12 bg-colaborae-coral/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-colaborae-coral" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-colaborae-blue text-lg mb-2">
                        E-mail
                      </h3>
                      <p className="font-body text-gray-600 mb-2">
                        contato@colaborae.com.br
                      </p>
                      <p className="font-body text-sm text-gray-500">
                        Respondemos em até 24h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                    <div className="w-12 h-12 bg-colaborae-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-colaborae-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-colaborae-blue text-lg mb-3">
                        Funcionamento
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-body font-medium text-gray-700">Bistrô:</p>
                          <p className="font-body text-gray-600 text-sm">Ter-Dom: 12h às 00h</p>
                          <p className="font-body text-gray-600 text-sm">Segunda: Fechado</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-body font-medium text-gray-700">Eventos:</p>
                          <p className="font-body text-gray-600 text-sm">Conforme programação</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-display font-semibold text-colaborae-blue text-lg mb-4">
                    Siga-nos nas redes sociais
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-colaborae-coral/10 rounded-xl flex items-center justify-center text-colaborae-coral hover:bg-colaborae-coral hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://youtube.com/@colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-colaborae-coral/10 rounded-xl flex items-center justify-center text-colaborae-coral hover:bg-colaborae-coral hover:text-white transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://facebook.com/colaborae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-colaborae-cyan/10 rounded-xl flex items-center justify-center text-colaborae-cyan hover:bg-colaborae-cyan hover:text-white transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display font-bold text-3xl text-colaborae-blue mb-8">
                  Envie sua Mensagem
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body font-medium text-colaborae-blue mb-2">
                        Nome *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="border-gray-300 focus:border-colaborae-blue focus:ring-colaborae-blue/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-colaborae-blue mb-2">
                        Telefone
                      </label>
                      <Input 
                        placeholder="(71) 99999-9999"
                        className="border-gray-300 focus:border-colaborae-blue focus:ring-colaborae-blue/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-colaborae-blue mb-2">
                      E-mail *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="border-gray-300 focus:border-colaborae-blue focus:ring-colaborae-blue/20"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-colaborae-blue mb-2">
                      Assunto *
                    </label>
                    <select className="w-full h-12 px-3 rounded-lg border border-gray-300 focus:border-colaborae-blue focus:ring-colaborae-blue/20 focus:outline-none font-body">
                      <option value="">Selecione o assunto</option>
                      <option value="reserva">Reserva de mesa - Bistrô</option>
                      <option value="evento">Informações sobre eventos</option>
                      <option value="estudio">Estúdio e gravações</option>
                      <option value="parcerias">Parcerias e colaborações</option>
                      <option value="outros">Outros assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-colaborae-blue mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      className="border-gray-300 focus:border-colaborae-blue focus:ring-colaborae-blue/20 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 rounded border-gray-300 text-colaborae-blue focus:ring-colaborae-blue/20" 
                    />
                    <label htmlFor="privacy" className="font-body text-sm text-gray-600">
                      Concordo com a <a href="/privacidade" className="text-colaborae-blue hover:underline">política de privacidade</a> e 
                      autorizo o contato via e-mail e/ou telefone.
                    </label>
                  </div>

                  <Button variant="bistro" size="lg" className="w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-colaborae-blue mb-4">
                Como Chegar
              </h2>
              <p className="font-body text-lg text-gray-600">
                Estamos localizados no coração do Rio Vermelho, próximo aos principais pontos turísticos de Salvador.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video relative bg-gray-200">
                {/* Placeholder for Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-colaborae-cyan mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-colaborae-blue text-xl mb-2">
                      Mapa Interativo
                    </h3>
                    <p className="font-body text-gray-600">
                      Rua da Paciência, 42 - Rio Vermelho<br />
                      Salvador - BA, 40170-110
                    </p>
                    <Button variant="outline" size="lg" className="mt-4 text-colaborae-blue border-colaborae-blue hover:bg-colaborae-blue hover:text-white">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-colaborae-green/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-colaborae-green text-2xl">🚗</span>
                </div>
                <h3 className="font-display font-semibold text-colaborae-blue mb-2">De Carro</h3>
                <p className="font-body text-gray-600 text-sm">Estacionamento próprio disponível. Acesso fácil pela Av. Oceânica.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-colaborae-coral/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-colaborae-coral text-2xl">🚌</span>
                </div>
                <h3 className="font-display font-semibold text-colaborae-blue mb-2">Ônibus</h3>
                <p className="font-body text-gray-600 text-sm">Linhas 1003, 1004 e 1005. Ponto de ônibus a 50m do estabelecimento.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-colaborae-cyan/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-colaborae-cyan text-2xl">🚖</span>
                </div>
                <h3 className="font-display font-semibold text-colaborae-blue mb-2">Uber/Taxi</h3>
                <p className="font-body text-gray-600 text-sm">Localização central, fácil acesso por aplicativos de transporte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;