import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SVMaterialModule } from './modules/material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOtpInputModule } from  'ng-otp-input';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProdViewComponent } from './components/prod-view/prod-view.component';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { ProductViewimageComponent } from './components/product_view/product-viewimage/product-viewimage.component';
import { ProductviewdescriptionComponent } from './components/product_view/productviewdescription/productviewdescription.component';
import { LangavageComponent } from './langavage/langavage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProdViewComponent,

    ProductViewimageComponent,
    ProductviewdescriptionComponent,
    LangavageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SVMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgOtpInputModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule ,
    Ng2CarouselamosModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
