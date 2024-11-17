import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserLogin } from '../../../interfaces/user-login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatCheckboxModule, 
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  loginForm: FormGroup;

  constructor(private service: AuthService, private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      saveAccount: [false]
    }
    );
  }
  ngOnInit(): void {
    if(this.service.isLoggedIn())
      this.router.navigateByUrl('/dashboard')
  }

  onSubmit(userLoginData: IUserLogin) {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.service.signin(userLoginData)
        .subscribe({
          next: (response: any) => {
            this.service.saveToken(response.token);
            this.router.navigateByUrl('/dashboard')
          },
          error:err =>{
            if(err.status == 400)
              this.toastr.error('Email ou senha inválidos.', 'Falha ao conectar!')
            else {
              this.toastr.error('Serviço indisponível.', 'Falha ao conectar!')
              console.log('error: ', err);
            }
          }
        })
    }
  }
}
