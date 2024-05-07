import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentsMaintenanceComponent } from './students-maintenance/students-maintenance.component';
import { StudentsProcessingComponent } from './enrollment/students-processing/students-processing.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsMaintenanceComponent,
    StudentsProcessingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
