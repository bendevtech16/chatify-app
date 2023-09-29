import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './webComponents/login/admin/admin.component';
import { ChatAgentComponent } from './webComponents/login/chat-agent/chat-agent.component';
import { IndexComponent } from './webComponents/landingPage/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatAgentComponent,
    IndexComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
