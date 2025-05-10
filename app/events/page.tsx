import { Metadata } from "next";
import Link from "next/link";
import EventsCalendar from "@/components/events-calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/data";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Events | Signings & Appearances",
  description: "View upcoming book signings, readings, workshops, and virtual events.",
};

export default function EventsPage() {
  return (
    <div className="container_mxd py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Events & Appearances
        </h1>
        <p className="text-xl text-muted-foreground">
          Book signings, readings, workshops, and virtual events
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl font-bold mb-6">Event Calendar</h2>
          <EventsCalendar events={events} />
        </div>
        
        <div>
          <h2 className="font-serif text-2xl font-bold mb-6">Upcoming Events</h2>
          
          <div className="space-y-6">
            {events.slice(0, 3).map((event) => (
              <Card key={event.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-serif">{event.title}</CardTitle>
                    <Badge variant="outline" className="ml-2 whitespace-nowrap">
                      {new Date(event.start).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                      })}
                    </Badge>
                  </div>
                  <CardDescription>
                    {new Date(event.start).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                    {" - "}
                    {new Date(event.end).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{event.description}</p>
                  
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  
                  {event.url && (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href={event.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1"
                      >
                        Event Details
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">Request an Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in having J.R. Writer at your bookstore, library, 
                  school, or virtual event? Get in touch to discuss possibilities.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>Request an Event</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}