import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private logoutSnack: MatSnackBar) {}

  public signout(){
    localStorage.setItem('loggedInUser', '');
    this.router.navigateByUrl('/login');
  
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public logoutSnackBar() {
    this.logoutSnack.open('Logout Successful', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });


  }

}