import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { guestGuard } from './services/auth-guard.service';
import { UpdateEquipmentComponent } from './equipments/update-equipment/update-equipment.component';
import { AddEquipmentComponent } from './equipments/add-equipment/add-equipment.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'equipments', component: EquipmentsComponent, canActivate: [guestGuard] },
    { path: 'equipments/update/:id', component: UpdateEquipmentComponent, canActivate: [guestGuard] },
    { path: 'equipments/add', component: AddEquipmentComponent, canActivate: [guestGuard] }
];
