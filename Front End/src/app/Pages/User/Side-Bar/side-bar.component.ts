import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit
{
  
  categories:any;

  constructor(private catser:CategoryService){}
  ngOnInit(): void
  {
    this.catser.categories().subscribe((data)=>
    {
    this.categories=data;
   
    },(error)=>
    {
      Swal.fire("Error!!!","Error loding Categories","error");
    })
  }

}
