import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from "@angular/router";

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector:'app-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [routerTransition()],
  providers: [ProductService]
})

export class ProductsComponent implements OnInit{
  alerts: Array<any> = [];
  pageTitle: String = 'Create Product'
  buttonActions: String = 'Save'

  productId: String = null

  product: Product = {
    id: null,
    title: null,
    description: null,
    price: null,
    weight: null,
    image: null,
  }

  constructor(private productService:ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.productId = params.id );
  }

  ngOnInit(){
    if(this.productId !== undefined){
       this.pageTitle = 'Edit Product';
       this.buttonActions = 'Edit';
       return this.getProductInformation(this.productId)
    }
  }

  saveProduct(){
    if(this.productId) return this.editProduct();
    return this.productService.createProduct(this.product).subscribe(status => {
      this.alerts.push({ id: 1, type: 'success', message: 'Product created'})
      return this.product = {
        id: null,
        title: null,
        description: null,
        price: null,
        weight: null,
        image: null,
      }
    }, (err) => {
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    });
  }

  getProductInformation(id){
    return this.productService.getInformation(id).subscribe((response)=>{
      return this.product = response["product"]
    }, (err)=>{
      console.log(err)
    })
  }

  editProduct(){
    return this.productService.editProduct(this.product).subscribe((response)=>{
      return this.alerts.push({ id: 1, type: 'success', message: 'Product updated'})
    }, (err)=>{
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }

}
