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
  apiFinalReturn: string | any;

  makeRequest(apiurl: any): void {
    let loading: any = document.querySelector('.loading');
    loading.style.display = 'block';
    let url = apiurl.form.value.url;
    this.http.get(url).subscribe((res) => {
      let stringify = JSON.stringify(res);
      this.apiReturnData = stringify.split(``);
      this.apiReturnData.forEach((el1: any, j: any) => {
        this.removeString.forEach((el2: any, i: any) => {
          if (el1 == el2) {
            this.apiReturnData.splice(j, 1);
          }
        });
      });

      this.apiFinalReturn = this.apiReturnData.join('').split(',');
      if (this.apiFinalReturn) {
        loading.style.display = 'none';
        console.log('done');
      }
    });
  }

  download() {
    console.log('hello');
    window.open('../../assets/anchorlogo.png', 'anchorlogo.png');
  }
}
