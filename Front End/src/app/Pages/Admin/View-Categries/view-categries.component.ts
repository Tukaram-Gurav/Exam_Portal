import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categries',
  templateUrl: './view-categries.component.html',
  styleUrls: ['./view-categries.component.css']
})
export class ViewCategriesComponent implements OnInit {
  constructor(private catservice:CategoryService){}
 
  categories:any;
  ngOnInit(): void {
   this.catservice.categories().subscribe((data:any)=>
   {
    this.categories=data;
   },
   (error)=>
   {
    Swal.fire('Error','Error in loading data','error');
   })
  }


  DeleteCategory(cid:any)
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
        this.catservice.DeleteCategory(cid).subscribe((data)=>
    {
      this.categories=this.categories.filter((category:any)=>category.cid != cid);
    Swal.fire('Deleted!','Your file has been deleted.','success' )
    },
    (error)=>
    {
      Swal.fire('Error!!!','Error for deleting Quiz ','error');
    });
       
      }
    })

    
  }

  
   
}
