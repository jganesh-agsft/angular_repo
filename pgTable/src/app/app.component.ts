import { Component } from '@angular/core';
import { PbindingComponent } from './pbinding.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PbindingComponent]
})
export class AppComponent {
  title = 'app works!';
}
