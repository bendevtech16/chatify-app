import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './webComponents/login/admin/admin.component';
import { ChatAgentComponent } from './webComponents/login/chat-agent/chat-agent.component';

const routes: Routes = [
  {path:"admin", component: AdminComponent},
  {path:"", component: AdminComponent},
  {path:"chatAgent", component: ChatAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
