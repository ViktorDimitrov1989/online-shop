import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.css']
})
export class UserInfoCardComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
