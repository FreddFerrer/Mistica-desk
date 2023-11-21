import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarHiddenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public sidebarHidden$: Observable<boolean> = this.sidebarHiddenSubject.asObservable();

  constructor() {}

  toggleSidebar() {
    const currentState = this.sidebarHiddenSubject.getValue();
    this.sidebarHiddenSubject.next(!currentState);
  }
}