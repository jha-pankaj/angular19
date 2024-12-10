import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatchListService } from './match-list.service';
import { CricketDashboardComponent } from './cricket-dashboard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Import NoopAnimationsModule

describe('CricketDashboardComponent', () => {
  let component: CricketDashboardComponent;
  let fixture: ComponentFixture<CricketDashboardComponent>;
  let service: MatchListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        CricketDashboardComponent,
        NoopAnimationsModule // Add NoopAnimationsModule here
      ],
      providers: [MatchListService],
    })
    .compileComponents();

    service = TestBed.inject(MatchListService);
    fixture = TestBed.createComponent(CricketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
