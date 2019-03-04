import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
   {
      category : "Pizza",
      expanded : true,
      products :[
        {id : 0, name : 'Salami', price : 8},
        {id : 1, name : 'Farm house', price : 5},
        {id : 2, name : 'Hot Shot', price : 9},
        {id : 3, name : 'Peri Peri', price : 5}
      ]
   },
   {
    category : "Pasta",
    products :[
      {id : 4, name : 'Cheesy', price : 8},
      {id : 5, name : 'Red Sauce', price : 5},
    ]
 },
 {
  category : "Salad",
  products :[
    {id : 6, name : 'Veggies', price : 8},
    {id : 7, name : 'All Chicken', price : 5},
    {id : 8, name : 'Chicken cheese', price : 9}  ]
},  
];

private cart : any = [];

  constructor(public http : HttpClient) { }

  getData () {
    return this.http.get<any[]>("http://localhost:3000/");
  }

  getProducts () {
    return this.http.get<any[]>("http://localhost:3000/home");
    
   // return this.data;
  }

  getCart() {
    return  this.cart;
  }

  addProdcut (product) {
    this.cart.push(product);
  }
}

 
