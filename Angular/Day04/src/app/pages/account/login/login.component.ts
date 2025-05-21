import { Component } from '@angular/core';
import { SharedCardComponent } from '../../../shared/shared-card/shared-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedCardComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
