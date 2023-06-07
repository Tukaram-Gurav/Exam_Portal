import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/Services/QuestionService/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
qid:any;
Questions:any;
correctAnswers=0;
  markGot=0;
  Attempted=0;
  isSubmitted=false;
  timer:any;
  constructor(private locationSt: LocationStrategy,private route:ActivatedRoute,private queser:QuestionsService) { }


  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this.route.snapshot.params['qid'];
    this.loadQuestiona();


  }

  loadQuestiona()
  {
    this.queser.getQuestionsForTest(this.qid).subscribe((data:any)=>
    {
      this.Questions=data;
      this.timer=this.Questions.length*2*60;
      console.log(this.Questions);
      this.startTimer();
      
    },(error)=>
    {
    console.log(error);
    }
    )
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(()=>
    {
      history.pushState(null, '', location.href);
    });

  }

  SubmitQuiz()
  {

    
    Swal.fire({
      title: 'Do you want to Submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Cancel`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {

       this.evalveQuize();
       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // this.isSubmitted !=this.isSubmitted;
    // console.log('last : '+this.isSubmitted);
    
  }

  startTimer()
  {
   let t= window.setInterval(()=>
    {
      if(this.timer==0)
      {
       
        this.evalveQuize();
        clearInterval(t);
      }
      else
      {
        this.timer--;
      }

    },1000)
  }

  getFormatedTime()
  {
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} Min: ${ss} Sec`;
  }

  evalveQuize()
  {
    this.isSubmitted=true;

    // ***** Server Side evalution **********//
this.queser.eavlQuiz(this.Questions).subscribe((result:any)=>
{

  this.markGot=result.markGot;
  this.Attempted=result.Attempted;
  this.correctAnswers=result.correctAnswers;
  console.log("Answers");
  
  console.log(result)
},
(error)=>
{
  console.log(error);
})


    // ***** Client Side evalution **********//

    // console.log(this.isSubmitted);
    // this.Questions.forEach((ques:any)=>
    //   {
    // if(ques.GivenAnswer==ques.answer)
    // {
    //   this.correctAnswers++;

    //   let singleMarks=this.Questions[0].quiz.maxMarks /this.Questions.length

    //   this.markGot += singleMarks;

      
    //   if(ques.GivenAnswer.trim() != '')
    //   {
    //     this.Attempted++;
    //   }
      
    // }
    //   });
      
    //   console.log("Correct answers : "+this.correctAnswers);
    //   console.log('Marks Got :'+this.markGot);
    //   console.log(this.Questions);
    //   console.log('Attempted : '+this.Attempted);
      
      
  }
}
