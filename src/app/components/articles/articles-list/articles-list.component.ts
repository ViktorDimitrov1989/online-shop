import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  
  showFiller = false;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  viewDetails(){
    this.dialog.open(ArticleDetailsComponent, {
      // data: {
      //   animal: 'panda'
      // }
    });
  }

}
