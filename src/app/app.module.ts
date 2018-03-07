import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//redux
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IArticleState} from './store';

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
import { AppComponent } from './app.component';
import { ArticleActions } from './store/article/article.actions';
import { ArticleService } from './services/article/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/user/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ArticleActions,
    HttpClient,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IArticleState>){
    //set store to redux
    ngRedux.provideStore(store);
    //ngRedux.provideStore(anotherStore);
  }

}
