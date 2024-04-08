import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CompareComponent } from './compare/compare.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';



const routes: Routes = [
  { path: '', redirectTo: 'home/homepage', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'homepage', component: CarouselComponent },
      { path: "products", component: ProductsListComponent },
      { path: "products/:id", component: ProductsPageComponent },
      { path: 'compare', component: CompareComponent },
      { path: "cart", component: CartPageComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "orderplaced", component: OrderPlacedComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
