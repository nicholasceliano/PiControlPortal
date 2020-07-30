import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root',
})
export class QuotePullerService {
    constructor() { }

    public execQuotePuller(): Observable<string> {
        const myWebSocket: WebSocketSubject<string> = webSocket(
            'ws://192.168.0.1:3000/'
        );

        return myWebSocket.asObservable();
    }
}
