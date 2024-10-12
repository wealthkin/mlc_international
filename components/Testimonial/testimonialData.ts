import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial"; // Ensure this import is correct

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "MLC Pastor",
    designation: "Pastor",
    image: image1,
    content: 
      "Let your faith be bigger than your fears. 'For I know the plans I have for you,' declares the Lord. - Jeremiah 29:11",
    theme: "Faith Over Fear",
  },
  {
    id: 2,
    name: "MLC Elder",
    designation: "Church Elder",
    image: image2,
    content: 
      "Strength comes not from what you can do, but from trusting in God. 'I can do all things through Christ who strengthens me.' - Philippians 4:13",
    theme: "Strength in Christ",
  },
  {
    id: 3,
    name: "MLC Leader",
    designation: "Bible Study Leader",
    image: image1,
    content: 
      "In every trial, remember God's promise. 'And we know that in all things God works for the good of those who love him.' - Romans 8:28",
    theme: "God's Promise",
  },
  {
    id: 4,
    name: "MLC Youth Leader",
    designation: "Youth Leader",
    image: image2,
    content: 
      "Trust in the Lord with all your heart and lean not on your own understanding. 'The Lord is my shepherd; I shall not want.' - Psalm 23:1",
    theme: "Trust in God",
  },
];
