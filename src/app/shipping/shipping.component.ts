import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
