import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginUiComponent } from '../auth/login-ui/login-ui.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
        {
            path: '',
            component: LoadingComponent, // Child route
            pathMatch: 'full',
    },
      {
        path: 'loading',
        component: LoadingComponent, 
      },
      {
        path: 'login-ui',
        component: LoginUiComponent, 
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
