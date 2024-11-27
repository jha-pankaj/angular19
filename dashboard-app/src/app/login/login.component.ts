import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
 })
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
   form = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private authService:AuthService ){
    console.log("in login component")
  }

  model = {
    email: '',
    password: ''
  };

   onSubmit() {
    const {email, password} = this.form.value;
    if (!email || !password) {
      return 
    }
     this.authService.login(email, password);
     this.router.navigate(['/dashboard']);
  }

}
