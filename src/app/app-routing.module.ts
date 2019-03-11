import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';
import {
  AuthGuardNotService as AuthGuardNot
} from './auth-guard.service';
import { BlueprintComponent } from './blueprint/blueprint.component';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectoryComponent } from './directory/directory.component';
import { AthleticsComponent } from './athletics/athletics.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '',
    component: BlueprintComponent,
    canActivate: [AuthGuardNot],
    data: { roles: [] },
    children:[
      {
        path: 'athletics',
        component: AthleticsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['None'] },
      },
      {
        path: 'account/:id',
        component: AccountComponent,
        canActivate: [AuthGuard],
        data: { roles: ['None'] },
      },
      {
        path: 'directory',
        component: DirectoryComponent,
        canActivate: [AuthGuard],
        data: { roles: ['None'] },
      },
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: ['None'] },
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
