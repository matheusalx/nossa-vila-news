import React from 'react';

interface AdSpaceProps {
  position: 'sidebar' | 'banner' | 'inline';
  title?: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ position, title }) => {
  const getAdDimensions = () => {
    switch (position) {
      case 'sidebar':
        return 'w-full h-64';
      case 'banner':
        return 'w-full h-24';
      case 'inline':
        return 'w-full h-32';
      default:
        return 'w-full h-32';
    }
  };

  return (
    <div className={`bg-ad-background border border-ad-border rounded-lg p-4 ${getAdDimensions()}`}>
      <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          Espaço publicitário
        </div>
        {title && (
          <div className="text-sm font-medium text-foreground">
            {title}
          </div>
        )}
        <div className="text-xs text-muted-foreground">
          Anuncie aqui e alcance milhares de leitores
        </div>
      </div>
    </div>
  );
};