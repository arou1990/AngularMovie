import { Component } from '@angular/core';
import { IBestMovies } from '../interfaces/IBestMovies';
import { ISearchedMovie } from '../interfaces/ISearchedMovie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  bestMovies: IBestMovies[] = [{
      movieTitle: "The Dark Knight ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/darkKnight.jpg"
    },
    {
      movieTitle: "The Shawshank Redemption ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/shawshank.jpg"
    },
    {
      movieTitle: "Caddyshack ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/caddyshack.jpg"
    },
    {
      movieTitle: "Interstellar ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/interstellar.jpg"
    },
    {
      movieTitle: "Chef ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/chef.jpg"
    },
    {
      movieTitle: "Monsters Inc ",
      imdbScore: "10/10 ",
      ourScore: "10/10 ",
      imageSrc: "assets/images/monstersInc.jpg"
    }
  ]
  searchedMovie: ISearchedMovie[] = [{
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review"
    },
    {
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review"
    },
    {
      poster: "https://picsum.photos/200/300",
      movieInfo: "Movie Info",
      userReview: "User Review"
    }
  ]
}
