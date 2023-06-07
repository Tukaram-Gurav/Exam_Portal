import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { QuizService } from 'src/app/Services/QuizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit
{
  qId=0;
  Quiz: any;
  category:any;
  constructor(private route:ActivatedRoute,
    private quizser:QuizService,
    private catser:CategoryService,
    private router:Router){}



  ngOnInit(): void
  {
    this.qId=this.route.snapshot.params['qid'];
    
    this.quizser.getQuize(this.qId).subscribe((data)=>
    {
      this.Quiz=data;
     
    },
    (error)=>
    {
      Swal.fire('Error','Error in loading data','error');

    });

    this.catser.categories().subscribe((data:any)=>
    {
      this.category=data;
    },
    (error)=>
    {
      alert(error);
    })


  }

  updateData()
  {
    this.quizser.updateQuize(this.Quiz).subscribe((data)=>
    {
      Swal.fire('Success','Quiz updated Successfully','success').then((e)=>
     {
      this.router.navigate(['/admin/quizes']);
     } )
    },(error)=>
    {
      Swal.fire('Error','Error in loading data','error');
    })
  }

}
