import { Injectable } from '@angular/core';
import { delay, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private userNames = ['andyb', 'mikef', 'stewartb', 'laines'];

  constructor() {}

  userNameExists(userName: string): Observable<boolean> {
    console.log('API Called');
    return this.userNames.includes(userName)
      ? of(true).pipe(delay(1000))
      : of(false).pipe(delay(1000));
  }
}
