import React from 'react';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Portal Municipal</h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Sua fonte oficial de notícias
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar notícias..."
                className="px-3 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1 pb-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'Todas' ? 'default' : 'ghost'}
              size="sm"
              className="hover:bg-primary/10 transition-colors"
            >
              {category}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};