import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'no-permission', component: NoPermissionComponent },
    { path: 'not-found', component: NotFoundComponent },
    {
        path: 'school',
        loadChildren: () => import('./app-loaders/school/school.module').then(m => m.SchoolModule)
    },
    {
        path: 'hospital',
        loadChildren: () => import('./app-loaders/hospital/hospital.module').then(m => m.HospitalModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
