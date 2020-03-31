import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPopupDisplayed = false;
  favoriteNumber = null;

  togglePopupVisibility() {
    this.isPopupDisplayed = !this.isPopupDisplayed;
  }

  updateFavoriteNumber(value) {
    this.favoriteNumber = value;
  }
}
