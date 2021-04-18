import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 //{
  // path:'',
  // loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpagePageModule)
 //},
  //{
  //  path: 'items',
  //  loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  //}
//
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
       