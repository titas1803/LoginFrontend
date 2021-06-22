import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { ViewprodbyIdComponent } from './viewprodby-id/viewprodby-id.component';
import { ViewprodbyNameComponent } from './viewprodby-name/viewprodby-name.component';
import { ViewuserbyNameComponent } from './viewuserby-name/viewuserby-name.component';

const routes: Routes = [{path:"createaccount", component:CreateAccountComponent},
                        {path:"login", component:LoginComponent},
                        {path:"product", component:ProductComponent, children:[
                          {path:"prodbyid", component:ViewprodbyIdComponent},
                          {path:"prodbyname", component:ViewprodbyNameComponent}
                        ]},
                        {path:"user",component:UserComponent, children:[
                          {path:"viewalluser", component:ViewalluserComponent},
                          {path:"userbyname", component:ViewuserbyNameComponent}
                        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
