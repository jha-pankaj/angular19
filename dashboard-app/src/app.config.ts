import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './app/services/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
     provideClientHydration(withEventReplay()),
     provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingInterceptor
      ])
    )
    
    
    ]
};
