import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  signup()
  {
this.navCtrl.push('page1');
  }
  login()
  {
    this.navCtrl.push('page2');
  }

}
