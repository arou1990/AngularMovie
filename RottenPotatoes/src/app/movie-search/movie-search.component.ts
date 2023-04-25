import { Component, OnInit } from '@angular/core';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../services/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IMovieInfo } from '../interfaces/IMovieInfo';
import { MovieReviewService } from '../services/movie-review.service';
import { IMovieReview } from '../interfaces/IMoveReview';
import { IMovieReviewMode } from '../interfaces/IMovieReviewMode';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})

export class MovieSearchComponent implements OnInit {

  viewMode: IMovieReviewMode = {
    showScore: true,
    showReview: true,
    showMovieName: false,
    showUserName: false,
    showFavorite: false,
    showDelete: false
  }

  searchTextBox = new FormControl();

  public currentMovieInfo: IMovieInfo = {
    id: "",
    Title: "",
    Poster: "",
    Ratings: [],
    Released: "",
    Runtime: "",
    Plot: "",
  }

  public currentReviews: IMovieReview[] = [];

  constructor(public dialog: MatDialog, private searchService: SearchService, private movieReviewService: MovieReviewService) {}

  ngOnInit(): void {
    this.searchTextBox.valueChanges.pipe(debounceTime(1000)).subscribe(input => {
      this.searchUpdate(input);
    })
  }

  public openReviewDialogue(): void {

    let DialogRef = this.dialog.open(ReviewDialogComponent, {
      height: '320px',
      width: '250px',
      data: {
        currentMovie: this.currentMovieInfo,
      }
    });
    DialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCurrentReviews(this.currentMovieInfo.Title);
      }
    });
  }

  public searchUpdate(event: any): void {

    if (event.length > 2) {
      this.searchService.GetMovieInfo(event).subscribe(data => {
        if (data) {
          this.currentMovieInfo = {
            id: data.Title,
            Title: data.Title,
            Poster: data.Poster,
            Ratings: data.Ratings,
            Released: data.Released,
            Runtime: data.Runtime,
            Plot: data.Plot,
          }
          this.getCurrentReviews(data.Title);
        }
      });
    }
  }

  public getCurrentReviews(movieName: string) {
    this.currentReviews = this.movieReviewService.getReviewsForMovie(movieName);
  }
}
