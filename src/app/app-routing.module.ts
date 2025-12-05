import {Routes} from "@angular/router";
import { LoginUiComponent } from "./auth/login-ui/login-ui.component";
 
export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
   // Wildcard route for a 404 page
  // { path: '**', redirectTo: 'login' },
  
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "auth",
    children: [
      {
        path: "login-ui",
        component: LoginUiComponent
      }
    ]
  }
];