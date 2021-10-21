import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderViewComponent } from './pages/folder-view/folder-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewCoinComponent } from './pages/new-coin/new-coin.component';
import { WebReqInterceptor } from './services/web-req.interceptor';
import { AuthenticationModule } from './pages/authentication-module/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    FolderViewComponent,
    NewListComponent,
    NewCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    AuthenticationModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
