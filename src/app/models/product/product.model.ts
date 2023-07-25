import { ProductCategory } from 'src/app/libs/enums/product-category.enum';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  field: string;
  img: string;
  imgAlt: string;
  color: string;
  darkerColor: string;
  hashtags: string[];
}
