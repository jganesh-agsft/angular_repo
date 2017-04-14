import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import {EBindingComponent} from './e-binding.component';

@Component({
  selector: 'app-pbinding',
  templateUrl: './pbinding.component.html',
  styleUrls: ['./pbinding.component.css'],
  providers:[EBindingComponent]
})
export class PbindingComponent  {

  @Input() newResult: number = 100000;


 getMeesage(value){
   alert(value);
 }
}
