import React, { useState } from 'react';
import { Search, Menu, MapPin, Clock, Bell, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCategoryChange?: (category: string) => void;
  onSearchChange?: (query: string) => void;
  activeCategory?: string;
}

const categories = [
  'Todas',
  'Política',
  'Esporte',
  'Cultura',
  'Economia',
  'Saúde',
  'Educação',
  'Meio Ambiente'
];

export const Header: React.FC<HeaderProps> = ({ 
  onCategoryChange, 
  onSearchChange,
  activeCategory: externalActiveCategory 
}) => {
  const [internalActiveCategory, setInternalActiveCategory] = useState('Todas');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = externalActiveCategory || internalActiveCategory;

  const handleCategoryClick = (category: string) => {
    setInternalActiveCategory(category);
    onCategoryChange?.(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  return (
    <header className="relative sticky top-0 z-50 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-24" />
      
      <div className="relative">
        <div className="container mx-auto px-4">
          {/* Top info bar */}
          <div className="hidden lg:flex items-center justify-between py-2 text-xs text-primary-foreground/80 border-b border-white/10">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Prefeitura Municipal - Centro</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{new Date().toLocaleDateString('pt-BR')} - {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Bell className="h-3 w-3" />
              <span>Últimas atualizações em tempo real</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">
                    Portal Municipal
                  </h1>
                  <p className="text-primary-foreground/90 text-sm font-medium">
                    Sua fonte oficial de notícias
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Enhanced search */}
              <div className={`hidden md:flex items-center transition-all duration-300 ${
                searchFocused ? 'bg-white/20 shadow-lg' : 'bg-white/10'
              } rounded-lg backdrop-blur-sm`}>
                <Search className="h-4 w-4 text-white/80 ml-3" />
                <input
                  type="text"
                  placeholder="Buscar notícias, categorias..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="px-3 py-3 bg-transparent border-0 text-white placeholder-white/70 focus:outline-none w-64"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              
              {/* Mobile menu */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden text-white hover:bg-white/20 border border-white/20"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Enhanced Navigation */}
          <nav className="hidden md:flex items-center space-x-2 pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className={`text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200 font-medium px-4 py-2 rounded-lg backdrop-blur-sm border ${
                  activeCategory === category 
                    ? 'bg-white/20 text-white border-white/30 shadow-lg' 
                    : 'border-transparent hover:border-white/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Bottom shadow for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </header>
  );
};