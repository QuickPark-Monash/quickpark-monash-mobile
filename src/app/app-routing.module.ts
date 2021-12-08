import { DataAnalyticsComponent } from './components/data-analytics/data-analytics.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "profile-page", component: ProfilePageComponent},
  { path: "qr-scanner", component: QrScannerComponent},
  { path: "data-analytics", component: DataAnalyticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
