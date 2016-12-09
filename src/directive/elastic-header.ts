import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[elastic-header]'
})
export class ElasticHeader {
    element: any;
    scrollerHandle: any;
    header: any;
    headerHeight: number;
    translateAmt : any;
    scaleAmt: any;
    scrollTop: any;
    lastScrollTop: any;
    ticking: boolean;
    constructor(element: ElementRef){
        let me = this;
        this.element = element; 
        this.scrollerHandle = this.element.nativeElement.parentElement.children[1];
       // this.header = document.getElementById("elastic-header");
        this.header = document.getElementById("elastic_header");
       console.log(this.header);
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.translateAmt = null;
        this.scaleAmt = null;
        this.scrollTop = null;
        this.lastScrollTop = null;
        this.ticking = false;

        this.header.style.webkitTransform = 'center bottom';

        window.addEventListener('resize', function() {
           me.headerHeight = me.scrollerHandle.clientHeight;
        }, false);

        this.scrollerHandle.addEventListener('scroll', function(){
            if(!me.ticking){
                window.requestAnimationFrame(function(){
                    me.updateElasticHeader();
                });
            }
            this.ticking = true;
        });

    }

    updateElasticHeader(){

        this.scrollTop = this.scrollerHandle.scrollTop;

        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        } else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }

        this.header.style.webkitTransform = 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')';

        this.ticking = false; 
    }


}