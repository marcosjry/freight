import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenericInputComponent } from '../../../shared/generic-input/generic-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    GenericInputComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() formValues = new EventEmitter<any>();

  loginForm!: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.loginForm = this.formBuild.group ({
      login: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
    this.loginForm.valueChanges.subscribe(values => {
      this.formValues.emit(values);
    })
  }

  

}
