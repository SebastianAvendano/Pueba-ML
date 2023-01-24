import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { LayoutService } from './layout.service';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { AppRoutingModule } from '../../app/app-routing.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';

const modules = [
  IconsProviderModule,
  AppRoutingModule,
  NzLayoutModule,
  NzMenuModule,
  NzAvatarModule,
  NzGridModule,
  NzBadgeModule,
  NzDividerModule,
  NzPopoverModule,
  NzButtonModule,
];

const components = [
  MenuComponent,
  HeaderComponent
];


@NgModule({
  imports: [CommonModule, ...modules],
  exports: [CommonModule, ...components],
  declarations: [...components],
})

export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {

    return {
      ngModule: LayoutModule,
      providers: [LayoutService],
    };
  }
}