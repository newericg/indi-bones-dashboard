import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { simplybookConfig } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SimplybookService {
  constructor(public http: HttpClient) {}

  getToken(email: string, password: string) {
    return this.http.post<any>('https://user-api.simplybook.me/login', {
      jsonrpc: '2.0',
      method: 'getToken',
      params: {
        companyLogin: simplybookConfig.company,
        apiKey: simplybookConfig.apiKey,
      },
      // method: 'getClientInfoByLoginPassword',

      // company: simplybookConfig.company,
      // login: email,
      // password: password,

      id: 1,
    });
  }

  login(email: string, password: string) {
    return this.http.post('https://user-api-v2.simplybook.me/admin/auth', {
      company: simplybookConfig.company,
      login: email,
      password: password,

      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getClient() {
    return this.http.get('https://user-api-v2.simplybook.me/admin/clients/1', {
      params: {
        companyLogin: simplybookConfig.company,
        apiKey: simplybookConfig.apiKey,
      },

      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
