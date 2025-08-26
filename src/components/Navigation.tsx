import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display font-bold text-2xl text-white">
              Colaboraê
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Início
              </a>
              <a href="/eventos" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Eventos
              </a>
              <a href="/bistro" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Bistrô
              </a>
              <a href="/contato" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Contato
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-colaborae-cyan"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
              <a
                href="/"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Início
              </a>
              <a
                href="/eventos"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </a>
              <a
                href="/bistro"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Bistrô
              </a>
              <a
                href="/contato"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;