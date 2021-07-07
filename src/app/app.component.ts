import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_Angular';
  isThisIngredientVital : boolean = true;
  displayGuestList: boolean = false;
  songList:string[]= ["Alejandro", "Ne me quitte pas","Le temps est bon"];
}
