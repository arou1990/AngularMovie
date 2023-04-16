import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Dependency Injection - My app has a router that I can use in any component
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
    if(localStorage.getItem ('loggedInUser') == null){
      this.router.navigateByUrl('/login');
      return false;
    }

    if(localStorage.getItem ('loggedInUser') != ''){
    return true;
    }

    this.router.navigateByUrl('/login');

    return false;
  }
  
}
