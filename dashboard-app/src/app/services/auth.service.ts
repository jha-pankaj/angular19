import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  PLATFORM_ID,
  Inject,
} from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { isPlatformBrowser } from "@angular/common";

const USER_KEY = "dashboard_user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  #userSignal = signal<User | null>(null);
  user = this.#userSignal.asReadonly();
  isLoggedIn = computed(() => !!this.user());
  isLogin = false;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.getUserInfo();
    effect(() => {});
    this.getUserInfo();
    console.log("init of AuthService",this.user())
  }
  getUserInfo() {
    
     if (isPlatformBrowser(this.platformId)) {
      const json = localStorage.getItem(USER_KEY);
      console.log("json",json)
      if (json) {
        const user = JSON.parse(json);
        this.isLogin =true;
        this.#userSignal.set(user);
        console.log(" this.isLogin true",this.isLogin)
      }
    }
  }
  isLoginAuthenticated(){
    return this.isLogin;
  }
  login(name: string, password: string) {
    const user: User = {
      name: name,
      password: password,
    };
    this.#userSignal.set(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isLogin =true;
    }
  logout() {
    localStorage.removeItem(USER_KEY);
    this.#userSignal.set(null);
    //this.router.navigateByUrl("/login");
  }
}
