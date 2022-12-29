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
  defaultUrl: string = 'http://localhost:4000/endpoint';
  makeRequest(apiurl: any): void {
    let loading: any = document.querySelector('.loading');

    let url: string[] | any = [];
    let defaultsstring: any = document.getElementById('ptag');
    defaultsstring = defaultsstring.innerHTML;
    defaultsstring = defaultsstring.slice(14).split('?');
    let paramaString: any = defaultsstring[1].split('&amp;');
    let arr: string[] = [];
    paramaString.map((el: any) => {
      arr.push(el.split('=')[0]);
    });
    url.push(defaultsstring[0]);
    url.push('?');
    let userinput: any = apiurl._directives;
    let count: any = 0;
    let sortedArrUserInput: any = [];
    console.log(userinput);
    userinput.forEach((el: any) => {
      sortedArrUserInput.push(el.viewModel);
    });
    let popped = sortedArrUserInput.shift();
    sortedArrUserInput.push(popped);
    console.log(sortedArrUserInput);
    sortedArrUserInput.forEach((el: any) => {
      let converttoString = parseInt(el);
      if (converttoString) {
        el = converttoString;
      }
      url.push(arr[count]);
      count++;
      url.push('=');
      url.push(el);
      if (count !== userinput.size) {
        url.push('&');
      }
    });
    url = url.join('');

    if (url) {
      loading.style.display = 'block';
    }
    console.log(url);

    this.http.get(url).subscribe((res) => {
      this.excelData = res;
      console.log(res);
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
        // let size = 20;
        // this.apiFinalReturn = this.apiFinalReturn.slice(0, size);
        loading.style.display = 'none';
        console.log('done');
        return;
      }
    });
  }
  showerror: any;
  download() {
    if (this.excelData) {
      this.http
        .post('http://localhost:4000/endpoint/excel', this.excelData)
        .subscribe(() => {
          console.log('done');
        });

      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'none';
      setTimeout(() => {
        window.open('../../assets/Excel.xlsx', 'Excel.xlsx');
        console.log('waited complete');
      }, 900);
    }
    if (!this.excelData) {
      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'block';
    }
  }
}
