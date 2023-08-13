import {ProductModelServer} from "./product.model";

export interface CartModelServer {
  total: any;
  data: [{
    product: ProductModelServer,
    numInCart: any
  }];
}

export interface CartModelPublic {
  total: any;
  prodData: [{
    id: any,
    incart: any
  }]
}
