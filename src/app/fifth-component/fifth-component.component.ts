import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fifth-component',
  imports: [ NgFor ],
  templateUrl: './fifth-component.component.html',
  styleUrl: './fifth-component.component.css'
})
export class FifthComponentComponent implements OnInit {
  data: any[] = [];

  constructor(private servicio: DataService) { }

  ngOnInit(): void {
    this.servicio.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
