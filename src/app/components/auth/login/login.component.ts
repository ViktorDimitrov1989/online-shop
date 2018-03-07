import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: LoginComponent}]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
