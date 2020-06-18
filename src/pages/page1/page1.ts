import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular'
import {Http} from '@angular/http'
import { ThrowStmt } from '@angular/compiler';


/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:"page1",
  }
)
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {
  username:any;
  firstname:any;
  lastname:any;
  DOB:Date;
  phoneno:number;
  email:any;
  password:any;
  password2:any;
  b=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public http: Http) {
  }
  submit()
  {
    var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.username==null||this.firstname==null||this.lastname==null||this.DOB==null||this.email==null||this.password==null||this.password2==null)
    {
      const alert=this.alertCtrl.create({
        title:'please fill all the fields.',
        buttons: ['ok']
      });
      alert.present();
    }
    else if(this.username.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'username should have atleast 3 characters.',
        buttons:['ok']
    });
    alert.present();
  }
  else if(this.firstname.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'firstname should have atleast 3 characters.',
        buttons:['ok']
    });
    alert.present();
  }
  else if(this.lastname.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'lastname should have atleast 3 characters.',
        buttons:['ok']
    });
    alert.present();
  }
  else if(this.phoneno==0||this.phoneno<=10)
    {
      const alert=this.alertCtrl.create({
        title:'phone number should contain 10 characters.',
        buttons:['ok']
    });
    alert.present();
  }
  else if(!mail.test(this.email))
  {
    const alert=this.alertCtrl.create({
      title:'Email must be in correct format.',
      buttons:['ok']
  });
  alert.present();
}
else if(this.password.length<6||this.password.search(/[0-9a-zA-Z]/))
  {
    const alert=this.alertCtrl.create({
      title:'password should contain atleast 6 characters,one digit,one capital and small letter.',
      buttons:['ok']
  });
  alert.present();
}
else if(this.password2!=this.password)
  {
    const alert=this.alertCtrl.create({
      title:'password does not match.',
      buttons:['ok']
  });
  alert.present();
}
else{
  const alert=this.alertCtrl.create({
    title:'successfully added.',
    buttons:['ok']
});
alert.present();
this.navCtrl.pop();
}
// this.http.get('http://localhost/stories/signup3.php?username='+this.username+'&firstname='+this.firstname+'&lastname='+this.lastname+'&DOB='+this.DOB+'&phoneno='+this.phoneno+'&email='+this.email+'&password='+this.password+'&password2='+this.password2).subscribe((res)=>{
//   console.log('sent');
// });
this.b=true;
this.navCtrl.push("page3",{a:this.b});

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
