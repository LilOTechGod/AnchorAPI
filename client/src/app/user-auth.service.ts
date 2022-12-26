import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();
  newmessage: any;

  private apiSource = new BehaviorSubject<any>('');
  currentApiMessage = this.apiSource.asObservable();
  newApmessage: any;

  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(`http://localhost:4000/api/users/signin`, data);
  }
  changeMessage(message: any) {
    this.messageSource.next(message);
    this.newmessage = message;
    console.log(message);
  }
  isLoggedIn() {
    return this.newmessage;
  }

  logout(message: any) {
    this.messageSource.next('');
    this.newmessage = '';
  }

  changeAPIData(apiMessage: any) {
    this.apiSource.next(apiMessage);
    this.newApmessage = apiMessage;
    console.log(apiMessage);
  }
}
