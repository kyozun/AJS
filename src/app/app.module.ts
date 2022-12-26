import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideBarComponent } from './pages/slide-bar/slide-bar.component';
import {AppRoutingModule} from "./app-routing.module";
import { RightItemComponent } from './pages/slide-bar/right-item/right-item.component';
import { LeftItemComponent } from './pages/slide-bar/left-item/left-item.component';
import { InboxComponent } from './pages/slide-bar/left-item/inbox/inbox.component';
import { SendItemsComponent } from './pages/slide-bar/left-item/send-items/send-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideBarComponent,
    RightItemComponent,
    LeftItemComponent,
    InboxComponent,
    SendItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
