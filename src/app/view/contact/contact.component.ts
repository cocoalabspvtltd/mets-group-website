
import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  profForm          = new FormGroup({})
  profForm2         = new FormGroup({})
  first_name        = new FormControl('', [Validators.required,Validators.minLength(3)]);
  email             = new FormControl('', [Validators.required,Validators.email]);
  message           = new FormControl('', [Validators.required,Validators.minLength(1)]);
  data              : any
  show              : any
  items             : any;
  error: any;
  msg: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private toastr:ToastrService) {
    
  }
    contactForm                     = new FormGroup({
    firstname                       : new FormControl(),
    email                           : new FormControl(),
    message                         : new FormControl()
  })
  contact(){ 
    //console.log(this.contactForm.value.firstname,this.contactForm.value.email, this.contactForm.value.message)
     var formData: any                   = new FormData();
     formData.append('name',             this.contactForm.value.firstname);
     formData.append('email',            this.contactForm.value.email);
     formData.append('message',          this.contactForm.value.message);
     this.ApiService.contact(formData).subscribe(
       (res:any) => {
      //  console.log('contact',res)
      //  if(res.success==true){
      //    this.contactForm.reset();
        this.msg=res.message;
      //  }else{
        
       
  // }
   })
  }
}