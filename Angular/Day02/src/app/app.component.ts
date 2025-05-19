import { Component } from '@angular/core';
import { TestOneWayComponent } from './components/OneWayBinding/test-one-way.component';
import { TestTwoWayComponent } from './components/TwoWayBinding/test-two-way.component';
import { LoginComponent } from './components/login/login.component';
import { TestStructDirComponent } from './components/Directives/Structural Directives/test-struct-dir.component';
import { TestAttrComponent } from './components/Directives/attribute Directives/test-attr.component';
import { HomeComponent } from './components/Home/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    TestOneWayComponent,
    TestTwoWayComponent,
    LoginComponent,
    TestStructDirComponent,
    TestAttrComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day02';
}
