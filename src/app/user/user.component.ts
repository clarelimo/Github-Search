import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!:User;
  constructor(userService:SearchService) {
    this.users = userService.user;
   }

  ngOnInit(): void {
  }

}
