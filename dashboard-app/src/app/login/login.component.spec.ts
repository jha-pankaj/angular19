import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    authServiceMock = {
      login: jasmine.createSpy('login').and.returnValue(of(true)),
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, LoginComponent],
      providers:[
        
          { provide: AuthService, useValue: authServiceMock },
          { provide: Router, useValue: routerMock },
        
      ]
    }
  
  )
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not call login or navigate if form is invalid', () => {
    component.form.setValue({ email: '', password: '' });
    component.onSubmit();

    expect(authServiceMock.login).not.toHaveBeenCalled();
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should call login and navigate if form is valid', () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';

    component.form.setValue({ email: mockEmail, password: mockPassword });
    component.onSubmit();

    expect(authServiceMock.login).toHaveBeenCalledWith(mockEmail, mockPassword);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
