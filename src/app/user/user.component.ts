import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!:User;
  repo!:Repo;
  
  constructor(public userService:SearchService) {
    // this.user = userService.user;
   }
   searchUser(username:string){
     this.userService.getProfile(username).then((success)=>{
      this.user = this.userService.user;
     },
     (error)=>{
       console.log(error)
     });
     this.userService.getRepo(username).then((success)=>{
      this.repo = this.userService.repos;
     },
     (error)=>{
       console.log(error)
     });
   }

  ngOnInit(): void {
    this.searchUser('clarelimo');
  }

}
