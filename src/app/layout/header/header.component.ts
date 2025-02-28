import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RefreshService } from '../../service/refresh.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly refreshKey = 'pageRefreshed';
    constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private refreshService: RefreshService) {     
  }
home(){
  sessionStorage.setItem(this.refreshKey, 'false');
  this.route.navigateByUrl('/home')
}
courses(){
  sessionStorage.setItem(this.refreshKey, 'false');
  this.route.navigateByUrl('/courses')
}
events(){
  sessionStorage.setItem(this.refreshKey, 'false');
  this.route.navigateByUrl('/events');
}
contact(){
  sessionStorage.setItem(this.refreshKey, 'false');
  this.route.navigateByUrl('/contact')
}
about(){
  sessionStorage.setItem(this.refreshKey, 'false');
  this.route.navigateByUrl('/about')
}
}
