import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [CommonModule, UploadRoutingModule, PageHeaderModule, NgbModule.forRoot(), HttpModule],
  declarations: [UploadComponent]
})
export class UploadModule {}
