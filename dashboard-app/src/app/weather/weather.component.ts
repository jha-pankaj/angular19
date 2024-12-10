import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CountryService } from '../country.service';
import { Country, CountryList } from '../models/country.model';
import { CustomAutocompleteComponent } from '../custom-autocomplete/custom-autocomplete.component';
import { WeatherService } from '../services/weather.service';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-weather',
  imports: [
    CommonModule,
     FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    CustomAutocompleteComponent,NgxEchartsDirective],
    providers: [
      provideEcharts(),
    ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
   countryService = inject(CountryService);
    countries!: Country[];
    states!: Country[];
    cities!: Country[];
    weatherService = inject(WeatherService)
    weatherRepo:any=null;
    chartOption:any =[]
  constructor(){
    const countryList$= this.countryService.getCountryList().subscribe((res:Country[])=>{
      this.countries=  <Country[]>res.slice();
      this.states =[];
      this.cities=[]
      //this.onCountryList()
     })
      
  }
  toDate(dt:any){
    return new Date(dt).toLocaleTimeString();
  }
  onCountrySelected(ev:Country){
    const stateList$= this.countryService.getStateList(ev?.isoCode).subscribe((res:Country[])=>{
      this.states=<Country[]>res.slice();
      this.cities=[];
     })
  }
 
  onStateSelected(ev:Country){
    const stateList$= this.countryService.getCitiList(ev?.countryCode , ev?.isoCode).subscribe((res:Country[])=>{
      this.cities=<Country[]>res.slice();
     })
   
  }
  onCitySelected(ev:Country){
   console.log(ev)
   this.weatherService.getCityWeather(ev.name).subscribe((res)=>{
    console.log(res)
    this.weatherRepo= res;
    this.loadWeatherForcastData(ev.latitude!,ev.longitude!,16)
   })

  }
  loadWeatherForcastData(lat: string |undefined, lon: string|undefined, cnt: number){
    this.weatherService.getWeatherForcast(lat,lon,cnt).subscribe((res)=>{
     const chartData = this.weatherService.getForcastChartData(res);
     this.chartOption= chartData;
     console.log(chartData)
    })
  }
  kelvinToFahrenheit(kelvin:any) {
    return (kelvin - 273.15)
  }

}
