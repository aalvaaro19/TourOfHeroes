import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-eight-component',
  imports: [FormsModule],
  templateUrl: './eight-component.component.html',
  styleUrl: './eight-component.component.css'
})
export class EightComponentComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
