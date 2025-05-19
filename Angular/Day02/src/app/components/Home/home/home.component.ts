import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  department: string = 'All';
  itiTracks: { id: number; name: string; department: string }[];

  filteredList: { id: number; name: string; department: string }[];

  constructor() {
    this.itiTracks = [
      {
        id: 1,
        name: 'PD',
        department: 'SD',
      },
      {
        id: 2,
        name: 'UI/UX',
        department: 'Design',
      },
      {
        id: 3,
        name: '2D Graphics',
        department: 'Design',
      },
      {
        id: 4,
        name: 'Mobile Native',
        department: 'Java',
      },
      {
        id: 5,
        name: 'IOS ',
        department: 'Java',
      },
      {
        id: 6,
        name: 'os ',
        department: 'OS',
      },
    ];
    this.filteredList = this.itiTracks;
  }
  filterTracks() {
    this.filteredList =
      this.department == 'All'
        ? this.itiTracks
        : this.itiTracks.filter((track) => track.department == this.department);
  }
}
