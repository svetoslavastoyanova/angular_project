import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  
  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}