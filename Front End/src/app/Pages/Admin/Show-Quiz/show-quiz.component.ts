import { Component,OnInit } from '@angular/core';
import { QuizService } from 'src/app/Services/QuizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {
  quizes=
  [
  { qid:0,
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active:'',
    category:{title:''}
  }
];
  constructor(private quizser:QuizService){}
  ngOnInit(): void
  { 
    this.quizser.Quizes().subscribe((data:any)=>
    {
      console.log(data);
      this.quizes=data;

           
    },
    (error) =>
    {
      console.log(error);
      
      Swal.fire('Error!!!','Error Loading Quizes from Server ','error');
    })
    
  }
  delete(qid:any)
  {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizser.deleteQuiz(qid).subscribe((data)=>
    {
      this.quizes=this.quizes.filter((quiz)=>quiz.qid != qid);
    Swal.fire('Deleted!','Your file has been deleted.','success' )
    },
    (error)=>
    {
      Swal.fire('Error!!!','Error for deleting Quiz ','error');
    });
       
      }
    })







    
  }

}
