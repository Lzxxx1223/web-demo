import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GET_NOTIFICATION_URL } from "./apis.constant";
import { INotification } from "src/common/common.interface";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private httpClient: HttpClient){}
  async getNotificatonList():Promise<Array<INotification>> {
    let res:any = await this.httpClient.get(GET_NOTIFICATION_URL).toPromise()
    return new Promise((resolve, reject) => {
      console.log(res)
      resolve(res.data)
    })

  }
  
}