import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private fb: FormBuilder, public router: Router, private user: UserService) {

	}

	ngOnInit() {
		if (this.user.isLoggedIn()) {
			this.router.navigate(["home"]);
		}
		// set the form field default values and validation rules
		this.loginForm = this.fb.group({
			username: ['', [
				Validators.required
			]],
			password: ['', [
				Validators.required,
				Validators.minLength(4)
			]],
		});
	}

	onLogin(data: any) {
		let result = this.user.LoginService(data);
		if (result == null) {
			localStorage.removeItem("username");
			alert("Login failed");
		} else {
			localStorage.setItem("username", result);
			this.router.navigate(["about"]);
			location.reload();
		}
	}

}