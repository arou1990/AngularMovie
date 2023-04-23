import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { IMovieInfo } from '../interfaces/IMovieInfo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieReviewService } from '../services/movie-review.service';
import { IMovieReview } from '../interfaces/IMoveReview';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    review: new FormControl(''),
    score: new FormControl('')
  });

  public currentMovie: IMovieInfo = {
    id: "",
    Title: "",
    Poster: "",
    Ratings: [],
    Released: "",
    Runtime: "",
    Plot: "",
  };

  private userName: string = '';

  constructor(
    private notificationService: NotificationService,
    private movieReviewService: MovieReviewService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.currentMovie = data.currentMovie;
  }

  ngOnInit(): void {
    this.userName = this.userService.GetUserName();
    this.form = this.formBuilder.group({
      review: ['', Validators.required],
      score: ['', Validators.required],
    })
  }

  saveReview(){
    let review = this.form.value.review;
    let score = this.form.value.score;

    let userMovieReview: IMovieReview = {
      favorite: false,
      movieName: this.currentMovie.Title,
      review: review,
      score: score,
      userName: this.userName
    };

    this.movieReviewService.saveMovieReview(userMovieReview);
    this.closeDialog(true);
  }

  closeDialog(saved: boolean): void {
    this.dialogRef.close(saved);
  }
}