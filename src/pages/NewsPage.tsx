import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getNewsById } from '@/data/mockNews';
import { AdSpace } from '@/components/AdSpace';

const NewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const news = id ? getNewsById(id) : null;

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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar às notícias</span>
          </Link>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Article header */}
              <div className="space-y-4">
                {news.isUrgent && (
                  <div className="inline-block bg-news-urgent text-news-urgent-foreground px-3 py-1 rounded-md text-sm font-bold">
                    URGENTE
                  </div>
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
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{news.publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="h-4 w-4" />
                    <span className="bg-news-category text-white px-2 py-1 rounded text-xs">
                      {news.category}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
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