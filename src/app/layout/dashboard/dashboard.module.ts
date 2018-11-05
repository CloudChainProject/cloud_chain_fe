import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        // NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}
