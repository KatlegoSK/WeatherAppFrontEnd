import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SpinnerModule } from 'angular2-spinner/dist';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	BrowserAnimationsModule,
	MatSnackBarModule,
	SpinnerModule,
	MatSelectModule,
	RouterModule.forRoot([
			{path: '', component: LoginComponent},
			{path: 'weather', component: HomeComponent}
			])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
