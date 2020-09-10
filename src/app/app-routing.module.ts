import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
// import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { PrivacyTermsComponent } from './privacy-terms/privacy-terms.component';

// to be changed later after testing.
const routes: Routes = [
  // { path: 'navbar', component: NavbarComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'privacy-terms', component: PrivacyTermsComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '*', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
