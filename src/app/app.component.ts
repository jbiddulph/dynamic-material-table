import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dynamic-material-table';
  users: Array<object>;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.get().subscribe(res => {
      this.users = res;
    });
  }
}
