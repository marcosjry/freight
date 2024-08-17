import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('auth-token');
    const userType = sessionStorage.getItem('tipoPerfil');
    if (token) {
      const expectedUserType = route.data['expectedUserType'];
      if (expectedUserType && userType !== expectedUserType) {
        this.router.navigate(['/nao-autorizado']);
        return false;
      } else {
        return true
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  redirect() {
    this.router.navigate(['/nao-autorizado'])
  }
}