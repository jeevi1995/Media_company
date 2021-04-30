import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersDB = 
  [ 
    {userid : "abc@media.com", password:"abc123", "username":"tom"}, 
    {userid : "def@media.com", password:"def123", "username":"dick"}
  ]

  constructor() { }
  
  LoginService(userData: any) {
    let userIndex = this.usersDB.findIndex(u=> u.userid === userData.username && u.password === userData.password);
       if(userIndex !== -1) {
          return this.usersDB[userIndex].username;
        } else {
          return null;
        }
      }

	  isLoggedIn() {
		  return localStorage.getItem("username");
	  }
}
