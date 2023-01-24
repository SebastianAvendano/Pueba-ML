import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { _IPurchase } from 'src/interfaces/ipurchase';
import { StatusPurchase } from 'src/models/enums/statusPurchase';
import { Purchase } from 'src/models/purchase';
import { NotificationService } from 'src/providers/notification/notification.service';
import { handleErrorForm } from 'src/utils/handle.error.form';
import { PurchaseService } from '../../purchase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  isEditing?: boolean; 
  purchase?: Purchase;
  loadingData?: boolean;
  purchaseForm!: FormGroup;
  loading?: boolean;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private purchaseService: PurchaseService,
    private notification: NotificationService,
  ) { 
    this.purchaseForm = this.fb.group({
      client: [null, [Validators.required]],
      nit: [null, [Validators.required]],
      purchaseId: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      total: [null, [Validators.required]],
      iva: [null, [Validators.required]],
      city: [null, [Validators.required]],
      isPaid: [null, [Validators.required]],
      subTotal: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    if (this.isEditing){
      this._getDetail(this.purchase!)
    }
  }

  _getDetail(purchase: Purchase){
    this.purchaseForm.patchValue(purchase);
    this.loadingData = false;
  }
  
  validateAction(): void {
    this.loadingData = true;

    if (this.purchaseForm.valid) {
      if (this.isEditing) {
        this._updatePurchase(this.purchase!);
      }
    } else {
      handleErrorForm(this.purchaseForm);
    }
  }

  async _updatePurchase(purchase: Purchase){{

    const data = {
      _id: purchase._id,
      city: this.purchaseForm.value.city,
      client: this.purchaseForm.value.client,
      email: this.purchaseForm.value.email,
      isPaid: this.purchaseForm.value.isPaid,
      nit: this.purchaseForm.value.nit,
      iva: this.purchaseForm.value.iva,
      subTotal: this.purchaseForm.value.subTotal,
      total: this.purchaseForm.value.total,
      paymentDate: new Date().toDateString(),
      purchaseId: this.purchaseForm.value.purchaseId,
      status: purchase.status == StatusPurchase.firtsReminding ? StatusPurchase.lastReminding : StatusPurchase.desactivate,
    }

    const res = await this.purchaseService.sendEmail(data as any);
    this.destroyModal();
    this.notification.sucessMessage("El mensaje fue enviado con Exito!.");

  }}

  destroyModal() {
    this.modal.destroy();
  }
}
