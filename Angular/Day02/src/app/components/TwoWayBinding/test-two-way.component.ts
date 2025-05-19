import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-two-way',
  imports: [FormsModule],
  templateUrl: './test-two-way.component.html',
  styleUrl: './test-two-way.component.css',
})
export class TestTwoWayComponent {
  data: string = '';
  // data: string = '';
  // getInputValue(e: Event) {
  //   let target = e.target as HTMLInputElement;
  //   this.data = target.value;
  //   console.log(this.data);
  // }
}
