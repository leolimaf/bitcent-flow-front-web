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

  constructor(private service: AuthService){}

  title: string = 'Cadastro'; // todo: trocar por string vazia, dps que adicionar rotas

  handleRegistration(userRegistrationData: IUserRegistration) {
    this.service.createUser(userRegistrationData)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error:err => console.log('error', err)
      });
  }
}
