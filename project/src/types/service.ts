// Service creation data type
export interface CreateServiceData {
    name: string;
    description: string;
    category: string;
    price: number;
    image?: string;
    availability?: ServiceAvailability[];
  }
  
  // Service update data type - all fields are optional
  export interface UpdateServiceData {
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    image?: string;
    availability?: ServiceAvailability[];
  }
  
  export interface ServiceAvailability {
    date: string;
    slots: {
      time: string;
      isBooked: boolean;
    }[];
  }
  
  export interface ServiceFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
    sortBy?: 'price' | 'rating' | 'name';
    sortOrder?: 'asc' | 'desc';
  }