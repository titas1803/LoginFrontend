import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ViewprodbyIdComponent } from './viewprodby-id/viewprodby-id.component';
import { ViewprodbyNameComponent } from './viewprodby-name/viewprodby-name.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { ViewuserbyNameComponent } from './viewuserby-name/viewuserby-name.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    ProductComponent,
    UserComponent,
    ViewprodbyIdComponent,
    ViewprodbyNameComponent,
    ViewalluserComponent,
    ViewuserbyNameComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
