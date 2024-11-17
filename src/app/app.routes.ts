import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './shared/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '', component: UserComponent, 
        children: [
            {path: 'register', component: RegistrationComponent},
            {path: 'login', component: LoginComponent}
        ]
    },
    {
        path: 'dashboard', component: DashboardComponent, 
        canActivate: [authGuard]
    }
];
