import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
cid:any;
category:any;
constructor(private catser:CategoryService,private route:ActivatedRoute,private router:Router)
{
  
}


  ngOnInit(): void {
    this.cid=this.route.snapshot.params['cid'];
   this.catser.getCategory(this.cid).subscribe((data)=>
   {
    this.category=data;
   })
  }
  
  update()
  {
    this.catser.updateCategory(this.category).subscribe((data)=>
    {
      Swal.fire('Success','Category  updated Successfully','success').then((e)=>
     {
      this.router.navigate(['/admin/categories']);
     } )
    },
    (error)=>
    {
      Swal.fire('Error','Error in loading data','error');
    })
  }

}
