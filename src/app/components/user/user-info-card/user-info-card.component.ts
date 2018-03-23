import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmEditUserComponent } from '../confirm-edit-user/confirm-edit-user.component';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  @Input() user: any;

  public roles: string;
  public isAdmin: boolean;
  public isBlocked: boolean;

  constructor(public dialog: MatDialog) { 
    this.isAdmin = false;
    this.isBlocked = false;
  }

  ngOnInit() {
    this.roles = this.concatRoles();
  }

  editUserConfirmation(type: string){

    let message = '';

    if(type === 'admin'){
      message = 'Сигурен ли сте че искате да направите този потребител администратор ?';
    }else if(type === 'block'){
      message = 'Сигурен ли сте че искате да блокирате този потребител ?';
    }else if(type === 'adminTake'){
      message = 'Сигурен ли сте че искате да вземете администраторските права на този потребител ?';
    }else{
      message = 'Сигурен ли сте че искате да отблокирате този потребител ?';
    }

    this.dialog.open(ConfirmEditUserComponent, {
       data: {
         user: this.user,
         actionType: type,
         roles: this.roles,
         message: message
       }
    });
  }

  private concatRoles(): string {
    this.isBlocked = !this.user.accountNonLocked;
    
    let result: string = '';

    for (let role of this.user.authorities) {
      switch (role) {
        case 'ROLE_ADMIN':
          result += 'Администратор, ';
          this.isAdmin = true;
          break;
        case 'ROLE_USER':
          result += 'Потребител, ';
          break;
        default:
          break;
      }
    }

    result = result.replace(/,\s*$/, "");

    return result.trim();
  }

}
