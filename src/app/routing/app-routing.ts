import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CartComponent } from '../components/user/cart/cart.component';
import { UsersListComponent } from '../components/user/users-list/users-list.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'users',
    component: UsersListComponent,
    //canActivate: [NotAuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }