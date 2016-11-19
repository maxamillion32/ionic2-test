/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  shouldShowCancel: boolean = true;
  cancelButtonText: string ="取消";
  searchQuery: string = '';
  items: string[];
  placeHolder: string ='输入关键词';
  myInput: string='';
  constructor(public navCtrl: NavController) {
    this.shouldShowCancel = true;
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Amsterdam',
      'Bogota'
    ];
  }
 onCancel (){
   this.navCtrl.pop();
 }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
