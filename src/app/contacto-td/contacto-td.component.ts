import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto-td',
  imports: [FormsModule],
  templateUrl: './contacto-td.component.html',
  styleUrl: './contacto-td.component.css'
})
export class ContactoTDComponent {
  contact = {
    email: '',
    asunto: '',
    mensaje: '',
    privacidad: false
  };

  onSubmit(f: NgForm) {
    alert('Los datos se guardaron correctamente.');
    console.log(f.value);
  }
}
