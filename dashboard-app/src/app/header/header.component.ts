import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';

 import {MatSidenavModule} from "@angular/material/sidenav"
 import {MatIconModule} from "@angular/material/icon"
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MatToolbarModule, MatSidenavModule, MatIconModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
