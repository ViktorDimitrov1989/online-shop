import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from '../../../services/user/user.service';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-confirm-edit-user',
  templateUrl: './confirm-edit-user.component.html',
  styleUrls: ['./confirm-edit-user.component.css']
})
export class ConfirmEditUserComponent implements OnInit {

  public user;
  public roles;
  public message;

  private actionType;
  private pageSize;
  private pageIndex;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ConfirmPopupComponent>,
    public userService: UserService,
    private store: Store<AppState>
  ) {
    this.user = data.user;
    this.roles = data.roles;
    this.message = data.message;
    this.actionType = data.actionType;

    this.store.select(state => state.userState.allUsers).subscribe(data => {

      this.pageSize = data.pageable.pageSize;
      this.pageIndex = data.pageable.pageNumber + 1;


    });
  }

  ngOnInit() {
  }

  makeAction() {
    switch (this.actionType) {
      case 'admin':
        this.makeAdmin();
        break;
      case 'block':
        this.blockUser();
        break;
      case 'adminTake':
        this.takAdminPermissions();
        break;
      case 'unBlock':
        this.unblockUser();
        break;
      default:
        break
    }
  }

  blockUser() {
    this.userService.blockUser(this.user.id, this.pageIndex, this.pageSize);
    this.dialog.close();
  }

  unblockUser() {
    this.userService.unBlockUser(this.user.id, this.pageIndex, this.pageSize);
    this.dialog.close();
  }

  makeAdmin() {
    this.userService.makeUserAdmin(this.user.id, this.pageIndex, this.pageSize);
    this.dialog.close();
  }

  takAdminPermissions() {
    this.userService.takeAdminPermissions(this.user.id, this.pageIndex, this.pageSize);
    this.dialog.close();
  }

  closeDialog() {
    this.dialog.close();
  }

}
