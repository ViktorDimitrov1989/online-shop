import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import LoginUser from '../../../models/login-user';
import { MatPaginator } from '@angular/material';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: [any];
  public loggedUser: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  //TODO: hardcoded values set pagination
  ngOnInit() {
    this.userService.getAllUsers(0, 10);
  }

  fetchRecords(message:string):void {
    console.log(message);
  }

}
