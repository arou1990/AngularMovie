import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginName: string = "Default";

  constructor(private router: Router, private snackBar: NotificationService) {}

  public signout(){
    localStorage.setItem('loggedInUser', '');
    this.router.navigateByUrl('/login');
    this.snackBar.showSnackBar('Logout Successful');
  }

  ngOnInit(): void {

    let user: string = localStorage.getItem('loggedInUser') as string;

    let parsedUser : User = JSON.parse(user) as User;
    this.loginName = parsedUser.username;
  }
  
}