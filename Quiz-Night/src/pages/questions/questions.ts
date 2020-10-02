import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { questionsClass } from '../../app/questionsClass';
import { ScoreComponent } from '../../components/score/score';

 /* Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

	constructor(public navCtrl: NavController){ //so that navCtrl can be used
		
	}
	quizQuestions: string;

	selectedObject = [];

	getQuestions() //brings in the quizQuestions
	{
		return this.quizQuestions;
	}
	  		
	displayJSONdata(clickedObject: any,): void {
	  	this.selectedObject = clickedObject;
	  	console.log("Assigned the JSON object in the click Event from home.html");

	  	/* we use the navCtrl to assign the variable ourParam in QuestionsPage to our selectedObject variable */
	  	this.navCtrl.push(QuestionsPage,
	  	{
	  		ourParam: this.selectedObject
	  	});
	}
}



