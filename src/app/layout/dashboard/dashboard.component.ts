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
  public files = null;

  alerts: Array<any> = [];


  constructor(private dashboardService:DashboardService) {}

  ngOnInit() {
    this.getFiles();
  }

  getFiles = ()=>{
    var name = localStorage.getItem('name');
    return this.dashboardService.getFilesTeammember(name).subscribe((response)=>{
      return this.files = response['files'];
    }, (err)=>{
      return this.alerts.push({ id: 4, type: 'danger', message: `Error: ${err.message}`});
    })
  }
}
