import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//redux
import { NgReduxModule, NgRedux } from 'ng2-redux';
//routing
import { AppRoutingModule } from './routing/app-routing';
//toastr
import { ToastrModule } from 'ngx-toastr';
//bootstrap
import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
//material
import { MaterialModule } from './modules/material/material.module';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArticleService } from './services/article/article.service';
import { AuthService } from './services/auth/auth.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/user/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { UserInfoCardComponent } from './components/user/user-info-card/user-info-card.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { BasketArticleListComponent } from './components/basket/basket-article-list/basket-article-list.component';
import { IndexComponent } from './components/home/index/index.component';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ConfirmPopupComponent } from './components/shared/confirm-popup/confirm-popup.component';
import { CreateBrandComponent } from './components/brand/create-brand/create-brand.component';
import { InputFileComponent } from './components/shared/input-file/input-file.component';
import { UserService } from './services/user/user.service';
import { ConfirmEditUserComponent } from './components/user/confirm-edit-user/confirm-edit-user.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { BasketArticleComponent } from './components/basket/basket-article/basket-article.component';
import { EditStatusComponent } from './components/status/edit-status/edit-status.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { DeleteArticleComponent } from './components/articles/delete-article/delete-article.component';
import { BasketService } from './services/basket/basket.service';
import { AdminGuard } from './routing/guards/admin.guard';
import { LoggedGuard } from './routing/guards/logged.guard';
import { AdvertListComponent } from './components/home/advert-list/advert-list.component';
import { AdvertComponent } from './components/home/advert/advert.component';

import { ViewEncapsulation } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    CartComponent,
    UserInfoCardComponent,
    UsersListComponent,
    BasketArticleListComponent,
    ArticleComponent,
    IndexComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    CreateArticleComponent,
    CreateCategoryComponent,
    ConfirmPopupComponent,
    CreateBrandComponent,
    InputFileComponent,
    ConfirmEditUserComponent,
    PaginatorComponent,
    BasketArticleComponent,
    EditStatusComponent,
    EditArticleComponent,
    DeleteArticleComponent,
    AdvertListComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    NgReduxModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    
    
  ],
  providers: [
    HttpClient,
    ArticleService,
    AuthService,
    UserService,
    BasketService,
    LoggedGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ArticleDetailsComponent,
    ConfirmPopupComponent, 
    ConfirmEditUserComponent, 
    EditStatusComponent, 
    EditArticleComponent,
    DeleteArticleComponent
  ],
})
export class AppModule {
}
