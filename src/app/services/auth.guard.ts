import { Injectable } from '@angular/core';
import { CanActivateChild,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
 
      
  constructor( private auth:AuthService,private router:Router ){}

  canActivateChild(){
    if(!this.auth.isAuthenticated()){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  
}
