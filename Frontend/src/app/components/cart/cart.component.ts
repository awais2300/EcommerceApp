import { Component, OnInit} from '@angular/core';
import { CartService} from "../../services/cart.service";
import { Observable} from "rxjs";
import { CartModelServer} from "../../models/cart.model";

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: any;
  subTotal: any;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
     this.cartService.cartData$.subscribe((data:any) => this.cartData = data);
     this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(id: Number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(id, increaseQuantity);
  }

}
