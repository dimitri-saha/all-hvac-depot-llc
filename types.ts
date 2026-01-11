
// Fix: Import React to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ServiceType {
  REPAIR = 'Residential HVAC Repair',
  INSTALL = 'AC Installation & Replacement',
  MAINTENANCE = 'Routine Maintenance Plans',
  EMERGENCY = 'Emergency HVAC Services'
}
