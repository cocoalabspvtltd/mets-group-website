import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-academic-board',
  templateUrl: './academic-board.component.html',
  styleUrls: ['./academic-board.component.scss']
})
export class AcademicBoardComponent {

  data: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,) {
    this.members();
  }
 
members(){
    this.ApiService.board().subscribe(
      (res:any) => {
        if(res.success==true){
          let list1=[]
          for(let i=0;i<res.data.length;i++){
            
            if(res.data[i].board=="Academic Board"){ 
            let list= res.data[i];
              list1.push(list)
              }
          }
          this.data=list1;
        }   
  })
}
}
