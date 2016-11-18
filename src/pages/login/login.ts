
import { Component } from '@angular/core';
import { AlertController, NavController, ViewController } from 'ionic-angular';



@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
    //providers: [IonicService, ConfigService]
})

export class LoginPage {
    
    constructor(private alertCtrl: AlertController, private viewCtrl: ViewController, private nav: NavController) {
  

    }

    
 
}