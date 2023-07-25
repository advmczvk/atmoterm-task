import { Component, OnInit } from '@angular/core';
import { products } from '../../libs/mocks/products';
import { ProductCategory } from 'src/app/libs/enums/product-category.enum';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  diagnosis_products: Product[] = [];
  planning_products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.diagnosis_products = products.filter(
      (product) => product.category === ProductCategory.DIAGNOZA_PROGNOZA
    );
    this.planning_products = products.filter(
      (product) => product.category === ProductCategory.PLANOWANIE_REALIZACJA
    );
  }
}
