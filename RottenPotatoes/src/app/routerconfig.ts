import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  { 
    path: 'main', 
    component: MainPageComponent
  },
  { 
    path: 'profile', 
    component: ProfilePageComponent
  }
];
export default appRoutes; 