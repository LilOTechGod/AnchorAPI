import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private data: UserAuthService,
    private http: HttpClient,
    private router: Router
  ) {}
  message: any | undefined;

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
  ays() {
    let ays: any = document.querySelector('.ays');
    ays.style.display = 'block';
  }
  delAcnt() {
    let id: any = document.querySelector('.id');
    id = id.innerHTML;

    let url: any = 'http://localhost:4000/api/users/delete/' + id;
    console.log(url);
    this.http.delete(url).subscribe((res) => {
      this.logout();
    });
  }
  loggedout: null | any;
  logout() {
    this.loggedout = undefined;
    this.data.changeMessage(this.loggedout);
    if (!this.loggedout) {
      this.router.navigate(['/login']);
      sessionStorage.removeItem('loggedin');
      setTimeout(() => {
        window.location.reload();
      }, 0);
    }
  }

  aysNo() {
    let ays: any = document.querySelector('.ays');
    ays.style.display = 'none';
  }

  updAcnt() {
    let id: any = document.querySelector('.id');
    console.log(id.innerHTML);
  }
}
