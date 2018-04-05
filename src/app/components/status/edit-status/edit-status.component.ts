import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {

  public status: any;

  constructor(public dialogRef: MatDialogRef<EditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.status = data.status;
  }

  ngOnInit() {
    console.log(this.status);
  }

}
