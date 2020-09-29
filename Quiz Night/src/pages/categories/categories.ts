import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

    openQuestionsPage() {
        this.navCtrl.push(QuestionsPage);
      }

  presentUnavailable() { //to prevent user from entering catergories that we dont have yet
    let alert = this.alertCtrl.create({
      title: 'Not Available',
      subTitle: 'Feature awaiting implementation',
      buttons: ['Ok']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
