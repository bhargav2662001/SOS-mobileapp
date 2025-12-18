import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule, NgClass} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoadingComponent } from "./loading/loading.component";
import { LoginPageRoutingModule } from "./login-routing.module";

import { AuthComponent } from "../auth/auth.component";
import { LoginUiComponent } from "../auth/login-ui/login-ui.component";
import { RegisterComponent } from "../auth/register/register.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { Auth } from "../services/auth";


@NgModule({
  declarations: [
    LoginComponent,
    LoadingComponent,
    AuthComponent,
    LoginUiComponent,
    RegisterComponent,
    LandingPageComponent,
    // Auth

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    NgClass,
    
  ],
  exports: [
    LoginUiComponent,
    RegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
