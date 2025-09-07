import React from 'react';

// Navigation Types
export interface NavLink {
  path: string;
  label: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

// Statistics Types
export interface Statistic {
  key: string;
  value: number;
  label: string;
  icon: string;
}

export interface StatisticState {
  petsCared: number;
  happyClients: number;
  dailyBookings: number;
  hotelRooms: number;
}

// Team Member Types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Animation Types
export interface AnimationVariant {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

// Button Types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

// Service Types
export interface Service {
  id: number;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  image?: string;
}
