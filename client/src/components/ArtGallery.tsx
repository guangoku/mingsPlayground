import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Heart } from "lucide-react";
import octopusGirlOrange from "@assets/octopus_girl_orange.png";
import octopusGirlCool from "@assets/octopus_girl_cool.png";
import octopusGirlGreen from "@assets/octopus_girl_green.png";

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

// Real art pieces featuring Ming's octopus girl character
const artPieces: ArtPiece[] = [
  {
    id: '1',
    title: 'Octopus Girl: Warm & Curious',
    category: 'Art & Illustration',
    description: 'The original octopus girl design in warm orange tones, embodying curiosity and problem-solving spirit.',
    imageUrl: octopusGirlOrange,
    likes: 42,
    year: '2024'
  },
  {
    id: '2',
    title: 'Octopus Girl: Cool & Contemplative',
    category: 'Art & Illustration',
    description: 'A cooler color variation exploring different moods and emotional depths of the character.',
    imageUrl: octopusGirlCool,
    likes: 38,
    year: '2024'
  },
  {
    id: '3',
    title: 'Octopus Girl: Natural & Serene',
    category: 'Art & Illustration',
    description: 'Nature-inspired green variation showcasing the character in harmony with the environment.',
    imageUrl: octopusGirlGreen,
    likes: 35,
    year: '2024'
  }
];

const categories = ['All', 'Art & Illustration', 'Graphic Novels', 'Tech Innovations', 'Social Impact'];

export default function ArtGallery({ language }: ArtGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);

  const filteredPieces = selectedCategory === 'All'
    ? artPieces
    : artPieces.filter(piece => piece.category === selectedCategory);

  const handleLike = (id: string) => {
    console.log(`Liked art piece: ${id}`);
    // TODO: Implement real like functionality
  };

  return (
    <section
      className="py-8 md:py-12 px-6 projects-bg"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-100" data-testid="text-projects-title" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {language === 'en' ? 'Projects & Creative Work' : '项目与创意作品'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/90 dark:text-gray-200" data-testid="text-projects-description" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {language === 'en'
              ? 'From art and graphic novels to tech innovation and social impact — a showcase of my work'
              : '我的创意项目集合，从角色设计和数字艺术到技术创新和数据解决方案。'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`hover-elevate rounded-full border-2 ${selectedCategory === category
                ? 'bg-white/90 dark:bg-gray-100 text-emerald-700 dark:text-emerald-800'
                : 'bg-transparent text-white dark:text-gray-200 border-white dark:border-gray-300'
                }`}
              data-testid={`button-category-${category.toLowerCase()}`}
              style={{
                textShadow: selectedCategory === category ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Art Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredPieces.map((piece) => (
            <Card
              key={piece.id}
              className="group overflow-hidden hover-elevate bg-white/95 dark:bg-gray-800/95 border-white/30 dark:border-gray-600/30"
              data-testid={`card-art-${piece.id}`}
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="secondary" className="hover-elevate rounded-full" data-testid={`button-view-${piece.id}`}>
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
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-400" data-testid={`text-art-title-${piece.id}`}>{piece.title}</h3>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-emerald-700 dark:bg-emerald-600 text-white border-none"
                  >
                    {piece.year}
                  </Badge>
                </div>
                <p className="text-sm mb-3 text-gray-600 dark:text-gray-300" data-testid={`text-art-description-${piece.id}`}>{piece.description}</p>
                <div className="flex justify-between items-center">
                  <Badge
                    variant="outline"
                    className="border-emerald-700 dark:border-emerald-400 text-emerald-700 dark:text-emerald-400 bg-transparent"
                  >
                    {piece.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(piece.id)}
                    className="hover-elevate rounded-full text-emerald-700 dark:text-emerald-400"
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