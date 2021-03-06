import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CategoriesPage } from '../categories/categories';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,) {
  }
  	
	openAboutPage()	{ 
	  		this.navCtrl.push(AboutPage);
	  	}

	  openCategoriesPage(){
	  		this.navCtrl.push(CategoriesPage);
	  	}
	  
}

