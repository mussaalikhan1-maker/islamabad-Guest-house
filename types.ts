
import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface GroundingLink {
  uri: string;
  title: string;
}

export interface Place {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface MapData {
  directions: string;
  guestHouse: Place;
  nearbyPlaces: Place[];
}
