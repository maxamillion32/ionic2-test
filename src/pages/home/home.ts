/*
* create on 2016/11/12   
*    首页
*
*
*/
import { Component } from '@angular/core';
import { ViewController, NavController, Slides, MenuController, LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { MySlide } from '../../component/my-slide/my-slide';
import { IonicService } from '../../services/IonicService';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  title: string;
   
  placeHolder: string = '搜索关键词';
  private items: any;
  icons: string = 'camera';
 
  pageIndex:number = 0;
  pageContent:string;
  pageSlides:string[] = ["头条", "社会", "国内", "国际", "娱乐", "体育", "军事", "科技", "财经", "时尚"];

  public loading;
  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController, 
              public menuCtrl: MenuController, public service: IonicService,
              public loadCtrl: LoadingController) {
    this.title = 'APP';
    //this.visitTime = new Date().toISOString();
  
    this.loading = this.loadCtrl.create({
      content: '加载中...',

    });
    this.loading.present();
    setTimeout(() => {
        this.loading.dismiss();
    }, 3000);

    this.loadData();
    this.setPageContent();
  }
 //刷新 
 doRefresh(refresher) { 
    setTimeout(() => {
      this.getNewArticle(this.pageContent);
      refresher.complete();
    }, 3000);

  }
getNewArticle(itemName){

}
 onSlideClick(index) {
   console.log(index);
    this.pageIndex = index;
    this.setPageContent();
  }
//页面初始化执行次操作，推荐将复杂的东西要放在ngOnInit()方法里，不要放在构造方法里
  ngOnInit() {

  }
  setPageContent() {
    this.pageContent = this.pageSlides[this.pageIndex];
  }

  loadData(){
    let url = 'users';
    let autoData = '';
  		this.service.httpGetNoAuth(url,autoData).subscribe(data =>{
          console.log(data);

      },(error) => {
        console.log(error)
      });
	}
  search() {
    this.navCtrl.push(SearchPage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
