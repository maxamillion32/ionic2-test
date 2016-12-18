/*
* create on 2016/11/12   
*    朋友
*
*
*/
import { Component ,ViewChild,ElementRef} from '@angular/core';
import { NavController,ViewController ,Slides ,Events} from 'ionic-angular';
 
 
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  slides: any[];
  @ViewChild('loopSlider') loopSlider: Slides;
  startingIndex: number;
  myTopSlideOptions: any;
  el: any;
  constructor(public navCtrl: NavController,public view: ViewController,public element: ElementRef,public events: Events) {
      this.view = view;
      this.el = element;
      this.slides = [
      {
        name: 'Slide 1',
        class: 'yellow'
      },
      {
        name: 'Slide 2',
        class: 'red'
      },
      {
        name: 'Slide 3',
        class: 'blue'
      }
    ];

    this.myTopSlideOptions = {
      initialSlide: 2,
      loop: true
    };

      

  } 
  ionViewCanEnter(){
   
  }
  onSlideChanged(slider: Slides) {
    console.log('Slide changed', slider);
   // this.events.trigger("slideChange", {"index" : index});
  }

  ngAfterViewInit() {
    console.log(this.loopSlider);
  }


}

