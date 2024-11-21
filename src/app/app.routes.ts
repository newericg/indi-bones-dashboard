import { Routes } from '@angular/router';
import { DashboardPageComponent } from './layout/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './layout/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardPageComponent },
    {
        path: 'login', component: LoginPageComponent
    }
];
