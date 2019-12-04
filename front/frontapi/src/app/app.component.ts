import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontapi';
  user_id = parseInt(sessionStorage.getItem('user'));
  username = sessionStorage.getItem('username');

  constructor(private router: Router) { }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/user-login'])
  }
}
