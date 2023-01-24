import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed: boolean = false;
  showLayout?: boolean = true;
  
  constructor(
    private layoutService: LayoutService,
  ) { }


  ngOnInit(): void {
    this.collapsedObservable();
  }

  collapsedObservable(): void {
    this.isCollapsed = this.layoutService.isCollapsed;
    this.layoutService.collapsedObservable$.subscribe((isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  }
}
