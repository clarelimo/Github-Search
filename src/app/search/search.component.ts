import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users!: User;
  constructor(searchService:SearchService) {
    // this.users = searchService.getProfile();
  }

  ngOnInit(): void {
  }

}
