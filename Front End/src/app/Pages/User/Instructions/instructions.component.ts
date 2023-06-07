import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/QuizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit
{
qid:any;
Quiz:any;
constructor(private route:ActivatedRoute,private quizser:QuizService,private routes:Router){}


  ngOnInit(): void 
  {
    this.qid=this.route.snapshot.params['cid'];
    this.quizser.getQuize(this.qid).subscribe((data)=>
   {
    this.Quiz=data;
   },
   (error)=>
   {
    alert(error);
   })
  }

  startQuiz()
  {
    Swal.fire({
      title: 'Do you want to start the changes?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Cancel`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.routes.navigate(['/start/'+this.qid])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
