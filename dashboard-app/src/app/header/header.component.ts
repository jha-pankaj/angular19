import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';

 import {MatSidenavModule} from "@angular/material/sidenav"
 import {MatMenuModule} from '@angular/material/menu';
 import {MatButtonModule} from '@angular/material/button';
import { Component, inject, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ResponsiveService } from '../services/responsive.service';


@Component({
  selector: 'app-header',
  imports: [CommonModule,MatToolbarModule, MatSidenavModule, MatIconModule,MatMenuModule ,MatButtonModule ,MatListModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  onHeaderItemClicked = output<string>();
  responsiveService= inject(ResponsiveService) ;

  onHeaderItemClick(ev:Event){
    this.onHeaderItemClicked.emit('menu')
  }
}
