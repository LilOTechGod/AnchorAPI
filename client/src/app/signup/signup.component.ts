import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private data: UserAuthService
  ) {}
  public getJsonValue: any;

  ngOnInit(): void {}
  decoded: any;
  showerror: any;

  submit(login: any) {
    this.http
      .post('http://localhost:4000/api/users/signup', {
        first_name: login.form.value.firstname,
        last_name: login.form.value.lastname,
        email: login.form.value.email,
        password: login.form.value.password,
        role: login.form.value.role,
      })
      .subscribe((res) => {
        this.getJsonValue = res;
        console.log(res);
        // if (this.getJsonValue) {
        //   this.router.navigate(['/login']);
        // }

        this.http
          .post('http://localhost:4000/api/users/signin', {
            email: login.form.value.email,
            password: login.form.value.password,
          })
          .subscribe((res) => {
            this.getJsonValue = res;
            this.decoded = decode(this.getJsonValue.token);
            this.data.changeMessage(this.decoded);

            sessionStorage.setItem('loggedin', JSON.stringify(this.decoded));
            if (this.decoded) {
              this.router.navigate(['/userdash']);
            }
          });
      });
    setTimeout(() => {
      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'block';
    }, 600);
  }
}
