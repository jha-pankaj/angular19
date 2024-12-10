import {Component, computed, effect, ElementRef, inject, input, OnChanges, OnInit, output, signal, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CountryService } from '../country.service';
import { Country, CountryList } from '../models/country.model';


@Component({
  selector: 'app-custom-autocomplete',
  imports: [
    CommonModule,
     FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    ],
  templateUrl: './custom-autocomplete.component.html',
  styleUrl: './custom-autocomplete.component.scss'
})
export class CustomAutocompleteComponent implements OnInit {
  options = input.required<Country[]>();
  SelectedItem = input<string>();
  placeHolder = input<string>();
  onSelected = output<Country>();
   filteredOptions:Country[] = []
  optionCtrl = new FormControl('');
  orgCList!: Country[];
  

  filter(ev:any) {
    console.log(ev.target.value)
    const filterValue = ev.target.value.toLowerCase() || '';
    console.log(filterValue)
    this.filteredOptions = this.orgCList.filter((country) =>
      country.name.toLowerCase().includes(filterValue)
    );
  }

  @ViewChild('countryInput') itemInput: ElementRef<HTMLInputElement> | undefined;

  constructor(){
    effect(() => {
      if (this.options()) {
        this.orgCList = this.options().slice();
      }
    });
  }
  ngOnInit() {
   
  }

  onEnter(ev: any, country: Country) {
    if (ev.source.selected) {
      this.onSelected.emit(country);
      console.log('Country Selected:', country);
    }
  }
}