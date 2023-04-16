import { Component } from '@angular/core';
import { IBestMovies } from '../interfaces/IBestMovies';
import { ISearchedMovie } from '../interfaces/ISearchedMovie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  bestMovies: IBestMovies[] = [
    {
      movieTitle: "Movie Title Test0",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    },
    {
      movieTitle: "Movie Title Test1",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    },
    {
      movieTitle: "Movie Title Test2",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    },
    {
      movieTitle: "Movie Title Test3",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    },
    {
      movieTitle: "Movie Title Test4",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    },
    {
      movieTitle: "Movie Title Test5",
      imdbScore: "10/10",
      ourScore: "10/10",
      imageSrc: "https://picsum.photos/200/300"
    }
  ]
    searchedMovie: ISearchedMovie[] = [
    {    
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review",
    },
    {    
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review",
    },    {    
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review",
    }
  ]
}
