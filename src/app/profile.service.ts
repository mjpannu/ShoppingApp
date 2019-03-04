import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  mobile:number = 0;
  address :String = "";
  constructor() { 
    

  }

  getMobile () {
    return this.mobile;
  }
  
  getAddress () {
    return this.address;
  }

  edit(mobile, address) {
      this.mobile = mobile;
      this.address = address;
  }
}
