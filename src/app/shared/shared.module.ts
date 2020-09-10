import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { CdkTableModule} from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
// import { SuiModule} from 'ng2-semantic-ui';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import {MatNativeDateModule} from '@angular/material';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
  ],
  
  imports: [   
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // SuiModule,
    MaterialModule,
    TextareaAutosizeModule,
    MatNativeDateModule,
    TooltipModule.forRoot()
  ]
})
export class SharedModule { }
