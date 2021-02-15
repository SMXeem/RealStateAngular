import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusList:any=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.dataService.getStatusList().subscribe((result: any) => {
      if (result) {
        this.statusList=result;
      } 
      else {
        
      }
    }, (error: any) => {
      // this.toastr.error("Error", error.message);
    })
  }
}
