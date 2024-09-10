import { NgModule } from '@angular/core';
import { WorkflowComponent } from './workflow.component';
import { BrowserModule } from '@angular/platform-browser';
import { WorkflowRoutingModule } from './workflow-routing.module';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NzUploadModule } from 'ng-zorro-antd/upload';

@NgModule({
  declarations: [
    WorkflowComponent,
    
  ],
  imports: [
    BrowserModule,
    WorkflowRoutingModule,
    NzBreadCrumbModule,
    NzUploadModule
  ],
  providers: [],
  bootstrap: [WorkflowComponent]
})
export class WorkflowModule { }
