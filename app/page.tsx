import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import HeroCanvas from "@/components/hero-canvas";
import FeaturedBooks from "@/components/featured-books";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Book, MapPin, MessageCircle, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function Home() {
  console.log(siteConfig.author_obj)
  console.log('soijwoijeow')
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Canvas */}
      <section className="relative">
        <HeroCanvas />
      </section>
      
      {/* Featured Books Section */}
      <FeaturedBooks />
      
      {/* Author Bio Section */}
      <section className="py-16">
        <div className="container_mxd">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={siteConfig.author_obj.image}
                alt={siteConfig.author_obj.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                About {siteConfig.author_obj.name}
              </h2>
              <Separator className="mb-6" />
              <div className="space-y-4 text-lg">
                <p>
                  Award-winning fantasy author known for creating immersive worlds and complex characters that stay with readers long after they've turned the last page.
                </p>
                <p>
                  With a background in anthropology and mythology, I weave cultural depth and authentic magical systems into my stories, creating fantasy that feels both otherworldly and genuine.
                </p>
                <p>
                  When not writing, I can be found hiking with my dog, teaching worldbuilding workshops, or researching ancient civilizations for inspiration.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* World Features Section */}
      <section className="py-16 bg-primary/5">
        <div className="container_mxd">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Explore the World of Eldoria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in a rich fantasy universe with multiple ways to engage with the story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Interactive Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore our 3D bookshelf and discover detailed information about each novel and story collection.
                </p>
                <Button asChild variant="ghost" className="gap-1">
                  <Link href="/books">
                    Visit Library
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Story Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Navigate an interactive map of Eldoria, exploring key locations and discovering the lore behind them.
                </p>
                <Button asChild variant="ghost" className="gap-1">
                  <Link href="/storyworld">
                    Explore Map
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Author's Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Read articles about writing, worldbuilding, and behind-the-scenes insights into the creation process.
                </p>
                <Button asChild variant="ghost" className="gap-1">
                  <Link href="/blog">
                    Read Blog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">AI Companion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Chat with an AI that knows all about the world of Eldoria and can answer your questions about the lore.
                </p>
                <Button asChild variant="ghost" className="gap-1">
                  <Link href="/chat">
                    Start Chatting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-accent/10">
        <div className="container_mxd">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {siteConfig.newsletterTitle}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              {siteConfig.newsletterDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 rounded-md border border-border bg-card"
              />
              <Button className="sm:flex-shrink-0">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}