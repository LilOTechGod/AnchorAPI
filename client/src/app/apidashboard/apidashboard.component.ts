import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidashboard',
  templateUrl: './apidashboard.component.html',
  styleUrls: ['./apidashboard.component.css'],
})
export class ApidashboardComponent implements OnInit {
  constructor(
    private data: UserAuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  apiMessage: any | undefined;
  ngOnInit(): void {
    this.data.currentApiMessage.subscribe(
      (apiMessage) => (this.apiMessage = apiMessage)
    );
    if (!this.apiMessage) {
      this.redirectToCollrections();
    }
  }

  redirectToCollrections() {
    this.router.navigate(['/collections']);
  }
  removeString: string[] = ['{', '[', ']', '}'];

  apiReturnData: string | any;
  makeRequest(apiurl: any): void {
    console.log(apiurl);
    let url = apiurl.form.value.url;
    console.log(url);
    this.http.get(url).subscribe((res) => {
      console.log(res);
      let stringify = JSON.stringify(res);
      console.log(stringify);
      this.apiReturnData = stringify.split(``);
      this.apiReturnData.forEach((el1: any, j: any) => {
        this.removeString.forEach((el2: any, i: any) => {
          if (el1 == el2) {
            this.apiReturnData.splice(j, 1);
          }
        });
      });

      this.apiReturnData = this.apiReturnData.join('').split(',');
    });
  }
}
