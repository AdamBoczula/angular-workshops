import { Category } from "./category.enum";

export interface Cost {
  id?: number;
  title: string;
  category: Category;
  price: number;
}
