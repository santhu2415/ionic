import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
          
            {
            path:'history',
            children: [
              {
              path: '', 
            loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
          }
        ]
          },
           {
            path:'products',
             children:[
          {
            path: '',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
          }
        ]
           },
           {
            path: 'home',
           children: [
             {
               path: '',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        }
        ]
        },
           {
             path:'status',
             children: [
          {
            path: '',
           loadChildren: () => import('../status/status.module').then( m => m.StatusPageModule)
         }
        ]
           },
           {
             path:'profile',
             children:[
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
        }
        ,
        {
          path:'',
          redirectTo:'/tabs/history',
          pathMatch:'full'
        }
          ]
        },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
