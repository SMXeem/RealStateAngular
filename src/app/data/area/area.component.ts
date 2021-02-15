import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  areaList:any=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.dataService.getAreaList().subscribe((result: any) => {
      if (result) {
        this.areaList=result;
      } 
      else {
        
      }
    }, (error: any) => {
      // this.toastr.error("Error", error.message);
    })
  }
}
