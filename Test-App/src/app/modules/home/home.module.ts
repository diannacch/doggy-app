import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroAntdModule } from 'src/app/shared/modules/ng-zorro-antd/ng-zorro-antd.module';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { DoggyInformationComponent } from './components/doggy-information/doggy-information.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    InfoCardComponent,
    DoggyInformationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgZorroAntdModule,
  ]
})
export class HomeModule { }
