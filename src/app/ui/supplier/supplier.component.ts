import { Component, OnInit } from '@angular/core';
import { SocketService, ResponseSocket } from 'src/app/services/socket/socket-service';
import { ActivatedRoute } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  numOrder;
  // constructor(public socketService:SocketService,private router:ActivatedRoute) {
  constructor(public socketService:SocketService, private bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.socketService.setForm(this);
  }
  public getCanceledOrders(){
    console.log(this.numOrder);
  }

  public postCanceledOrder(){
    this.socketService.postCanceldOrder(this.numOrder);
  }

  public refreshData(result: ResponseSocket){
      if (result.numUser = this.socketService.getUserName()){
        alert(result.message);
      }
  }


}
@Component({
  selector: 'app-bottom-warning',
  templateUrl: 'app-bottom-warning.html',
})
export class WarningSupplier {
  constructor(private bottomSheetRef: MatBottomSheetRef<WarningSupplier>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}