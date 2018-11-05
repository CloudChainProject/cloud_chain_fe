import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit {
  public productCounter = null;
  public orderCounter = null;
  alerts: Array<any> = [];


  constructor(private dashboardService:DashboardService) {}

  ngOnInit() {
    this.getTotProducts();
    this.getTotOrders();
  }

  getTotProducts = ()=>{
    return this.dashboardService.getNumberOfProducts().subscribe((response)=>{
      return this.productCounter = response['products'];
    }, (err)=>{
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }

  getTotOrders = ()=>{
    return this.dashboardService.getNumberOfOrders().subscribe((response)=>{
      console.log(response)
      return this.orderCounter = response['orders'];
    }, (err)=>{
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }

}
