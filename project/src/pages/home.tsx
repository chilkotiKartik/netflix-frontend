import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HomePage() {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative pt-48 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-white mb-4">
            Stranger Things
          </h1>
          <p className="text-lg text-white max-w-xl mb-8">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          <div className="flex gap-4">
            <Button variant="netflix" size="lg" className="flex items-center gap-2">
              <Play className="h-5 w-5" /> Play
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-gray-500/75 text-white border-0">
              <Info className="h-5 w-5" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}