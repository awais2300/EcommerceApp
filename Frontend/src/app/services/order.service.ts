import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: ProductResponseModel[] = [];
  ServerURL = environment.SERVER_URL;

  constructor(private http: HttpClient) {
  }


  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.ServerURL}/orders/${orderId}`).toPromise();
  }
}

interface ProductResponseModel {
  id: any;
  title: String;
  description: String;
  price: any;
  quantityOrdered: any;
  image: String;
}
