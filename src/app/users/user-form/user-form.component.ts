import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestCreate, ResponseCreate } from 'src/app/data/user.data';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  request: RequestCreate = {
    name: '',
    job: ''  }

  response: ResponseCreate;

  constructor(private userService: UserService) { }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res
    })
  }

}
