import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RefreshService } from '../../service/refresh.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: any;
  status: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private refreshService: RefreshService) {
    this.Events();
    this.status=0;   
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
Events(){ 
  
    this.ApiService.events().subscribe(
      (res:any) => {
        if(res.success == true){
      
            this.data=res.data;
            console.log(this.data)
            this.status=1;
        } 
  })
}
}

