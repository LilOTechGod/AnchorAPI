import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
})
export class ExcelComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  removeString: string[] = ['{', '[', ']', '}'];

  apiReturnData: string | any;
  apiFinalReturn: string | any;
  excelData: any;

  generatExcel(apiurl: any): void {
    let loading: any = document.querySelector('.loading');
    let excelbtn: any = document.querySelector('.button');
    let url = apiurl.form.value.search;

    if (!url) {
      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'block';

      setTimeout(() => {
        this.showerror.style.display = 'none';
      }, 2000);
    }
    if(url){
      loading.style.display = 'block';

    }
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
      this.showerror = document.querySelector('.error');
      this.showerror.style.display = 'none';
      excelbtn.style.display = 'block';
      loading.style.display = 'block';


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

      setTimeout(() => {
        window.open('../../assets/Excel.xlsx', 'Excel.xlsx');
        console.log('waited complete');
      }, 900);
    }
  }
}
