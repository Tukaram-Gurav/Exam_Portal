import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_URL from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  public categories()
  {
   return this.http.get(`${base_URL}/category/`);
  }

  public Addcategories(category: any)
  {
   return this.http.post(`${base_URL}/category/`,category);
  }
  public DeleteCategory(cid:any)
  {
    return this.http.delete(`${base_URL}/category/${cid}`);
  }

public getCategory(cid:any)
{
  return this.http.get(`${base_URL}/category/${cid}`)
}

  public updateCategory(category:any)
  {
    return this.http.put(`${base_URL}/category/`,category);
  }
}
