import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class HackerNewsService {
  private apiUrl = 'https://hackernews20231206140405.azurewebsites.net/api/GetHackerNews';
  constructor(private http: HttpClient) { }
data1:any;
  getNewStories(): Observable<any> {
    // return this.http.get<number[]>(`${this.apiUrl}/topstories.json`);
   // this.data1 = this.http.get<any>(this.apiUrl);
    //console.log(this.data1);
    return this.http.get<any>(this.apiUrl);
  }
}
