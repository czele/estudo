import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from 'src/app/data/user.data';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  responseUsers: ResponseUsers;

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(res => this.responseUsers = res)
  }

}
