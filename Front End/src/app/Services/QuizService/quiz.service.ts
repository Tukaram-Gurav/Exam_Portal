import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_URL from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public Quizes()
  {
    return this.http.get(`${base_URL}/quiz/`)
  }
  public AddQuizes(quiz: any)
  {
    return this.http.post(`${base_URL}/quiz/`,quiz)
  }

  public deleteQuiz(qid:any)
  {
    return this.http.delete(`${base_URL}/quiz/${qid}`);
  }

  public getQuize(qid:any)
  {
    return this.http.get(`${base_URL}/quiz/${qid}`)
  }

  //update quiz
  public updateQuize(quiz:any)
  {
    return this.http.put(`${base_URL}/quiz/`,quiz)
  }

  //get Quizes of category
  public getQuzesOfCayegory(cid:any)
  {
    return this.http.get(`${base_URL}/quiz/category/${cid}`)
  }

  //get Active Quizes
  public getActiveQuizes()
  {
    return this.http.get(`${base_URL}/quiz/active`)
  }

  //get ACtive Quizes of Category
  public getAcctiveQuizesOfCategory(cid:any)
  {
    return this.http.get(`${base_URL}/quiz/category/active/${cid}`)
  }
}
