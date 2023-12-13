import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
 export class HackerNewsService {
  private apiUrl ='https://hackernews20231207023022.azurewebsites.net/api/GetHackerNews';
  constructor(private http: HttpClient, private loaderService: LoaderService) { }
data1:any;
  getNewStories(): Observable<any> {
    this.loaderService.show(); // Show loader before API call
    return this.http.get<any>(this.apiUrl).pipe(
      finalize(() => this.loaderService.hide()) // Hide loader after API call completes
    );;
  }
}
