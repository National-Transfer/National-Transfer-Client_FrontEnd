import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import OktaAuth from '@okta/okta-auth-js';
import { environment } from '../environments/environment.development';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OktaAuthModule } from '@okta/okta-angular';
import { authInterceptor } from './auth/auth.interceptor';


const oktaAuth = new OktaAuth({
  issuer: 'https://dev-12637298.okta.com/oauth2/default',
  clientId: '0oae6q7wvhoY28oYV5d7',
  redirectUri: window.location.origin + '/login/callback',
  responseType: ['token', 'id_token'],
  pkce: true,
});

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withInterceptors([authInterceptor])),provideAnimations(),
  provideHttpClient(withFetch()), provideHttpClient(), importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth })),]
};
