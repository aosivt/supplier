import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Socket from 'socket.io-client';
import { SocketService } from './services/socket/socket-service';
import { MatTableModule, MatButtonModule, 
         MatDialogModule, MatInputModule, 
         MatCheckboxModule, MatTabsModule, 
         MatSortModule, MatExpansionModule, 
         MatMenuModule, MatIconModule,
          MatListModule, MatPaginatorModule, 
          MatCardModule, MatProgressSpinnerModule, 
          MatProgressBarModule, MatButtonToggleModule, MatBottomSheet, MatBottomSheetRef, MatBottomSheetContainer, MatBottomSheetModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DictionaryService } from './services/rest/dictionary-service';
import { HttpModule } from '@angular/http';
import { WarningComponent } from './ui/warning/warning.component';
import { OperatorComponent } from './ui/operator/operator.component';
import { SupplierComponent, WarningSupplier } from './ui/supplier/supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    OperatorComponent,
    SupplierComponent,
    WarningSupplier
  ],
  entryComponents: [
    WarningSupplier
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,HttpClientModule,
    MatDialogModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatTabsModule,MatSortModule,MatExpansionModule,
    MatMenuModule,MatIconModule,MatListModule,MatMenuModule,MatTableModule,MatPaginatorModule,MatSortModule,MatCardModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatButtonToggleModule, MatTableModule, MatButtonModule,
    AppRoutingModule, HttpModule, MatBottomSheetModule
  ],
  providers: [SocketService, DictionaryService, MatBottomSheet],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
