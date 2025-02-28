import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public BASE_URL = 'https://pgsedu.com/METSGROUP';
  constructor(private http: HttpClient) {}

  public courses():Observable<any>{
    // const headers = { 'Accept': 'application/json' };
          return this.http.get<any>(this.BASE_URL + `/api/course_list`);
    }
    public about():Observable<any>{
      // const headers = { 'Accept': 'application/json' };
            return this.http.get<any>(this.BASE_URL + `/api/about`);
      }
      
      public events():Observable<any>{
        // const headers = { 'Accept': 'application/json' };
              return this.http.get<any>(this.BASE_URL + `/api/our_events`);
        }
        public gallery():Observable<any>{
          // const headers = { 'Accept': 'application/json' };
                return this.http.get<any>(this.BASE_URL + `/api/gallery`);
          }
   public board():Observable<any>{
      return this.http.get<any>(this.BASE_URL + `/api/advisory_board`);
      }
      public placement():Observable<any>{
            return this.http.get<any>(this.BASE_URL + `/api/placement_cells`);
            } 
 public achievements():Observable<any>{
                  return this.http.get<any>(this.BASE_URL + `/api/achivements`);
}   
public contact(data: any):Observable<any>{
       return this.http.post<any>(this.BASE_URL + `/api/contact`,data);
     }
  
                  
  }