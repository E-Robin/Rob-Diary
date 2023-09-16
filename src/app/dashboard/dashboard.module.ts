import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ROUTES, Route, Router, RouterModule, Routes } from '@angular/router';



const routes:Routes = [
  {
    path:'',component:PostComponent
  },{
    path:'add-post',component: NewPostComponent
  }

]

@NgModule({
  declarations: [
    PostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
