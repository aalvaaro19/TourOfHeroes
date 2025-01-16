import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-reactive.component.html',
  styleUrl: './contacto-reactive.component.css'
})
export class ContactoReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      privacidad: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      alert('Datos guardados correctamente');
      console.log(this.contactForm.value);
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  }
}
