import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getInfo() {
    throw new Error("Method not implemented.");
  }
city ='pretoria'
cities= ['Giyani','Naturena','Braamfontein','Durban']
  values;
  WeatherData;
  cityData: any;
  name: any;
  date:number=Date.now();

  value1: any;
 weatherData1: any;
 cityData1: any;
 name1: string;
 icon1: any;
  constructor(private service:WeatherService) {
    this.service.getWeatherDate(this.city).subscribe(myData => {
      // console.log(myData)
      // this.list = myData;
      // console.log(this.list.list)
      // this.infor = this.list.list;
    this.values = myData;
    this.WeatherData = this.values.list;
    this.cityData = this.values.city;
    this.name = this.cityData.name;
    // this.icon = 'http://openweathermap.org/img/w/${res[0].weather[0].icon}.png';
    console.log(myData);
    });

    this.service.getWeatherData1(this.city).subscribe(myData1 => {
    this.value1 = myData1;
    this.weatherData1 = this.value1.list;
    this.cityData1 = this.value1.city;
    this.name1 = this.cityData1.name1;
    console.log(myData1);
    });
    
  }
  
    searchData(){

    
    this.service.getWeatherDate(this.city).subscribe(data=>{
      this.values=data;
      
      this.WeatherData= this.values.list;
      this.cityData= this.values.city;
      this.name=this.cityData.name;
      console.log(data);
    });
    this.service.getWeatherData1(this.city).subscribe(myData1 => {
      this.value1 = myData1;
      this.weatherData1 = this.value1.list;
      this.cityData1 = this.value1.city;
      this.name1 = this.cityData1.name1;
      console.log(myData1);
     });
   }

}
