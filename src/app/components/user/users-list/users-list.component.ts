import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: [any];

  constructor(
    private store: Store<AppState>,
    private userService: UserService) { 
      this.store.select(state => state.userState.allUsers).subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

  ngOnInit() {
    this.userService.getAllUsers();
  }

}
