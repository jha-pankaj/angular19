import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Route, RouterOutlet } from '@angular/router';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';
import { RoutescontrolService } from '../services/routescontrol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule,RouterOutlet,MatCardModule,HeaderComponent, SidebarComponent,
    ]
})
export class DashboardComponent implements OnInit {
  menuOpen= signal<Boolean>(true);
  responsiveService= inject(ResponsiveService);
  routescontrolService=inject(RoutescontrolService);
  constructor() {
    console.log("vvv",this.responsiveService.isMobile());

    effect(() => {
      console.log("vvv",this.responsiveService.isMobile());

    })

     }
     onItemSideMenuClicked(item:string){
      this.menuOpen.set(false);
      if(item.toLowerCase()==='updates'){
      this.routescontrolService.navigateTo('cricket')
      }else if(item.toLowerCase()==='lines'){
        this.routescontrolService.navigateTo('lines')
      }else{
        this.routescontrolService.navigateTo('undev')
      }
     }
  onHeaderItemClicked(item:string){
   this.menuOpen.set(!(this.menuOpen()))
  }
  ngOnInit(): void {
    if(this.responsiveService.isMobile()){
      this.menuOpen.set(false);
    }
  }
}
