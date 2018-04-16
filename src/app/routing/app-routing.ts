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
import { BasketArticleListComponent } from '../components/basket/basket-article-list/basket-article-list.component';
import { LoggedGuard } from './guards/logged.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'basket',
    component: BasketArticleListComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'articles/:gender/:season',
    component: ArticlesListComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'article/create',
    component: CreateArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'brand/create',
    component: CreateBrandComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'category/create',
    component: CreateCategoryComponent,
    canActivate: [AdminGuard]
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