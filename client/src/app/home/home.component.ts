import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
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
  //un collapes to see data
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
      name: 'Pinterest',
      creator: 'anchorapi',
      url: 'http://localhost:4000/endpoint/pinterest?viewheight=1200&interest=nails&api_key=Your_api_key',
      imgurl:
        'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678090-camera-512.png',
      desc: 'Search pintrest photos and get back up to date and most recent data',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          {
            Params: 'viewheight',
            type: 'number ',
            Description: 'this is the term you would like to look up example.',
            example: '23000',
          },
          {
            Params: 'interest',
            type: 'string ',
            Description: 'this is the term you would like to look up example.',
            example: 'nails',
          },
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'Weather',
      creator: 'weatherbit',
      url: 'http://localhost:4000/endpoint/weather?city=austin&api_key=Your_api_key',

      imgurl:
        'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png',
      desc: 'Current weather data API, and Weather forecast API - Basic access to the Weatherbit.io Weather API.',
      popularity: '10/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          {
            Params: 'city',
            type: 'string ',
            Description: 'this is the term you would like to look up example.',
            example: 'austin',
          },
        ],
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
        qureyparamters: [],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: '2 months ago',
    },
    {
      name: 'News',
      creator: 'Usearch',
      url: 'http://localhost:4000/endpoint/news?search=oboma&page=1&size=10&api_key=Your_api_key',
      imgurl:
        'https://cdn2.iconfinder.com/data/icons/flat-set-2/64/flat_set_2-07-512.png',
      desc: 'This api Allows you  find all news related to your search input, so add your search, add how many pages you want to search and how many items from that page to return ',
      popularity: '6/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          {
            Params: 'search',
            type: 'string ',
            Description: 'this is the term you would like to look up example.',
            example: 'obama, bitcoin',
          },
          {
            Params: 'page',
            type: 'number ',
            Description: 'this is the term you would like to look up example.',
            example: '1',
          },
          {
            Params: 'size',
            type: 'number ',
            Description: 'this is the term you would like to look up example.',
            example: '15',
          },
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Jokes',
      creator: '15Dkatz',
      url: 'http://localhost:4000/endpoint/jokes?count=10&type=general&api_key=Your_api_key',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/emoticons-vol-1/64/_clown-512.png',
      desc: 'This api gives you list of jokes with punchlines',
      popularity: '5/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          {
            Params: 'count',
            type: 'Number ',
            Description: 'this is the number of jokes to return.',
            example: '10',
          },
          {
            Params: 'type',
            type: 'string ',
            Description:
              'this is the categories of jokes (animals,christam,halloween,programming).',
            example: 'gneral, programming,animal',
          },
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coffee Store',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/coffee?name=latte&api_key=Your_api_key',
      imgurl:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/coffee_zorro_avatar_cup-512.png',
      desc: 'This gives you sample fake coffee shop items for your next project',
      popularity: '7/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          {
            Params: 'name',
            type: 'string ',
            Description: 'search by name.',
            example: 'latte or leave blank to get all coffee ',
          },
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
    },
    {
      name: 'Coming Soon',
      creator: 'Anchorapi',
      url: 'http://localhost:4000/endpoint/',
      imgurl:
        'https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png',
      desc: 'This will soon be an api',
      popularity: '0/10',
      endpoint: {
        apiurl: 'string',
        qureyparamters: [
          ' Params: params=<string>.',
          "example: params=nails '",
          ' Description: this is the term you would like to look up example.',
        ],
      },
      discussion: ['this is amazing', 'great api', 'wow this api does great'],
      dateupdated: 'In developement',
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
  newFun() {
    this.selectedapi.changeAPIData(this.data[3]);
    console.log(this.data);
  }
  jokFun() {
    this.selectedapi.changeAPIData(this.data[4]);
    console.log(this.data);
  }
  cofFun() {
    this.selectedapi.changeAPIData(this.data[5]);
    console.log(this.data);
  }
  comSoon() {
    this.selectedapi.changeAPIData(this.data[6]);
    console.log(this.data);
  }
  apiCard: any;
  // item: any;
  searchIndex: any;
  searchCard: any;
  didYouMean: any;
  threereslt: number = 0;

  search() {
    this.apiCard = document.querySelectorAll('.apicontainer');
    let item: any = document.querySelector('.searchinput');
    if (item.value !== '') {
      item = item.value.trim().toLowerCase();
      this.apiCard.forEach((element: any) => {
        element.style.display = 'none';
      });
      let done: boolean = false;
      this.data.forEach((element, e) => {
        if (done) {
          return;
        }
        let result = element.name.toLowerCase();
        let threefromdb = result.split('');
        let threefrominput = item.split('');

        for (let i = 0; i < threefrominput.length; i++) {
          for (let j = 0; j < threefromdb.length; j++) {
            if (threefrominput[j] == threefromdb[i]) {
              this.threereslt++;
            }
          }

          if (
            this.threereslt > 2 &&
            threefrominput[0] == threefromdb[0] &&
            threefrominput[1] == threefromdb[1]
          ) {
            this.selectedapi.changeAPIData(this.data[e]);
            this.searchIndex = e;
            done = true;
            this.threereslt = 0;
            if (threefromdb.join('') !== threefrominput.join('')) {
              let didyou: any = document.querySelector('.didyoumean');
              didyou.style.display = 'block';
              this.didYouMean = threefromdb.join('');
            }
            return;
          }
        }

        this.threereslt = 0;
      });

      this.searchCard = document.querySelector('#searchvisible');

      this.searchCard.style.display = 'block';
    }
    console.log(item.value == ' ');
    if (item.value == '') {
      this.apiCard.forEach((element: any) => {
        element.style.display = 'block';
        this.searchCard = document.querySelector('#searchvisible');
        this.searchCard.style.display = 'none';
        let didyou: any = document.querySelector('.didyoumean');
        didyou.style.display = 'none';
      });
    }
  }

  searchclick() {
    this.selectedapi.changeAPIData(this.data[this.searchIndex]);
  }
}
