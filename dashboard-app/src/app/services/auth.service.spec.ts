import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('isLogin should be false' ,()=>{
    console.log("isLogin",service.isLogin)
      expect(service.isLogin).toBeFalse();
  })
  it('isLogin should be true' ,()=>{
    service.login("pankaj","test@test.com");
    expect(service.isLogin).toBe(true);
    expect(service.isLoginAuthenticated()).toBe(true)
  })
});
