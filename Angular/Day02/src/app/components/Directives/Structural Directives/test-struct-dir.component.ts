import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-struct-dir',
  imports: [CommonModule],
  templateUrl: './test-struct-dir.component.html',
  styleUrl: './test-struct-dir.component.css',
})
export class TestStructDirComponent {
  flag: boolean = false;

  itiTracks: string[] = ['Open Source', 'UI&UX', 'PWD', 'Java'];

  products: { id: number; name: string; price: number }[] = [
    {
      id: 1,
      name: 'book',
      price: 200,
    },
    {
      id: 2,
      name: 'Pen',
      price: 400,
    },
  ];

  student: { id: number; name: string } | undefined = { id: 1, name: 'alaa' };
  // student?: { id: number; name: string } = { id: 1, name: 'alaa' };

  color: string = 'green';
  toggle() {
    this.flag = !this.flag;
  }
}
