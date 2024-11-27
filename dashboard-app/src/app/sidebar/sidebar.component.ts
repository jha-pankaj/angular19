import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon"
import { Component, effect, inject, OnInit, output, signal } from '@angular/core';
import { MenuItem } from '../models/menu.model';
import { SidebarService } from '../services/sidebar.service';
import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,MatCardModule, MatSidenavModule,MatSelectModule,MatListModule,MatToolbarModule,MatSidenavModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'translateY(-5%)' }),
        animate('100ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({ transform: 'translateY(-5%)' }))
      ])
    ])
  ]
})
export class SidebarComponent {

  sidebarService = inject(SidebarService);
  
    menuItems= signal<MenuItem[]>([])

    onItemClicked = output<string>();
  
    constructor (){
      this.menuItems.set(this.sidebarService.loadMenuItems())
       
      effect(() => {
        console.log(`Menu List: `, this.menuItems())
      })

      }
      expandCollapseMenu(item:MenuItem){
        item.expanded = item.expanded ===0 ? 1 : 0 ;
        const menuItems = this.menuItems();
        const newCourses = menuItems.map(item=> (
          item.title === item.title ? item : item
        ));
        this.menuItems.set(newCourses);
      }
     

 

      itemClick(item:MenuItem){
        this.onItemClicked.emit(item.title)
      }
    
}
