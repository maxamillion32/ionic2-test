/*
* create on 2016/11/12   
*    朋友
*
*
*/
import { Component ,ViewChild} from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
   
  constructor(public navCtrl: NavController,public view: ViewController) {
      this.view = view;
      

  } 
  ionViewCanEnter(){
   
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}

/*
angular.module('example', ['ionic'])

.directive('elasticImage', function($ionicScrollDelegate) {
	return {
		restrict: 'A',
		link: function($scope, $scroller, $attr) {
			var image = document.getElementById($attr.elasticImage);
      var imageHeight = image.offsetHeight;
			
			$scroller.bind('scroll', function(e) {
				var scrollTop = e.detail.scrollTop;
				var newImageHeight = imageHeight - scrollTop;
				if (newImageHeight < 0) {
					newImageHeight = 0;
				}
				image.style.height = newImageHeight + 'px';
			});
		}
	}
});*/