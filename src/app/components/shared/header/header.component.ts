import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedUser: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.loggedUser = this.store.select(state => state.userState.loggedUser);
  }

  ngOnInit() {
    
  };
}
