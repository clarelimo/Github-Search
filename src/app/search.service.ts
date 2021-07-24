import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  public getProfile(username:string):Observable<any>{
    const url = `'https://api.github.com/users/${username}?access_token=' + apiKey$`;
    return this.http.get<any>(url);
  }
}
