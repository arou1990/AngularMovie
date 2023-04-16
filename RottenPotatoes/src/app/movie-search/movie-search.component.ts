import { Component, Input } from '@angular/core';
import {ISearchedMovie} from '../interfaces/ISearchedMovie'

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
}
