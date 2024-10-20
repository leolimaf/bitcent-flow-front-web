import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../shared/services/auth.service';
import { IUserRegistration } from '../../interfaces/user-registration.interface';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private service: AuthService, private toastr: ToastrService){}

  handleRegistration(userRegistrationData: IUserRegistration) {
    this.service.createUser(userRegistrationData)
      .subscribe({
        next: (response: any) => {
          if(response.succeeded){
            this.resetFormSignal = true;
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
