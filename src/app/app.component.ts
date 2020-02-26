import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';



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
  // Sort requires next line
  // const ELEMENT_DATA: any[] = this.usersService.get();
    displayedColumns: string[] = ['name', 'age', 'registered', 'email', 'balance'];
   dataSource = this.usersList;
   // Sort requires next line
  // dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.usersService.get().subscribe(res => {
      this.users = res;
    });
  }
  // filter not working as MatTableDataSource not working
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}


