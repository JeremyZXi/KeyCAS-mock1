import { Configuration, PublicClientApplication, PopupRequest } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: '000583b3-da07-4f1c-ade3-876e89c5b2ae',
    authority: 'https://login.microsoftonline.com/883d90fd-1f22-4b33-baef-34c88f235a1d',
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    allowRedirectInIframe: true,
    windowHashTimeout: 9000,
    iframeHashTimeout: 9000,
    loadFrameTimeout: 9000
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest: PopupRequest = {
  scopes: ['User.Read', 'email', 'profile', 'openid'],
  prompt: 'select_account'
};