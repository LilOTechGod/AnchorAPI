import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @ViewChildren('secs') secs: QueryList<ElementRef> | any;
  public getJsonValue: any;
  public singleapi: any;
  public apiList: any;
  public test: any;

  constructor(
    private http: HttpClient,
    private selectedapi: UserAuthService,
    private searchin: UserAuthService
  ) {}
  apiMessage: any | undefined;

  ngOnInit(): void {
    this.getMethod();
    this.getAPIs();
    this.data;
    this.searchin.currentApiMessage.subscribe(
      (apiMessage) => (this.apiMessage = apiMessage)
    );
  }

  public getMethod() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.getJsonValue = data;
      });
  }

  data: {
    name: string;
    creator: string;
    url: string;
    imgurl: string;
    desc: string;
    popularity: string;
    endpoint: any;
    discussion: any;
    dateupdated: string;
  }[] = [
    {
      name: 'Pinterest API',
      creator: 'achorapi',
      url: 'http://localhost:4000/endpoint/pinterest?viewheight=1200&interest=nails&api_key=Your_api_key',
      imgurl:
        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678090-camera-512.png',
      desc: 'Search pintrest photos and get back up to date and most recent data',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamter: [
          ' Params: interest=<string>.',
          "example: interest=nails '",
          ' Description: this is the term you would like to look up example.',
          ' Params: viewheight=<number>.',
          "example: viewheight=1200 '",
          ' Description: This allows the screen to be longer, the more you can see the larger the data',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'Weather API',
      creator: 'weatherbit',
      url: 'http://localhost:4000/endpoint/weather?viewheight=1200&interest=nails&api_key=Your_api_key',

      imgurl:
        'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png',
      desc: 'Current weather data API, and Weather forecast API - Basic access to the Weatherbit.io Weather API.',
      popularity: '10/10',
      endpoint: {
        apiurl: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
        qureyparamters: ['hello', 'hello', 'apikey'],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'Pokemon',
      creator: 'PokeAPI',
      url: 'http://localhost:4000/endpoint/pokemon?api_key=Your_api_key',

      imgurl:
        'https://cdn3.iconfinder.com/data/icons/pokemon-go-3/512/pokemon_go_play_game_cinema_film_movie-512.png',
      desc: 'All the Pokémon data youll ever need in one place,easily accessible through a modern RESTful API.',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: ['hello', 'hello', 'apikey'],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
  ];
  getAPIs() {
    return (this.apiList = this.data);
  }
  pinFun() {
    this.selectedapi.changeAPIData(this.data[0]);
  }
  weatFun() {
    this.selectedapi.changeAPIData(this.data[1]);
  }
  curFun() {
    this.selectedapi.changeAPIData(this.data[2]);
  }
  apiCard: any;
  item: any;
  searchIndex: any;
  searchCard: any;
  search(item: string) {
    this.apiCard = document.querySelectorAll('.apicontainer');
    this.item = document.querySelector('.searchinput');
    if (this.item.value !== '') {
      this.item = this.item.value.trim().toLowerCase();
      this.apiCard.forEach((element: any) => {
        element.style.display = 'none';
      });

      this.data.forEach((element, i) => {
        let result = element.name.toLowerCase();
        if (result == this.item) {
          this.selectedapi.changeAPIData(this.data[i]);
          this.searchIndex = i;
        }
      });

      this.searchCard = document.querySelector('#searchvisible');

      this.searchCard.style.display = 'block';
    }
  }

  searchclick() {
    this.selectedapi.changeAPIData(this.data[this.searchIndex]);
  }
}
