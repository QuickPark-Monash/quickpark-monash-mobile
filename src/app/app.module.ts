import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { DataAnalyticsComponent } from './components/data-analytics/data-analytics.component';
import { ChartComponent } from './components/chart/chart.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { TestingComponent } from './components/testing/testing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
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
    WalletComponent,
    ReserveComponent,
    DataAnalyticsComponent,
    ChartComponent,
    VehiclesComponent,
    ReservationItemComponent,
    TestingComponent,
    SignUpComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    ZXingScannerModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore,
    AngularFireAuthModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
