import goldImage from "../assets/color/gold.jpg";
import greenImage from "../assets/color/green.jpg";
import blueImage from "../assets/color/blue.jpg";
import image1 from "../assets/phone/1.jpg";
import image2 from "../assets/phone/2.jpg";

export const buttonTypes = [
  { id: 1, type: "Gold", image: goldImage, images: [image1, image2] },
  { id: 2, type: "Green", image: greenImage, images: [image1, image2] },
  { id: 3, type: "Blue", image: blueImage, images: [image1, image2] },
];

export const storageSizes = [
  { id: 0, size: 128, price: 1049 },
  { id: 1, size: 256, price: 1149 },
  { id: 2, size: 512, price: 1349 },
];

export const shippingPrice = [
  { id: 0, type: "Free", price: 0, estimate: "15 - 30 days" },
  { id: 1, type: "Fast", price: 100, estimate: "5 - 7 days" },
  { id: 2, type: "Rocket", price: 200, estimate: "2 - 5 days" },
];
