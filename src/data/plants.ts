import { Plant } from '@/store/types';

export const plantsData: Plant[] = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45.99,
    image: "/assets/monstera-deliciosa-leaf-scaled.jpg",
    category: "Indoor Plants",
    description: "A stunning tropical plant with iconic split leaves. Perfect for bright, indirect light."
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 29.99,
    image: "/assets/snake-plants.jpg",
    category: "Indoor Plants",
    description: "Low-maintenance plant that thrives in low light and purifies the air."
  },
  
  // Succulents
  {
    id: 3,
    name: "Jade Plant",
    price: 19.99,
    image: "/assets/Jade Plant.jpeg",
    category: "Succulents",
    description: "A beautiful succulent with thick, glossy leaves. Symbol of good luck and prosperity."
  },
  {
    id: 4,
    name: "Echeveria Collection",
    price: 24.99,
    image: "/assets/Echeveria Collection.jpeg",
    category: "Succulents",
    description: "A beautiful collection of colorful echeveria succulents in decorative pots."
  },
  
  // Flowering Plants
  {
    id: 5,
    name: "Peace Lily",
    price: 35.99,
    image: "/assets/Peace Lily.jpeg",
    category: "Flowering Plants",
    description: "Elegant white flowers and glossy green leaves. Great for improving indoor air quality."
  },
  {
    id: 6,
    name: "Orchid Plant",
    price: 42.99,
    image: "/assets/Orchid Plant.jpeg",
    category: "Flowering Plants",
    description: "Exotic and elegant flowering plant with long-lasting blooms in various colors."
  }
];

export const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];
