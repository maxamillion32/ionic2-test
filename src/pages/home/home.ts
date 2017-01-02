/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, MenuController, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { IonicService } from '../../services/IonicService';
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
  placeHolder: string = '搜索关键词';
  private items: any;
  icons: string = 'camera';
 
  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController, 
              public menuCtrl: MenuController, public service: IonicService,
              public loading: LoadingController) {
    this.title = 'APP';
    //this.visitTime = new Date().toISOString();
    this.items = []; 
   
    this.loadData();
  }
  loadData(){
    let url = 'users';
  		this.service.httpGetNoAuth(url).subscribe(data =>{
          console.log(data);

      },(error) => {
        console.log(error)
      });
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
