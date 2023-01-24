import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  isCollapsed: boolean = false;
  
  private isCollapsedOservable: Subject<boolean> = new Subject();

  collapsedObservable$ = this.isCollapsedOservable.asObservable();

  constructor() {}

  collapsed(collapsed: boolean): void {
    this.isCollapsed = collapsed;
    this.isCollapsedOservable.next(collapsed);
  }

}
