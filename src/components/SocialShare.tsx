import React from 'react';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SocialShareProps {
  title: string;
  url?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copiado!",
      description: "O link foi copiado para sua área de transferência.",
    });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-sky-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <div className="flex items-center space-x-2">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="outline"
            size="sm"
            onClick={() => window.open(social.url, '_blank')}
            className={`${social.color} transition-colors`}
          >
            <Icon className="h-4 w-4" />
          </Button>
        );
      })}
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="hover:bg-gray-600 transition-colors"
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};
