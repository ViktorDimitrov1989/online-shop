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

  @Output() onChangePage: EventEmitter<any> = new EventEmitter;

  pageEvent: PageEvent;

  constructor() {
    length = Number.MAX_SAFE_INTEGER;
  }

  ngOnInit() {
  }

  @Output() changePage(event?: PageEvent) {
    //let getRecordsCondition: boolean = ((event.pageIndex + 1) * event.pageSize) >= event.length;

    this.onChangePage.emit(event);

  }

}
