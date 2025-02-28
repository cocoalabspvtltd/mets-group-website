import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  data: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,) {
    this.Gallery();
  }
 
Gallery(){ 
    this.ApiService.gallery().subscribe(
      (res:any) => {
        console.log('res',res)
        if(res.success == true){
      
            this.data=res.data;
            console.log(this.data)
        } 
  })
}
}