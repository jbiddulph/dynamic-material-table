import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  name: string;
  age: string;
  registered: string;
  email: string;
  balance: string;
  users: Array<object>;
  usersList: Observable<object[]> = this.usersService.get();
  displayedColumns: string[] = ['name', 'age', 'registered', 'email', 'balance'];
  dataSource = this.usersList;
  ngOnInit() {
    this.usersService.get().subscribe(res => {
      this.users = res;
    });
  }
}


