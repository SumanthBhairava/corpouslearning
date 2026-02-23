import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _collapsed = new BehaviorSubject<boolean>(
    localStorage.getItem('sidebarCollapsed') === 'true'
  );
  collapsed$ = this._collapsed.asObservable();

  get collapsed() { return this._collapsed.value; }

  toggle() {
    const next = !this._collapsed.value;
    this._collapsed.next(next);
    localStorage.setItem('sidebarCollapsed', String(next));
  }

  close() {
    this._collapsed.next(false);
    localStorage.setItem('sidebarCollapsed', 'false');
  }
}