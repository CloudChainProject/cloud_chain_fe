import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
  declarations: [ProductsComponent],
    imports: [CommonModule, ProductsRoutingModule, PageHeaderModule, FormsModule, NgbModule.forRoot(), HttpModule]
})
export class ProductsModule {}
