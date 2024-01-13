import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the Angular Material modules after Angular's BrowserModule.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { i_plans } from '../../card';
import { UserPlanComponent } from './user-plan/user-plan.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';







@NgModule({
  declarations: [
    AppComponent,
    BasicPlanComponent,
    UserPlanComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule,
    
    
  ],
  providers: [provideHttpClient(),
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }