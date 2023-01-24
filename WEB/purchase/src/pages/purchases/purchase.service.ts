import { Injectable } from '@angular/core';
import * as axios from 'axios';
import { Purchase } from 'src/models/purchase';

@Injectable({
  providedIn: 'root'
})

export class PurchaseService {

  private url = "https://localhost:7040/api/purchase"
  
  constructor() { }

  getAllPruchases(): Promise<axios.AxiosResponse<any, any>> {
    return axios.default.get(this.url)
  }

  sendEmail(purchase : Purchase): Promise<axios.AxiosResponse<any, any>> {
    return axios.default.put(`${this.url}/${purchase._id}`)
  }
}
