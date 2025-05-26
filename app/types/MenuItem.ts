import { StaticImageData } from "next/image";

export default interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'malgache' | 'chinois' | 'amuse-bouche';
  image: StaticImageData;
}