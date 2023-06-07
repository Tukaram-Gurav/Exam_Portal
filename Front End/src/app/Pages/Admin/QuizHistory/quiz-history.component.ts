import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.css']
})
export class QuizHistoryComponent 
{
  quiz:any;
  userResult:any;
  
  constructor(private userser:UserService,private route:ActivatedRoute ){}
  ngOnInit(): void 
  {

    this.quiz=this.route.snapshot.params['quiz'];
this.userser.getResultByQuiz(this.quiz).subscribe((data:any)=>
{
   
  this.userResult=data;
  
  
})
   
  }

}
