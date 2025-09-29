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
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12">
            <NewsCarousel news={featuredNews} />
          </section>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Latest News Section */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Últimas Notícias</h2>
                  <div className="h-px bg-border flex-1 ml-4" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {latestNews.map((news) => (
                    <Link key={news.id} to={`/news/${news.id}`}>
                      <NewsCard {...news} />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace position="banner" title="Espaço Publicitário" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdSpace position="sidebar" title="Publicidade Premium" />
              <AdSpace position="sidebar" title="Parceiros da Cidade" />
              <AdSpace position="sidebar" title="Classificados" />
            </div>
          </div>
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
