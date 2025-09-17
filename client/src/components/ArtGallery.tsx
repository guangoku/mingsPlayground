import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Heart } from "lucide-react";
import artDoodles from "@assets/generated_images/Minimalist_art_doodle_set_dfe6d50c.png";

interface ArtPiece {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  likes: number;
  year: string;
}

interface ArtGalleryProps {
  language: 'en' | 'zh';
}

// TODO: Remove mock data - replace with real art pieces
const mockArtPieces: ArtPiece[] = [
  {
    id: '1',
    title: 'Minimalist Doodles',
    category: 'Illustration',
    description: 'A collection of simple, elegant line drawings inspired by daily observations.',
    imageUrl: artDoodles,
    likes: 24,
    year: '2024'
  },
  {
    id: '2', 
    title: 'Data Visualization Art',
    category: 'Digital Art',
    description: 'Beautiful patterns emerging from complex datasets.',
    imageUrl: artDoodles,
    likes: 18,
    year: '2024'
  },
  {
    id: '3',
    title: 'Octopus Dreams',
    category: 'Character Design', 
    description: 'Art nouveau inspired character illustrations.',
    imageUrl: artDoodles,
    likes: 32,
    year: '2024'
  }
];

const categories = ['All', 'Illustration', 'Digital Art', 'Character Design', 'Graphic Novel'];

export default function ArtGallery({ language }: ArtGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);
  
  const filteredPieces = selectedCategory === 'All' 
    ? mockArtPieces 
    : mockArtPieces.filter(piece => piece.category === selectedCategory);

  const handleLike = (id: string) => {
    console.log(`Liked art piece: ${id}`);
    // TODO: Implement real like functionality
  };

  return (
    <section className="py-16 px-6" id="art">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-art-title">
            {language === 'en' ? 'Art & Illustrations' : '艺术作品'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-art-description">
            {language === 'en' 
              ? 'A collection of my creative works, from minimalist doodles to character designs.' 
              : '我的创作作品集合，从极简涂鸦到角色设计。'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="hover-elevate"
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Art Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPieces.map((piece) => (
            <Card key={piece.id} className="group overflow-hidden hover-elevate" data-testid={`card-art-${piece.id}`}>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="secondary" className="hover-elevate" data-testid={`button-view-${piece.id}`}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-square w-full">
                        <img
                          src={piece.imageUrl}
                          alt={piece.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground" data-testid={`text-art-title-${piece.id}`}>{piece.title}</h3>
                  <Badge variant="secondary" className="text-xs">{piece.year}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3" data-testid={`text-art-description-${piece.id}`}>{piece.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{piece.category}</Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleLike(piece.id)}
                    className="hover-elevate"
                    data-testid={`button-like-${piece.id}`}
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {piece.likes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}