import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"page3",
  }
)
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
  b:any;
  e=false;
  h=false;
  public items:any=[];
   constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) 
   {
//     this.http.get('http://localhost/stories/book4.php')
//     .subscribe((res)=>{
//       this.items=res.json();
//       console.log(this.items);
// });
this.b=this.navParams.get('a');
  }
  // fiction(){
  //   this.e=true;
  //   this.navCtrl.push("page4");
    
  // }
  // non_fiction(){
  //   this.h=true;
  //   this.navCtrl.push("page4");
    
  // }
  next(){
    this.navCtrl.push("page4");
  }
  
ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
