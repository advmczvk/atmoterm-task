import { Product } from 'src/app/models/product';
import { ProductCategory } from '../enums/product-category.enum';

export const products: Product[] = [
  {
    id: 1,
    name: 'Dynamiczna Mapa Jakości Powietrza',
    category: ProductCategory.DIAGNOZA_PROGNOZA,
    field: 'Jakość powietrza',
    img: 'assets/img/prognoza.png',
    imgAlt: 'Dynamiczna Mapa Jakości Powietrza',
    color: '#00acba',
    darkerColor: '#008c9a',
    hashtags: ['modelowanie', 'niska_emisja', 'jakość_powietrza'],
  },
  {
    id: 2,
    name: 'Analiza i Alerty',
    category: ProductCategory.DIAGNOZA_PROGNOZA,
    field: 'Jakość powietrza',
    img: 'assets/img/analizy.png',
    imgAlt: 'Analiza i Alerty',
    color: '#ec901b',
    darkerColor: '#c97d17',
    hashtags: ['modelowanie', 'niska_emisja', 'jakość_powietrza'],
  },
  {
    id: 3,
    name: 'EkoPlatnik',
    category: ProductCategory.PLANOWANIE_REALIZACJA,
    field: 'Jakość powietrza',
    img: 'assets/img/ekoplatnik.png',
    imgAlt: 'EkoPlatnik',
    color: '#464655',
    darkerColor: '#3a3a4a',
    hashtags: ['modelowanie', 'niska_emisja', 'jakość_powietrza'],
  },
  {
    id: 4,
    name: 'Zarządzanie Kosztami Energii i Wody',
    category: ProductCategory.PLANOWANIE_REALIZACJA,
    field: 'Jakość powietrza',
    img: 'assets/img/energia.png',
    imgAlt: 'Zarządzanie Kosztami Energii i Wody',
    color: '#97ad4f',
    darkerColor: '#7d8a40',
    hashtags: ['modelowanie', 'niska_emisja', 'jakość_powietrza'],
  },
];
