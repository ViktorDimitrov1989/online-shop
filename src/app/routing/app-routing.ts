import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CartComponent } from '../components/user/cart/cart.component';
import { UsersListComponent } from '../components/user/users-list/users-list.component';
import { IndexComponent } from '../components/home/index/index.component';
import { ArticlesListComponent } from '../components/articles/articles-list/articles-list.component';
import { CreateArticleComponent } from '../components/articles/create-article/create-article.component';
import { CreateCategoryComponent } from '../components/category/create-category/create-category.component';
import { CreateBrandComponent } from '../components/brand/create-brand/create-brand.component';
import { BasketArticleComponent } from '../components/basket/basket-article/basket-article.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    //canActivate: [NotAuthGuard]
  },
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
  },
  {
    path: 'basket',
    component: BasketArticleComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'articles',
    component: ArticlesListComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'article/create',
    component: CreateArticleComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'category/create',
    component: CreateCategoryComponent,
    //canActivate: [NotAuthGuard]
  },
  {
    path: 'brand/create',
    component: CreateBrandComponent,
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