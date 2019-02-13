import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { AbstractSocketService } from './abstract-socket-service';
import { AppComponent } from 'src/app/app.component';


export class SocketService extends AbstractSocketService {

    public mainComponent;
    
    sendMessage(message){
        var messageContent = message;
        if(messageContent && this.stompClient) {
            var chatMessage = {
                sender: this.userName,
                content: message,
                type: 'CHAT'
            };
            this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
            message = '';
        }
        event.preventDefault();
        // alert(this.testMessage);
    }
    
    public getSelectedOrders(){
        this.stompClient.send("/app/selectOrders",{},JSON.stringify({sender: this.userName, type: 'APPEND'}));
    }

    public setResponce(result){
        result.forEach(element => {
            this.mainComponent.canceledOrders.push(
                {position: element.id+10,name: element.order.orderNum,weight:"",symbol:""}
            );    
        });
        this.mainComponent.refreshData();
    }

    public setCanceledOrders(mainComponent){
        this.mainComponent = mainComponent;
    }
}
export  interface CanceldOrder {
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