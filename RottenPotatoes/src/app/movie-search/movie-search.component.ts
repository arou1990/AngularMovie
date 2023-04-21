import { Component, Input, OnInit } from '@angular/core';
import {ISearchedMovie} from '../interfaces/ISearchedMovie'
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SearchService } from '../services/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IMovieInfo } from '../interfaces/IMovieInfo';
import { MovieReviewService } from '../services/movie-review.service';
import { IMovieReview } from '../interfaces/IMoveReview';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

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
      height: '350px',
      width: '300px',
      data: {
        currentMovie: this.currentMovieInfo,
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

  public getCurrentReviews(movieName: string){
    this.currentReviews = this.movieReviewService.getReviewsForMovie(movieName);
  }
}
