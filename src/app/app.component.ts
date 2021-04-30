import { UserService } from './Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media';
  userName;

  constructor(public user: UserService) {
	  this.userName = localStorage.getItem("username");
  }

  logout() {
	  localStorage.removeItem("username");
    location.reload();
  }
}
