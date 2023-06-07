import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/Login/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  hide = true;
  loginData =
    {
      username: '',
      password: ''

    }


  constructor(private login: LoginService, public router: Router) { }


  formsubmit() {


    if (this.loginData.username.trim() == '' || this.loginData.username == null) {

      Swal.fire('Please Enter Username..!')
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      Swal.fire('Please Enter Password..!')
      return;
    }

    this.login.generateToken(this.loginData).subscribe((data: any) => {


      this.login.loginUser(data.token);
      this.login.getCurrentUser().subscribe((user: any) => {


        this.login.setUser(user);


        if (this.login.getUserRole() == "ADMIN") {
          this.router.navigate(['admin']);
          this.login.loginStatusSubject.next(true);
        }
        else if (this.login.getUserRole() == "NORMAL") {
          this.router.navigate(['user-dash/0']);
          this.login.loginStatusSubject.next(true);
        }
        else {
          this.login.logout();
        }

      }
      );


    }, (error) => {

      Swal.fire({
        icon: 'error',
        title: 'alert',
        text: 'Check your username and password..!',

      })

    });
  }



}
