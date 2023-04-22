import { Injectable } from '@angular/core';
import { IMovieReview } from '../interfaces/IMoveReview';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

  constructor(private notificationService: NotificationService) { }

  saveMovieReview(movieReview: IMovieReview): boolean{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews : IMovieReview[];

    if(movieReviews){
      currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    } else {
      currentMovieReviews = [];
    }

    let doesMovieReviewExistForThisUser = currentMovieReviews.filter(cmr => (cmr.userName == movieReview.userName) && (cmr.movieName == movieReview.movieName));

    if(doesMovieReviewExistForThisUser.length == 0){
    currentMovieReviews.push(movieReview);
    localStorage.setItem("movieReviews", JSON.stringify(currentMovieReviews));
    this.notificationService.showSnackBar('Saved movie review for: ' + movieReview.movieName);

    }else{
      this.notificationService.showSnackBar('You already wrote a review for this movie!');
      return false;
    }
    return true;
  }

  deleteMovieReview(movieReview: IMovieReview): void{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    let allMoviesButCurrent = currentMovieReviews.filter(cmr => (cmr.userName == movieReview.userName) && (cmr.movieName != movieReview.movieName));
    localStorage.setItem("movieReviews", JSON.stringify(allMoviesButCurrent));
  }

  getMovieReviewsByUser(userName: string): IMovieReview[]{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    let allReviewsByUser = currentMovieReviews.filter(cmr => (cmr.userName == userName));
    return allReviewsByUser;
  }

  getReviewsForMovie(movieName: string): IMovieReview[]{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    let allReviewForMovieByName = currentMovieReviews.filter(cmr => (cmr.movieName == movieName));
    return allReviewForMovieByName;
  }

  getFavoriteMoviesByUser(userName: string): IMovieReview[]{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    let allFavoritedReviewsForUser = currentMovieReviews.filter(cmr => (cmr.userName == userName) && (cmr.favorite == true));
    return allFavoritedReviewsForUser;
  }

  updateFavoriteStatus(movieReview: IMovieReview, status: boolean): boolean{
    let movieReviews = localStorage.getItem('movieReviews') as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];
    let allMoviesButCurrent = currentMovieReviews.filter(cmr => (cmr.userName == movieReview.userName) && (cmr.movieName != movieReview.movieName));
    movieReview.favorite = status;
    allMoviesButCurrent.push(movieReview);
    localStorage.setItem("movieReviews", JSON.stringify(allMoviesButCurrent));
    return status;
  }

  printAllReview(){
    let movieReviews = localStorage.getItem("movieReviews") as string;
    let currentMovieReviews = JSON.parse(movieReviews) as IMovieReview[];

    for(let review in currentMovieReviews){
      console.log(JSON.stringify(review));
    }
  }
}
