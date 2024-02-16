import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormatDatePipe } from './pipes/format-date.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormatDatePipe
  ]
})
export class SharedModule { }
