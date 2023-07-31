import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './webComponents/login/admin/admin.component';
import { ChatAgentComponent } from './webComponents/login/chat-agent/chat-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ChatAgentComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
