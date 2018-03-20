import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;
  public isLogged: boolean;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) { 
    this.store.select(state => state.userState.loggedUser).subscribe(data => {
      this.user = data;
    });

    this.store.select(state => state.userState.authenticated).subscribe(value => {
      this.isLogged = value;
    })
  }

  ngOnInit() {
  };

  public logout(){
    if(this.isLogged){
      this.authService.logout()
    }
  }

}
