import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private loginser:LoginService){}
  
  logout()
  {
    this.loginser.logout();
    window.location.reload();
  }
}
