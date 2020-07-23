import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { SuiModule} from 'ng2-semantic-ui';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MaterialModule } from './material-module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    HttpClientModule,
    SuiModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
