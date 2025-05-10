"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { books } from "@/lib/data";

export default function FeaturedBooks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container_mxd">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Featured Books
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the award-winning Elemental Chronicles series and other works
            set in the magical world of Eldoria.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {books.map((book, index) => (
            <motion.div 
              key={book.id}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <Link href={`/books#${book.id}`}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[250px]">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-white font-bold text-xl mb-1">
                        {book.title}
                      </h3>
                      {book.series && (
                        <p className="text-white/80 text-sm">
                          {book.series} #{book.seriesNumber}
                        </p>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="line-clamp-3 text-sm mb-4">
                      {book.description}
                    </p>
                    <motion.div 
                      className="flex justify-between items-center"
                      animate={{ 
                        y: hoveredIndex === index ? 0 : 5,
                        opacity: hoveredIndex === index ? 1 : 0.7
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="ghost" size="sm" className="gap-1 p-0">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        {new Date(book.publishDate).getFullYear()}
                      </span>
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg" className="gap-2">
            <Link href="/books">
              <BookOpen className="h-5 w-5" />
              <span>View All Books</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}