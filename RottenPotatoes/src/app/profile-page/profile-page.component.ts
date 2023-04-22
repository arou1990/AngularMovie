import { Component, Input, OnInit } from '@angular/core';
import { IMovieReview } from '../interfaces/IMoveReview';
import { MovieReviewService } from '../services/movie-review.service';
import { UserService } from '../services/user.service';
import { IMovieReviewMode } from '../interfaces/IMovieReviewMode';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  viewMode: IMovieReviewMode = {
    showScore: true,
    showReview: true,
    showMovieName: true,
    showUserName: false,
    showFavorite: true
  }

  public movieReviews: IMovieReview[] = []
  public favoriteMovies: IMovieReview[] = []

  constructor(private movieReviewService: MovieReviewService, private userService: UserService){}

  ngOnInit(): void {
    let loginName = this.userService.GetUserName();
    this.movieReviews = this.movieReviewService.getMovieReviewsByUser(loginName);
    console.log(JSON.stringify(this.movieReviews));
    this.favoriteMovies = this.movieReviewService.getFavoriteMoviesByUser(loginName);
    console.log(JSON.stringify(this.favoriteMovies));
  } 
}
