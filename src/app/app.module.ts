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


import { CalendarComponent } from '../directive/calendar/calendar';
@NgModule({
  declarations: [
    MyApp,
    CalendarPage,
    LoginPage,
    AboutPage,
    ContactPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
      mode: 'ios',
      backButtonText:'' 
      // pageTransition: 'md-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarPage,
    LoginPage,
    AboutPage,
    ContactPage,
    AccountPage,
    HomePage,
    TabsPage
  ],
  providers: [CalendarComponent]
})
export class AppModule {}
