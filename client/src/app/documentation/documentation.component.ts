import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
})
export class DocumentationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  axios = `
  axios.get('http://example.com/movies.json', {
    params: {
      dat: 'data',
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  `;

  fetch_api = `
  fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
   `;
  generateable = `[
    {name: 'chris', age:30 , city:'austin'},
    {name: 'jayce', age:19 , city:'los angeles'},
    {name: 'laura', age:23 , city:'atlant'}
  ]`;
}
