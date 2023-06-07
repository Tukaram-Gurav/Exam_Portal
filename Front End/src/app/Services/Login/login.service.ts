import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_URL from '../helper';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{

public loginStatusSubject =new Subject<boolean>();
  constructor(private http:HttpClient) { }


//Get Current User
public getCurrentUser()
{
 return this.http.get(`${base_URL}/current-user`);
}






  public generateToken(loginData:any)
  {
    return this.http.post(`${base_URL}/generate-token`,loginData);
  }


  //storing token
  public loginUser(token: string)
  {

    console.log('Inside Login' +token);
    
    localStorage.setItem('token',token);
 return true;
  }


  //checkin loged in or not

  public isLogedIn()
  {
    let tokenStr=localStorage.getItem("token")

    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  //logout
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }




  //get Token
  public getToken()
  {
   return localStorage.getItem('token');
  }

  //saving user
  public setUser(user:any)
  {

    console.log('Inside SetUser.......................');
    
     localStorage.setItem('user',JSON.stringify(user));
    
  }

  //getting user
  public getUser()
  {
    let User=localStorage.getItem('user');
    if(User!=null)
    {
      console.log('Inside getUser.......................'+User);
      return JSON.parse(User);
    }
    else
    {
      this.logout();
      return null;
    }
   
  }

//get role
public getUserRole()
{
  
  let user=this.getUser();
  
  // return null;
  return user.authorities[0].authority;
}

}
