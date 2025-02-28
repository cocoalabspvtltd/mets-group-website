import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-placement-cell',
  templateUrl: './placement-cell.component.html',
  styleUrls: ['./placement-cell.component.scss']
})
export class PlacementCellComponent {
  data: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,) {
    this.recruiters();
  }
 
recruiters(){
    this.ApiService.placement().subscribe(
      (res:any) => {
        console.log(res)
        if(res.success==true){
          this.data=res.data
        } 
  })
}
}
