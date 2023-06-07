import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/QuizService/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit{
  cid:any;
  Quizes:any;

  constructor(private route:ActivatedRoute,private quizser:QuizService){}


ngOnInit(): void {

this.route.params.subscribe((params)=>
{
  this.cid=params['cid'];
console.log(this.cid);


  if(this.cid==0)
  {
    console.log('Load All Quizes');
   this.quizser.getActiveQuizes().subscribe((data)=>
    {
      this.Quizes=data;
           
    },
    (error)=>
    {
      alert(error);
    })
  }
  else
  {
    console.log('Load specific Quizes');

    this.quizser.getAcctiveQuizesOfCategory(this.cid).subscribe((data)=>
    {
      this.Quizes=data;
    },
    (error)=>
    {
      alert(error);
    })
  }

})

    
     
}





  
}
