import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';

export const routes: Routes = [
    {path: '', component: UserComponent, 
        children: [
            {path: 'cadastrar', component: RegistrationComponent},
            {path: 'logar', component: LoginComponent}
        ]
    }
];
