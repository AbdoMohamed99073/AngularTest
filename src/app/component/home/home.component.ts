import { Component } from '@angular/core';
import {StoreData} from "../../ViewModels/store-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  status:boolean = true;
  storeinfot:StoreData;
  constructor() {
    this.storeinfot=new StoreData('iti','https://picsum.photos/200/300',['sss','sssss','afsadfasf']);
  }
  change()
  {
    this.status=!this.status
  }
}
