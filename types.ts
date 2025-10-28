
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
