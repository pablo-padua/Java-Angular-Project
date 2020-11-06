import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogComponent } from './log/log.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {path:'', component: WelcomePageComponent, canActivate:[RouteGuardService]},
  {path:'login', component: LogComponent},
  {path: 'welcome/:name', component: WelcomePageComponent, canActivate:[RouteGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'about-us', component: AboutUsComponent, canActivate:[RouteGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  


  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
