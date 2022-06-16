import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FilterPipe} from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { NewRegisterComponent } from './new-register/new-register.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    //NewRegisterComponent,
    //LandingPageComponent,
    RoutingComponents,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    FilterPipe,
    CheckoutComponent,
    ProductDetailsComponent
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
