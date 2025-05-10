"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { LeadMagnetModal } from "@/components/lead-magnet-modal";
import { BookIcon, MapIcon, CalendarIcon, MessageCircleIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Show lead magnet after 5 seconds if user hasn't seen it before
    const hasSeenModal = localStorage.getItem("hasSeenLeadMagnet");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowLeadMagnet(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Icons for each nav item
  const navIcons = {
    "/storyworld": <MapIcon className="w-4 h-4 mr-1" />,
    "/books": <BookIcon className="w-4 h-4 mr-1" />,
    "/events": <CalendarIcon className="w-4 h-4 mr-1" />,
    "/chat": <MessageCircleIcon className="w-4 h-4 mr-1" />,
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b" 
            : "bg-transparent"
        )}
      >
        <div className="container_mxd flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              className="text-2xl font-serif font-bold tracking-tight text-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {siteConfig.name}
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {navIcons[item.href as keyof typeof navIcons]}
                {item.title}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              onClick={() => setShowLeadMagnet(true)}
              className="text-sm"
            >
              Free Guide
            </Button>
            <ModeToggle />
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background border-b overflow-hidden md:hidden"
          >
            <div className="container py-4 flex flex-col">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-3 text-base flex items-center",
                    pathname === item.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {navIcons[item.href as keyof typeof navIcons]}
                  {item.title}
                </Link>
              ))}
              <Button 
                variant="ghost" 
                onClick={() => {
                  setShowLeadMagnet(true);
                  setIsOpen(false);
                }}
                className="mt-2 justify-start px-2 text-base font-normal"
              >
                Free World-Building Guide
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal 
        open={showLeadMagnet} 
        onOpenChange={setShowLeadMagnet} 
      />
    </>
  );
}