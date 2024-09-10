import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './adminLogin.component';

const routes: Routes = [
  {
    path: 'login',
    component: AdminLoginComponent,
    
  },{
    path: 'home',
    loadChildren:()=>
      import('../admin/admin.module').then(m=>m.AdminModule)
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLoginRoutingModule { }
