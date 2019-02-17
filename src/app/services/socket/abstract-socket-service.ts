import { Injectable, Output, EventEmitter } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { PropertyForConnectionToService } from '../property-for-connection-to-service';

@Injectable()
export abstract class AbstractSocketService {
    protected stompClient;
    protected serverUrl = PropertyForConnectionToService.getSocketURI();
    protected userName = Date.now().toString();

    public testMessage: string;


    @Output() valueChange = new EventEmitter();

    constructor(){
        this.initializeWebSocketConnection();
    }

    public abstract setResponce(result);

      initializeWebSocketConnection(){
        console.log(this.serverUrl);
        let ws = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(ws);
        let that = this;
        this.stompClient.connect({}, function(frame) {
        that.stompClient.subscribe('/topic/canceled', function (payload) {
            var message = JSON.parse(payload.body);
            that.setResponce(message);
        });
        });
      }
    public getUserName(){
      return this.userName;
    }

}

