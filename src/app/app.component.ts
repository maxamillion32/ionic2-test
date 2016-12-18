import { Component,ViewChild } from '@angular/core'; 
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}

@Component({
  templateUrl: 'app.template.html'
})  
export class MyApp {
   @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: '发现', component: TabsPage, index: 0,icon: 'home' },
    { title: '活动', component: TabsPage, index: 1, icon: 'information-circle' },
    { title: '朋友', component: TabsPage, index: 2, icon: 'person' },
    { title: '帮助', component: TabsPage, index: 3, icon: 'cube' }
  ];
  loggedInPages: PageInterface[] = [
    { title: '用户中心', component: AccountPage, icon: 'person' },
    // { title: 'Support', component: SupportPage, icon: 'help' },
    { title: '退出', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: '登录', component: LoginPage, icon: 'log-in' },
    // { title: 'Support', component: SupportPage, icon: 'help' },
    //{ title: 'Signup', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;
  // rootPage = TabsPage;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    
     // Check if the user has already seen the tutorial
    this.userData.checkHasSeenTutorial().then((hasSeenTutorial) => {
      if (hasSeenTutorial === null) {
        // User has not seen tutorial
        //this.rootPage = TutorialPage;
        this.rootPage = TabsPage;
      } else {
        // User has seen tutorial
        this.rootPage = TabsPage;
      }
    });
     // load the conference data
    confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
    
  }
   openPage(page: PageInterface) {
     console.log(page);
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });

    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
      }, 1000);
    }
  }

  openTutorial() {
    //this.nav.setRoot(TutorialPage);
    this.nav.setRoot(TabsPage);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }



}
