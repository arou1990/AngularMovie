import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovieReview } from '../interfaces/IMoveReview';
import { FormControl } from '@angular/forms';
import { MovieReviewService } from '../services/movie-review.service';
import { IMovieReviewMode } from '../interfaces/IMovieReviewMode';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent {

  @Input() viewMode: IMovieReviewMode = {
    showScore: true,
    showReview: true,
    showMovieName: true,
    showUserName: true,
    showFavorite: true,
    showDelete: false
  }

  @Input() movieReview: IMovieReview = {
    favorite: false,
    movieName: '',
    review: '',
    score: '',
    userName: ''
  };

  @Output() reviewUpdated = new EventEmitter<boolean>();

  constructor(private movieReviewService: MovieReviewService) {}

  deleteMovie() {
    this.movieReviewService.deleteMovieReview(this.movieReview);
    this.reviewUpdated.emit(true);
  }

  toggleFavorite() {
    let favoriteStatus = this.movieReview.favorite ? false: true;
    this.movieReviewService.updateFavoriteStatus(this.movieReview, favoriteStatus);
    this.reviewUpdated.emit(true);
  }
}
