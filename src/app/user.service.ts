import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = ['Jean-Bart', 'Richelieu', 'Clémenceau'];

  constructor() { }
}
