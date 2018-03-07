import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers:[ {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ]
})
export class MaterialModule { }
