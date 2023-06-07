import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login/login.service';
import { UserService } from 'src/app/Services/user/user.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit
{

  public chart: any;
  historyResult: any;
  marks:any;
  Quiz:any;
  totalmarks:any
  
  constructor(private logser: LoginService, private userser: UserService) 
  {  
    Chart.register(...registerables);
  }
  
  ngOnInit(): void
  {

    this.logser.getCurrentUser().subscribe((data: any) => 
    {

      this.userser.getResultByUser(data.username).subscribe((data2:any) => 
      {
        console.warn(data2);
        
        this.historyResult = data2
        this.Quiz=data2.map((obj: { quiz: any; })=>obj.quiz);
        this.marks=data2.map((obj: { marks: any; })=>obj.marks);
        this.totalmarks=data2.map((obj: { totalMarks: any; })=>obj.totalMarks);
      
      });

    });

    this.createChart(); 
    
  }


  createChart()
  {
    setTimeout(() => {
     
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      
      data: {// values on X-Axis
        labels: this.Quiz, 
	       datasets: [
          {
            label: "TotalMarks",
            data: this.totalmarks,
            backgroundColor: 'green',
            
          },
          {
            label: "Marks Obtained",
            data: this.marks,
            backgroundColor: 'blue',
           
          }
          
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }, 200);
  }

}
