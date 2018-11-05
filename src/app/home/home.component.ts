import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute } from "@angular/router";

import { Product } from '../layout/product/product';
import { ProductService } from '../layout/product/product.service';

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  providers: [ProductService]
})

export class HomeComponent implements OnInit{
  alerts: Array<any> = [];
  products: Array<any> = [];
  prodsToBuy: Array<any> = [];
  tot: any  = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit(){
    return this.init()
  }

  init(){
    return this.productService.getProduct().subscribe((response)=>{
      return this.products = response['products'];
    }, (error)=>{
      console.log(error);
    })
  }

  addToCart(prod){
    prod.quantity = 1;
    this.prodsToBuy.push(prod)
    this.tot += prod.price
    return
  }

  deleteProduct(id){
    var arr = this.prodsToBuy;
    arr.map(function(item, index) { if(item._id === id) return arr.splice(index, 1)})
    this.prodsToBuy = arr
    return this.calculateTot()
  }

  calculateTot(){
    this.tot = 0;
    return this.prodsToBuy.map((index) => {
      this.tot += index.quantity * index.price
    })
  }

  buy(){
    return this.productService.buyProduct(this.prodsToBuy).subscribe((response)=>{
      this.tot = 0;
      this.prodsToBuy = [];
      window.scrollTo(0, 0);
      this.alerts.push({ id: 1, type: 'success', message: 'Order sent'})
      return this.init()
    }, (err)=>{
      this.tot = 0;
      this.prodsToBuy = [];
      window.scrollTo(0, 0);
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }

}
