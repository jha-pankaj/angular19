import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Route, RouterOutlet } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule,RouterOutlet,MatCardModule,HeaderComponent, SidebarComponent,
    ]
})
export class DashboardComponent implements OnInit {
  menuOpen= signal<Boolean>(true);
  constructor() {}
  onHeaderItemClicked(item:string){
   this.menuOpen.set(!(this.menuOpen()))
  }
  ngOnInit(): void {}
}
