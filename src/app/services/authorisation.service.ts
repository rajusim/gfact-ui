import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  private baseUrl:string = "https://localhost:7093/api/User/"
  constructor(private http : HttpClient, private router: Router) { }
                            
  signUp(userObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }
  signIn(loginObj:any) 
  {
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

  isLoggedIn() : boolean{
    return !!localStorage.getItem('token');
  }

  signOut()  
  {
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['signin']);
  }
}
