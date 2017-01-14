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

import { ConfigService } from '../services/ConfigService';
import { IonicService } from '../services/IonicService';

import { Storage } from '@ionic/storage';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

/* directive */
import { Ionic2Calendar } from '../directive/calendar/calendar';
import { InputFieldComponent } from '../directive/forms/inputfield/inputfield.component';

import { ImageZoomModule } from 'angular2-image-zoom';
import { ElasticHeader } from '../directive/elastic-header';


/* component */ 
import { MySlide } from '../component/my-slide/my-slide';

@NgModule({
  declarations: [
    MyApp,
    Ionic2Calendar,
    MySlide,
    InputFieldComponent,
    ElasticHeader,
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
    }),
    ImageZoomModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    MySlide,
    LoginPage,
    SearchPage,
    AboutPage,
    ContactPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  providers: [Ionic2Calendar,InputFieldComponent,,ConferenceData,ConfigService,IonicService, UserData, Storage]
})
export class AppModule { }
