import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { questionsClass } from '../../app/questionsClass';
//import { generalKnowledgeArray } from '../../app/generalList';
import { RestProvider } from '../../providers/rest/rest';
//import { quizQuestions } from '../../pages/questions/questions'


@Component({
  selector: 'score',
  templateUrl: 'score.html'
})

export class ScoreComponent {
 
 //This constructor gets the data from the api via the promise.
  constructor(private alertCtrl: AlertController, public restProvider: RestProvider) {
    this.restProvider.getDataFromAPIViaPromise().then((q) => {
      console.log("in get promise");
      console.log(q);
      
      this.generalKnowQuestions = q;
    });
    this.reset();
  }

  score: number; //setting score to type number
  lives: number; //setting lives to type number
  livesArray: boolean[]; //declaring a boolean array
  generalKnowQuestions: questionsClass[];

  reset(){ //reset class will set lives to 3 and score to 0, it also calls the setLivesArray method
    this.score = 0;
    this.lives = 3;
    this.setLivesArray();
  }

  removeLife(){ //when a question is answered wrong the player loses a life, calls the setLivesArray method
    this.lives--;
    this.setLivesArray();
    if(this.lives == 0)
    {
      this.gameOver();
    }
  }

  addScore(){ //when a question is answered correctly the player increases score by 1
    this.score++;
    if(this.score == 10)
    {
      this.gameOver();
    }
  }

  setLivesArray(){ //boolean array. In html: true = heart (life), false = heart-outline (lost life)
    this.livesArray = [];
    for(let i = 3; i > 0; i--) { //less than 3 because max lives is 3
      if(this.lives < i) //if lives is greater than 0 then push true (a heart), eg. if lives is 2, push 2 hearts
      {
        this.livesArray.push(false);
      }
      else //else push false (a heart-outline), eg. if lives is 2, loop will go to 3, so push false once
      {
        this.livesArray.push(true);
      }
    }
  }
   presentCorrect() { //pop up to say correct answer and score++
    let alert = this.alertCtrl.create({
      title: 'Correct',
      subTitle: 'Score ++',
      buttons: ['Ok']
    });
    alert.present();
  }

  presentWrong() { //pop up to say wrong answer and lives--
    let alert = this.alertCtrl.create({
      title: 'Incorrect',
      subTitle: 'Life --',
      buttons: ['Ok']
    });
    alert.present();
  }

  gameOver() { //pop up to say game over
    let alert = this.alertCtrl.create({
      title: 'Game Over',
      subTitle: 'You got ' + this.score + '/10',
      buttons: ['Reset']
    });
    alert.present();
    this.reset();
  }

  ngOnInit(){

  }
}
