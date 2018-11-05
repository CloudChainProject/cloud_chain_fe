import {Component, OnInit} from '@angular/core';
import { routerTransition } from '../../../router.animations';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector:'app-products_list',
  templateUrl:'./products_list.component.html',
  styleUrls: ['./products_list.component.scss'],
  animations: [routerTransition()],
  providers: [ProductService]

})

export class ProductsListComponent implements OnInit{
  alerts: Array<any> = [];
  products: Array<any> = [];

  constructor(private productService : ProductService) { }

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

  deleteProduct(id){
    return this.productService.deleteProduct(id).subscribe((res)=>{
      this.alerts.push({ id: 1, type: 'success', message: 'Product deleted'})
      return this.init()
    }, (err)=>{
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }


}
