import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StoryMap from "@/components/story-map";
import { mapLocations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Story World | Interactive Map",
  description: "Explore the magical world of Eldoria with our interactive map. Discover key locations, learn about their history, and see where important story events take place.",
};

export default function StoryWorldPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Explore Eldoria
        </h1>
        <p className="text-xl text-muted-foreground">
          An interactive map of the magical world where all stories take place
        </p>
      </div>
      
      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="map">Interactive Map</TabsTrigger>
          <TabsTrigger value="lore">World Lore</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="w-full">
          <StoryMap locations={mapLocations} />
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Click on any location marker to learn more about its significance in the world of Eldoria.
              <br />
              Drag to explore the map and use the scroll wheel to zoom in and out.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="lore">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>The Genesis Crystal</CardTitle>
                <CardDescription>The source of all magic</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  At the heart of Eldoria lies the Genesis Crystal, a primordial artifact that is said to be a fragment of the world's creation. This massive crystal, housed in the Crystal Palace, radiates energy that sustains the magical ecosystem of the entire realm.
                </p>
                <p className="mt-4">
                  Throughout history, various factions have sought to control or influence the Crystal, believing that mastery over it means mastery over reality itself. The royal bloodline has been its traditional guardians, though their stewardship has been questioned in recent generations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Four Elemental Orders</CardTitle>
                <CardDescription>Keepers of balance</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Four major orders exist in Eldoria, each dedicated to one of the fundamental elements: Crystal (Earth), Shadow (Water), Storm (Air), and Ember (Fire). Each order maintains academies where adepts learn to harness their innate elemental affinities.
                </p>
                <p className="mt-4">
                  While there has historically been cooperation between the orders, tensions have grown in recent centuries as resources dwindle and the Genesis Crystal's energy appears to be fading, leading to competition and occasionally open conflict.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Floating Isles</CardTitle>
                <CardDescription>Suspended in the sky</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Beyond the visible horizon of the Whispering Woods lie the Floating Isles, chunks of earth suspended in the sky by ancient storm magic. These islands are home to the most powerful storm adepts and are nearly impossible to reach without magical assistance.
                </p>
                <p className="mt-4">
                  The Isles serve as neutral ground for diplomatic meetings between the four orders, and also house the Great Library, which contains the most comprehensive collection of magical knowledge in all of Eldoria.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Ember Deserts</CardTitle>
                <CardDescription>Where fire meets sand</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  To the south of the Crystal Kingdom lie the vast Ember Deserts, a scorching landscape where fire magic manifests naturally in the form of eternal flames that burn without fuel. The sand itself has been partially vitrified in some regions, creating glass formations of breathtaking beauty.
                </p>
                <p className="mt-4">
                  The nomadic tribes of the Ember Deserts are notoriously reclusive but are known for their unparalleled mastery of fire magic and metallurgy. Their forged weapons are highly prized throughout Eldoria.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}