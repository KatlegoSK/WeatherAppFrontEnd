import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Information to be displayed to the user
  
  locationDescription: string;
  locationDate: string;
  imperial: any;
  metric: any;
  weatherText: any;
  province: string; 
  country: string;
  locationType: string;
  countryID: string;
  
  //A variable to handle events using a loader based on response or error
  isWait: boolean  = false;
  
  //MatSnackBar is an Angular material feature which displays information in a user friendly format
  constructor(private snackBar : MatSnackBar) { }
  
  //A function to handle input searches
  onSearch(form)
  {
	    this.isWait = true;
		
		let locationDetails = {

			locationName: form.value.locationName

		}
		
		
		axios.post("https://service1-weather-app.herokuapp.com/service1", locationDetails)
		 .then(response =>{
		 
		    this.isWait = false;
			
		    form.reset();

		     this.locationDescription = response.data.locationDetails.LocalizedName;
			 this.locationDate = response.data.locationCondition.LocalObservationDateTime;
			 this.province =  response.data.locationDetails.AdministrativeArea.LocalizedName;
			 this.country = response.data.locationDetails.Country.LocalizedName;
			 this.weatherText = response.data.locationCondition.WeatherText;
			 this.metric = response.data.locationCondition.Temperature.Metric;
			 this.imperial = response.data.locationCondition.Temperature.Imperial;
			 this.locationType = response.data.locationDetails.Type;
			 this.countryID =  response.data.locationDetails.Country.ID;
			 
			 
		 }).catch(error =>{
			
			  this.isWait = false;
		      this.snackBar.open("An unexpected error occured", "OK", {
	
		});

		 })
  
  }

  ngOnInit() {
  }

}
