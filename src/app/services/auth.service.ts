import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = false;

  constructor() { }

  login(email: string, password: string): boolean {

    if(email === 'admin@gmail.com' && password === 'admin123'){
      this.isLogged = true;
      return true;
    }

    return false;
  }

  logout(){
    this.isLogged = false;
  }

  isAuthenticated(): boolean{
    return this.isLogged;
  }

}