import { Component } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categries',
  templateUrl: './add-categries.component.html',
  styleUrls: ['./add-categries.component.css']
})
export class AddCategriesComponent {
  constructor(private catservice:CategoryService){}

  category={
    title:'',
    description:''
  };

  formSubmit()
  {
    if(this.category.title.trim()=='' &&this.category.title==null)
    {
      Swal.fire('Error!!!!','title Required','error');
      return;
    }

    
    this.catservice.Addcategories(this.category).subscribe((data)=>
    {
    Swal.fire('Success','Category Added Successfully','success');
  },(error)=>
  {
  Swal.fire('Error!!!!','Server Error','error');
  })
  }
}
