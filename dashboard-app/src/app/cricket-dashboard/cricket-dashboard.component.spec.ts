import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDashboardComponent } from './cricket-dashboard.component';

describe('CricketDashboardComponent', () => {
  let component: CricketDashboardComponent;
  let fixture: ComponentFixture<CricketDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
