"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarX2, ExternalLink, MapPin } from "lucide-react";
import { Event } from "@/types";

export default function EventsCalendar({ events }: { events: Event[] }) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const handleEventClick = (info: any) => {
    const clickedEvent = events.find(event => event.id === info.event.id);
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
    }
  };
  
  const eventData = events.map(event => ({
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay || false,
  }));
  
  return (
    <div className="relative">
      <Card className="shadow-sm">
        <CardContent className="p-4 md:p-6">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={eventData}
            eventClick={handleEventClick}
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,dayGridWeek",
            }}
            buttonText={{
              today: "Today",
              month: "Month",
              week: "Week",
            }}
            dayMaxEvents={3}
            moreLinkClick="popover"
            eventTimeFormat={{
              hour: "numeric",
              minute: "2-digit",
              meridiem: "short",
            }}
          />
        </CardContent>
      </Card>
      
      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card w-full max-w-md rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-serif">
                  {selectedEvent.title}
                </CardTitle>
                <CardDescription>
                  {selectedEvent.start.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {" • "}
                  {selectedEvent.start.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                  {" - "}
                  {selectedEvent.end.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="mb-4">{selectedEvent.description}</p>
                
                {selectedEvent.location && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mt-0.5" />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-between pt-0 pb-6">
                <Button variant="outline" size="sm" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
                
                {selectedEvent.url && (
                  <Button asChild size="sm">
                    <a 
                      href={selectedEvent.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Event Details
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* No Events Message */}
      {eventData.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-secondary rounded-full p-3 mb-4">
            <CalendarX2 className="h-8 w-8 text-secondary-foreground opacity-70" />
          </div>
          <h3 className="text-xl font-medium mb-2">No upcoming events</h3>
          <p className="text-muted-foreground max-w-md">
            There are currently no scheduled events. Please check back later
            for updates on book signings, readings, and virtual events.
          </p>
        </div>
      )}
    </div>
  );
}