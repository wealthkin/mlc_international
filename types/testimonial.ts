export type Testimonial = {
  id: number;
  name: string;
  designation: string; // Corrected the property name from 'destination' to 'designation'
  image: any;
  content: string;
  theme?: string; // Added theme property
};
