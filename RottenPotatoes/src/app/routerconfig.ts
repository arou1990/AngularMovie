import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  { 
    path: 'main', 
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile', 
    component: ProfilePageComponent,
    canActivate: [AuthGuard]
  }
];
export default appRoutes; 
