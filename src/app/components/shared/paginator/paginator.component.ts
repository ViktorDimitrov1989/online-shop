import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() onChangePage: EventEmitter<string> = new EventEmitter;

  pageEvent: PageEvent;

  constructor() {
  }

  ngOnInit() {
  }

  @Output() changePage(event?:PageEvent){
    let getRecordsCondition: boolean = ((event.pageIndex + 1) * event.pageSize) >= event.length;
    console.log(getRecordsCondition);
    
    if(getRecordsCondition){
      console.log(event)
      this.onChangePage.emit('fetchData');
    }

  }

}
