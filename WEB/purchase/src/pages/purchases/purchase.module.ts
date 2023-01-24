import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

//Modules
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PurchasePageRoutingModule } from './purchase.routing.module';

//services
import { PurchaseService } from './purchase.service';
import { NotificationService } from 'src/providers/notification/notification.service';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PurchasePageRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzTagModule,
    NzIconModule,
    NzDropDownModule,
    NzSpinModule,
    NzMessageModule,
  ],
  declarations: [
    ListComponent,
    CreateComponent
  ],
  providers:[PurchaseService, NotificationService]

})

export class PurchaseModule {}
