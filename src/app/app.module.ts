import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InfiniteScrollerComponent} from "./infinite-scroller/infinite-scroller.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent, InfiniteScrollerComponent
  ],
  imports: [
    BrowserModule, FormsModule, InfiniteScrollModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
