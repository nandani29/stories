import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"page4",
  }
)
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {
  b:any;
  e:any;
  g:any;
  
  public items:any=[];
   constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
   
//     this.http.get('http://localhost/stories/drama4.php')
//     .subscribe((res)=>{
//       this.items=res.json();
//       console.log(this.items);
// });
// this.e=this.navParams.get('f');
// this.g=this.navParams.get('h');
// console.log(this.e);
// console.log(this.g);
  }
  next1(){
    this.navCtrl.push("page5");
  }
  next2(){
    this.navCtrl.push("page6");


  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
