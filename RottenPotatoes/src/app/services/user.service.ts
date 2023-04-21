import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public GetUserName(): string {
    let name: string = localStorage.getItem('loggedInUser') as string;
    let parseUser : User = JSON.parse(name) as User;
    return parseUser.username;
  }
}
