import { Component, OnChanges, OnInit, Input, NgModule } from '@angular/core';
import { SocketService } from './services/socket/socket-service';
import {MatTableDataSource,MatPaginator, MatSort, MatSortable, MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { DictionaryService } from './services/rest/dictionary-service';
import { ngModuleJitUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { Jsonp, URLSearchParams, Http, Response,Headers, RequestOptions } from '@angular/http';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  @NgModule({
    providers: [SocketService, DictionaryService],
  })
export class AppComponent implements OnInit, OnChanges{
  @Input() public dataTable = []; 

  title = 'Привет';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public canceledOrders = [];
  dataSource;
  public socketService:SocketService;
  public restService:DictionaryService;
  
  public constructor(restService:DictionaryService,socketService:SocketService){
    this.socketService = socketService;
    this.restService = restService;
  }

  ngOnInit() {

  }
  ngOnChanges() {}

//   public getCanceledOrders(){
//     this.socketService.setCanceledOrders(this);
//     this.socketService.getSelectedOrders(); 
//   }

//   private getMatTableDirectory<T>(result):MatTableDataSource<T>{
//     return new MatTableDataSource<T>(result);    
//   }
//   public refreshData(){
//     // this.dataSource = this.getMatTableDirectory(this.canceledOrders);
//     this.refreshDataByRestService();
    
//   }

//   public refreshDataByRestService(){
    
//     this.restService.actionsForDirectories("getCanceledOrders", null, null)
//     .pipe(
//         map(
//           result => {
//             this.setResponce(result);
//             // this.dataSource.paginator = this.paginator;
//             // this.dataSource.sort = this.sort;
//           }, errorCatch => errorCatch
//         )).subscribe(
//           result => {
//             console.log(result);
//           }
//           );
//   }
//   public setResponce(result){
//     result.forEach(element => {
//         this.canceledOrders.push(
//             {position: element.id+10,name: element.order.orderNum,weight:"",symbol:""}
//         );
//     });
//     this.dataSource = this.getMatTableDirectory(this.canceledOrders);
// }
}
