
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
login: boolean;
visible:boolean;
  constructor() {
    this.login=false;
    this.visible=false;
   }
   loggedIn(){
      this.login=true;
   }
   notLogged(){
     this.login=false;
   }
   isAdmin(){
     this.visible=true;
   }
   notAdmin(){
     this.visible=false;
   }
   toggle() { this.visible = !this.visible; }
   get(){
     return this.visible;
   }
}

