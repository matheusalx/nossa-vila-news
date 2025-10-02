import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { NewsCarousel } from '@/components/NewsCarousel';
import { NewsCard } from '@/components/NewsCard';
import { AdSpace } from '@/components/AdSpace';
import { Newsletter } from '@/components/Newsletter';
import { getFeaturedNews, getLatestNews, getMostReadNews, getNewsByCategory } from '@/data/mockNews';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredNews = getFeaturedNews();
  const mostReadNews = getMostReadNews();

  const filteredNews = useMemo(() => {
    let news = selectedCategory === 'Todas' ? getLatestNews() : getNewsByCategory(selectedCategory).filter(n => !n.isFeatured);
    
    if (searchQuery.trim()) {
      news = news.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return news;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        activeCategory={selectedCategory}
      />
      
      <main>
        {/* Hero Section - Full Width */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <NewsCarousel news={featuredNews} />
          </div>
        </section>

        {/* Main Content with Sidebar Ads */}
        <div className="grid lg:grid-cols-12 min-h-screen">
          {/* Left Sidebar - Ads & Most Read */}
          <aside className="hidden lg:block lg:col-span-2 bg-ad-background/50 p-4 space-y-6 sticky top-0 h-screen overflow-y-auto">
            {/* Most Read Section */}
            <div className="bg-card rounded-lg shadow-card p-4">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">Mais Lidas</h3>
              </div>
              <div className="space-y-3">
                {mostReadNews.map((news, index) => (
                  <Link key={news.id} to={`/news/${news.id}`}>
                    <div className="group cursor-pointer">
                      <div className="flex items-start space-x-2">
                        <span className="text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {news.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {news.viewCount.toLocaleString()} visualizações
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <AdSpace position="sidebar" title="Publicidade Premium" />
            <Newsletter />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Latest News Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedCategory === 'Todas' ? 'Últimas Notícias' : selectedCategory}
                  </h2>
                  <div className="h-px bg-border flex-1 ml-4" />
                </div>
                
                {searchQuery && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {filteredNews.length} resultado(s) para "{searchQuery}"
                  </p>
                )}
                
                {filteredNews.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhuma notícia encontrada.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {filteredNews.slice(0, 6).map((news) => (
                        <Link key={news.id} to={`/news/${news.id}`}>
                          <NewsCard {...news} />
                        </Link>
                      ))}
                    </div>

                    {/* More News Section */}
                    {filteredNews.length > 6 && (
                      <div className="border-t border-border pt-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold text-foreground">Mais Notícias</h3>
                          <div className="h-px bg-border flex-1 ml-4" />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          {filteredNews.slice(6).map((news) => (
                            <Link key={news.id} to={`/news/${news.id}`}>
                              <NewsCard {...news} size="small" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </section>

              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace position="banner" title="Espaço Publicitário Mobile" />
              </div>
            </div>
          </div>

          {/* Right Sidebar - Ads */}
          <aside className="hidden lg:block lg:col-span-2 bg-ad-background/50 p-4 space-y-6 sticky top-0 h-screen overflow-y-auto">
            <AdSpace position="sidebar" title="Destaque Publicitário" />
            <AdSpace position="sidebar" title="Classificados" />
            <AdSpace position="sidebar" title="Anuncie Aqui" />
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Portal Municipal de Notícias</h3>
            <p className="text-primary-foreground/80 mb-4">
              Mantendo você informado sobre tudo que acontece em nossa cidade.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 Prefeitura Municipal. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
