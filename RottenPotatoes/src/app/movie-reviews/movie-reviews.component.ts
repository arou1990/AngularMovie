import { Component, Input } from '@angular/core';
import { IMovieReview } from '../interfaces/IMoveReview';
import { FormControl } from '@angular/forms';
import { MovieReviewService } from '../services/movie-review.service';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent {


  @Input() movieReview: IMovieReview = {
    favorite: false,
    movieName: '',
    review: '',
    score: '',
    userName: ''
  };

  constructor(private movieReviewService: MovieReviewService){}

  deleteMovie(){
    this.movieReviewService.deleteMovieReview(this.movieReview);

  }

  toggleFavorite(){

  }
}
