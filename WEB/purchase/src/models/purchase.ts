import { _IPurchase } from 'src/interfaces/ipurchase';

export class Purchase {
  constructor({
  createdAt,
  city,
  client,
  email,
  isPaid,
  iva,
  nit,
  paymentDate,  
  purchaseId,
  status,
  subTotal,
  total,
  _id,
  }: _IPurchase) {
    (this.city = city),
    (this.client = client),
    (this.email = email),
    (this.nit = nit),
    (this.status = status),
    (this.createdAt = createdAt),
    (this.isPaid = isPaid),
    (this.iva = iva),
    (this.paymentDate = paymentDate),
    (this.purchaseId = purchaseId),
    (this.subTotal = subTotal),
    (this.total = total),
    (this._id = _id);
  }

  public city?: string;
  public client?: string;
  public email?: string;
  public nit?: string;
  public status?: number;
  public createdAt?: string;
  public paymentDate?: string;
  public isPaid?: boolean;
  public total?: string;
  public subTotal?: string;
  public iva?: string;
  public purchaseId?: string;
  public _id?: JSON;

  public copyWith({
    createdAt,
    city,
    client,
    email,
    isPaid,
    iva,
    nit,
    paymentDate,  
    purchaseId,
    status,
    subTotal,
    total,
    _id,
  }: _IPurchase): Purchase {
    return new Purchase({
      createdAt: createdAt ?? this.createdAt,
      city: city ?? this.city,
      client: client ?? this.client,
      email: email ?? this.email,
      isPaid: isPaid ?? this.isPaid,
      iva: iva ?? this.iva,
      nit: nit ?? this.nit,
      paymentDate: paymentDate ?? this.paymentDate,  
      purchaseId: purchaseId ?? this.purchaseId,
      status: status ?? this.status,
      subTotal: subTotal ?? this.subTotal,
      total: total ?? this.total,
      _id: _id ?? this._id,
    });
  }

  public fromRawJson(str: string): Purchase {
    return Purchase.fromJson(JSON.parse(str));
  }

  public toRawJson(): string {
    return JSON.stringify(this.toJson());
  }

  public static fromJson(json: any): Purchase {
    return new Purchase({
      createdAt: json('createdAt') != null ? json('createdAt').toDate() : null,
      city: json('city') != null ? json('city') : '',
      client: json('client') != null ? json('client') : '',
      email: json('email') != null ? json('email') : '',
      isPaid: json('isPaid') != null ? json('isPaid') : false,
      iva: json('iva') != null ? json('iva') : '',
      nit: json('nit') != null ? json('nit') : '',
      paymentDate: json('paymentDate') != null ? json('paymentDate').toDate() : null,  
      purchaseId: json('purchaseId') != null ? json('purchaseId') : '',
      status: json('status') != null ? json('status') : 1,
      subTotal: json('subTotal') != null ? json('subTotal') : '',
      total: json('total') != null ? json('total') : '',
      _id: json('_id') != null ? json('_id') : {},
    });
  }

  public toJson(): any {
    return {
      createdAt: this.createdAt,
      city: this.city,
      client: this.client,
      email: this.email,
      isPaid: this.isPaid,
      iva: this.iva,
      nit: this.nit,
      paymentDate: this.paymentDate,  
      purchaseId: this.purchaseId,
      status: this.status,
      subTotal: this.subTotal,
      total: this.total,
      _id: this._id,
    };
  }

  public toJsonRemovingEmptyFields() {
    return Object.fromEntries(
      Object.entries(this.toJson()).filter((object): boolean =>
        object[1] ? true : false
      )
    );
  }
}