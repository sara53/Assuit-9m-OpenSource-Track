import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-attr',
  imports: [CommonModule],
  templateUrl: './test-attr.component.html',
  styleUrl: './test-attr.component.css',
})
export class TestAttrComponent {
  flag: boolean = true;
  toggle() {
    this.flag = !this.flag;
  }
}
