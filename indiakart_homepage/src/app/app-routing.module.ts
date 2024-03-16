import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CompareComponent } from './compare/compare.component';



const routes: Routes = [
  { path: '', redirectTo: 'home/homepage', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'homepage', component: CarouselComponent },
      { path: "products", component: ProductsListComponent },
      { path: 'compare', component: CompareComponent }
    ]
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
