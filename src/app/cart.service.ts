import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  mostrar(): void{
    console.log('metodo mostrar del servicio');
  }

  agregarProducto(product: any): void{
    this.cart.push(product);
  }

  listarProductos(): any[]{
    return this.cart;
  }

}
