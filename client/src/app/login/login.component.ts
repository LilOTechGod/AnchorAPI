import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from '../user-auth.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //constructor
  constructor(
    private http: HttpClient,
    private data: UserAuthService,
    private authService: UserAuthService,
    private router: Router
  ) {}

  //declarations
  message: any | undefined;
  public getJsonValue: any;
  public decoded: any;

  //on init
  ngOnInit(): void {
    if (this.decoded) {
      this.router.navigate(['/userdash']);
    }
  }

  showerror: any;
  submit(login: any): void {
    this.http
      .post('http://localhost:4000/api/users/signin', {
        email: login.form.value.email,
        password: login.form.value.password,
      })
      .subscribe((data) => {
        // console.log(data);
        this.getJsonValue = data;
        this.decoded = decode(this.getJsonValue.token);
        this.data.changeMessage(this.decoded);
        console.log(this.decoded);

        sessionStorage.setItem('loggedin', JSON.stringify(this.decoded));
        if (this.decoded) {
          this.router.navigate(['/userdash']);
        }
      });
 

    setTimeout(() => {
      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'block';
    }, 500);
  }
}
