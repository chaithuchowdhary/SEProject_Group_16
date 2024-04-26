import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CompareComponent } from './compare/compare.component';
import { TopproductsComponent } from './topproducts/topproducts.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { RetailerSignupComponent } from './retailer-signup/retailer-signup.component';
import { RetaileraccountComponent } from './retaileraccount/retaileraccount.component';
import { AddComponent } from './retaileraccount/add/add.component';
import { EditretailerComponent } from './retaileraccount/editretailer/editretailer.component';
import { ViewComponent } from './retaileraccount/view/view.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { EditComponent } from './useraccount/edit/edit.component';
import { OrdersComponent } from './useraccount/orders/orders.component';
import { ViewaccountComponent } from './useraccount/viewaccount/viewaccount.component';
import { OrderItemsComponent } from './useraccount/orders/order-items/order-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    ProductsListComponent,
    CompareComponent,
    TopproductsComponent,
    CartPageComponent,
    ProductPageComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    OrderPlacedComponent,
    RetailerSignupComponent,
    RetaileraccountComponent,
    AddComponent,
    EditretailerComponent,
    ViewComponent,
    UseraccountComponent,
    EditComponent,
    OrdersComponent,
    ViewaccountComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
