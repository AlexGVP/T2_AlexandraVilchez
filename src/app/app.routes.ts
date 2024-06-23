import { Routes } from '@angular/router';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta3Component } from './dashboard/pregunta3/pregunta3.component';
import { Pregunta4Component } from './dashboard/pregunta4/pregunta4.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    /*{path: "amaterial", component: EjemploAmaterialComponent}*/
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {path: "pregunta2", component: Pregunta2Component},
            {path: "pregunta3", component: Pregunta3Component},
            {path: "pregunta4", component: Pregunta4Component}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];