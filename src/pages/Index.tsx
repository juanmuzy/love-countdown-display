
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2024-06-01T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-500/10 animate-pulse`}
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
            Nosso Amor
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <Heart className="text-red-400 animate-pulse" size={24} />
            <p className="text-xl md:text-2xl text-gray-300">Desde 1 de Junho de 2024</p>
            <Heart className="text-red-400 animate-pulse" size={24} />
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="relative group">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-4 border-pink-400/30 flex items-center justify-center overflow-hidden animate-scale-in">
            <div className="text-center text-gray-400 p-8">
              <Heart className="mx-auto mb-4 text-pink-400" size={48} />
              <p className="text-sm">Clique aqui para adicionar a foto da sua namorada</p>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
        </div>

        {/* Counter */}
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-8">
            Tempo juntos
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">
                {timeElapsed.days}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Dias
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-red-300 mb-2">
                {timeElapsed.hours}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Horas
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
                {timeElapsed.minutes}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Minutos
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">
                {timeElapsed.seconds}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Segundos
              </div>
            </div>
          </div>
        </div>

        {/* Love message */}
        <div className="text-center max-w-2xl space-y-6 animate-fade-in">
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 backdrop-blur-sm border border-pink-400/20 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-4">
              Para Você, Meu Amor
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Cada segundo ao seu lado é um presente. Desde aquele primeiro dia de junho, 
              minha vida se tornou mais colorida, mais feliz e mais completa. 
              Você é minha pessoa favorita, meu lar e minha aventura. 
              Te amo mais a cada dia que passa! ❤️
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm animate-fade-in">
          <p>Feito com ❤️ para o amor da minha vida</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
