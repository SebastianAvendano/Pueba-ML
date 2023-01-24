import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLayout: boolean = true;
  
  constructor(
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
  }

  toogleCollapsed() : void {
    this.layoutService.collapsed(!this.layoutService.isCollapsed)
  }
}
