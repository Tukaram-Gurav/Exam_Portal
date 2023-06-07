import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionsService } from 'src/app/Services/QuestionService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit
{
  public Editor = ClassicEditor;

Qid:any;
title:any;
Question=
{
  quiz:{qid:''},
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
}

constructor(private route:ActivatedRoute,private queser:QuestionsService){}
  ngOnInit(): void {
    this.Qid=this.route.snapshot.params['qid'];
    this.title=this.route.snapshot.params['title'];
    this.Question.quiz['qid']=this.Qid;
  }

formSubmit()
{

if(this.Question.content.trim()=='' || this.Question.content==null )
{
  return;
}
if(this.Question.option1.trim()=='' || this.Question.option1==null )
{
  return;
}
if(this.Question.option2.trim()=='' || this.Question.option2==null )
{
  return;
}
if(this.Question.answer.trim()=='' || this.Question.answer==null )
{
  return;

}
  this.queser.addquestion(this.Question).subscribe((data)=>
  {
    Swal.fire("Success!!","Question Added Sucessfully","success");
    this.Question.content='';
    this.Question.option1='';
    this.Question.option2='';
    this.Question.option3='';
    this.Question.option4='';

  },
  (error)=>
  {
    Swal.fire("Error!!","Server Error !!!!","error") 
  })

}

}
