import { Component, Input } from '@angular/core';
import { IBestMovies } from '../interfaces/IBestMovies';

@Component({
  selector: 'app-best-movies',
  templateUrl: './best-movies.component.html',
  styleUrls: ['./best-movies.component.css']
})
export class BestMoviesComponent {

  @Input() public movie: IBestMovies = {
    movieTitle: "Movie Title Test",
    imdbScore: "10/10",
    ourScore: "10/10",
    imageSrc: "https://picsum.photos/200/300"
  }
}
