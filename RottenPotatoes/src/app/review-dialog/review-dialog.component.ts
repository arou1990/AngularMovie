import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent {
  constructor(public dialogRef: MatDialogRef<ReviewDialogComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
