import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket = io('http://localhost:3002');

  getCount() {
    let observable = new Observable<any>(observer => {
      this.socket.on('admin', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };  
    });
    return observable;
  }

  getData() {
    let observable = new Observable<any>(observer => {
      this.socket.on('data', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };  
    });
    return observable;
  }
}
