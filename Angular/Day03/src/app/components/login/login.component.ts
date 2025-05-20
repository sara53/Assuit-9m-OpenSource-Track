import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  orgName: string = 'ITI';

  @Output() myEvent = new EventEmitter<string>();

  sendData() {
    this.myEvent.emit(this.orgName);
  }
}
