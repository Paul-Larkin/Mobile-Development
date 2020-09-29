import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questionsClass } from '../../app/questionsClass';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	apiURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /*
This is where our application accesses the external API for our data needs. 
We use a promise. 
We use the console.log to log any issues that occur. 
*/

  getDataFromAPIViaPromise() {
    console.log("here in the promise");
  return new Promise<questionsClass[]>(resolve => { //<questionsClass[]> is used to bring in this array (was having errors without this)
    this.http.get<any>(this.apiURL).subscribe(q => { //any is used as results was coming in as a basic object (doesnt exist as a basic object)
      let results = <questionsClass[]>q.results;
      resolve(results); //to get data from api
    }, err => {
      console.log(err);
    });
  });
}
}

/*The promise resolves the URL
  The promise tries to GET the contents of the URL
  If this is successful then it SUBSCRIBES to the
  data (accesses the JSON)
  Then it RESOLVEs the data (to a variable data)
  If there is a problem (err) then it handles it
*/