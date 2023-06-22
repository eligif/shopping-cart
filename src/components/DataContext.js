import { createContext } from "react";

const itemList = [
  {
    id: 1,
    productName: "pencil",
    price: 1.99,
    brand: "levi",
    description: "Great pencil for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },

  {
    id: 2,
    productName: "Paper",
    price: 1.99,
    brand: "levi",
    description: "Great paper for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },
  {
    id: 3,
    productName: "ipad",
    price: 130.99,
    brand: "levi",
    description: "Great paper for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },
  {
    id: 4,
    productName: "iphone",
    price: 522.99,
    brand: "levi",
    description: "Great paper for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },
  {
    id: 5,
    productName: "white BOX",
    price: 32.99,
    brand: "levi",
    description: "Great paper for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },
  {
    id: 6,
    productName: "sunglasses",
    price: 35.99,
    brand: "levi",
    description: "Great paper for writing stuff",
    image:
      "https://a0.muscache.com/im/pictures/2e6c4002-54b3-460b-a0b7-875259439a81.jpg",
  },
];

export const DataContext = createContext(itemList[1]);
