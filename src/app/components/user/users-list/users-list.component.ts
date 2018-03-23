import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import LoginUser from '../../../models/login-user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: [any];
  public loggedUser: any;

  constructor(
    private store: Store<AppState>,
    private userService: UserService) {

    this.store.select(state => state.userState.allUsers).subscribe(data => {
      this.users = data;
    });

    this.store.select(state => state.userState.loggedUser).subscribe(data => {
      this.loggedUser = data;
    })
  }

  ngOnInit() {
    this.userService.getAllUsers();
  }

}
