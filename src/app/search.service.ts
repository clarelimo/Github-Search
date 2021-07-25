import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repos!:Repo;

  constructor(private http:HttpClient) { 
    this.user = new User("",0,0,0,"","","");
    this.repos = new Repo("","","","");
  }

  getProfile(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    }
    let userUrl = 'https://api.github.com/users/'+username+'?access_token= '+environment.apiKey;
    console.log(userUrl)
    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        // this.user.name = response.name;
        // this.user.url = response.url;
        // this.user.avatar = response.avatar_url;
        // this.user.followers = response.followers;
        // this.user.following = response.following;
        // this.user.repos = response.public_repos;
        // this.user.login = response.login;
        this.user = response;

        resolve()
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }

    getRepo(username:string){
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
        language:string;
        
      }
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>('https://api.github.com/users/'+username+'/repos?order=created&sort=asc?access_token='+environment.apiKey).toPromise().then
        (response => {
            // this.repos.name = response.name;
            // this.repos.html_url = response.html_url;
            // this.repos.description = response.description;
            // this.repos.language = response.language;

            this.repos = response;
            
          resolve()
        },
        error=>{
          this.repos.name = "We couldn’t find any repositories matching the name given"
  
          reject(error)
          })
        })
        return promise;

    }
  }
