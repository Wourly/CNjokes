import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeService } from './joke.service';
import { JokeDisplayComponent } from './joke-display/joke-display.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeDisplayComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    JokeService,
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
