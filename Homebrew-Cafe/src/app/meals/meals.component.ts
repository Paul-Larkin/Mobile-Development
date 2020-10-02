import { Component, OnInit } from '@angular/core';
import { FullMenu } from "../Menu";
import { Meals } from "../Meals";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
  
export class MealsComponent implements OnInit {

  // Meals[] object of the imported FullMenu[] from Menu class
  theMenu: Meals[] = FullMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
