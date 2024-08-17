
import { Routes } from "@angular/router";
import { AuthGuard } from "../../auth/auth.guard";

export const LOGIN_ROUTES: Routes = [

    {path: '',loadComponent: () => import('./login.component').then(c => c.LoginComponent)}
]