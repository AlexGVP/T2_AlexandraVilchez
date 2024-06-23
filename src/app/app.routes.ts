import { Routes } from '@angular/router';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { Pregunta4Component } from './pregunta4/pregunta4.component';

export const routes: Routes = [
    {path : "pregunta2", component: Pregunta2Component},
    {path : "pregunta3", component: Pregunta3Component},
    {path : "pregunta4", component: Pregunta4Component},
];
