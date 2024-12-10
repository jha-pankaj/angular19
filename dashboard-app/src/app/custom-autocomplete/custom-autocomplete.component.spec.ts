import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAutocompleteComponent } from './custom-autocomplete.component';

describe('CustomAutocompleteComponent', () => {
  let component: CustomAutocompleteComponent;
  let fixture: ComponentFixture<CustomAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
