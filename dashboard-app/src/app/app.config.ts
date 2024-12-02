import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,withDebugTracing } from '@angular/router';

import { routes ,  } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './services/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingInterceptor
      ])
    ),
      provideClientHydration(withEventReplay()
    ), provideAnimationsAsync()]
};
