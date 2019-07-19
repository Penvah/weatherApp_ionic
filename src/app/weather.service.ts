import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
city= 'Pretoria';
appId= '27fd5419fe6ad57665f2884dd7dac543';
  constructor(private http:HttpClient) 
  { }
  getWeatherDate(city: string){
  return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&cnt=1&APPID='+ this.appId);
  }
  getWeatherData1(city: string){
    return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&APPID='+ this.appId);
    }
  
}
