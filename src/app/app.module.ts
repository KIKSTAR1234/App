import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { HelpPageComponent } from './help-page/help-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutPageComponent,
    DemoPageComponent,
    HelpPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
