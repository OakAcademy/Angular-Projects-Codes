import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import {Routes,RouterModule} from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductComponent } from './products/product/product.component';
import { EditComponent } from './products/edit/edit.component';
import { UserComponent } from './users/user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoryComponent,
    ErrorPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
