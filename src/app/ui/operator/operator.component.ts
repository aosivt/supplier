import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService, ResponseSocket } from 'src/app/services/socket/socket-service';
import { DictionaryService } from 'src/app/services/rest/dictionary-service';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  public canceledOrders = [];
  dataSource;

  // constructor(public restService:DictionaryService,public socketService:SocketService,private router:ActivatedRoute) {
  constructor(public restService:DictionaryService,public socketService:SocketService) {
    // this.router.params.subscribe(params => console.log(params));
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    
  }


  ngOnInit() {
    this.refreshDataByRestService();
    this.socketService.setForm(this);
  }
  public refreshDataByRestService(){
    
    this.restService.actionsForDirectories("getCanceledOrders", null, null)
    .pipe(
        map(
          result => {
            this.setResponce(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }, errorCatch => errorCatch
        )).subscribe(
          result => {
            console.log(result);
          }
          );
  }
  public refreshData(result: ResponseSocket) {
    if (result.dictionary != null){
      this.canceledOrders.push(
        {position: result.dictionary.id + 10, name: result.dictionary.order.orderNum }
      );
      this.dataSource = this.getMatTableDirectory(this.canceledOrders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }


public setResponce(result){
  this.canceledOrders = result.map(
    element => ({position: element.id + 10, name: element.order.orderNum })
    );
    this.dataSource = this.getMatTableDirectory(this.canceledOrders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}
private getMatTableDirectory<T>(result):MatTableDataSource<T>{
    return new MatTableDataSource<T>(result);
}
}
