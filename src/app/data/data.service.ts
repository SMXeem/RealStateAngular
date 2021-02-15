import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }
  
  getStatusList() {    
    return this.http.get(this._url+'Data/GetStatus',this.httpOptions);
  }
  
  getAreaList() {    
    return this.http.get(this._url+'Data/GetArea',this.httpOptions);
  }
}