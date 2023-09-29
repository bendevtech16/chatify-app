import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './webComponents/login/admin/admin.component';
import { ChatAgentComponent } from './webComponents/login/chat-agent/chat-agent.component';
import { IndexComponent } from './webComponents/landingPage/index/index.component';

const routes: Routes = [
  {path:"admin", component: AdminComponent},
  {path:"", component: IndexComponent},
  {path:"chatAgent", component: ChatAgentComponent},
  {path: "index", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
