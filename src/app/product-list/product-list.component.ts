import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private cartService: CartService) { }

  agregarProducto(){
    const producto = this.cartService.agregarProducto;
    console.log(producto);
  }
}
