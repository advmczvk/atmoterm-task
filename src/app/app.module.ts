import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FirstLetterOnlyPipe } from './libs/pipes/first-letter-only.pipe';
import { DiagnosisProductPageComponent } from './views/product-pages/diagnosis-product-page/diagnosis-product-page.component';
import { StartPageComponent } from './views/start-page/start-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    StartPageComponent,
    MenuComponent,
    FooterComponent,
    ProductCardComponent,
    TopBarComponent,
    DiagnosisProductPageComponent,
    FirstLetterOnlyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DiagnosisProductPageComponent],
})
export class AppModule {}
