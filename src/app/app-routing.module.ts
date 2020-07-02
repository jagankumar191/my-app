import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'create', component: UserComponent },
  { path:'users',component:UserDetailsComponent},
  { path:'user/update/:_id',component:UpdateUserComponent},
  { path:'',component:LoginComponent},
  { path:'about',component:AboutMeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
