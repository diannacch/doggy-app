import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NgZorroAntdModule } from './modules/ng-zorro-antd/ng-zorro-antd.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExecuteFormatPipe } from './pipes/execute-format.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerDialogComponent } from './components/spinner-dialog/spinner-dialog.component';
import { MassConversionsPipe } from './pipes/mass-conversions.pipe';
import { LengthConversionsPipe } from './pipes/length-conversions.pipe';



@NgModule({
  declarations: [
    SearchBoxComponent,
    ExecuteFormatPipe,
    NotFoundComponent,
    SpinnerDialogComponent,
    MassConversionsPipe,
    LengthConversionsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBoxComponent,
    NotFoundComponent,
    MaterialModule,
    MassConversionsPipe,
    LengthConversionsPipe
  ]
})
export class SharedModule { }
