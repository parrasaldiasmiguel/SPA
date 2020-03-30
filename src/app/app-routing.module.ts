import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { UniversoComponent } from './components/universo/universo.component';
import { CampeonComponent } from './components/campeon/campeon.component';
import { IndiceComponent } from './components/indice/indice.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
{path:'indice', component:IndiceComponent},
{path:'about',component:AboutComponent},
{path:'universo',component:UniversoComponent},
{path:'campeon/:id',component:CampeonComponent},
{path:'buscar/:termino', component:BuscadorComponent},
{path:'**' ,pathMatch:'full', redirectTo:'indice'}
];

export const APP_RUTAS= RouterModule.forRoot(routes);



