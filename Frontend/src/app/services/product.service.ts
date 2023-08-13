import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { ProductModelServer, serverResponse} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;  
  constructor(private http : HttpClient) { }

  /* This is to get all products from backend server */
  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + '/products'
    , {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  /* GET SINGLE PRODUCT FROM SERVER */
  getSingleProduct(id: Number): Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

  /*GET PRODUCTS AGAINST CATEGORIES */
  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + 'products/category/' + catName);
  }

}
