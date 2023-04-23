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
    showFavorite: true,
    showDelete: true
  }

  loginName: string ='';

  public movieReviews: IMovieReview[] = []
  public favoriteMovies: IMovieReview[] = []

  constructor(private movieReviewService: MovieReviewService, private userService: UserService){}

  ngOnInit(): void {
    this.loginName = this.userService.GetUserName();
    this.movieReviews = this.movieReviewService.getMovieReviewsByUser(this.loginName).sort((a, b) => a.movieName.localeCompare(b.movieName));
    this.favoriteMovies = this.movieReviewService.getFavoriteMoviesByUser(this.loginName).sort((a, b) => a.movieName.localeCompare(b.movieName));
  }

  refreshReviews(review: IMovieReview): void {
    this.movieReviews = this.movieReviewService.getMovieReviewsByUser(this.loginName).sort((a, b) => a.movieName.localeCompare(b.movieName));
    this.favoriteMovies = this.movieReviewService.getFavoriteMoviesByUser(this.loginName).sort((a, b) => a.movieName.localeCompare(b.movieName));
  }
}
