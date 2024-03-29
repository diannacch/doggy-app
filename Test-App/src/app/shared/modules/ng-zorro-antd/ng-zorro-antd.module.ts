import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzAutocompleteModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
    NzProgressModule
  ]
})
export class NgZorroAntdModule { }
