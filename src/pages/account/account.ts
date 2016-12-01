/*
* create on 2016/11/12   
*    朋友
*
*
*/
import { Component ,ViewChild} from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
   
  constructor(public navCtrl: NavController,public view: ViewController) {
      this.view = view;
      

  } 
  ionViewCanEnter(){
   
  }
  
}