import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './services/auth-guard.service';
import {EditAppareilComponent} from './edit-appareil/edit-appareil.component';

const routes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
