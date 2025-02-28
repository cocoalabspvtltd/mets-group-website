
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  data: any;
  mets_college: any;
  mets_engineering: any;
  mets_polytechnic: any;
  show: any;
  mets_enterpreneurship: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,) {
    this.Courses();
  }
 ngOninit(){
  this.show=1;
  
 }

Courses(){

    this.ApiService.courses().subscribe(
      (res:any) => {
        console.log('res',res)
        if(res.success==true){
          this.data=res.data
          this.mets_college=res.mets_college;
          this.mets_engineering =res.mets_engineering;
          this.mets_polytechnic=res.mets_polytechnic;
          this.mets_enterpreneurship=res.mets_GEP;
        }   
  })
}
}

