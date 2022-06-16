import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authUser(user:any){
    let UserArray=[];
    if(localStorage.getItem('Users')){
      UserArray=JSON.parse(localStorage.getItem('Users')as string);
    }
    return UserArray.find((p: { Email: any; password: any; })=> p.Email === user.Email && p.password===user.password);
  }
}