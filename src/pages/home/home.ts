/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component,ViewChild  } from '@angular/core'; 
import { NavController,Slides  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  title: string;
  mySlideOptions = {
    initialSlide: 0,
    loop: true
  };
 
  constructor(public navCtrl: NavController) {
      this.title = 'APP';
     
  }
   
  select(day){
    
  }
}
