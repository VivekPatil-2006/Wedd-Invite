export interface RSVPFormData {
  guestName: string;
  email: string;
  attending: 'yes' | 'no';
  numberOfGuests: number;
  mealPreference: string;
  dietaryRestrictions: string;
  songRequest: string;
  message: string;
}

export interface GuestbookEntry {
  id: string;
  guestName: string;
  message: string;
  timestamp: Date;
  image?: string;
}

export interface WeddingEvent {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface LoveStoryCard {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  website: string;
}

export interface CoupleConfig {
  groomName: string;
  brideName: string;
  initials: string;
  weddingDate: Date;
  venue: VenueInfo;
  schedule: WeddingEvent[];
  loveStory: LoveStoryCard[];
  socialLinks: Record<string, string>;
  accommodations: Array<{
    id: number;
    name: string;
    distance: string;
    phone: string;
    website: string;
    specialRate: string;
  }>;
  dresscode: string;
  mealOptions: string[];
  thankyouMessage: string;
}
