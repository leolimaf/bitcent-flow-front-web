import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService, private userService: UserService){}

  fullName: string = ''

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next:(res: any) => this.fullName = res.nomeCompleto,
      error:(err: any) => console.log('Falha ao recuperar perfil do usuário:\n', err),
    })
  }
  
  onLogout(){
    this.authService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
