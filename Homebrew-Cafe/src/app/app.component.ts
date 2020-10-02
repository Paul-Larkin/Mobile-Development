import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homebrew Cafe';
  openingHours = "Mon to Thurs 9:00 - 18:00, Fri to Sun 9:00 - 15:00";
}
