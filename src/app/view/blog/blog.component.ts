import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RefreshService } from '../../service/refresh.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  data: any;
  status: any;
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private refreshService: RefreshService) {
  
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
}