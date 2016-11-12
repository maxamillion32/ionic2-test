import { Component,ViewChild  } from '@angular/core';

import { NavController,Slides  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  title: string;
  mySlider = {
    initialSlide: 1,
    loop: true
  };

  constructor(public navCtrl: NavController) {
     this.title = 'APP';
  }
  

}
