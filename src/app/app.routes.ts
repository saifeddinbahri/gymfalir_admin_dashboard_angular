import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { guestGuard } from './services/auth-guard.service';
;


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'equipments', component: EquipmentsComponent, canActivate: [guestGuard] }
];
