import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncateImageFilterPipe } from '../../../shared/pipes/truncate-image-filter.pipe';

import { ProductsListRoutingModule } from './products_list-routing.module';
import { ProductsListComponent } from './products_list.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
  imports: [CommonModule, ProductsListRoutingModule, PageHeaderModule, NgbModule.forRoot(), HttpModule],
  declarations: [ProductsListComponent, TruncateImageFilterPipe]
})
export class ProductsListModule {}
