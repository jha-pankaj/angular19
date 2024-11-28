import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,withDebugTracing } from '@angular/router';

import { routes ,  } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),
      provideClientHydration(withEventReplay()
    ), provideAnimationsAsync()]
};
