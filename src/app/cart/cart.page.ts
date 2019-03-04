import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  selectedItems:any = [];
  test :any = [];
  total = 0;

  constructor(private cartService : CartService) { }

  ngOnInit() {
  let items = this.cartService.getCart();
  let selected = {};
  let temp = {};
  for (let obj of items) {
       temp = {};
      if(selected[obj.id]){
        selected[obj.id].count++;
        temp = selected;
      } else{
         selected[obj.id] = {...obj,count : 1}
         temp = selected;
      }
      this.selectedItems.push(temp); 
  }
  Object.keys;
  //this.selectedItems = selected;
  console.log('items' , this.selectedItems[0]);
  this.test.push(this.selectedItems[0]); 
  console.log('test' , this.test);
  
  //this.total = this.selectedItems.reduce((a,b)=>a+(b.count * b.price), 0);
  }

}
