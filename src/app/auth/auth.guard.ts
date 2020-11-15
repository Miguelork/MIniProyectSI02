import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {take, map, tap} from 'rxjs/operators'

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  return this.auth.User.pipe(
    take(1), 
    map(user => !!user), 
    tap(loggedIn => {
      if ( !loggedIn) {
        this.router.navigate(['/login']);
      }
    })
  )}
}