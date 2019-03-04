import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  items = [];

  sliderConfig = {
      spaceBetween : 10,
      centeredSlides : true,
      slidesPerView : 1.6
  }

  constructor(private cartService : CartService, private router : Router) {

  }

  ngOnInit(){
    this.cart = this.cartService.getCart();
   
    this.cartService.getProducts().subscribe((data) => {
      console.log(data);
      this.items = data;
   });;
  }

  addToCart(product) {
      this.cartService.addProdcut(product);
      this.cart = this.cartService.getCart();
      console.log(this.cart);
  }

  openCart(){
    this.router.navigate(['cart'])
  }
}
