import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  constructor(private http:HttpClient) { }

  getProfile(username:string){
    interface ApiResponse{
        name:string;
        url:string
        avatar:string;
        followers:number;
        following:number;
        repos:number;
    }

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(`'https://api.github.com/users/${username}?access_token=' + ${environment.apiKey}`).toPromise().then
      (response => {
        this.user.name = response.name;
        this.user.url = response.url;
        this.user.avatar = response.avatar;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.repos = response.repos;

        resolve()
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }


  }
