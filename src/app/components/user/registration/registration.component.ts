import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IUserRegistration } from '../../../interfaces/user-registration.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  
  isSubmitted: boolean = false;
  registrationForm: FormGroup;

  constructor(private service: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router){
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },{validators:this.passwordMatchValidator});
  }
  ngOnInit(): void {
    if(this.service.isLoggedIn())
      this.router.navigateByUrl('/dashboard')
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if(password && confirmPassword && password.value !== confirmPassword.value){
      confirmPassword?.setErrors({passwordMismatch:true})
    }
    else
      confirmPassword?.setErrors(null)

    return null;
  }

  onSubmit(userRegistrationData: IUserRegistration) {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.service.createUser(userRegistrationData)
        .subscribe({
          next: (response: any) => {
            if(response.succeeded){
              this.toastr.success('Você será redirecionado.', 'Cadastro realizado!')
            }
          },
          error:err => {
            if(err.error.errors){
              err.error.errors.forEach((x:any) => {
                switch(x.code){
                  case "DuplicateUserName":
                    break;
                  case "DuplicateEmail":
                    this.toastr.error('Email já utilizado.', 'Falha ao cadastrar!')
                    break;
                  default:
                    this.toastr.error('Entre em contato.', 'Falha ao cadastrar!')
                    console.log(x);
                    break;
                }
              })
            } else {
              this.toastr.error('Serviço indisponível.', 'Falha ao cadastrar!')
              console.log('error: ', err);
            }
          }
        });
    }
  }
}
