import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule,MatCardModule, MatSidenavModule,MatSelectModule,MatListModule,MatToolbarModule]
})
export class Home implements OnInit {
  cards = [
    { title: 'Card 1', content: 'This is content for Card 1' },
    { title: 'Card 2', content: 'This is content for Card 2' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
        { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' },
    { title: 'Card 3', content: 'This is content for Card 3' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
