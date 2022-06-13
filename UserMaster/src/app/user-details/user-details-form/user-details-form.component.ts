import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetails } from 'src/app/shared/user-details.model';
import { UserDetailsService } from 'src/app/shared/user-details.service';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [
  ]
})
export class UserDetailsFormComponent implements OnInit {

  constructor(public service : UserDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  this.service.updateUserDetails().subscribe(
    res =>{
      this.resetForm(form)
      this.toastr.success('Updated Successfully!!!','User Detail Register')
      this.service.getUserDetailsList();
    },
    err =>{
      console.log(err);
    }
  );
}
resetForm(form:NgForm){
  form.form.reset();
  this.service.formData=new UserDetails
}
}
