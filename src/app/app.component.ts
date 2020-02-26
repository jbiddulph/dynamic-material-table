import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  name: string;
  gender: string;
  company: string;
  users: Array<object>;
  usersList: any[] = this.usersService.get();
  displayedColumns: string[] = ['name', 'gender', 'company'];
  dataSource = this.usersList;
  ngOnInit() {
    this.usersService.get().subscribe(res => {
      this.users = res;
    });
  }
}


