import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RuleComponent } from './rule/rule.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import {MatCardModule} from "@angular/material/card";
import { ScooterListComponent } from './scooter-list/scooter-list.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule} from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorialComponent,
    RuleComponent,
    MapComponent,
    FooterComponent,
    CheckoutPageComponent,
    DefaultPageComponent,
    ScooterListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
