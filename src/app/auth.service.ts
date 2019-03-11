import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

import { UserSnapshot } from './models';

class Credentials {
  token:string;
  user:UserSnapshot;
  constructor(cred){
    this.token=cred.token;
    this.user=new UserSnapshot(cred.user);
  }
}
@Injectable({ providedIn: 'root' })
export class AuthService {
    private UserSubject: BehaviorSubject<UserSnapshot>;
    private CredentialsSubject: BehaviorSubject<Credentials>;
    private RoleSubject:BehaviorSubject<string>;

    public User: Observable<UserSnapshot>;
    public Credentials:Observable<Credentials>;
    public Role:Observable<string>;


    constructor(private http: HttpClient,
      private route: ActivatedRoute, private router:Router) {

        this.UserSubject=new BehaviorSubject<UserSnapshot>(null);
        this.RoleSubject=new BehaviorSubject<string>(null);

        try{
        this.CredentialsSubject = new BehaviorSubject<Credentials>(new Credentials(JSON.parse(localStorage.getItem('User'))));
      } catch{
        this.CredentialsSubject=new BehaviorSubject<Credentials>(null)
      }
        this.Credentials = this.CredentialsSubject.asObservable();
        this.Credentials.subscribe(
          (x) => {
            try{this.UserSubject.next(new UserSnapshot(x.user))}
            catch{this.UserSubject.next(null)}
          }
        )
        this.Credentials.subscribe(
          (x) => {
            try{this.RoleSubject.next(x.user.account_type)}
            catch{this.RoleSubject.next(null)}
          }
        )
        this.User=this.UserSubject.asObservable();
        this.Role=this.RoleSubject.asObservable();
    }

    public get UserValue(): UserSnapshot {
      return this.UserSubject.value;
  }
  public get CredentialsValue(): Credentials {
    return this.CredentialsSubject.value;
}
public get RoleValue(): string {
  return this.RoleSubject.value;
}

    login(username: string, password: string) {
        return this.http.post(environment.SITE_URL + 'v1/login/','',{
          headers: new HttpHeaders({'Authorization': "Basic " + btoa(username+":"+password)})
        }).pipe(map(data => {
          if(data){
            data=JSON.parse(JSON.stringify(data))
                    localStorage.setItem('User', JSON.stringify(data));
                    try{
                    this.CredentialsSubject.next(new Credentials(data));
                    }catch{
                      this.UserSubject.next(null)
                    }
                return data;
          }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('User');
        this.CredentialsSubject.next(null);
        this.router.navigateByUrl('login');
    }
}