import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-forth-component',
  imports: [ FormsModule, NgStyle, NgFor],
  templateUrl: './forth-component.component.html',
  styleUrl: './forth-component.component.css'
})
export class ForthComponentComponent {
  mensaje = 'Hola Mundo';

  currentStyles : Record<string, string> = {
    'font-style': 'italic',
    'font-weight': 'bold',
    'font-size': '24px'
  };

  productos = ['Camisa', 'Pantalon', 'Zapatos', 'Corbata', 'Cinturon'];
  Clientes: Cliente[] = [
    {id: 1, nombre: 'Juan', apellido: 'Perez', facturacion: 1000},
    {id: 2, nombre: 'Maria', apellido: 'Gomez', facturacion: 2000},
    {id: 3, nombre: 'Carlos', apellido: 'Lopez', facturacion: 3000},
    {id: 4, nombre: 'Ana', apellido: 'Martinez', facturacion: 4000},
    {id: 5, nombre: 'Pedro', apellido: 'Garcia', facturacion: 5000}
  ];
}
