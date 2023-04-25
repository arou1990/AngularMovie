import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginName: string = "Default";

  constructor(private router: Router, private snackBar: NotificationService, private userService: UserService) {}

  public signout() {
    localStorage.setItem('loggedInUser', '');
    this.router.navigateByUrl('/login');
    this.snackBar.showSnackBar('Logout Successful');
  }

  ngOnInit(): void {
    this.loginName = this.userService.GetUserName();
  }

  public onSettings(): void {
    this.router.navigateByUrl('/profile');
  }

  public navigateToMain(): void {
    this.router.navigateByUrl('/main');
  }
}