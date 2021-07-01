import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { ViewprodbyIdComponent } from './viewprodby-id/viewprodby-id.component';
import { ViewprodbyNameComponent } from './viewprodby-name/viewprodby-name.component';
import { ViewuserbyNameComponent } from './viewuserby-name/viewuserby-name.component';

const routes: Routes = [{path:"createaccount", component:CreateAccountComponent},
                        {path:"login", component:LoginComponent},
                        {path:"product", component:ProductComponent, canActivate:[LoginGuard], children:[
                          {path:"addproduct", component: AddproductComponent },
                          {path:"prodbyid", component:ViewprodbyIdComponent},
                          {path:"prodbyname", component:ViewprodbyNameComponent}
                        ]},
                        {path:"user",component:UserComponent, canActivate:[LoginGuard], children:[
                          {path:"viewalluser", component:ViewalluserComponent},
                          {path:"userbyname", component:ViewuserbyNameComponent}
                        ]},
                        {path:"changepass", component:ChangepassComponent, canActivate:[LoginGuard]}

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
