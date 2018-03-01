import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//redux
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IArticleState} from './store';

import { AppComponent } from './app.component';
import { ArticleActions } from './store/article/article.actions';
import { ArticleService } from './services/article/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule
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
