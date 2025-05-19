import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  studentName!: string;
  studentAge!: string;

  login() {
    console.log(this.studentName);
    console.log(this.studentAge);
  }
}
