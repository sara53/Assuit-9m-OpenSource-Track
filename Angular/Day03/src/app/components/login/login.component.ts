import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  orgName: string = 'ITI';

  @Output() myEvent = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {
    this.myEvent.emit(this.orgName);
  }
}
