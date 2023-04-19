import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxInfo } from '../classes/DialogBoxInfo';
import { User } from '../classes/User';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {

  currentMovieName: string = "Default";
  dialogUserName: string = "Default";

  constructor(public dialogRef: MatDialogRef<ReviewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.currentMovieName = data.movieName;
  }

  ngOnInit(): void {

    let name: string = localStorage.getItem('loggedInUser') as string;

    let parseUser : User = JSON.parse(name) as User;
    let dialogBoxInfo : DialogBoxInfo = { 
      userName : parseUser.username, movieName : this.currentMovieName
    };
    this.dialogUserName = parseUser.username;
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  favorite(){}
}
