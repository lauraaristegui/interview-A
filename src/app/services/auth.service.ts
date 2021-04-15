import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  isAuthenticated(){
    if(!localStorage.getItem('user')) return false;
    return true;
  }

}
