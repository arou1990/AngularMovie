## Summary

This was a learning project in order to get familiar with building single page applications in Angular.  This helped me to learn HTML, TypeScript, and CSS.  It also helped me to get familiar with Node, Angular CLI, and using a 3rd party UI component library.  I learned basic workflow with Github by creating new branches, staging changes, pushing, pulling, and merging branches.

## Project Dependencies
- Please get an API key from [API](https://www.omdbapi.com/)
- Angular libraries (seen in package.json)
- Material Angular


## Installing & Running the project

First please install the libraries required to run the application
- Make sure you have node installed
- Make sure Angular CLI is installed
- Update **assets/config/search-api-key.json** with your API key from [API](https://www.omdbapi.com/)
- Run the command `npm install`
- Run the command `ng serve -o` if the browser does not open please navigate to `http://localhost:4200/`

Signin credentials are:
    - User: user1
    - Password: test
Alternate:
    - User: user2
    - Password: test


## Notable Project Elements

- Reactive Forms
- Custom Services
- Importing a config file
- Use of Angular CLI to generate components, services, guards, pipes, and guards
- Use of assets folder
- Use of click events
- Use of onvaluechanges
- Use of Interfaces & Classes
- Use of Input tag [Input](https://angular.io/api/core/Input)
- Use of Interpolation [Interpolation](https://angular.io/guide/interpolation)
- Use of Angular material
    - Dialog
    - Toolbar
    - Icon
    - SnackBar
    - Form Fields
- Use of HTTPClient, contacting an external 3rd party API [API](https://www.omdbapi.com/)
- Use of subscriptions
- Use of localstorage
- Use of event emitters
- Arrays
    - Adding
    - Filtering
    - Sorting
- *ngFor & *ngIf
- Pipes
- Angular Router & canActivate
- Use of custom font
- CSS Grid

## Project Features

### Login Page

All routes are configured in the routerconfig.ts. [canActivate](https://angular.io/api/router/CanActivate) restricts navigation based on some very basic, hardcoded authentication rules in **guards/auth.guard.ts**. Technology used to achieve this feature:
- Angular Routing
- Basic Login Form Implementation
- Using an unsecure method of tracking credentials to login (all managed in local storage)
- Using notifications to show user has logged in, has been denied logging in

### Header Component

- Angular Routing and On Click events to navigate between main page, profile page, and login page
- Angular Material Snack Bar notifications to show successful logout

### Main Page

- Static data coded in to show our favorite movies
- Use of interface and *ngFor to display favorite movie info
- Use of Pipes to shorten movie title text if it exceed 20 characters

### Movie Search Component

- Angular form used to create search bar
- Search Service implemented to access an API for movie info
    - Use of config service to retrieve API key from assets
    - Use of HTTP Client and Observables to make the webcall and retrieve movie data
- Angular Material Dialogue box used to allow user to leave movie reviews
- Use of *ngIf and *ngFor to display searched movie info
- Use of on click events to open review dialog

### Profile Page Component

- Displays currently logged in user's movie reviews and allows user to favorite, unfavorite, and delete them

### Movie Review Component

- Used to display movies that have been reviewed and favorited
- Event emitters used to actively refresh list of both reviewed movies and favorited movies

## Services

### Config Service

- Used to retrieve API key
- SnackBar notifications used to let user know if there are any issues with the key

### Movie Review Service

- Contains logic for saving, deleting, favoriting, and retrieving movie reviews and favorite status

### Notification Service

- Angular Materials SnackBar notification service to display messages throughout the app

### Search Service

- Creates link used to make webcalls to the movie API
- HTTP client and Observable used for get requests to movie API to fetch movie data

### User Service

- Retrieves currently logged in user to display username and log reviews by user

### Auth Guard

- Use of Observable to check if user has successfully login and if not return them back to the login page