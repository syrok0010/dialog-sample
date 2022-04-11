import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
