import { Component } from '@angular/core';
import { StudentDetailsComponent } from './student-details/student-details.component';

@Component({
  selector: 'app-students',
  imports: [StudentDetailsComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students: { id: number; name: string; age: number }[] = [
    {
      id: 1,
      name: 'Ali',
      age: 22,
    },
    {
      id: 2,
      name: 'Mohamed',
      age: 40,
    },
  ];
}
