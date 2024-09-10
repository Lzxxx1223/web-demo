import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { DetailRoutingModule } from './detail-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    DetailRoutingModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzInputModule,
    NzTableModule
  ],
  providers: [],
  bootstrap: [DetailComponent]
})
export class DetailModule { }
