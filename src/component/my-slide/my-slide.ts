import {Component, Input, Output, EventEmitter,ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';
/*
 Generated class for the MySlide component.
 See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'my-slide',
  templateUrl: 'my-slide.html'
})
export class MySlide { 
  @ViewChild(Slides) loopslides: Slides;
  @Input("slides") slides:string[] = [];
 // @Input("pageNumber") pageNumber:number = 5;
  @Output("slideClick") slideClick = new EventEmitter<number>();
 
  selectedIndex:number = 0;
  
  constructor() {
      
  }
  slideChanged(){
   
     console.log(this.loopslides);
  }
  ngOnInit() {
    this.loopslides.slidesPerView = '7';

    // this.mySlideOptions = {
    //   loop: false,
    //   autoplay: false,
    //   initialSlide: 0,
    //   pager: false,  
    //   slidesPerView: this.pageNumber,
    //   paginationHide: true,
    //   paginationClickable: true,
    //   centeredSlides: true
      
    // };
  }
 
  onClick(index) {
    this.selectedIndex = index;
    this.slideClick.emit(index);
  }
}