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

  constructor(private router: Router, private snackBar : MatSnackBar) { }

  onAuth(form)
  {
  
		console.log(form.value);
		
		let loginDetails = {
		
		    email: form.value.email,
			password: form.value.password
		}
		
		axios.post("https://service1-weather-app.herokuapp.com/auth", loginDetails)
		 .then(response =>{
		 
		    
		
		    if(response.data.exists)
			{
			   form.reset();
			   this.router.navigate(['/weather']);
			
			}else{
					
				this.openSnackBar();
			
			}
			 
			 
		 }).catch(error =>{
			
			console.log(error);
		 
		 })
  
  }
  
  openSnackBar() {
		this.snackBar.open("The user does not exist.", "OK", {
	
		});
     }
  ngOnInit() {
  }

}
