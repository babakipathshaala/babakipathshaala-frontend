import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

// to be changed later after testing.
const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: '',  redirectTo: '/navbar', pathMatch: 'full' },
  { path: '*', component: NavbarComponent },
  { path: '**', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
