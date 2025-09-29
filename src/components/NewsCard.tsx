import React from 'react';
import { Clock, User, Tag } from 'lucide-react';

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
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  return (
    <article className="group bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`w-full ${sizeClasses[size]} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-news opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {isUrgent && (
          <div className="absolute top-3 left-3 bg-news-urgent text-news-urgent-foreground px-2 py-1 rounded-md text-xs font-bold">
            URGENTE
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 bg-news-category text-white px-2 py-1 rounded-md text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {summary}
        </p>
        
        <div className="flex items-center justify-between text-xs text-news-date pt-2 border-t border-border">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </article>
  );
};