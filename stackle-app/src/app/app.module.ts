import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// material module
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { CommonFeedComponent } from './secure/common-feed/common-feed.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    CommonFeedComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
