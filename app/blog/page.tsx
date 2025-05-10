import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Writing & Worldbuilding",
  description: "Articles on writing, worldbuilding, and behind-the-scenes insights into the creative process.",
};

export default function BlogPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Blog & Articles
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts on writing, worldbuilding, and the creative process
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block">
              {post.coverImage && (
                <div className="h-48 relative">
                  <img 
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between text-sm text-muted-foreground pt-0">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{post.tags[0]}</span>
                  </div>
                )}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/blog/archive">View All Articles</Link>
        </Button>
      </div>
    </div>
  );
}