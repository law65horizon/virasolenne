"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 mt-12" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 mt-10" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 mt-8" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg md:text-xl font-serif font-semibold mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  a: (props: any) => (
    <a 
      className="text-primary underline hover:text-primary/80 transition-colors" 
      target={props.href.startsWith("http") ? "_blank" : undefined}
      rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="mb-1" {...props} />
  ),
  hr: () => <Separator className="my-8" />,
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-accent pl-4 italic my-6 text-muted-foreground bg-secondary/50 py-2 pr-4 rounded-r" 
      {...props} 
    />
  ),
  pre: (props: any) => <div className="mb-4" {...props} />,
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={atomDark}
        className="rounded-md !mt-0 !mb-8"
        showLineNumbers
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code 
        className="bg-secondary px-1.5 py-0.5 rounded text-sm" 
        {...props}
      >
        {children}
      </code>
    );
  },
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8 overflow-hidden rounded-md relative">
      <img 
        src={src} 
        alt={alt || "Blog image"} 
        className="w-full h-auto" 
        {...props} 
      />
    </div>
  ),
  PullQuote: ({ children }: { children: React.ReactNode }) => (
    <div className="my-8 px-6 py-4 bg-accent/5 border-l-4 border-accent rounded-r">
      <p className="text-xl md:text-2xl font-serif italic text-foreground/90">{children}</p>
    </div>
  ),
  Card,
};

export default function MDXRenderer({ content }: { content: MDXRemoteSerializeResult }) {
  return (
    <div className="prose-custom max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  );
}