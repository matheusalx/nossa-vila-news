import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselNews {
  id: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
}

interface NewsCarouselProps {
  news: CarouselNews[];
}

export const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [news.length]);

  if (!news.length) return null;

  const currentNews = news[currentIndex];

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-card">
      {/* Background Image */}
      <img
        src={currentNews.image}
        alt={currentNews.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-medium">
              {currentNews.category}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {currentNews.title}
          </h2>
          
          <p className="text-gray-200 text-lg mb-4 leading-relaxed max-w-3xl">
            {currentNews.summary}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span>Por {currentNews.author}</span>
            <span>•</span>
            <span>{currentNews.publishDate}</span>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};