import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent 
{
  public hide=true;

  public user=
  {
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  }


constructor(private userservice:UserService)
{

}


  formSubmit()
  {
   
      //addUser
   this.userservice.addUser(this.user).subscribe(
    (data) =>
    {
      Swal.fire("Success","User Created Successfully","success");
     
    }
    ,(error)=>
    {
     
      Swal.fire("Failure","User Not Created","error");
     
    }
    );

    this.user=
  {
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  }
   
  }

}
