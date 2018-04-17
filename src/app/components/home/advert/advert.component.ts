import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  @Input() advert: any;

  public photo: any;

  constructor(private sanitizer:DomSanitizer) {
    
  }

  ngOnInit() {
    console.log(this.advert.description.length);
  }

  getBackground(image){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
