import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  eventss(number: string) {
    console.log('hello');
  }

  setInput() {
    console.log('the selected input is');
  }
  inputtest = '';
  testinput = '';
  lists: string[] = [];
  gettingStartedInput(gsinput: string) {
    this.inputtest = gsinput;
    this.testinput = gsinput;
    console.log(this.inputtest);
  }
  gettingStarted() {
    this.lists.push(this.inputtest);
    console.log(this.lists);
  }
}
