import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit
{
  userResult:any;

  constructor(private userser:UserService){}
  ngOnInit(): void 
  {
    this.userser.getResult().subscribe((data)=>
    {
      this.userResult=data;
    })
  }

}
