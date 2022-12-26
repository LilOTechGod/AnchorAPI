import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private data: UserAuthService) {}
  message: any | undefined;

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
