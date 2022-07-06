import { Category } from "./category.enum";

export interface Cost {
  title: string;
  category: Category;
  price: number;
}
