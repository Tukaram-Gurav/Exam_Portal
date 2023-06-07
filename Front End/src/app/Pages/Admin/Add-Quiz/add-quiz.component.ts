import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { QuizService } from 'src/app/Services/QuizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{


  categories:any=[];

  QuizData=
  
    {
      title:'',
      description:'',
      maxMarks:'',
      noOfQuestions:'',
      active:true,
      category:{cid:''}
    }
  ;




  constructor(private catser:CategoryService,private quizser:QuizService){}

  ngOnInit(): void 
  {
    this.catser.categories().subscribe((data:any)=>
    {
      this.categories=data;
    },
    (error)=>
    {
      Swal.fire('Error!!','Error Loading Categories from server','error')
    })
   
  }


  AddQuiz()
  {
    this.quizser.AddQuizes(this.QuizData).subscribe((data)=>
    {
      Swal.fire('Success!!','Quiz Added Successfully','success')
    },
    (error)=>
    {
      Swal.fire('Error!!','Error While Adding Quize','error')
    })
  }
}
