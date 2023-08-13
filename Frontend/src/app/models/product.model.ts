export interface ProductModelServer {
  id: any;
  name: String;
  category: String;
  description: String;
  image: String;
  price: any;
  quantity: any;
  images: String;
}


export interface serverResponse  {
  count: number;
  products: ProductModelServer[]
};
