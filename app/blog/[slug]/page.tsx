import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { blogPosts } from "@/lib/data";
import MDXRenderer from "@/components/mdx-renderer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Serialize the MDX content
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode, { theme: "github-dark" }],
      ],
    },
  }) as MDXRemoteSerializeResult;
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        <article>
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-secondary text-secondary-foreground py-0.5 px-2 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {post.coverImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          
          <div className="prose-custom">
            <MDXRenderer content={mdxSource} />
          </div>
        </article>
        
        {/* Author Bio Card */}
        <Card className="mt-16">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-2">About the Author</h3>
              <p className="text-muted-foreground">
                Award-winning fantasy author known for creating immersive worlds and complex 
                characters. When not writing, can be found hiking with dog, teaching worldbuilding 
                workshops, or researching ancient civilizations for inspiration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}