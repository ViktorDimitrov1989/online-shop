import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from '../../../services/user/user.service';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ConfirmPopupComponent>,
    public userService: UserService
  ) {
    this.user = data.user;
    this.roles = data.roles;
    this.message = data.message;
    this.actionType = data.actionType;
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
    this.userService.blockUser(this.user.id);
    this.dialog.close();
  }

  unblockUser() {
    this.userService.unBlockUser(this.user.id);
    this.dialog.close();
  }

  makeAdmin() {
    this.userService.makeUserAdmin(this.user.id);
    this.dialog.close();
  }

  takAdminPermissions() {
    this.userService.takeAdminPermissions(this.user.id);
    this.dialog.close();
  }

  closeDialog() {
    this.dialog.close();
  }


}
