import { Component } from '@angular/core';
import { Platform  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-menu side="left" [content]="mycontent">
              <ion-header> 
                <ion-navbar>
                  <ion-buttons start>
                    <button ion-button icon-only >
                      <ion-icon name="contact"></ion-icon>
                    </button>
                  </ion-buttons>
                  <ion-title>
                    个人中心
                  </ion-title> 
                </ion-navbar> 
              </ion-header>
              <ion-content>
                <ion-list>
                  <ion-item>
                    <ion-avatar item-left>
                      <img src="img/avatar-cher.png">
                    </ion-avatar>
                    <h2>Cher</h2>
                    <p>Ugh. As if.</p>
                  </ion-item>
                </ion-list>
                <ion-list>
                    <ion-item>
                      <ion-icon name="ios-mail-outline" item-left></ion-icon>
                        消息 
                        <ion-badge color="secondary">1</ion-badge>
                    </ion-item>
                    <ion-item>
                      <ion-icon name="ios-bookmark-outline" item-left></ion-icon>
                        收藏
                       <ion-badge color="secondary">11</ion-badge>
                    </ion-item>
                    <ion-item>
                      <ion-icon name="ios-chatbubbles-outline" item-left></ion-icon>
                        话题
                      <ion-badge color="secondary">5</ion-badge>
                    </ion-item>
                  </ion-list>
                   <ion-list>
                    <ion-item>
                      <ion-icon name="ios-contact-outline" item-left></ion-icon>
                        登陆
                       
                    </ion-item>
                    <ion-item>
                      <ion-icon name="ios-contacts-outline" item-left></ion-icon>
                       注册
                      
                    </ion-item>
                    
                  </ion-list>
              </ion-content>
            </ion-menu>
            <ion-nav #mycontent [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    
  }
  



}
