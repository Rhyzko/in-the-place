import { Routes } from '@angular/router';
import { InThePlaceComponent } from './in-the-place/in-the-place.component';
export const routes: Routes = [
    { path: 'intheplace', component: InThePlaceComponent },
    { path: 'intheplace/:year/:week', component: InThePlaceComponent },
    { path: '', redirectTo: '/intheplace', pathMatch: 'full' }
];

