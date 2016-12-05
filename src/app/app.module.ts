import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';

import { Storage } from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { Ionic2Calendar } from '../directive/calendar/calendar';
import { InputFieldComponent } from '../directive/forms/inputfield/inputfield.component';
@NgModule({
  declarations: [
    MyApp,
    Ionic2Calendar,
    InputFieldComponent,
    CalendarPage,
    LoginPage,
    SearchPage,
    AboutPage,
    ContactPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      tabsHideOnSubPages: true,
      mode: 'ios',
      backButtonText: '',
      platforms: {
      ios: {
              menuType: 'reveal',
            }
          }
      // pageTransition: 'md-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    LoginPage,
    SearchPage,
    AboutPage,
    ContactPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  providers: [Ionic2Calendar,InputFieldComponent,ConferenceData, UserData, Storage]
})
export class AppModule { }
