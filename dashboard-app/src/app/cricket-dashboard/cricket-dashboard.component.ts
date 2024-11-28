import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatchListService } from './match-list.service';
import { DatePipe, CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-cricket-dashboard',
  imports: [CommonModule,MatBadgeModule, MatButtonModule, MatIconModule,MatTabsModule],
  templateUrl: './cricket-dashboard.component.html',
  styleUrl: './cricket-dashboard.component.scss',
})
export class CricketDashboardComponent {

  matchListService = inject(MatchListService);
  #matches = signal<any[]>([]);
  #type=signal<string>('live');
  #matchType=signal<string>('international');
  matchType= this.#matchType.asReadonly();
  type= this.#type.asReadonly();

  international = computed(() => {
    const matches = this.#matches();
    return matches.filter(match =>{
      return match.matchType==='International'
    }).map((match) =>{
      return match.seriesMatches    
    })[0]?.filter((seriesMatch: { seriesAdWrapper: undefined; })=>{
        return seriesMatch.seriesAdWrapper !== undefined
    }).map((match: { seriesAdWrapper: any; }) =>{
       return match?.seriesAdWrapper
    
    }) 
  
     
  });

  domestic = computed(() => {
    const matches = this.#matches();
    return matches.filter(match =>{
      return match.matchType==='Domestic'
    }).map((match) =>{
        return match.seriesMatches    
    })[0]?.filter((seriesMatch: { seriesAdWrapper: undefined; })=>{
        return seriesMatch.seriesAdWrapper !== undefined
    }).map((match: { seriesAdWrapper: any; }) =>{
       return match?.seriesAdWrapper
    
    }) 
  
     
  });

  women= computed(() => {
    const matches = this.#matches();
    return matches.filter(match =>{
      return match.matchType==='Women'
    }).map((match) =>{
        return match.seriesMatches    
    })[0]?.filter((seriesMatch: { seriesAdWrapper: undefined; })=>{
        return seriesMatch.seriesAdWrapper !== undefined
    }).map((match: { seriesAdWrapper: any; }) =>{
       return match?.seriesAdWrapper
    
    }) 
  
     
  });

  league= computed(() => {
    const matches = this.#matches();
    return matches.filter(match =>{
      return match.matchType==='League'
    }).map((match) =>{
     
     return match.seriesMatches    
    })[0]?.filter((seriesMatch: { seriesAdWrapper: undefined; })=>{
        return seriesMatch.seriesAdWrapper !== undefined
    }).map((match: { seriesAdWrapper: any; }) =>{
       return match?.seriesAdWrapper
    
    }) 
  
     
  });


  constructor() {
   this.loadMatchList(this.#type()).then(() => console.log(`MatchList loaded loaded:`));
    effect(() => {
      console.log(`international: `, this.international())
      console.log(`international: `, this.domestic())
    })
    this.#matchType.set('international');

  }
  onMatchTypeClick(type:string){
    this.#matchType.set(type.toLowerCase());
    console.log(this.matchType())
   
  }
  onTabClick(event: MatTabChangeEvent): void {
    console.log('Tab clicked:', event.index, event.tab.textLabel);
    this.#type.set(event.tab.textLabel.toLowerCase());
    this.#matchType.set('international');
    this.loadMatchList(this.#type())

  }

  async loadMatchList(type:string) {
    try {
      const matchList = await this.matchListService.loadMatchLists(type);
   //   this.#courses.set(courses.sort(sortCoursesBySeqNo));
       this.#matches.set(matchList);
        console.log(matchList)
    }
    catch(err) {
         console.error(err);
    }
  }

}
