import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center section-light">
      <div className="text-center">
        <h1 className="font-display font-bold text-6xl md:text-8xl text-colaborae-blue mb-4">404</h1>
        <p className="font-body text-xl text-gray-600 mb-8">Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-colaborae-green text-white rounded-lg hover:bg-colaborae-green/90 transition-colors font-body font-medium"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
