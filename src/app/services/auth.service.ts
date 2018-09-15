import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient){ }

  private headers:HttpHeaders = new HttpHeaders("Content-Type");
  private url:string;
  private status:number;
  private currentUser:any={};

  public login(email, password){

    let user:any={};

    user.email = email;
    user.password = password;

    this.http.post("localhost://login",{user},{headers:this.headers})
    .subscribe(confirm=>{
      console.log(confirm);
    },
    err=>{
      console.log(err);
    })
  }

}
