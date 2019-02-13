import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { SocketService } from './services/socket/socket-service';
import {MatTableDataSource,MatPaginator, MatSort, MatSortable, MatBottomSheet, MatBottomSheetRef} from '@angular/material';

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
export class AppComponent implements OnInit, OnChanges{
  @Input() public dataTable = []; 

  title = 'Привет';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  canceledOrders = [];
  dataSource;
  public socketService = new SocketService();
  
  public constructor(){
    this.socketService.setCanceledOrders(this);    
  }

  ngOnInit() {}
  ngOnChanges() {}

  public getCanceledOrders(){
   this.socketService.getSelectedOrders(); 
  }

  private getMatTableDirectory<T>(result):MatTableDataSource<T>{
    return new MatTableDataSource<T>(result);    
  }
  public refreshData(){
    this.dataSource = this.getMatTableDirectory(this.canceledOrders);
  }
}
