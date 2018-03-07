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


import { AppComponent } from './app.component';
import { ArticleActions } from './store/article/article.actions';
import { ArticleService } from './services/article/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpClientModule,
    NgReduxModule,
    AppRoutingModule,
    ToastrModule.forRoot()
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
