import { Component, Input } from '@angular/core';
import {ISearchedMovie} from '../interfaces/ISearchedMovie'
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  @Input() public searchedMovie: ISearchedMovie = {
    poster: "https://picsum.photos/200/300",
    movieInfo: "Movie Info",
    userReview: "User Review",
  }
  constructor(public dialog: MatDialog) {} 

    public openReviewDialogue(): void{

    let DialogRef = this.dialog.open(ReviewDialogComponent, {
      height: '500px',
      width: '300px',
    });

    }


}
