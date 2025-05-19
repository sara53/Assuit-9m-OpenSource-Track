import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way',
  imports: [],
  templateUrl: './test-one-way.component.html',
  styleUrl: './test-one-way.component.css',
})
export class TestOneWayComponent {
  imgSrc1: string = '1.jpg';
  imgSrc2: string = '3.jpg';
  altText: string = 'helloo';
  trackName: string = 'Open Source';
  student: { id: number; name: string; age: number } = {
    id: 1,
    name: 'Ali',
    age: 22,
  };

  flag: boolean = false;
}
