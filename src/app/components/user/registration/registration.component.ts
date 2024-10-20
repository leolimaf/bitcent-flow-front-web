import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IUserRegistration } from '../../../interfaces/user-registration.interface';

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  
  isSubmitted: boolean = false;
  registrationForm: FormGroup;

  @Output('onSubmit') onSubmitEmit = new EventEmitter<IUserRegistration>();
  @Input() resetFormSignal: boolean = false;

  constructor(private formBuilder: FormBuilder){
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

  onSubmit(){
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.onSubmitEmit.emit(this.registrationForm.value);
    }
    console.log(this.registrationForm.value)
  }

  ngOnChanges() {
    if (this.resetFormSignal) {
      this.registrationForm.reset();
      this.isSubmitted = false;
    }
  }
}
