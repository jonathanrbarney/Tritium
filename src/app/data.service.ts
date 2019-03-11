import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Account } from './models';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public errors:any;
  public headers:any;

  constructor(private http:HttpClient,
    private auth:AuthService,
    ) { 
      auth.Credentials.subscribe(
        (CD) => {try{
      this.headers={
        headers: new HttpHeaders({'Authorization':'Token '+ CD.token})
      }}catch{
        console.log('No Token');
        this.headers={
          headers: new HttpHeaders({})
        }
      }}
      )
    }

  public getUsers():Observable<any> {
    return this.http.get(environment.SITE_URL + 'v1/accounts/', this.headers).pipe(map(
      data => {
        try{
          console.log(data)
          for (let i of JSON.parse(JSON.stringify(data))){
            return new Account(i)}
          }
        catch(e){console.log(e);return null}
      }));
  }

  public getUser(id):Observable<any>{
    return this.http.get(environment.SITE_URL + 'v1/accounts/'+ id + '/', this.headers).pipe(map(
      data => {
        try{return new Account(data)}
        catch(e){console.log(e);return null}
      }));
  }
  public putUser(acct):Observable<any>{
    return this.http.put(environment.SITE_URL + 'v1/accounts/'+ acct.id + '/', JSON.stringify(acct) , this.headers).pipe(map(
      data => {
        try{return new Account(data)}
        catch(e){console.log(e);return null}
      }));
  }

}
