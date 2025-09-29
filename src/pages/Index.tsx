import React from 'react';
import { Header } from '@/components/Header';
import { NewsCarousel } from '@/components/NewsCarousel';
import { NewsCard } from '@/components/NewsCard';
import { AdSpace } from '@/components/AdSpace';
import { getFeaturedNews, getLatestNews } from '@/data/mockNews';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredNews = getFeaturedNews();
  const latestNews = getLatestNews();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section - Full Width */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <NewsCarousel news={featuredNews} />
          </div>
        </section>

        {/* Main Content with Sidebar Ads */}
        <div className="grid lg:grid-cols-12 min-h-screen">
          {/* Left Sidebar - Ads */}
          <aside className="hidden lg:block lg:col-span-2 bg-ad-background/50 p-4 space-y-6 sticky top-0 h-screen overflow-y-auto">
            <AdSpace position="sidebar" title="Publicidade Premium" />
            <AdSpace position="sidebar" title="Parceiros Comerciais" />
            <AdSpace position="sidebar" title="Eventos da Cidade" />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Latest News Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Últimas Notícias</h2>
                  <div className="h-px bg-border flex-1 ml-4" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {latestNews.slice(0, 6).map((news) => (
                    <Link key={news.id} to={`/news/${news.id}`}>
                      <NewsCard {...news} />
                    </Link>
                  ))}
                </div>

                {/* More News Section */}
                <div className="border-t border-border pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Mais Notícias</h3>
                    <div className="h-px bg-border flex-1 ml-4" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {latestNews.slice(6).map((news) => (
                      <Link key={news.id} to={`/news/${news.id}`}>
                        <NewsCard {...news} size="small" />
                      </Link>
                    ))}
                  </div>
                </div>
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
