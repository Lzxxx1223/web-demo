import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.scss']
})
export class AdminLoginComponent implements OnInit{
  phone: string = ''
  password: string = ''
  containerWidth  = 600

  constructor(private router: Router, private message: NzMessageService){}
  ngOnInit(): void {
    let contentWidth = document.getElementsByClassName('container')[0].clientWidth
    if(contentWidth < 600){
      this.containerWidth = (contentWidth - 80)
    } else {
      this.containerWidth = 600
    }
  

  }

  login(){
    if(this.phone == ''){
      this.message.create('warning', 'Please enter Phone number')
      return
    } else if(this.password == ''){
      this.message.create('warning', 'Please Enter password')
      return
    } else{
      this.message.create('success','登陆成功！')
        this.router.navigateByUrl('/admin/home')

    }

  }
}
