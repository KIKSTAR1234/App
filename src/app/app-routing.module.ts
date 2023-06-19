import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'demo', component: DemoPageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Redirect to AboutPageComponent by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
