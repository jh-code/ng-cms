import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: './routes/admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './routes/login/login.module#LoginModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // debugging only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
