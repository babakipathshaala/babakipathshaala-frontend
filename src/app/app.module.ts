import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
// import { SuiModule} from 'ng2-semantic-ui';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MaterialModule } from './material-module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UserService } from './services/user.service';
import { PrivacyTermsComponent } from './privacy-terms/privacy-terms.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { AboutusComponent } from './shared/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    PrivacyTermsComponent,
    // FooterComponent,
    // AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    // SuiModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
