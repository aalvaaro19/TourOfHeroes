import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consumir-imagen',
  imports: [CommonModule],
  templateUrl: './consumir-imagen.component.html',
  styleUrl: './consumir-imagen.component.css'
})
export class ConsumirImagenComponent implements OnInit{
  carts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/carts').subscribe((data: any) => {
      this.carts = data.carts;
    });
  }
}
