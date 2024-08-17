
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { LoginResponse } from '../model/loginResponse';
import { finalize, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoadService } from '../../../shared/loading/services/load.service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API = 'api' 
  

  constructor(private httpClient: HttpClient,
    private router: Router,
    private loadService: LoadService
    
  ) { }


  postLogin(data: Login) {
    this.loadService.show();
    return this.httpClient.post<LoginResponse>(`/${this.API}/auth/login`, data).pipe(
      tap((response) => {
        sessionStorage.setItem("auth-token", response.token);
        sessionStorage.setItem("tipoPerfil", response.tipoPerfil);
        this.router.navigate(['auth/loading'])
      }),
      finalize(()=> {
        setTimeout(()=> {
          this.router.navigate(['/home']);
          this.loadService.hide()    
        }, 3000)
      })
    );
  }

  getTypeUser() {
    return sessionStorage.getItem("tipoPerfil");
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      sessionStorage.clear();
      localStorage.clear();
      resolve();
    });
  }

  
}
