
import { Component } from '@angular/core';
import { AlertController, NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicService } from "../../services/IonicService";
import { ConfigService } from "../../services/ConfigService";
import { BarcodeScanner } from 'ionic-native';
import { AccountPage } from "../account/account";
import { AppVersion } from 'ionic-native';


@Component({
    templateUrl: 'build/pages/login/login.html',
    providers: [IonicService, ConfigService]
})

export class LoginPage {
    private local;
    private versionNumber;

    constructor(private alertCtrl: AlertController, private viewCtrl: ViewController, private nav: NavController, private ionicService: IonicService, private storage: Storage) {
        /* storage.set('name', 'Max');
           storage.get('name').then((val) => {
                 console.log('Your name is', val);
            })
        */
        this.local = storage;

    }

    ngOnInit() {
        AppVersion.getVersionNumber().then(data => {
            this.versionNumber = data;
        });
    }

    login() {
        let confirm = this.alertCtrl.create({
            title: '扫码登录',
            message: 'PC登录 http://ionichina.com后，扫描设置页面的Access Token二维码即可完成登录',
            buttons: [
                {
                    text: '我知道了',
                    handler: () => {
                        BarcodeScanner.scan().then((barcodeData) => {
                            let User = {
                                accesstoken: '',
                                loginname: '',
                                avatar_url: ''
                            }
                            User.accesstoken = barcodeData.text;
                            this.ionicService.postUserLogin(User.accesstoken).subscribe(
                                data => {
                                    User.loginname = data.loginname;
                                    User.avatar_url = data.avatar_url;
                                    this.local.set('User', JSON.stringify(User));
                                    this.nav.push(AccountPage).then(() => {
                                        let index = this.viewCtrl.index;
                                        this.nav.remove(index);
                                    });
                                });
                        }, (err) => {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        this.nav.push(confirm, {});
    }
}