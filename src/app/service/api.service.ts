import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

   public BASE_URL = 'https://cocoalabs.in/Mets_Radio_App/';
  constructor(private http: HttpClient) {
    const url = 'http://139.84.138.193:8000/mets/stream';
  }


  public Stream(data:any):Observable<any>{
   //console.log('stream',data);    
     return this.http.post<any>(this.BASE_URL + `public/api/stream`,data);
   }
    public Contact(data: any):Observable<any>{
      //console.log('contact-api',data)
       return this.http.post<any>(this.BASE_URL + `public/api/web/contact`,data);
     }
     public status():Observable<any>{
     
       return this.http.get<any>(this.BASE_URL + `public/api/get-radio-status`);
     }
   
     public radio():Observable<any>{
     
      return this.http.get<any>('http://139.84.138.193:8000/mets/stream');
    }
}
