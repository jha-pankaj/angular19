import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

   loadMenuItems():MenuItem[]{
    return [
      {
        title: "Cricket",
        icons: '',
        expanded: 1,
        subMenu:[
          {
            title: "Updates",
            icons: '',
            expanded: 0,
          }]
        },
      {
        title: "Charts",
        icons: '',
        expanded: 1,
        subMenu:[
          {
            title: "Lines",
            icons: '',
            expanded: 0,
          },
          {
            title: "Pi chart",
            icons: '',
            expanded: 0,
          },
          {
            title: "Bar charts chart",
            icons: '',
            expanded: 0,
          },
          {
            title: "Scatter",
            icons: '',
            expanded: 0,
          },
         
          {
            title: "Graph",
            icons: '',
            expanded: 0,
          },
        ]
      },
      {
        title: "Tiles",
        icons: '',
        expanded: 1,
        subMenu:[
          {
            title: "Tiles 1",
            icons: '',
            expanded: 0,
          },
          {
            title: "Tiles 2",
            icons: '',
            expanded: 0,
          }
        ]
      },
      {
        title: "Ag Grids",
        icons: '',
        expanded: 1,
        subMenu:[
          {
            title: "Flat Grid",
            icons: '',
            expanded: 0,
          },
          {
            title: "Nested Grid",
            icons: '',
            expanded: 0,
          }
        ]
      }
    ]
  }}



