
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryList } from './models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  URL='https://country-state-city-search-rest-api.p.rapidapi.com/';
  headerInfo:any = new HttpHeaders({
    'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com',
    'x-rapidapi-key': 'bb62312e08msh0acefac3f1947d3p1a21a7jsn1448bca7c2d5', // Replace with your actual RapidAPI key
  });

   constructor(private http :HttpClient) {

   

   }

   getCitiList(cntry:string | undefined,state:string | undefined){
    return this.http.get<Country[]>(`${this.URL}cities-by-countrycode-and-statecode?countrycode=${cntry}&statecode=${state}`, { headers: this.headerInfo });
   }

   getStateList(cntry:string | undefined){
    return this.http.get<Country[]>(`${this.URL}states-by-countrycode?countrycode=${cntry}`, { headers: this.headerInfo });
   }

   getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}allcountries`, { headers: this.headerInfo });
  }
}
