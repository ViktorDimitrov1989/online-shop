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
  public usersLength;

  private pageIndex: number;
  private pageSize: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store: Store<AppState>,
    private userService: UserService) {
    this.usersLength = 0;

    this.store.select(state => state.userState.allUsers).subscribe(data => {
      this.users = data.content;
      this.usersLength = data.totalElements;
    });

    this.store.select(state => state.userState.loggedUser).subscribe(data => {
      this.loggedUser = data;
    })
  }

  //TODO: hardcoded values set pagination
  ngOnInit() {
    this.userService.getAllUsers(0, 5);
  }

  fetchRecords(message:any):void {
    this.pageIndex = message.pageIndex + 1;
    this.pageSize = message.pageSize;

    this.userService.getAllUsers(this.pageIndex, this.pageSize);
  }

}
