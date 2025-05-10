import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, InstagramIcon, TwitterIcon, BookOpenIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container_mxd py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-serif font-bold">{siteConfig.name}</h3>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Immerse yourself in fantastical worlds filled with adventure, magic, and unforgettable characters.
            </p>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.goodreads} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Goodreads">
                  <BookOpenIcon className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Explore</h4>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Book Series</h4>
            <ul className="space-y-2">
              {siteConfig.bookSeries.map((series) => (
                <li key={series.title}>
                  <Link 
                    href={`/books#${series.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {series.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get updates on new releases, events, and exclusive content.
            </p>
            <form 
              action={siteConfig.newsletterFormAction}
              method="POST" 
              className="flex flex-col space-y-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}