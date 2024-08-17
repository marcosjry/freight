import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoadingComponent } from './shared/loading/loading.component';

export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'login'},
    { path: 'nao-autorizado', canActivate: [AuthGuard],
        loadComponent: () => import('./shared/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent)
    },
    { path: 'login',
        loadChildren: () => import('./components/login/login.routes').then(r => r.LOGIN_ROUTES)
    },
    {path: 'home', canActivate: [AuthGuard], component: HomeComponent,},

    { path: 'fretes', canActivate: [AuthGuard],
        loadChildren: () => import('./components/freight/freight.routes').then(r => r.FREIGHT_ROUTES)},
    {path: 'admin',
        loadComponent: () => import('./components/admin/admin.component').then(r => r.AdminComponent)},
    { path: 'usuarios', canActivate: [AuthGuard],
        loadComponent: () => import('./components/users/users.component').then(c => c.UsersComponent)},
    { path: 'veiculos', canActivate: [AuthGuard],
        loadComponent: () => import('./components/vehicles/vehicles.component').then(c => c.VehiclesComponent)},
    {path: 'auth/loading', canActivate: [AuthGuard], component: LoadingComponent}
];