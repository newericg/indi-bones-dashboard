import { Injectable } from '@angular/core';
import { Role } from './roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  getUserRole(): Role {
    /**
    * fake an API call
    */
    return Role.USER;
  }
}