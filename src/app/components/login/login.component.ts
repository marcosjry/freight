import { LoginService } from './services/login-service.service';
import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from './model/login';
import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formData!: Login;

  onFormValuesChange(values: any) {
    this.formData = values
  }

  constructor(private loginService: LoginService,
    private toastrService: ToastrService,
    private appComponent: AppComponent
  ) {}

  login() {
    return this.loginService.postLogin(this.formData).subscribe({
      next: () => this.appComponent.isLoggedIn = true,
      error: () => this.toastrService.error("Erro ao tentar realizar Login, tente novamente!"),
    },)
  }
}
