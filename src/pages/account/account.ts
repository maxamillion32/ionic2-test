/*
* create on 2016/11/12   
*    个人
*
*
*/
import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  ionViewCanEnter(){
   
  }
  constructor(public navCtrl: NavController,public view: ViewController) {
      this.view = view;
      
  } 

}