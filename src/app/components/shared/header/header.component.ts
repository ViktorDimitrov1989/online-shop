import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedUser: Observable<any>;

  constructor(private store: Store<AppState>) { 
    this.loggedUser = this.store.select(state => state.userState.loggedUser);
  }

  ngOnInit() {
    this.initJquery();
  };

  private initJquery(){
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 200) {
        $('.navbar').addClass('fixed-top');
      } else if ($(this).scrollTop() == 0) {
        $('.navbar').removeClass('fixed-top');
      }
    });

    function adjustNav() {
      var winWidth = $(window).width(),
        dropdown = $('.dropdown'),
        dropdownMenu = $('.dropdown-menu');

      if (winWidth >= 768) {
        dropdown.on('mouseenter', function () {
          $(this).addClass('show')
            .children(dropdownMenu).addClass('show');
        });

        dropdown.on('mouseleave', function () {
          $(this).removeClass('show')
            .children(dropdownMenu).removeClass('show');
        });
      } else {
        dropdown.off('mouseenter mouseleave');
      }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
  }

}
