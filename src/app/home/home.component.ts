import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locationDescription: string;
  locationDate: string;
  imperial: any;
  metric: any;
  weatherText: any;
  province: string; 
  country: string;
  locationType: string;
  countryID: string;
  constructor(private snackBar : MatSnackBar) { }
  
  //A function to handle input searches
  onSearch(form)
  {
	
		
		let locationDetails = {

			locationName: form.value.locationName

		}
		console.log(locationDetails);
		
		axios.post("https://service1-weather-app.herokuapp.com/service1", locationDetails)
		 .then(response =>{
		 
		    form.reset();
			console.log(response.data);
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
			
			
		      this.snackBar.open(error, "OK", {
	
		});

		 })
  
  }

  ngOnInit() {
  }

}
