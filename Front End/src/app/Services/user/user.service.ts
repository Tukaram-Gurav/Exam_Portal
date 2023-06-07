import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_URL from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    
  }

  addUser(user:any)
  {
   return this.http.post(`${base_URL}/user/`,user);
  }

  getResult()
  {
    return this.http.get(`${base_URL}/result/`)
  }

  getResultByUser(user:any)
  { 
    return this.http.get(`${base_URL}/result/${user}`);
  }
  getResultByQuiz(quiz:any)
  { 
    return this.http.get(`${base_URL}/result/byquiz/${quiz}`);
  }
}
