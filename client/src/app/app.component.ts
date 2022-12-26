import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { HomeComponent } from './home/home.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  message: any | undefined;
  constructor(private data: UserAuthService, private router: Router) {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.checkifLoggedIn();
  }
  loggedout: null | any;

  onSave(): void {
    this.loggedout = undefined;
    this.data.changeMessage(this.loggedout);
    if (!this.loggedout) {
      this.router.navigate(['/landingpage']);
      sessionStorage.removeItem('loggedin');
      setTimeout(() => {
        window.location.reload();
      }, 0);
    }
  }

  getLoggeding: any;

  checkifLoggedIn() {
    this.getLoggeding = sessionStorage.getItem('loggedin');
    let logged = JSON.parse(this.getLoggeding);
    if (logged) {
      this.data.changeMessage(logged);
    }
  }
}
