import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ADMINGuard implements CanActivate {

constructor(private login:LoginService,public router:Router)
{}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if(this.login.isLogedIn() && this.login.getUserRole()=='ADMIN')
{
  return true;
}
this.router.navigate(['login']);
    return false;
  }
  
}
