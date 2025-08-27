import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="font-display font-bold text-2xl text-white hover:text-colaborae-cyan transition-colors">
              Colaboraê
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Início
              </Link>
              <Link to="/eventos" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Eventos
              </Link>
              <Link to="/bistro" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Bistrô
              </Link>
              <Link to="/contato" className="text-white hover:text-colaborae-cyan transition-colors font-body">
                Contato
              </Link>
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
              <Link
                to="/"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/eventos"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                to="/bistro"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Bistrô
              </Link>
              <Link
                to="/contato"
                className="text-white hover:text-colaborae-cyan block px-3 py-2 text-base font-body"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;