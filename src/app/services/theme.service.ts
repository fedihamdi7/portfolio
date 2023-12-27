import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private darkModeSubject = new BehaviorSubject<boolean>(true);

  getDarkMode(): Observable<boolean> {
    return this.darkModeSubject.asObservable();
  }

  toggleDarkMode() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
    if (this.darkModeSubject.value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
}
