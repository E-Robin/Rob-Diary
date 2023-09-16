import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent

  },
  {
    path:'home',component: HomeComponent,
    children:[
      {
        path:'' ,redirectTo:'dashboard' ,pathMatch:'full'
      },
      {
        path:'dashboard' , loadChildren: ()=> import('./dashboard/dashboard.module').then(
          m => m.DashboardModule
        )
      }
    ] 
  },
  
  // {
  //   path:'home',component:HomeComponent,
  //   children: [
  //     {
  //       path:'',loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  //     }
  //   ]

    
  // }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
