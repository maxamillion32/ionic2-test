/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, ViewController, Platform } from 'ionic-angular'; 
import { Keyboard } from 'ionic-native';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  @ViewChild('searchInput') searchInput: any;
  shouldShowCancel: boolean;
  cancelButtonText: string = "取消";
  searchQuery: string = '';
  items: string[];
  placeHolder: string = '输入关键词';
  myInput: string = '';
  constructor(public navCtrl: NavController, private element: ElementRef, private renderer: Renderer,
    private viewCtrl: ViewController,
    private elementRef: ElementRef,
    private platform: Platform) {
    this.platform = platform;
    this.shouldShowCancel = true;

    this.initializeItems();
  }
  ionViewDidEnter() {
    setTimeout(() => {
        this.searchInput._searchbarInput.nativeElement.focus();
      if (this.platform.is('android')) {
         Keyboard.show();
      }
    }, 5);
  }

  ionViewWillLeave() {
    this.searchInput._searchbarInput.nativeElement.blur();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  initializeItems() {
    this.items = [
      'Amsterdam',
      'bmsterdam',
      'cmsterdam',
      'dmsterdam',
      'emsterdam',
      'fmsterdam',
      'gmsterdam',
      'hmsterdam',
      'imsterdam',
      'jmsterdam',
      'kmsterdam',
      'bmsterdam',
      'Asmsterdam',
      'dmsterdam',
      'Bogota'
    ];
  }
  onCancel(event) {

    this.navCtrl.pop();
  }
  inputBlurred(ev: any) {
    console.log('ionBlur', ev.target.value);
  }

  inputFocused(ev: any) {
    console.log('ionFocus', ev.target.value);
  }
  onClearSearchbar(ev: any) {
    console.log('ionClear', ev.target.value);
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
