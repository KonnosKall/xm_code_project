import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavButtonComponent } from '../components/nav-button/nav-button.component';
import { MaterialBasicModule } from '../shared/material-basic/material-basic.module';

@NgModule({
  declarations: [HeaderComponent, NavButtonComponent],
  imports: [
    CommonModule,
    MaterialBasicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavButtonComponent,
    MaterialBasicModule
  ]
})
export class LayoutModule { }
