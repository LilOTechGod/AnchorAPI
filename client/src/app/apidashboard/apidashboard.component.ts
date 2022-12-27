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
  excelData: any;

  makeRequest(apiurl: any): void {
    let loading: any = document.querySelector('.loading');
    let url = apiurl.form.value.url;
    if (url) {
      loading.style.display = 'block';
    }
    this.http.get(url).subscribe((res) => {
      this.excelData = res;
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
        return;
      }
    });
  }

  download() {
    if (this.excelData) {
      this.http
        .post('http://localhost:4000/endpoint/excel', this.excelData)
        .subscribe(() => {
          console.log('done');
        });
      let xloading: any = document.querySelector('.loadingxbtn');
      xloading.style.display = 'block';
      setTimeout(() => {
        window.open('../../assets/Excel.xlsx', 'Excel.xlsx');
        console.log('waited complete');
        xloading.style.display = 'none';
      }, 900);
    }
  }
}
