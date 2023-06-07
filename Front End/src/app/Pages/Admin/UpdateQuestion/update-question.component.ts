import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionsService } from 'src/app/Services/QuestionService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit 
{
 qid=0;
 Question:any;
 public Editor = ClassicEditor;
  constructor(private route:ActivatedRoute,private queser:QuestionsService,private router:Router){}
  ngOnInit(): void 
  {
   this.qid=this.route.snapshot.params['qid'];
  this.queser.getQuestion(this.qid).subscribe((data)=>
  {
    this.Question=data;
  })
  }
  formSubmit()
  {
    this.queser.updateQuestion(this.Question).subscribe((data)=>
    {
      Swal.fire('Success','Question updated Successfully','success').then((e)=>
     {
      this.router.navigate(['/admin/quizes']);
     } )
    },(error)=>
    {
      Swal.fire('Error','Error in loading data','error');
    })

  }
}
