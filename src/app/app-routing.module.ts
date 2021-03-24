import { ProductViewimageComponent } from './components/product_view/product-viewimage/product-viewimage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProdViewComponent } from './components/prod-view/prod-view.component';
import { ProductviewdescriptionComponent } from './components/product_view/productviewdescription/productviewdescription.component';
import { LangavageComponent } from './langavage/langavage.component';



const routes: Routes = [
   { path:'', component:HomeComponent },
   {path:'login',component:LoginComponent},
   {path:'registration',component:RegistrationComponent},
   {path:'prod-view',component:ProdViewComponent},
   {path:'prod-viewimage', component:ProductViewimageComponent },
   {path:'prod-viewdescription',component:ProductviewdescriptionComponent},
   {path:'langvageservice',component:LangavageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
