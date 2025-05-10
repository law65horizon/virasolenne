import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { siteConfig } from "@/config/site";
import { Book, CalendarDays, Mail, MessageSquare, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Get in Touch",
  description: "Get in touch with author J.R. Writer for interviews, events, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground">
          Whether you're a reader, bookstore, or publisher, I'd love to hear from you
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Reason for contacting</Label>
                  <RadioGroup defaultValue="reader">
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reader" id="reader" />
                        <Label htmlFor="reader">Reader Question</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="event" id="event" />
                        <Label htmlFor="event">Event Booking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="media" id="media" />
                        <Label htmlFor="media">Media/Interview</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={6}
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    contact@jrwriter.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Social Media</h4>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <Link href={siteConfig.links.twitter} className="text-muted-foreground hover:text-foreground">
                        Twitter: @jrwriter
                      </Link>
                    </p>
                    <p className="text-sm">
                      <Link href={siteConfig.links.instagram} className="text-muted-foreground hover:text-foreground">
                        Instagram: @jrwriter
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">For Publishers & Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For rights inquiries, please contact my literary agent:
              </p>
              <div className="mb-4">
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-muted-foreground">Literary Representation Inc.</p>
                <p className="text-sm text-muted-foreground">agent@literaryrep.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/books" className="gap-2">
                    <Book className="h-4 w-4" />
                    <span>View All Books</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href="/events" className="gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>Upcoming Events</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}