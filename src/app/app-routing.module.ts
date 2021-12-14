import { DataAnalyticsComponent } from './components/data-analytics/data-analytics.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { TestingComponent } from './components/testing/testing.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "profile-page", component: ProfilePageComponent},
  { path: "wallet", component: WalletComponent},
  { path: "qr-scanner", component: QrScannerComponent},
  { path: "reserve", component: ReserveComponent},
  { path: "data-analytics", component: DataAnalyticsComponent},
  { path: "vehicles", component:VehiclesComponent },
  { path: "testing", component:TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
