import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_URL from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }


  public getQuestionsOfQuiz(qid:any)
  {
    return this.http.get(`${base_URL}/question/quiz/all/${qid}`);
  }

  public getQuestionsForTest(qid:any)
  {
    return this.http.get(`${base_URL}/question/quiz/${qid}`);
  }

  public addquestion(question:any)
  {
    return this.http.post(`${base_URL}/question/`,question);
  }

  public deleteQuestion(queid:any)
  {
    return this.http.delete( `${base_URL}/question/${queid}`)
  }

  public eavlQuiz(question:any)
  {
    return this.http.post(`${base_URL}/question/eval-quiz`,question);
  }

  public getQuestion(qid:any)
  {
  return this.http.get(`${base_URL}/question/${qid}`);
  }
  public updateQuestion(question:any)
  {
    return this.http.put(`${base_URL}/question/`,question);
  }
}
