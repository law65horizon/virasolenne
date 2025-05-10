"use client";

import { useState, useRef, useEffect } from "react";
import Map, { 
  NavigationControl, 
  Marker, 
  Popup,
  MapRef 
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, X } from "lucide-react";
import { MapLocation } from "@/types";

const MAPBOX_TOKEN = "pk.placeholder.token";
const INITIAL_VIEW_STATE = {
  longitude: -74.0,
  latitude: 40.7,
  zoom: 11,
  bearing: 0,
  pitch: 0
};

export default function StoryMap({ locations }: { locations: MapLocation[] }) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [popupInfo, setPopupInfo] = useState<MapLocation | null>(null);
  const mapRef = useRef<MapRef>(null);
  
  const handleMarkerClick = (location: MapLocation) => {
    setSelectedLocation(location);
    
    mapRef.current?.flyTo({
      center: [location.coordinates[0], location.coordinates[1]],
      zoom: 14,
      duration: 1500
    });
  };
  
  return (
    <div className="h-[600px] md:h-[700px] w-full rounded-lg overflow-hidden border relative">
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
        onLoad={() => {
          const map = mapRef.current?.getMap();
          map?.setFog({
            "range": [1, 10],
            "color": "#242322",
            "horizon-blend": 0.1
          });
        }}
      >
        <NavigationControl position="top-right" />
        
        {locations.map((location) => (
          <Marker 
            key={location.id}
            longitude={location.coordinates[0]}
            latitude={location.coordinates[1]}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(location);
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              <MapPin 
                className={`h-6 w-6 text-accent ${selectedLocation?.id === location.id ? 'text-primary animate-pulse' : 'text-accent'}`} 
                onClick={() => handleMarkerClick(location)}
              />
            </div>
          </Marker>
        ))}
        
        {popupInfo && (
          <Popup
            longitude={popupInfo.coordinates[0]}
            latitude={popupInfo.coordinates[1]}
            anchor="bottom"
            onClose={() => setPopupInfo(null)}
            className="max-w-xs"
          >
            <div className="p-1">
              <h4 className="text-sm font-medium">{popupInfo.name}</h4>
              <p className="text-xs truncate text-muted-foreground">
                {popupInfo.description.substring(0, 50)}...
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs p-0 h-auto mt-1"
                onClick={() => {
                  setSelectedLocation(popupInfo);
                  setPopupInfo(null);
                }}
              >
                View details
              </Button>
            </div>
          </Popup>
        )}
      </Map>
      
      {selectedLocation && (
        <div className="absolute top-4 left-4 w-full max-w-xs">
          <Card className="relative shadow-lg">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => setSelectedLocation(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-xl">{selectedLocation.name}</CardTitle>
              <CardDescription>Location in Eldoria</CardDescription>
            </CardHeader>
            
            {selectedLocation.image && (
              <div className="px-6">
                <div className="h-32 rounded-md overflow-hidden">
                  <img 
                    src={selectedLocation.image} 
                    alt={`Location: ${selectedLocation.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <CardContent className="pt-4">
              <p className="text-sm mb-4">{selectedLocation.description}</p>
              
              {selectedLocation.relatedBooks && selectedLocation.relatedBooks.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Featured In:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.relatedBooks.map((bookId) => (
                      <Button key={bookId} asChild variant="outline" size="sm">
                        <a href={`/books#${bookId}`}>
                          {bookId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-md text-sm border">
        <h4 className="font-medium mb-2">Map Legend</h4>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Key Locations</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary animate-pulse" />
            <span>Selected Location</span>
          </li>
        </ul>
      </div>
    </div>
  );
}