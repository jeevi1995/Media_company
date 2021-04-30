import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanDeactivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RouteGuard
	implements CanActivate {
	constructor(private route: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (localStorage.getItem("username") != null) {
			return true;
		} else {
			return this.route.parseUrl("home");
		}
	}
}
