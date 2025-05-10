import { Metadata } from "next";
import InteractiveShelf from "@/components/interactive-shelf";
import { books } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Books | 3D Interactive Bookshelf",
  description: "Explore my books with an interactive 3D bookshelf. Discover my novels, short stories, and other publications.",
};

export default function BooksPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Books & Publications
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore my published works through an interactive bookshelf
        </p>
      </div>
      
      <Tabs defaultValue="shelf" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="shelf">3D Bookshelf</TabsTrigger>
          <TabsTrigger value="list">Book List</TabsTrigger>
        </TabsList>
        
        <TabsContent value="shelf" className="w-full">
          <div className="bg-card rounded-lg p-4 md:p-8 mb-8">
            <InteractiveShelf books={books} />
          </div>
          <div className="text-center text-muted-foreground">
            <p>
              Interact with the 3D bookshelf above to explore all published works.
              <br />
              Click any book to view more details or drag to rotate the view.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="list">
          <div className="grid grid-cols-1 gap-8">
            {books.map((book) => (
              <Card key={book.id} id={book.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="h-[300px] md:h-auto relative">
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:col-span-2">
                    <CardTitle className="text-2xl md:text-3xl font-serif mb-2">
                      {book.title}
                    </CardTitle>
                    
                    {book.series && (
                      <CardDescription className="text-lg mb-4">
                        {book.series} #{book.seriesNumber}
                      </CardDescription>
                    )}
                    
                    <div className="my-4 flex gap-4 text-sm text-muted-foreground">
                      <div>
                        Published: {new Date(book.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <div className="my-6">
                      <p className="leading-relaxed">{book.description}</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">Available at:</h4>
                      <div className="flex flex-wrap gap-3">
                        {book.buyLinks.amazon && (
                          <Button asChild variant="outline">
                            <a href={book.buyLinks.amazon} target="_blank" rel="noopener noreferrer" className="gap-2">
                              Amazon
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        
                        {book.buyLinks.barnes && (
                          <Button asChild variant="outline">
                            <a href={book.buyLinks.barnes} target="_blank" rel="noopener noreferrer" className="gap-2">
                              Barnes & Noble
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        
                        {book.buyLinks.bookshop && (
                          <Button asChild variant="outline">
                            <a href={book.buyLinks.bookshop} target="_blank" rel="noopener noreferrer" className="gap-2">
                              Bookshop
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        
                        {book.buyLinks.indiebound && (
                          <Button asChild variant="outline">
                            <a href={book.buyLinks.indiebound} target="_blank" rel="noopener noreferrer" className="gap-2">
                              IndieBound
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}