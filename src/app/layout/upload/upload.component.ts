import {Component} from '@angular/core';
import { routerTransition } from '../../router.animations';

import { UploadService } from './upload.service';

@Component({
  selector:'app-upload',
  templateUrl:'./upload.component.html',
  styleUrls: ['./upload.component.scss'],
  animations: [routerTransition()],
  providers: [UploadService]

})

export class UploadComponent{
  alerts: Array<any> = [];
  fileToUpload: File = null;

  constructor(private uploadService : UploadService) { }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      return this.uploadFileToActivity()
  }

  uploadFileToActivity() {
    var name = localStorage.getItem('name');
    console.log(this.fileToUpload)
    this.uploadService.postFile(this.fileToUpload, name).subscribe(data => {
    console.log('miaoooooooooo')
    }, error => {
      console.log(error);
    });
  }

  public closeAlert(alert: any) {
      const index: number = this.alerts.indexOf(alert);
      this.alerts.splice(index, 1);
  }


}
