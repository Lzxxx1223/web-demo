import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { IAPPLICATIONINFO } from "src/common/common.interface";

@Component({
  selector: 'app-workflow',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent{
    applicationInfo: IAPPLICATIONINFO = {
      applicationId: '',
      applicationName: '',
      firstContact: '',
      secondContact: '',
      contactGroup: '',
      logo: ''
    }

}