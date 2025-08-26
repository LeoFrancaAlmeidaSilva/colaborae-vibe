import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Receba a agenda da semana
            </h2>
            <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
              Fique por dentro de todos os eventos, novidades do bistrô e lançamentos 
              do nosso selo musical. Não perca nenhuma novidade!
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 h-12 bg-white/90 backdrop-blur-md border-0 text-colaborae-blue placeholder:text-colaborae-blue/60 font-body"
              />
              <Button variant="bistro" size="lg" className="flex items-center gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" />
                Inscrever-se
              </Button>
            </div>
            <p className="font-body text-xs text-white/70 mt-3">
              Enviamos no máximo 1 e-mail por semana. Sem spam, prometemos! 
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-12">
            <h3 className="font-display font-semibold text-white text-xl mb-6">
              Siga nossas redes sociais
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L4.27 17.33l-1.150-1.150 2.142-1.163c-.57-1.07-.57-2.379 0-3.449L3.120 10.405l1.150-1.150 1.163 2.142c.568-1.07 1.719-1.8 3.016-1.8s2.448.73 3.016 1.8l1.163-2.142 1.150 1.150-2.142 1.163c.57 1.07.57 2.379 0 3.449l2.142 1.163-1.150 1.150-1.163-2.142c-.568 1.07-1.719 1.8-3.016 1.8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/colaborae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;