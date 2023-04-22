import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private snackBar: NotificationService ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    let username = this.form.value.username;
    let password = this.form.value.password;
    let tryLogin = false;

    if (username == "user1" || username == "user2") {
      if (password == 'test') {
        localStorage.setItem('loggedInUser', JSON.stringify({
          username: username
        }));
        this.snackBar.showSnackBar('Login Successful');
        this.router.navigateByUrl('/main');
        tryLogin = true;
      }
    }
    if (!tryLogin) {
      localStorage.setItem('loggedInUser', '');
      this.snackBar.showSnackBar('Invalid Login');
    }
  }
}
