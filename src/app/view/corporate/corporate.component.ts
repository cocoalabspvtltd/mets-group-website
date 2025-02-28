
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RefreshService } from '../../service/refresh.service';


@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent {
  data: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private refreshService: RefreshService) {
    this.members();
  }
  ngOnInit(): void {

    if (!this.refreshService.hasPageRefreshed()) {
      // Perform the actions you want to do on the first load
      console.log('Refreshing the page for the first time.');
      // Set the token to indicate that the page has been refreshed
      this.refreshService.setPageRefreshed();
      // Trigger a page refresh
      window.location.reload();
    }
  }
members(){
    this.ApiService.board().subscribe(
      (res:any) => {
        if(res.success==true){
          let list1=[]
          for(let i=0;i<res.data.length;i++){           
            if(res.data[i].board!="Academic Board"){ 
            let list= res.data[i];
              list1.push(list)
              }
          }
          this.data=list1;
        }    
  })
}
}