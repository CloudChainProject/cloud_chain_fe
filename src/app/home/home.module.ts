import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncateFilterPipe } from '../shared/pipes/truncate-filter.pipe';

import { HeaderHomeComponent } from '../layout/components/header-home/header-home.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule } from './../shared';

@NgModule({
  declarations: [HomeComponent, HeaderHomeComponent, TruncateFilterPipe],
    imports: [CommonModule, HomeRoutingModule, PageHeaderModule, FormsModule, NgbModule.forRoot(), HttpModule],
    exports: [ TruncateFilterPipe ]
})
export class HomeModule {}
