import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'no-permission', component: NoPermissionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
