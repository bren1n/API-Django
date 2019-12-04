import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: String;
  pwd: String;
  
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  authenticateUser(username, password) {
    return this.api.authenticateUser(username, password).subscribe(data => {
      sessionStorage.setItem('user', data.id.toString()),
      sessionStorage.setItem('username', data.username.toString()),
      this.router.navigateByUrl(`/notes/${data.id}`)}
      )
    }
  }
