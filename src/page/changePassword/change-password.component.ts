import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ChangePasswordComponent implements OnInit{
  title = 'chatgpt';
  phone: string = ''
  oldPassword: string = ''
  confirmPassword: string = ''
  newPassword: string = ''
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
  changePassword(){
    if(this.phone == ''){
      this.message.create('warning', 'Please enter Phone Number!')
      return
    } else if(this.oldPassword == ''){
      this.message.create('warning', 'Please enter old password!')
      return
    } else if(this.newPassword == ''){
      this.message.create('warning', 'Please enter new password!')
      return
    }else if(this.confirmPassword == '' || this.confirmPassword != this.newPassword){
      this.message.create('warning', 'Two password are not same!')
      return
    }else{
      this.message.create('success', 'Edit Successfully!')

        this.router.navigateByUrl('/home')
    }

  }
}
