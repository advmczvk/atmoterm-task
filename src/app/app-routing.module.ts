import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisProductPageComponent } from './views/product-pages/diagnosis-product-page/diagnosis-product-page.component';
import { StartPageComponent } from './views/start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'product/1',
    component: DiagnosisProductPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
