import { inject, Injectable, signal } from '@angular/core';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  breakpointObserver= inject(BreakpointObserver);
  #isMobile= signal<Boolean>(false);
  isMobile = this.#isMobile.asReadonly();
  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result: { matches: Boolean; }) => {
      this.#isMobile.set(result.matches)
    });
   }
}
