import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { AbstractSocketService } from './abstract-socket-service';
import { AppComponent } from 'src/app/app.component';
import { Action } from './action';


export class SocketService extends AbstractSocketService {

    public component;
    
    public getSelectedOrders(){
        this.stompClient.send("/app/selectOrders",{},JSON.stringify({sender: this.userName, type: 'APPEND'}));
    }
    public postCanceldOrder(orderNumText){
        this.stompClient.send("/app/canceledOrder",{}, this.getRequestSocket(orderNumText));
    }

    public setResponce(result: ResponseSocket) {
        this.component.refreshData(result);
    }

    public setForm(component){
        this.component = component;
    }

    private getRequestSocket(orderNumText){
        const request = {} as RequestSocket;
        request.orderNum = orderNumText;
        request.numUser = this.userName;
        request.action = Action.SAVE;
        return JSON.stringify(request);
    }
}

export interface RequestSocket{
    numUser:string;
    orderNum:string;
    action:Action;
}
export interface ResponseSocket{
    message: string;
    dictionary: CanceledOrder;
    action: Action;
    numUser: string;
}

export interface CanceledOrder {
    cancelDate: Date;
    id: number;
    orderId: number;
    symbol: string;
    order: Order;
  }

  export interface Order {
    id: number;
    orderNum: string;
  }