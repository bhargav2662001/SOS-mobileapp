import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {RouterModule, RouteReuseStrategy, PreloadAllModules} from "@angular/router";
import { appRoutes } from "./app-routing.module";
import { LoginModule } from "./login/login.module";

// import { PlatformService } from "./shared/services/platform.service";


 
 
@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    IonicModule,
    HttpClientModule
    
   
  ],
 
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideHttpClient(withInterceptorsFromDi()),
    ScreenOrientation
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }