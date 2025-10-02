import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas notícias em breve.",
      });
      setEmail('');
    }
  };

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-6 w-6" />
        <h3 className="text-xl font-bold">Newsletter</h3>
      </div>
      <p className="text-primary-foreground/90 mb-4">
        Receba as principais notícias diretamente no seu email.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          required
        />
        <Button type="submit" variant="secondary" className="w-full">
          Inscrever-se
        </Button>
      </form>
    </div>
  );
};
