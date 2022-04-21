import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevUIModule } from 'ng-devui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAComponent } from './components/home-a/home-a.component';
import { ResetPositionComponent } from './components/reset-position/reset-position.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAComponent,
    ResetPositionComponent,
    HomeAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
