import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRelativeTime } from '@/utils/dateUtils';

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  isUrgent?: boolean;
  size?: 'small' | 'medium' | 'large';
  viewCount: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  summary,
  image,
  author,
  publishDate,
  category,
  isUrgent = false,
  size = 'medium',
  viewCount
}) => {
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
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  return (
    <Link to={`/news/${id}`} className="block">
      <article className="group bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className={`w-full ${sizeClasses[size]} object-cover group-hover:scale-105 transition-transform duration-300`}
          />
          <div className="absolute inset-0 bg-gradient-news opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {isUrgent && (
            <Badge variant="destructive" className="absolute top-3 left-3 animate-pulse">
              URGENTE
            </Badge>
          )}
          
          <Badge variant={getCategoryVariant(category)} className="absolute bottom-3 left-3">
            {category}
          </Badge>
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {summary}
          </p>
          
          <div className="flex items-center justify-between text-xs text-news-date pt-2 border-t border-border">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{author}</span>
              </div>
              <div className="flex flex-col space-y-0.5">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span className="font-medium">{getRelativeTime(publishDate)}</span>
                </div>
                <span className="text-[10px] text-muted-foreground/70">{publishDate}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Eye className="h-3 w-3" />
              <span>{viewCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};