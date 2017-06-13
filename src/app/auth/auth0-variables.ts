interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '3Z7JeEbQGh1pfKxCkXKmmG6vKIUlC6PQ',
  domain: 'vladern.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
