import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/Services/QuestionService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
id:any;
title:any;
Questions:any=[];
constructor(private route:ActivatedRoute,private queser:QuestionsService){}

  ngOnInit(): void {
  this.id= this.route.snapshot.params['id'];
  this.title= this.route.snapshot.params['title'];

  this.queser.getQuestionsOfQuiz(this.id).subscribe((data)=>
  {
    this.Questions=data;
   console.log(this.Questions);
   
  },
  (error)=>
  {
    console.log("error loadng questions");
    
  })
 }


 deleteQues(qid:any)
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
      this.queser.deleteQuestion(qid).subscribe((data)=>
  {
    this.Questions=this.Questions.filter((question:any)=>question.queid != qid);
  Swal.fire('Deleted!','Your Questions has been deleted.','success' )
  },
  (error)=>
  {
    Swal.fire('Error!!!','Error for deleting Questions ','error');
  });
     
    }
  })




    }
  
}