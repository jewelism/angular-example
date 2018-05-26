import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonService } from './person.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonComponent,
    PersonDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PersonService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
