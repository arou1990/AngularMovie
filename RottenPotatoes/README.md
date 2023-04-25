# RottenPotatoes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Dependencies
- Please get an API key from [API](https://www.omdbapi.com/) &
- Angular libraries (seen in package.json)
- Material Angular


## Installing & Running the project

First please install of the libraries required to run the application. [API](https://www.omdbapi.com/)
- Update **assets/config/search-api-key.json** with your API key from
- Run the command `npm install`
- Run the command `ng serve -o` if the browser does not open please navigate to `http://localhost:4200/`


## Project Technologies
- Reactive Forms
- Custom Services
- Importing a config file
- Use of Angular CLI to generate components, services, guards
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
- Form Fields
- Use of HTTPClient, contacting an external 3rd party API [API](https://www.omdbapi.com/)
- Use of subscriptions
- Use of localstorage
- Use of event emitters
- Adding to & sorting Arrays
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

## Header Component

- Angular Routing and On Click events to mavigate between main page, profile page, and login page
- Angular Material Snack Bar notifications to show successful logout

## Main Page

- Static data coded in to show our favorite movies
- Use of interface and *ngFor to display favorite movie info
- Use of Pipes to shorten movie title text if it exceed 20 characters

## Movie Search Component

- Angular form used to create search bar
- Search Service implemented to access an API for movie info
    - Use of config service to retrieve API key from assets
    - Use of HTTP Client and Observables to make the webcall and retrieve movie data
- Angular Material Dialogue box used to allow user to leave movie reviews
- Use of *ngIf and *ngFor to display searched movie info
- Use of on click events to open review dialog

## Profile Page Component

- Displays currently logged in user's movie reviews and allows user to favorite and unfavorite movies

## Movie Review Component

- Used to display movies that have been reviewed and favorited
- Event emitters used to actively refresh list of both reviewed movies and favorited movies

## Services:

## Config Service

- Used to retrieve API key
- SnackBar notifications used to let user know if there are any issues with the key

## Movie Review Service

- Contains logic for saving, deleting, favoriting, and retrieving movie reviews and favorite status

## Notification Service

- Angular Materials SnackBar notification service to display messages throughout the app

## Search Service

- Creates link used to make webcalls to the movie API
- HTTP client and Observable used for get requests to movie API to fetch movie data

## User Service

- Retrieves currently logged in user to display username and log reviews by user

## Auth Guard

- Use of Observable to check if user has successfully login and if not return them back to the login page