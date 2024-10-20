import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../shared/services/auth.service';
import { IUserRegistration } from '../../interfaces/user-registration.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule,MatIconModule,RegistrationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  title: string = 'Cadastro'; // todo: trocar por string vazia, dps que adicionar rotas
  resetFormSignal: boolean = false;

  constructor(private service: AuthService){}

  handleRegistration(userRegistrationData: IUserRegistration) {
    this.service.createUser(userRegistrationData)
      .subscribe({
        next: (response: any) => {
          if(response.succeeded){
            this.resetFormSignal = true;
          }
        },
        error:err => console.log('error', err)
      });
  }
}
