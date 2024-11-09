import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { trigger, style, animate, transition, query } from '@angular/animations'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, MatCardModule,RegistrationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  animations: [trigger('routerFadeIn', [
    transition('* <=> *', [
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ], {optional: true}),
    ])
  ])]
})
export class UserComponent {

  constructor(private context: ChildrenOutletContexts){}

  getRouteUrl(){
    return this.context.getContext('primary')?.route?.url;
  }
}
