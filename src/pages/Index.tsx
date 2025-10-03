import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { NewsCarousel } from '@/components/NewsCarousel';
import { NewsCard } from '@/components/NewsCard';
import { AdSpace } from '@/components/AdSpace';
import { Newsletter } from '@/components/Newsletter';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from '@/components/ui/pagination';
import { getFeaturedNews, getLatestNews, getMostReadNews, getNewsByCategory } from '@/data/mockNews';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const itemsPerPage = 6;

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

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 300);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return (
      <Pagination className="my-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
          
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => handlePageChange(page as number)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        activeCategory={selectedCategory}
      />
      <ScrollToTop />
      
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
                  <span className="text-sm text-muted-foreground">
                    {filteredNews.length} {filteredNews.length === 1 ? 'notícia' : 'notícias'}
                  </span>
                </div>
                
                {searchQuery && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {filteredNews.length} resultado(s) para "{searchQuery}"
                  </p>
                )}
                
                {isLoading ? (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {Array.from({ length: itemsPerPage }).map((_, i) => (
                      <div key={i} className="space-y-3">
                        <Skeleton className="h-64 w-full rounded-lg" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    ))}
                  </div>
                ) : filteredNews.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <p className="text-xl text-muted-foreground mb-2">Nenhuma notícia encontrada</p>
                    <p className="text-sm text-muted-foreground">
                      Tente ajustar sua busca ou selecionando outra categoria
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {paginatedNews.map((news) => (
                        <NewsCard key={news.id} {...news} />
                      ))}
                    </div>
                    {renderPagination()}
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
