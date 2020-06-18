import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular'
import {Http} from '@angular/http'


/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"page2", 
  }
)
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  username:any;
  password:any;
  b=false;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl:AlertController,public http:Http) {
  }
  submit()
  {
    this.b=true;
    this.navCtrl.push("page3",{a:this.b});
    // this.http.get('http://localhost/stories/login.php?username='+this.username+'&password='+this.password)
    // .subscribe((res)=>{
    //   console.log(res);
    //   if(res.status==200)
    //   {
    //     alert("login successful")
    //     this.navCtrl.push('page3');
    //   }
    //   else{
    //     alert("login unsuccessful");
    //   }
    // // });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}