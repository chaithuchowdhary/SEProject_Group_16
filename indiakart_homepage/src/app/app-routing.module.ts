import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';

import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RetailerSignupComponent } from './retailer-signup/retailer-signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { EditComponent } from './useraccount/edit/edit.component';
import { OrdersComponent } from './useraccount/orders/orders.component';
import { ViewaccountComponent } from './useraccount/viewaccount/viewaccount.component';
import { RetaileraccountComponent } from './retaileraccount/retaileraccount.component';
import { ViewComponent } from './retaileraccount/view/view.component';
import { EditretailerComponent } from './retaileraccount/editretailer/editretailer.component';
import { AddComponent } from './retaileraccount/add/add.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { OrderItemsComponent } from './useraccount/orders/order-items/order-items.component';
import { CompareComponent } from './compare/compare.component';
import { AdminComponent } from './admin/admin.component';
import { ManageComponent } from './admin/manage/manage.component';


const routes: Routes = [
  { path: '', redirectTo: 'home/homepage', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'homepage', component: CarouselComponent },
      { path: "products", component: ProductsListComponent },
      { path: "products/:id", component: ProductPageComponent },
      { path: "cart", component: CartPageComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: 'orderplaced', component: OrderPlacedComponent },
      { path: 'compare', component: CompareComponent },

      {
        path: 'user', component: UseraccountComponent,
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: ViewaccountComponent },
          { path: 'edit-account', component: EditComponent },
          { path: 'orders', component: OrdersComponent},
          {path: 'orders/items/:id', component: OrderItemsComponent},

          { path: 'orders', component: OrdersComponent },
          { path: '**', component: HomeComponent }
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'retailerlogin', component: RetailerLoginComponent },
  { path: 'retailer-signup', component: RetailerSignupComponent },
  {
    path: 'retailer', component: RetaileraccountComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ViewComponent },
      { path: 'edit', component: EditretailerComponent },
      { path: 'add-product', component: AddComponent },
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'admin', component: AdminComponent,
    children: [
      {path:'',redirectTo:'manage',pathMatch:'full'},
      {path:'manage',component:ManageComponent}
    ] }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
