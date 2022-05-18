import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentCityService {
  private _currentCity = new BehaviorSubject<string>('');
  public readonly currentCity$: Observable<string> = this._currentCity.asObservable();
  public onlyCities = ["chicago", "new york city", "san francisco"];

  constructor() { }

  getCity(): Observable<string> {
    return this.currentCity$;
  }

  setCity(city: string) {
    this._currentCity.next(city);
  }
}
