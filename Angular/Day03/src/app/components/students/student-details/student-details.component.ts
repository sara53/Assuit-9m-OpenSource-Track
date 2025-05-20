import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  @Input({ required: true }) student!: {
    id: number;
    name: string;
    age: number;
  };
}
