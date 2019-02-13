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
          MatProgressBarModule, MatButtonToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,HttpClientModule,
    // RouterModule.forRoot([
      // {path: 'map', component: MapComponent},]),
    MatDialogModule,MatButtonModule,MatInputModule,MatCheckboxModule,MatTabsModule,MatSortModule,MatExpansionModule,
    MatMenuModule,MatIconModule,MatListModule,MatMenuModule,MatTableModule,MatPaginatorModule,MatSortModule,MatCardModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatButtonToggleModule, MatTableModule, MatButtonModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
