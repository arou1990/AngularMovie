import { Component, Input } from '@angular/core';
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
    showFavorite: true
  }

  @Input() movieReview: IMovieReview = {
    favorite: false,
    movieName: '',
    review: '',
    score: '',
    userName: ''
  };

  constructor(private movieReviewService: MovieReviewService) {}

  deleteMovie() {
    this.movieReviewService.deleteMovieReview(this.movieReview);

  }

  toggleFavorite() {
    let favoriteStatus = this.movieReview?false: true;
    this.movieReviewService.updateFavoriteStatus(this.movieReview, favoriteStatus);
  }
}
