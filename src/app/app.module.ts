import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { DataAnalyticsComponent } from './components/data-analytics/data-analytics.component';
// import vegaEmbedModule from 'vega-embed';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    InputFieldComponent,
    ProfilePageComponent,
    NavigationComponent,
    QrScannerComponent,
    DataAnalyticsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
