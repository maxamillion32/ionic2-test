/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, MenuController, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  title: string;
  mySlideOptions = {
    initialSlide: 0,
    loop: true
  };

  private items: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public menuCtrl: MenuController, public loading: LoadingController) {
    this.title = 'APP';

    this.items = [];

    for (let i = 0; i < 100; i++) {
      this.items.push({
        id: i,
      });
    }
  }

  search() {
    this.navCtrl.push(SearchPage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
