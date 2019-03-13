import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //A variable to handle events using a loader based on response or error
  isWait: boolean  = false;
  constructor(private router: Router, private snackBar : MatSnackBar) { }

  onAuth(form)
  {
  
		this.isWait = true;
		
		let loginDetails = {
		
		    email: form.value.email,
			password: form.value.password
		}
		
		axios.post("https://service1-weather-app.herokuapp.com/auth", loginDetails)
		 .then(response =>{
		 
		    this.isWait = false;
		
		    if(response.data.exists)
			{
			   form.reset();
			   this.router.navigate(['/weather']);
			
			}else{
					
				this.openSnackBar();
			
			}
			 
			 
		 }).catch(error =>{
			this.isWait = false;
			this.snackBar.open(error, "OK", {});
		 
		 })
  
  }
  
  openSnackBar() {
		this.snackBar.open("The user does not exist.", "OK", {
	
		});
     }
  ngOnInit() {
  }

}
