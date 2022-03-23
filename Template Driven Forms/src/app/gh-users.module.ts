import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { GhHomeComponent } from './gh-home/gh-home.component';
import { GhDialogComponent } from './gh-dialog/gh-dialog.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    GhHomeComponent
  ]
})
export class GhUsersModule { }
