import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class NotificationService {

  constructor(
    private notification: NzMessageService
  ) { }

  infoMessage(message: string): void {
    this.notification.info(message)
  }
  sucessMessage(message: string): void {
    this.notification.success(message)
  }
  warningMessage(message: string): void {
    this.notification.warning(message)
  }
  errorMessage(message: string): void {
    this.notification.error(message);
  }
}