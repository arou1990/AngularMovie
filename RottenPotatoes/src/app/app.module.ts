import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
 // app.module.ts

 import appRoutes from './routerconfig';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
