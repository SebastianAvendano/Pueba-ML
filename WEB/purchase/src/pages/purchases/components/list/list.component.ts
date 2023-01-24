import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Purchase } from 'src/models/purchase';
import { getPropsFiltersTable } from 'src/utils/search.datatable';
import { PurchaseService } from '../../purchase.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  purchases: Purchase[] = [];
  loading: boolean = true;
  listOfColumns: any[] = [
    {
      key: 'purchaseId',
      name: 'No. Factura',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: Purchase, b: Purchase) => {
        return a.purchaseId?.localeCompare(b.purchaseId!);
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('purchaseId'),
    },
    {
      key: 'status',
      name: 'Estado',
      listOfFilter: [
        { text: 'Recordatorio 1', value: 1 },
        { text: 'Recordatorio 2', value: 2 },
        { text: 'Desactivado', value: 3 },
      ],
      filterFn: (status: number, item: any) => status === item.statusPurchase,
    },
    {
      key: 'client',
      name: 'Cliente',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: Purchase, b: Purchase) => {
        return a.client?.localeCompare(b.client!);
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('client'),
    },
    {
      key: 'city',
      name: 'Cuidad',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: Purchase, b: Purchase) => {
        return a.city?.localeCompare(b.city!);
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('city'),
    },
    {
      key: 'nit',
      name: 'Nit',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: Purchase, b: Purchase) => {
        return a.nit?.localeCompare(b.nit!);
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('nit'),
    },
    {
      key: 'total',
      name: 'Total',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: Purchase, b: Purchase) => {
        return a.total?.localeCompare(b.total!);
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('total'),
    },
    {
      key: 'detail',
      name: 'Detalles',
      size: '100px'
    },
  ];


  constructor(
    private purchaseService: PurchaseService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(): void {
    this.purchaseService.getAllPruchases().then((value) => {
      this.purchases = value.data
      this.loading = false;
    })
  }

  _showModal(
    title?: string,
    purchase?: Purchase,
    isEditing?: boolean,
    loadingData?: boolean
  ): void {
    this.modalService.create({
      nzTitle: title,
      nzWidth: '50%',
      nzComponentParams: {
        isEditing: isEditing,
        loadingData: loadingData,
        purchase: purchase,
      },
      nzContent: CreateComponent,
    });
  }

  detailPurchase(purchase: Purchase) {
    this._showModal("Detalles de la Factura", purchase, true, true)
  }

  getStatus(status: number) {
    let newStatus = {
      color: "blue",
      label: "Normal"
    }
    switch (status.toString()) {
      case "1":
        newStatus = {
          color: "green",
          label: "Recordatorio 1"
        }
        break;
      case "2":
        newStatus = {
          color: "yellow",
          label: "Recordatorio 2"
        }
        break;
      case "3":
        newStatus = {
          color: "red",
          label: "Desactivado"
        }
        break;
      }
    return newStatus;
  }
}
