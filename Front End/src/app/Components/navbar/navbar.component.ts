import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

islogedin=false;
user:any=null;

ngOnInit(): void
{

  this.islogedin=this.login.isLogedIn();
  this.user=this.login.getUser();
 this.login.loginStatusSubject.asObservable().subscribe((data)=>
 {
  this.islogedin=this.login.isLogedIn();
  this.user=this.login.getUser();
 })
}

  constructor(public login:LoginService){}
  

  logout()
  {
    this.login.logout();
    window.location.reload();
  }
}
