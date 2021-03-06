import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatInputModule, MatOptionModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatTableModule, MatGridListModule, MatDialogModule, MatRadioModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatExpansionModule, MatStepperModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatStepperModule
    
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers:[ {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ]
})
export class MaterialModule { }
