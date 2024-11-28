import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { URLS } from '../app.model';
import { MATCHTYPE } from './match.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchListService {
  http = inject(HttpClient);
  env = URLS;
  type:string=MATCHTYPE.LIVE;

  
 

  constructor() {
    console.log(this.type);

   }
  async loadMatchLists(type:string):Promise<any>{
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'bb62312e08msh0acefac3f1947d3p1a21a7jsn1448bca7c2d5',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
       'Access-Control-Allow-Origin':'*'
    })
    const matchList$ =
    this.http.get<any>(`${this.env.apiRoot}/matches/v1/${type}`,{headers});
  const response = await firstValueFrom(matchList$);
  return response.typeMatches;
   }
}
