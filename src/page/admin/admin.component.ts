import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  userList: any = []
  editInfo = {
    phone: '',
    ip: ''
  }
  editVisible = false
  ngOnInit(): void {
    if(!localStorage.getItem('token') && localStorage.getItem('phone') != 'admin'){
      this.router.navigateByUrl('admin/login')
    }
    this.initData()
  }
  handleCancel(){
    this.editVisible = false
  }
  async handleOk(){
    this.message.create('success','Edit Successfully')
    this.initData()
    this.editVisible = false

  }
  edit(data: any){
    this.editInfo = {
      phone: data.phone,
      ip: data.ip
    }
    this.editVisible = true
  }
  async initData(){
   
  }
  constructor(private router:Router, private message: NzMessageService){}
  title = 'chatgpt';

}
