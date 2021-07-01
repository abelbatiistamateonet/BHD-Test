import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SideBarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    SideBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
