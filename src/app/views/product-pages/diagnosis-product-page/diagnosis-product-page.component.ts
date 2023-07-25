import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { products } from 'src/app/libs/mocks/products';
import { user } from 'src/app/libs/mocks/user';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-diagnosis-product-page',
  templateUrl: './diagnosis-product-page.component.html',
  styleUrls: ['./diagnosis-product-page.component.scss'],
})
export class DiagnosisProductPageComponent implements OnInit {
  product: Product | undefined;
  currentUser: User | undefined;
  dialogRef: MatDialogRef<MenuComponent> | undefined;
  contactForm: string | undefined;
  email: string | undefined;
  phone: string | undefined;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.product = products.find((product) => product.id === 1);
    this.currentUser = user;
  }

  openDialog(templateRef: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(templateRef);
  }

  makeOrder(): void {
    console.log(
      `Kontakt ${{
        contactForm: this.contactForm,
        email: this.email,
        phone: this.phone,
      }}`
    );
  }
}
