import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {

  @Output() message = new EventEmitter<string>();
  showMessage() {
     this.message.emit('This is my message');
  }
}
