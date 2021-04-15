import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'home',
        loadChildren:() => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'sell',
        loadChildren:() => import('../sell/sell.module').then(m => m.SellPageModule)
      },
      {
        path:'transactions',
        loadChildren:() => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)
      },
      {
        path:'user',
        loadChildren:() => import('../user/user.module').then(m => m.UserPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
