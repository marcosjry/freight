import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { LoginService } from './components/login/services/login-service.service';
import { NgClass, NgIf } from '@angular/common';
import { LoadingComponent } from './shared/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.inteceptor';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    NgIf,
    LoadingComponent,
    NgClass,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  isLoggedIn = false;
  isAdmin = false;
  constructor(private service: LoginService) {
    if(service.getTypeUser() === "ADMINISTRADOR") {
      this.isAdmin = true;
      this.isLoggedIn = true
    }
  }
  ngOnInit(): void {
    
  }

  title = 'frete front'
}
