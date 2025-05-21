import { Component } from '@angular/core';
import { SharedCardComponent } from '../../shared/shared-card/shared-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [SharedCardComponent, RouterOutlet],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {}
