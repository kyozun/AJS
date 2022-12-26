import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlideBarComponent} from "./pages/slide-bar/slide-bar.component";
import {RightItemComponent} from "./pages/slide-bar/right-item/right-item.component";
import {SendItemsComponent} from "./pages/slide-bar/left-item/send-items/send-items.component";
import {InboxComponent} from "./pages/slide-bar/left-item/inbox/inbox.component"; // CLI imports router

const routes: Routes = [
  // {path: 'Inbox', component: InboxComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
