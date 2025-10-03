import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getNewsById, getRelatedNews } from '@/data/mockNews';
import { AdSpace } from '@/components/AdSpace';
import { SocialShare } from '@/components/SocialShare';
import { NewsCard } from '@/components/NewsCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ScrollToTop } from '@/components/ScrollToTop';
import { getRelativeTime } from '@/utils/dateUtils';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const news = id ? getNewsById(id) : null;
  const relatedNews = news ? getRelatedNews(news.id, news.category) : [];

  const getCategoryVariant = (cat: string) => {
    const variants: Record<string, string> = {
      'Política': 'politica',
      'Esporte': 'esporte',
      'Cultura': 'cultura',
      'Economia': 'economia',
      'Saúde': 'saude',
      'Educação': 'educacao',
      'Meio Ambiente': 'meioambiente'
    };
    return variants[cat] as any || 'default';
  };

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
          <Link to="/">
            <Button>Voltar à página inicial</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar às notícias</span>
          </Link>
          
          <Breadcrumb 
            items={[
              { label: news.category },
              { label: news.title }
            ]} 
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Article header */}
              <div className="space-y-4">
                {news.isUrgent && (
                  <Badge variant="destructive" className="animate-pulse">
                    URGENTE
                  </Badge>
                )}
                
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                  {news.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {news.summary}
                </p>
                
                {/* Meta information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-news-date border-b border-border pb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Por {news.author}</span>
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{getRelativeTime(news.publishDate)}</span>
                    </div>
                    <span className="text-xs text-muted-foreground/70 ml-5">{news.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{news.viewCount.toLocaleString()} visualizações</span>
                  </div>
                  <Badge variant={getCategoryVariant(news.category)}>
                    {news.category}
                  </Badge>
                  <div className="ml-auto">
                    <SocialShare title={news.title} />
                  </div>
                </div>
              </div>

              {/* Featured image */}
              <div className="rounded-lg overflow-hidden shadow-card">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              {/* Article content */}
              <div className="prose prose-lg max-w-none">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Related News */}
              {relatedNews.length > 0 && (
                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Notícias Relacionadas
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedNews.map((related) => (
                      <NewsCard key={related.id} {...related} size="small" />
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile ad space */}
              <div className="lg:hidden">
                <AdSpace position="banner" title="Publicidade" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdSpace position="sidebar" title="Destaque Publicitário" />
              <AdSpace position="sidebar" title="Parceiros Comerciais" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;