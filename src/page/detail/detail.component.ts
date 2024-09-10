import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { IAPPLICATIONINFO } from "src/common/common.interface";
import { NotificationService } from "src/service/notification.service";

@Component({
  selector: 'app-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
    async ngOnInit() {
      this.notificationList = await this.notificationService.getNotificatonList()
    }
    constructor(private notificationService: NotificationService){}
    applicationId: string = '1'
    notificationList: any[] = []

}