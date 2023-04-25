import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private loginSnack: MatSnackBar) {}

  public showSnackBar(message: string) {
    let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    let verticalPosition: MatSnackBarVerticalPosition = 'top';

    this.loginSnack.open(message, '', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: 3000
    });
  }
}
