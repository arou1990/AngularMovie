import { Component, Input, OnInit } from '@angular/core';
import {ISearchedMovie} from '../interfaces/ISearchedMovie'
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SearchService } from '../services/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { IMovieInfo } from '../interfaces/IMovieInfo';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchTextBox = new FormControl();

  public currentMovieInfo: IMovieInfo ={
    id: "",
    Title: "",
    Poster: "",
    Ratings: [],
    Released:"",
    Runtime:"",
    Plot:"",
  }

  constructor(public dialog: MatDialog, private searchService: SearchService) {}
  
    ngOnInit(): void {
      this.searchTextBox.valueChanges.pipe(debounceTime(1000)).subscribe(input =>{
        this.searchUpdate(input);
      })
    }

    public openReviewDialogue(): void{

    let DialogRef = this.dialog.open(ReviewDialogComponent, {
      height: '350px',
      width: '300px',
      data: {movieName: 'Searched Movie'}
    });

    }

    public searchUpdate(event: any): void{

      if(event.length > 2){
        this.searchService.GetMovieInfo(event).subscribe(data => {
          if(data){
            this.currentMovieInfo = {
              id: data.Title,
              Title: data.Title,
              Poster: data.Poster,
              Ratings: data.Ratings,
              Released: data.Released,
              Runtime: data.Runtime,
              Plot: data.Plot,
            }
          }
        });
      }
      console.log(JSON.stringify(event));
    }


}
