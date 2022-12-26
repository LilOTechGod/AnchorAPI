import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  public getJsonValue: any;

  ngOnInit(): void {}

  submit(login: any) {
    this.http
      .post('http://localhost:4000/api/users/signup', {
        first_name: login.form.value.firstname,
        last_name: login.form.value.lastname,
        email: login.form.value.email,
        password: login.form.value.password,
      })
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;

        if (this.getJsonValue) {
          this.router.navigate(['/login']);
        }
      });
    console.log(login.form.value);
  }
}
