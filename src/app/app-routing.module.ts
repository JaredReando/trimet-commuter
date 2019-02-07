import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetStopsComponent } from './set-stops/set-stops.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component'
import { StartupComponent } from './startup/startup.component';



const routes: Routes = [
  {path: '', component:  StartupComponent},
  {path: 'stops', component: SetStopsComponent },
  {path: 'main', component: MainComponent },
  {path: 'main/:mode', component: MainComponent},
  {path: 'login', component: LoginComponent}, // delete
  {path: 'test', component: TestComponent } //delete
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
