import { Product } from "@/types/product";
import headphonesImg from "@/assets/headphones.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import laptopImg from "@/assets/laptop.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 299.99,
    image: headphonesImg,
    quantity: 25,
    category: "Audio",
    rating: 4.8,
    reviews: 127
  },
  {
    id: "2",
    title: "Smartphone Pro Max",
    description: "Latest flagship smartphone with advanced camera system, powerful processor, and stunning display. Includes wireless charging and premium build quality.",
    price: 999.99,
    image: smartphoneImg,
    quantity: 15,
    category: "Mobile",
    rating: 4.9,
    reviews: 203
  },
  {
    id: "3",
    title: "Ultra-Thin Laptop",
    description: "Professional laptop with high-performance processor, all-day battery life, and lightweight design. Perfect for work and creative tasks.",
    price: 1299.99,
    image: laptopImg,
    quantity: 8,
    category: "Computers",
    rating: 4.7,
    reviews: 89
  },
  {
    id: "4",
    title: "Smart Fitness Watch",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration. Track your fitness goals and stay connected.",
    price: 399.99,
    image: smartwatchImg,
    quantity: 32,
    category: "Wearables",
    rating: 4.6,
    reviews: 156
  }
];