import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../component/login/User';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  dashboard = document.getElementById('dashboard');   
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')||'{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
      console.log("this.currentUserSubject.value: ",this.currentUserSubject.value)
      
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {

        return this.http
          .post<any>(`http://localhost:3000/auth`, { email, password })
          .pipe(
            map((user) => {
              // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
              user.authdata = window.btoa(email + ":" + password);
              localStorage.setItem("currentUser", JSON.stringify(user));
              this.currentUserSubject.next(user);
              console.log('authentification service user: ',user);
              console.log('authentification service currentUserSubject: ',this.currentUserSubject.value);
              return user;
            })
          );
      }

}